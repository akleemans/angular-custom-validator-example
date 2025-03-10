import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {customRequired, maxLength, minLength, reservedName} from './custom-validators';
import {FormErrorDirective} from './form-error.directive';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatError,
    FormErrorDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private reservedNames = ['admin', 'root', 'guest'];

  name1 = new FormControl('', [
    customRequired, reservedName(this.reservedNames), minLength(3), maxLength(15)
  ]);
  name2 = new FormControl('', [
    customRequired, reservedName(this.reservedNames), minLength(3), maxLength(15)
  ]);
}
