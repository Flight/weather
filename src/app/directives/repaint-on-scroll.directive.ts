import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRepaintOnScroll]'
})
export class RepaintOnScrollDirective {
  className = 'repaint-on-scroll';

  @HostListener('scroll', ['$event'])
  onListenerTriggered(event: UIEvent): void {
    event.srcElement.classList.add(this.className);
    setTimeout(() => {
      event.srcElement.classList.remove(this.className);
    }, 0);
  }
}
