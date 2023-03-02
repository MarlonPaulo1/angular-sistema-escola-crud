import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable, map } from 'rxjs'
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  baseUrl:string = 'http://localhost:3001/cursos'

  create(course: Course): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, course).pipe(
      map((obj) => obj)
    )
  }
}
