import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveComponentComponent } from './directive-component/directive-component.component';
import { ReactiveFormsModule, FormsModule, FormControl} from '@angular/forms';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { DrivenFormComponentComponent } from './driven-form-component/driven-form-component.component';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponentComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    CustomPipesComponent,
    AngularFormComponent,
    DrivenFormComponentComponent,
    BindingDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
