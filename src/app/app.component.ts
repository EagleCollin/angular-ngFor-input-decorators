import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {


  users: user[]=[{username:'James', id:143}, {username:'Nicole', id:432}]
}

export interface user{
  username: string;
  id: number;
};
