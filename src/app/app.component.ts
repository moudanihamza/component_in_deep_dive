import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type : 'server',
      name : serverData.serverName,
      content : serverData.serverContent
    });
  }

  onBluePrintAdded(bluePrintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type : 'blueprint',
      name : bluePrintData.serverName,
      content : bluePrintData.serverContent
    });
  }

  changeFirstElement() {
    this.serverElements[0] = {serverName: 'test', serverContent: 'test'} ;
  }
  removeFirstElement() {
     this.serverElements.splice(0, 1);
  }
}
