import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CProgrammingComponent } from '../c-programming/c-programming.component';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  constructor(private router : Router){

  }
  gotoCprogram(){
     this.router.navigate(['c-programming'])
  }
  gotoCppprogram(){
    this.router.navigate(['cpp-programming'])
  }
  
}
