import {Directive, HostListener, Self} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[emptyValueToNull]'
})
export class NullValueDirective {

  constructor(@Self() private ngControl: NgControl) { }

  @HostListener('keyup')
  onKeyDown() {
    if (this.ngControl.value?.trim() === '') {
      this.ngControl.reset(null);
    }
  }
}
