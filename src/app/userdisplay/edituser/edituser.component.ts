import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  arr:User[]=[];
  email:string='';
  name:string='';
  password:string='';
  mobile:string='';
  updated:any;

  constructor(private userData:UserdataService,private router:Router,private activated:ActivatedRoute) { }

  ngOnInit() {

    this.email=this.activated.snapshot.params["user_email"];
    console.log(this.email);
    this.userData.getUserById(this.email).subscribe(
      (data:User[])=>{
        this.updated=data[0];
        console.log(data);
        this.name=this.updated.user_name;
        this.password=this.updated.user_password;
        this.mobile=this.updated.user_mobile_no;
      }
    );
  }

  updateData(data){
    console.log(data);
    this.userData.updateData(data).subscribe(
      (data:User[])=>{
        this.arr=data;

        alert("data updated");
        this.router.navigate(['/display']);
      }
    );

  }
}
