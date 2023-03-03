import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCreateComponent } from './pages/course/course-create/course-create.component';
import { CourseReadComponent } from './pages/course/course-read/course-read.component';
import { RegisterCreateComponent } from './pages/register/register-create/register-create.component';
import { RegisterReadComponent } from './pages/register/register-read/register-read.component';
import { StudentCreateComponent } from './pages/student/student-create/student-create.component';
import { StudentReadComponent } from './pages/student/student-read/student-read.component';

const routes: Routes = [
  {
    path: '',
    component: CourseReadComponent
  },
  {
    path: 'course/create',
    component: CourseCreateComponent
  },
  {
    path: 'student/read',
    component: StudentReadComponent
  },
  {
    path: 'student/create',
    component: StudentCreateComponent
  },
  {
    path: 'register/read',
    component: RegisterReadComponent
  },
  {
    path: 'register/create',
    component: RegisterCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
