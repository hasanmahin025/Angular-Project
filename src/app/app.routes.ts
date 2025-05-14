import { Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CourseComponent } from './course/course.component';
import { BecomeAResearchComponent } from './become-aresearch/become-aresearch.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { CProgrammingComponent } from './c-programming/c-programming.component';
import { CppProgrammingComponent } from './cpp-programming/cpp-programming.component';
import { HomeComponent } from './home/home.component';
import { CHomeComponent } from './c-programming/c-home/c-home.component';
import { IntroductionComponent } from './c-programming/introduction/introduction.component';
import { CourseLayoutComponent } from './course-layout/course-layout.component';

import { GetStartedComponent } from './c-programming/get-started/get-started.component';
import { SyntaxComponent } from './c-programming/syntax/syntax.component';
import { OutputComponent } from './c-programming/output/output.component';
import { CommentsComponent } from './c-programming/comments/comments.component';
import { VariablesComponent } from './c-programming/variables/variables.component';
import { DatatypesComponent } from './c-programming/datatypes/datatypes.component';
import { InputComponent } from './c-programming/input/input.component';
import { ConstantComponent } from './c-programming/constant/constant.component';
import { SingupComponent } from './singup/singup.component';



export const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'research',
    component:BecomeAResearchComponent
  },
  {
    path:'contact',
    component:ContactmeComponent
  },
  {
    path:'c-programming',
    component:CourseLayoutComponent,
    children:[
      {
        path:'',
        component:CHomeComponent
      },
      {
        path:'introduction',
        component:IntroductionComponent
      },
      {
        path:'getstarted',
        component:GetStartedComponent
      },
      {
        path:'syntax',
        component:SyntaxComponent
      },
      {
        path:'output',
        component:OutputComponent

      },
      {
        path:'comments',
        component:CommentsComponent
      },
      {
        path: 'variables',
        component: VariablesComponent
      },
      {
        path: 'datatypes',
        component: DatatypesComponent
      },
      {
        path: 'input',
        component: InputComponent
      },
      {
        path:'constant',
        component:ConstantComponent
      }

    ]
  },
    
  
  
  {
    path:'cpp-programming',
    component:CppProgrammingComponent
  },
  {
    path: 'signup',
    component: SingupComponent
  }
  
 
 
  ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }