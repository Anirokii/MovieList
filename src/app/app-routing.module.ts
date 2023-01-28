import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login-module/login/login.component';
import { MovieAddFormComponent } from './movie-module/movie-add-form/movie-add-form.component';
import { MovieInfoComponent } from './movie-module/movie-info/movie-info.component';
import { MovieComponent } from './movie-module/movie/movie.component';

const routes: Routes = [
      //{path: 'movie',component:AppComponent},
      //{path: '',redirectTo:'movie',pathMatch:'full'},
      {path:'addmovie',component:MovieAddFormComponent},
      //{path:'info/:id',component:MovieInfoComponent},
      //{path:'**', redirectTo:'movie',pathMatch:'full'}
      {path:'', redirectTo:'login', pathMatch:'full'}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[MovieAddFormComponent, MovieComponent,MovieInfoComponent, LoginComponent]