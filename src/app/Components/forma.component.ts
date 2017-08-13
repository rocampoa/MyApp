import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {states} from '../model/data-model';
import {EmailValidator} from "../validators/emailValidator";

@Component({
  selector : 'my-form',
  template : `
    <div class="container">
      <h1> Register </h1>
      <form [formGroup]="form">
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" formControlName="username"/>
          <div *ngIf="username.dirty && !username.valid">
             se muestra
            <div class="alert alert-danger" *ngIf="username.hasError('required')"> User Name required</div>
            <div class="alert alert-danger" *ngIf="username.hasError('minlength')"> User Name require minimo 3 caracteres</div>
          </div> 
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" formControlName="email"/>
          <div *ngIf="email.dirty && !email.valid">
            se muestra
            <div class="alert alert-danger" *ngIf="email.hasError('required')"> Email required</div>
            <div class="alert alert-danger" *ngIf="email.hasError('minlength')"> Email require minimo 3 caracteres</div>
            <div class="alert alert-danger" *ngIf="email.hasError('invalidEmail')"> Invalid Email</div>

          </div>
        </div>
        <div class="form-group">
          <label>State</label>
          <select class="form-control" formControlName="state">
            <option *ngFor="let st of estados" [value]="st">{{st}}</option>
          </select>
        </div>
        <button type="submit" class="btn btn-default" [disabled]="!form.valid">Submit</button>
      </form>
      {{form.value | json}}
    </div>
  `
})

export class FormaComponent {

  form: FormGroup;
  username: FormControl;
  email: FormControl;
  state: FormControl;
  estados = states;

  constructor() {
     this.username = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3),
                                                                       Validators.maxLength(10)]));
     this.email = new FormControl('', Validators.compose([Validators.required, EmailValidator.invalidEmail, Validators.minLength(5)]));
     this.state = new FormControl('');
     this.form = new FormGroup({
       username : this.username,
       email : this.email,
       state : this.state
     });
  }
}
