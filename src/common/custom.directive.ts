import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true,
})
export class CustomDirective {
  constructor(private ele: ElementRef) {}

  @HostListener('click') onClick() {
    this.ele.nativeElement.style.color = 'red';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.backgroundColor = 'blue';
  }
  @HostListener('mouseout') onMouseOut() {
    this.ele.nativeElement.style.backgroundColor = 'transparent';
  }
}
