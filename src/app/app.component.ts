import { Component } from '@angular/core';
// const electron = (<any>window).require('electron');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angproject';

  constructor() {
    // electron.ipcRenderer.on('other-custom-signal', (event: any, arg: any) => {
    //   console.log('Received acknowledged from backend about receipt of our signal.');
    //   console.log(event);
    //   console.log(arg);
    // })

    // console.log('Sending message to backend.');
    // electron.ipcRenderer.send('my-custom-signal', 'hello, are you there?');
  }
}
