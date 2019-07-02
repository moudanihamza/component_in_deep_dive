import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
   @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
   @Output() bluePrintCreated = new EventEmitter <{ serverName: string, serverContent: string }>();

   @ViewChild('newServerName', { static: true }) newServerName: ElementRef;
   @ViewChild('newServerContent', { static: true }) newServerContent: ElementRef;


   constructor() {
     console.log('constructor');
    }

  ngOnInit() {
    console.log('init');
  }


  onAddServer() {
    this.serverCreated.emit({
       serverName: this.newServerName.nativeElement.value,
        serverContent: this.newServerContent.nativeElement.value
       });
  }

  onAddBluePrint() {
    this.bluePrintCreated.emit({
       serverName: this.newServerName.nativeElement.value,
        serverContent: this.newServerContent.nativeElement.value
       });
  }

}
