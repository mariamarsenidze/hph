import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meore';
  users:User[]=[
    {
      name:'Peter',
      age:19,
      email:"mab@gmail.com"
    },
    {
      name:'Mari',
      age:20,
      email:"ansha@gmail.com"
    },
    {
      name:'Pet',
      age:18,
      email:"kshdg@gmail.com"
    }
    
  ]
}
