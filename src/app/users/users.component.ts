import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
@Input()inputData:any='data';
ngOnit():void{
  console.warn(this.inputData);
}
}
