import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from '../movie-module/movie/movie.component';
import { LoginComponent } from './login/login.component';


import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [

  {path:'movie',component:MovieComponent},
  {path:'login',component:LoginComponent}
];


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ]
})
export class LoginModuleModule { }
