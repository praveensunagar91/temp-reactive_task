import { Component, OnInit } from '@angular/core';
import { TaskdataService } from './taskdata.service';
import { Task } from './task';
import * as _ from "lodash";
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactivedata',
  templateUrl: './reactivedata.component.html',
  styleUrls: ['./reactivedata.component.css']
})
export class ReactivedataComponent implements OnInit {
  arr:Task[]=[];
  config: any;
  collection :Task[]=[];
  searchstr: string;
search: string;

  constructor(private taskData:TaskdataService,private router:Router) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.length,
    };
  }

  ngOnInit() {
    this.allData();
  }

  allData(){
    this.taskData.getAllData().subscribe(
      (data:Task[])=>{
        this.arr=data;
      }
    );
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  //  onSearch(value) {
  //    console.log(value);
  //       if (!_.isEmpty(value)) {
  //        var arry = this.arr.filter(
  //              x => x.Title.indexOf(value) != -1
  //          );
  //       this.arr = _.forEach(this.arr, f => {

  //              var m =  _.some(f.name, el => _.includes(value, el));
  //            if (m == false) {
  //                  return f;
  //               }
  //           });
  //       }
  //     }
  //   }
  //       } else {
  //           this.taskData.getAllData.s(
  //               (data: Task[]) => {
  //                  this.arr = data;
  //             },
  //              function(error) {
  //               this.getAllData();
  //           }
  //         );
  //      }
  //   }

  delete(item:Task){
    this.taskData.removeData(item.Id).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(item),1);
        alert('record erased');
      }
    );
  }
  edit(item:Task){
    this.router.navigate(['/editreact',item.Id]);
  }
}
