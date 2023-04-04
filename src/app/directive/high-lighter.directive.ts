import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighLighter]'
})
export class HighLighterDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  // Bind to the host element's style.backgroundColor property
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private render2: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.render2.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  //Listen to the host element's mouseenter event
  @HostListener('mouseenter', ['$event']) mouseover(eventData: Event) {
    // this.render2.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave', ['$event']) mouseleave(eventData: Event) {
    // this.render2.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
