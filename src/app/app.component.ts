import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'itProjects-Marketplace-Angular';

  ngOnInit() {
    console.log("Hello World!");
  }
}
