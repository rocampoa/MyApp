import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector : 'my-form',
  template : `
    <div class="container">
      <h1> Register </h1>
      <form formGroupName="form">
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" formControlName="username" #username="ngControl"/>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" formControlName="email" #email="ngControl"/>
        </div>
        <button type="submit" class="btn btn-default" [disabled]="!form.valid">Submit</button>
      </form>
    </div>
  `
})

export class FormaComponent {

  form : FormGroup;
  username : FormControl;
  email : FormControl;

  constructor() {
     this.username = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3),
                                                                       Validators.maxLength(10)]));
     this.email = new FormControl('', Validators.compose([Validators.required, Validators.email, Validators.minLength(10)]));
     this.form = new FormGroup({
       username : this.username,
       email : this.email
     })
  }
}
