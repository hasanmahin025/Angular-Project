import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-c-programming',
  imports: [],
  templateUrl: './c-programming.component.html',
  styleUrl: './c-programming.component.css'
})
export class CProgrammingComponent {
  constructor(private router : Router){
    
  }
  gotoHome(){
    this.router.navigate(['/c-programming'])
  }
  gotoIntro(){
    this.router.navigate(['c-programming/introduction'])
  }
  gotoStarted(){
    this.router.navigate(['c-programming/getstarted'])
  }
  gotoSyntax(){
    this.router.navigate(['c-programming/syntax'])
  }
  gotoOutput(){
    this.router.navigate(['c-programming/output'])
  }
  gotoComments(){
    this.router.navigate(['c-programming/comments'])
  }
  gotovariables(){
    this.router.navigate(['c-programming/variables'])
  }
  gotoDatatypes(){
    this.router.navigate(['c-programming/datatypes'])
  }
  gotoInput(){
    this.router.navigate(['c-programming/input'])
  }
  gotoContans(){
    this.router.navigate(['c-programming/constant'])
  }
}
