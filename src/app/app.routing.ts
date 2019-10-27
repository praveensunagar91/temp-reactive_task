import { Routes,RouterModule } from "@angular/router";
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { AdduserComponent } from './userdisplay/adduser/adduser.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { ReactivedataComponent } from './reactivedata/reactivedata.component';
import { AddreactiveComponent } from './reactivedata/addreactive/addreactive.component';
import { EditreactiveComponent } from './reactivedata/editreactive/editreactive.component';


const arr: Routes=[

  {path:'display',component:UserdisplayComponent},
  {path:'add',component:AdduserComponent},
  {path:'edit/:user_email',component:EdituserComponent},
  {path:'reactive',component:ReactivedataComponent},
  {path:'addreact',component:AddreactiveComponent},
  {path:'editreact/:Id',component:EditreactiveComponent}



];

export const routing=RouterModule.forRoot(arr);
