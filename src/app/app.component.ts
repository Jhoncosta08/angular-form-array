import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projects: FormGroup = new FormGroup({ projects: this.formBuilder.array([]) });

  constructor(readonly formBuilder: FormBuilder) {
    this.addProjectToFormGroup();
  }

  addProjectToFormGroup(): void {
    this.getProjectsControlsValues().push(new FormControl(''));
  }

  removeProjectFromFormGroup(index: number): void {
    let projectArray: FormArray = this.getProjectsControlsValues();
    projectArray.length > 1 ? projectArray.removeAt(index) : projectArray.reset();
  }

  getProjectsControlsValues(): FormArray {
    return this.projects.get('projects') as FormArray;
  }

  sendForm(): void {
    console.log('Projects form Array: ', this.projects.value);
  }
}
