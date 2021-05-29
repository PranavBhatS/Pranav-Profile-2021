import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCursor]'
})
export class CursorDirective {

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) {
    // this.setCustomCursor()
  }

  @HostListener('window:mousemove', ['$event']) onMouseEnter(_e: any) {
    this.setCustomCursor(_e)
  }

  setCustomCursor(e: any) {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'top',
      e.pageY + 'px'
    )
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'left',
      e.pageX + 'px'
    )
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'z-index',
      '2'
    )
  }
}
