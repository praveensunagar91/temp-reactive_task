import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskdataService } from '../taskdata.service';
import { Task } from '../task';

@Component({
  selector: 'app-editreactive',
  templateUrl: './editreactive.component.html',
  styleUrls: ['./editreactive.component.css']
})
export class EditreactiveComponent implements OnInit {
  task:FormGroup;
  id:string;
  updated;

  constructor(private fb:FormBuilder,private activated:ActivatedRoute,private router:Router,private taskData:TaskdataService) { }

  ngOnInit() {
  this.id=this.activated.snapshot.params['Id'];
   this.taskData.getDataById(this.id).subscribe(
     (data:Task)=>{
       this.updated=data[0];
       this.task.patchValue({
         Id:this.updated.Id,
         Title:this.updated.Title,
         Status:this.updated.Status
       });
     }
   );
    this.task=this.fb.group({
      Id:new FormControl(null),
      Title:new FormControl(null),
      Status:new FormControl(null)
    });
  }

  update(data){
    this.taskData.editData(data).subscribe(
      (data:any)=>{
        alert('record updated');
        this.router.navigate(['/reactive']);
      }
    );
  }

}
