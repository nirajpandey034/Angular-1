import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  template: ` <div>
    <p>Hello {{ name }}</p>
    <button (click)="sendMessage()">Send Message</button>
  </div>`,
  styles: [],
})
export class ChildCompComponent {
  // @Input() public parentData: any;
  @Input('parentData') public name: any;

  @Output() public childEvent = new EventEmitter();

  sendMessage() {
    this.childEvent.emit('hey BC');
  }
}
