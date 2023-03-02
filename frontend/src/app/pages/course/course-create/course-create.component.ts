import { Component } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent {

  constructor(private courseService: CourseService){}

  course: Course = {
    nome: '',
    instrutor: '',
    local: '',
    cargaHoraria: 0,
    dataInicio: ''
  } 

  createCourse(): void {
    this.courseService.create(this.course).subscribe()
  }
}

