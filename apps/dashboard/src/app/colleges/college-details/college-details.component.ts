import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { College } from '@make-app/api-interfaces';

@Component({
  selector: 'make-app-college-details',
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.scss'],
})
export class CollegeDetailsComponent {
  currentCollege: College;
  originalName: string;

  @Input() set college(value: College | null) {
    if (value) this.originalName = value.name;
    this.currentCollege = Object.assign({}, value);
  }

  @Input() form: FormGroup;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  save(college: College) {
    this.saved.emit(college);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    if (formDirective.invalid) return;
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }
}
