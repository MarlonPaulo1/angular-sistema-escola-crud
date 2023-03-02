import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCreateComponent } from './pages/course/course-create/course-create.component';
import { CourseReadComponent } from './pages/course/course-read/course-read.component';

const routes: Routes = [
  {
    path: '',
    component: CourseReadComponent
  },
  {
    path: 'course/create',
    component: CourseCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
