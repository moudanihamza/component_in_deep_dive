import { Component, OnInit, Input, ViewEncapsulation, OnChanges, OnDestroy, SimpleChanges, ContentChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() element: { type: string, name: string, content: string };
  @ContentChild( 'contentChild', {static: true} ) contentChild: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
     console.log('changes');
     console.log(changes);
  }

  ngAfterViewInit() {
    console.log(this.contentChild);
  }
  ngOnDestroy() {
    console.log('destroyed');
  }
}
