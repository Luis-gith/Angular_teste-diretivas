import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit {
  @Input() bgColor = 'yellow';
  @Input() tColor = 'white'

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.changeBG();
  }

  private changeBG(colour:string = 'yellow') {
    this.element.nativeElement.style.backgroundColor = this.bgColor || colour;
    this.element.nativeElement.style.color = this.tColor;
    this.element.nativeElement.style.fontWeght = 'bold';
  }

}



