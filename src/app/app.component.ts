import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeData';
  activeUsers:{};
  // activeUserPassword: any[] = [];
  ngOnInit(){
    this.activeUsers = [{
      username :"shashank@gmail.com", password : "shasu"
    },
    {
      username: "ashishj@gmail.com", password : "murga"
    },
    {
      username: "ashishg@gmail.com", password : "bangali"
    },
    {
      username: "akashs@gmail.com", password : "chakka"
    },
    {
      username: "vishalj@gmail.com", password : "giddu"
    },
  ]
  localStorage.setItem('activeUsers',JSON.stringify(this.activeUsers));
  // console.log(localStorage.getItem('activeUsers'));
  }
}
