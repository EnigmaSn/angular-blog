import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  // title = 'Initial';
  // onInput(event: any) {
  //   this.title = event.target.value;
  // }

  //backgroundToggle = false;

  // toggle:any = false;

  // arr = [1, 1, 2, 3, 5, 8, 13]
  // posts = [
  //   {
  //     title: 'Post 1',
  //     author: 'Anna',
  //     comments: [
  //       {
  //         name: 'Alan',
  //         text: 'lorem5'
  //       },
  //       {
  //         name: 'Daniel',
  //         text: 'lorem10'
  //       }
  //
  //     ]
  //   },
  //   {
  //     title: 'Post 2',
  //     author: 'Anna 2',
  //     comments: [
  //       {
  //         name: 'Alan 2',
  //         text: 'lorem5'
  //       },
  //       {
  //         name: 'Daniel 2',
  //         text: 'lorem10'
  //       }
  //
  //     ]
  //   }
  // ]

  now: Date = new Date();
}
