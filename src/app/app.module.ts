import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MovieModuleModule } from './movie-module/movie-module.module';
import { LoginModuleModule } from './login-module/login-module.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //{path: 'movie',component:MovieComponent},
      //{path: '',redirectTo:'movie',pathMatch:'full'},
      //{path:'addmovie',component:MovieAddFormComponent},
      //{path:'info/:id',component:MovieInfoComponent},
      //{path:'**', redirectTo:'movie',pathMatch:'full'}
    ]),
    //MatCardModule,
    //MatButtonModule,
    //MatInputModule,
    //MatIconModule,
    //ReactiveFormsModule,
    //BrowserAnimationsModule,
    MovieModuleModule,
    LoginModuleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
