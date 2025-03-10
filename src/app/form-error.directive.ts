import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Directive({
  selector: '[formError]'
})
export class FormErrorDirective implements OnInit {
  @Input('formError') control?: AbstractControl;

  public constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  public ngOnInit(): void {
    this.control?.valueChanges.subscribe(() => {
      this.viewContainer.clear();
      if (this.control?.errors) {
        const firstError = Object.values(this.control.errors)[0];
        this.viewContainer.createEmbeddedView(this.templateRef, {$implicit: firstError});
      }
    })
  }
}
