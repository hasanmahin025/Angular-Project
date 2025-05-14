import { Component } from '@angular/core';
import { CProgrammingComponent } from "../c-programming/c-programming.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-course-layout',
  imports: [CProgrammingComponent, RouterOutlet],
  templateUrl: './course-layout.component.html',
  styleUrl: './course-layout.component.css'
})
export class CourseLayoutComponent {

}
