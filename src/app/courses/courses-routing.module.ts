import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { CourseResolver } from './services/course.resolver';


const routes: Routes = [
  {

    path:":courseUrl",
    component: CourseComponent,
    resolve:{
      course:CourseResolver
    }
  },

  {
  path:"",
  component: HomeComponent
},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule],
  providers: [
    CourseResolver

  ]
})
export class CoursesRoutingModule {



}
