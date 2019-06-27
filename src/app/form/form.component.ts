import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomVAlidators } from '../custom-validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  projectForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null, 
        [Validators.required, CustomVAlidators.invalidProjectName], 
        CustomVAlidators.asyncInvalidProjectName
      ),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });
    console.log(this.projectForm);
  }

  onSubmit(){
    console.log(this.projectForm.value);
    
  }
  projectNameValidation(control: FormControl): {[s: string]: boolean}{
    console.log('project Name: ',control.value);
    if(control.value === 'Test'){
      return {'nameIsNotValid': true};
    }
    return null;
  }

}
