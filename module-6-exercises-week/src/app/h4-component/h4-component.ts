import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-h4-component',
  imports: [],
  templateUrl: './h4-component.html',
  styleUrl: './h4-component.css',
})
export class H4Component implements AfterViewInit, AfterContentInit{

  titulo = input.required<string>();

  @ViewChild('h1Variable')
  campoTituloView !: ElementRef<HTMLElement>;

  @ContentChild('h1Variable')
  campoTituloContent !: ElementRef<HTMLElement>;

  @ViewChild('paragraph')
  campoParagrafoView !: ElementRef<HTMLElement>;

  @ContentChild('paragraph')
  campoParagrafoContent !: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    console.log("=============AFTER VIEW INIT===============")
    console.log("H1VariableView: " + this.campoTituloView.nativeElement.textContent);
    //console.log("paragraphView: " + this.campoParagrafoView.nativeElement.textContent);  dá erro no console
  }
  ngAfterContentInit(): void {
    console.log("=============AFTER CONTENT INIT===============")
    console.log("paragraphContent: " + this.campoParagrafoContent.nativeElement.textContent);
    //console.log("H1VariableContent: " + this.campoTituloContent.nativeElement.textContent);  dá erro no console
  }

}
