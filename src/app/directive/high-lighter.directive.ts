import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLighter]'
})
export class HighLighterDirective implements OnInit {

  constructor(private elRef: ElementRef, private render2: Renderer2) { }

  ngOnInit() {
    this.render2.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

}
