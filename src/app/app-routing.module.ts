import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnePostComponent } from './one-post/one-post.component';

const routes: Routes = [
  { path:'post/:id', component:OnePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
