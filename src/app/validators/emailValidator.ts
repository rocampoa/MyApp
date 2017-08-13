import {AbstractControl} from "@angular/forms";

interface validationResult {
  [key : string]: boolean;
}

export class EmailValidator {
  static invalidEmail(control: AbstractControl) {
    if (control.value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
      return null;
    } else {
      return  {'invalidEmail': true};
    }
  }
}
