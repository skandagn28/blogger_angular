import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorprofileComponent } from './authorprofile/authorprofile.component';


const routes: Routes = [  {
  path: "profile",
  component: AuthorprofileComponent,
  data: { title: "VoizFonica - Dashboard" }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
