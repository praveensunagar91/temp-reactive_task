import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { AdduserComponent } from './userdisplay/adduser/adduser.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { routing } from './app.routing';
import { ReactivedataComponent } from './reactivedata/reactivedata.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { GrdFilterPipe } from './search-filter.pipe';
import { AddreactiveComponent } from './reactivedata/addreactive/addreactive.component';
import { EditreactiveComponent } from './reactivedata/editreactive/editreactive.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserdisplayComponent,
    AdduserComponent,
    EdituserComponent,
    ReactivedataComponent,
    GrdFilterPipe,
    AddreactiveComponent,
    EditreactiveComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    NgxPaginationModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
