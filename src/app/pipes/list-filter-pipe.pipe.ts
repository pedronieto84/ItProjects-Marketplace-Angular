/* Angular Imports */
import { Pipe, PipeTransform } from '@angular/core';

/* App Imports */
import { Project } from '../interfaces/interfaces';

@Pipe({
  name: 'listFilterPipe'
})

/* Pipe para poder filtar proyectos por su nombre */
export class ListFilterPipe implements PipeTransform {

  transform(list: Project[], filterText: string): Project[] {
    return list ? list.filter(item =>
      item.title.search(new RegExp(filterText, 'i')) > -1) : [];
  }
}
