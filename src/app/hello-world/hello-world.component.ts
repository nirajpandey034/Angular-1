import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <!-- <h1 [class]="errorClass">hello {{ name }}</h1>
    <h1 [class.text-error]="hasError">nice text</h1>
    <h3 [ngClass]="messageClasses">ng class text</h3> -->
    <!-- <button (click)="clickMe($event)">Click me</button> -->

    <!-- <input #myRef type="text" />
    <button (click)="LogInput(myRef.value)">Get Input Value</button> -->
    <!-- [] is for class to html data passing and () for html to class event passing, this is 2-way data binding(html <-> class) -->
    <!-- <input [(ngModel)]="name" type="text" />
    {{ name }} -->

    <!-- if-else -->
    <!-- <div *ngIf="isVisible; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
      <p>visible</p>
    </ng-template>

    <ng-template #elseBlock>
      <p>not visible</p>
    </ng-template> -->

    <!-- switch case -->
    <!-- <div [ngSwitch]="color">
      <div *ngSwitchCase="'blue'">You have choosen blue</div>
      <div *ngSwitchCase="'red'">You have choosen red</div>
      <div *ngSwitchCase="'black'">You have choosen black</div>
      <div *ngSwitchDefault>Choose again</div>
    </div> -->

    <!-- for loop -->
    <ul *ngFor="let color of colors; index as i">
      <li>{{ i }} -> {{ color }}</li>
    </ul>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-error {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class HelloWorldComponent {
  // public name = '';
  // public successClass = 'text-success';
  // public errorClass = 'text-error';
  // public specialClass = 'text-special';
  // public hasError = false;
  // public isSpecial = true;

  // public isVisible = false;

  // public color = 'blue';

  // public messageClasses = {
  //   'text-success': !this.hasError,
  //   'text-error': this.hasError,
  //   'text-special': this.isSpecial,
  // };

  public colors = ['red', 'blue', 'black', 'pink'];

  // clickMe(param: Event) {
  //   console.log('mukhe nibi baba?');
  //   console.log(param);
  // }
  LogInput(value: String) {
    console.log(value);
  }
}
