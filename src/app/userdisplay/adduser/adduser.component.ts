import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  arr:User[]=[];

  constructor(private userData:UserdataService,private router:Router) { }

  ngOnInit() {
  }
  saveData(data){
    console.log(data);
    this.userData.insertData(data).subscribe(
      (data:User[])=>{
        this.arr=data;
        alert("data uploaded");
        this.router.navigate(['/display']);
      }
    );

  }

}
