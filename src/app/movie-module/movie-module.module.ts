import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import { MovieAddFormComponent } from './movie-add-form/movie-add-form.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { GenreColorPipe } from './genre-color.pipe';

const routes :Routes=[
  {path:'movie', component:MovieComponent},
  {path:'info/:id',component:MovieInfoComponent},
  //{path:'',redirectTo:'movie', pathMatch:'full'}
]

@NgModule({
  declarations: [
    MovieComponent,
    MovieAddFormComponent,
    MovieInfoComponent,
    GenreColorPipe
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class MovieModuleModule { }
