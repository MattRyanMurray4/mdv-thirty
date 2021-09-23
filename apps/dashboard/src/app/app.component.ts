import { Component } from '@angular/core';

@Component({
  selector: 'make-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'College-App';
  links = [
    { path: '/', icon: 'home', title: 'Login' },
    { path: 'colleges', icon: 'view_list', title: 'Colleges' },
  ];
}
