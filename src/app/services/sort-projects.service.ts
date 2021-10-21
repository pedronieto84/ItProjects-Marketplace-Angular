import { Injectable, PipeTransform } from '@angular/core';
import {DecimalPipe} from '@angular/common';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';

import { Project } from '../interfaces/interfaces';
import { SortColumn, SortDirection } from '../directives/sortable.directive';
import { ApiService } from 'src/app/services/api.service';



//Generem Interface SearchResults
interface SearchResult {
  countries: Project[];
  total: number;
}

//Generem Interface State, que agafa tipus desde la directiva
interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1, v2 ) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

//Funció sort
function sort(projects: Project[], column: SortColumn, direction: string): Project[] {
  if (direction === '' || column === '') {
    return projects;
  } else {
    return [...projects].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

//Funció matches
function matches(project: Project, term: string, pipe: PipeTransform) {
  return project.title.toLowerCase().includes(term.toLowerCase())    
    || pipe.transform(project.publishedDate).includes(term)
    || pipe.transform(project.deadline).includes(term)
    || pipe.transform(project.bid).includes(term)
    || pipe.transform(project.state).includes(term);
}

@Injectable({
  providedIn: 'root'
})


export class SortProjectsService {

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _projects$ = new BehaviorSubject<Project[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  PROJECTS: Project[];

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(
    private pipe: DecimalPipe,
    public apiService: ApiService) { 
      this.getProjects(); //Cridem per obtenir els projectes

      this._search$.pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      ).subscribe(result => {
        this._projects$.next(result.projects);
        this._total$.next(result.total);
      });

      this._search$.next();      
  }

  get projects$() { return this._projects$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  //Subscribes to the ApiService's observable and gets all projects
  getProjects() {
    this.apiService.getAllProjects()
      .subscribe(projects => this.PROJECTS = projects); // console.log(projects)
  }

  private _search() {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let projects = sort(this.PROJECTS, sortColumn, sortDirection);

    // 2. filter
    projects = projects.filter(project => matches(project, searchTerm, this.pipe));
    const total = projects.length;

    // 3. paginate
    projects = projects.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({projects, total});
  }
}
