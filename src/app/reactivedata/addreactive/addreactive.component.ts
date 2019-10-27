import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskdataService } from '../taskdata.service';
import { Router } from '@angular/router';
import { Task } from '../task';

@Component({
  selector: 'app-addreactive',
  templateUrl: './addreactive.component.html',
  styleUrls: ['./addreactive.component.css']
})
export class AddreactiveComponent implements OnInit {
  task:FormGroup;
  arr:Task[]=[];

  constructor(private fb:FormBuilder,private taskData:TaskdataService,private router:Router) { }

  ngOnInit() {
    this.task=this.fb.group({
      Id:new FormControl(null,[Validators.required]),
      Title:new FormControl(null,[Validators.required]),
      Status:new FormControl(null,[Validators.required])
    });
  }
  // insert(){
  //   this.taskData.addData(new Task(this.task.value.Id,this.task.value.Title,this.task.value.Status)).subscribe(
  //     (data:any)=>{
  //       alert("record inserted");
  //       this.router.navigate(['/reactive']);
  //     }
  //   );
  // }

  insert(data){
    this.taskData.addData(data).subscribe(
      (data:any)=>{
        alert("record inserted");
        this.router.navigate(['/reactive']);
      }
    );
  }


}
