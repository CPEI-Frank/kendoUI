import { Component } from '@angular/core';
import { User } from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  public title: string;
  public formModel: User;

  constructor() {
    this.title = "Kendo UI - Angular Form";
    this.formModel = new User(0, "", "", "", "", true, "");
  };

  onSubmit() {
    console.log("Submitting!", this.formModel);
  }

}
