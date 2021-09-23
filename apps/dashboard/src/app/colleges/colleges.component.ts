import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { College, emptyCollege } from '@make-app/api-interfaces';
import { CollegesFacade } from '@make-app/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'make-app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss'],
})
export class CollegesComponent implements OnInit {
  form: FormGroup;
  colleges$: Observable<College[]> = this.collegesFacade.allColleges$;
  selectedCollege$: Observable<College> = this.collegesFacade.selectedColleges$;

  constructor(
    private formBuilder: FormBuilder,
    private collegesFacade: CollegesFacade
  ) {}

  ngOnInit() {
    this.initForm();
    this.collegesFacade.loadColleges();
    this.reset();
  }

  selectCollege(college: College) {
    this.collegesFacade.selectCollege(college.name);
    this.form.patchValue(college);
  }

  reset() {
    this.selectCollege(emptyCollege);
    this.form.reset();
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      country: [''],
      name: [''],
    });
  }
}
