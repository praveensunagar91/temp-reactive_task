import { Component, OnInit } from '@angular/core';
import { UserdataService } from './userdata.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {
arr:User[]=[];
  constructor(private userData:UserdataService,private router:Router) { }

  ngOnInit() {
   this.getAllData();

  }
getAllData(){
  this.userData.getAllUsers().subscribe(
    (data:User[])=>{
      this.arr=data;
    }
  );
}
deleteData(item:User){
  this.userData.eraseData(item.user_email).subscribe(
    (data:any)=>{
      this.arr.splice(this.arr.indexOf(item),1);
      alert("record eraesd");
    }
  );

}
editData(item:User){
this.router.navigate(['/edit',item.user_email]);
}
}
