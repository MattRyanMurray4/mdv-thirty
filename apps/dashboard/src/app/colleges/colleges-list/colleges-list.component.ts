import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { College } from '@make-app/api-interfaces';

@Component({
  selector: 'make-app-colleges-list',
  templateUrl: './colleges-list.component.html',
  styleUrls: ['./colleges-list.component.scss'],
})
export class CollegesListComponent {
  @Input() colleges: College[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
