import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { HeaderComponent } from './template/header/header.component';
import { NavMenuComponent } from './template/nav-menu/nav-menu.component';
import { CourseReadComponent } from './pages/course/course-read/course-read.component';
import { CourseCreateComponent } from './pages/course/course-create/course-create.component';
import { StudentReadComponent } from './pages/student/student-read/student-read.component';
import { StudentCreateComponent } from './pages/student/student-create/student-create.component';
import { RegisterReadComponent } from './pages/register/register-read/register-read.component';
import { RegisterCreateComponent } from './pages/register/register-create/register-create.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    TableComponent,
    TitleComponent,
    HeaderComponent,
    NavMenuComponent,
    CourseReadComponent,
    CourseCreateComponent,
    StudentReadComponent,
    StudentCreateComponent,
    RegisterReadComponent,
    RegisterCreateComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
