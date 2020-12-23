import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MainComponent } from './layouts/main/main.component';
import { ListCustomersComponent } from './components/list-customers/list-customer.component';
import { AddEditComponent } from './dialogs/customer-dialog/add-edit/add-edit.component';
import { TopicsComponent } from "./components/topics/topics.component";
// material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

//http
import { HttpClientModule } from '@angular/common/http';
import { TestDialogsComponent } from './dialogs/test-dialogs/test-dialogs.component';
import { EditAddComponent } from './dialogs/customer/edit-add/edit-add.component';
import { DeleteComponent } from './dialogs/customer/delete/delete.component';

//route
import { RouterModule, Routes } from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination';
import { pathToFileURL } from 'url';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    ListCustomersComponent,
    AddEditComponent,
    TestDialogsComponent,
    EditAddComponent,
    DeleteComponent,
    TopicsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot([
      // {path: '', redirectTo: 'home', pathMatch: 'full',component: MainComponent},
      {path: 'home', component: MainComponent},
      {path: 'topics', component: TopicsComponent}
    ]),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
