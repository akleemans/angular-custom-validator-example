import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

export const reservedName = (reservedNames: string[]): ValidatorFn => (control: AbstractControl): ValidationErrors | null => {
  if (reservedNames.includes(control.value)) {
    return {reservedName: 'Reserved names (like admin) can not be used'};
  }
  return null;
}

export const customRequired: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (Validators.required(control) === null) {
    return null;
  }
  return {required: 'Field is required'}
}

export const minLength = (min: number): ValidatorFn => (control: AbstractControl): ValidationErrors | null => {
  if (Validators.minLength(min)(control) === null) {
    return null;
  }
  return {minLength: `Value must be at least ${min} characters long`}
}

export const maxLength = (max: number): ValidatorFn => (control: AbstractControl): ValidationErrors | null => {
  if (Validators.maxLength(max)(control) === null) {
    return null;
  }
  return {maxLength: `Value can be at most ${max} characters long`}
}
