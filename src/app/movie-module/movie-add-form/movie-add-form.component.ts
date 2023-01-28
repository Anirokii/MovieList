import { Component, HostBinding } from '@angular/core';
import { filmList } from '../models/mock-movie-list';

@Component({
  selector: 'app-movie-add-form',
  templateUrl: './movie-add-form.component.html',
  styleUrls: ['./movie-add-form.component.css']
})
export class MovieAddFormComponent {
  myMovieList=filmList;
  genreList:string[];

  constructor(){}

  addGenre(color:string):void{
    this.genreList.push(color);

  }

  addMovie(title:string ,year:string, director:string,writer:string,actorList:string[],pilot:string,language:string,country:string,awards:string,poster:string){
   this.myMovieList.push(
      {
          Id:this.myMovieList.length+1,
          Title:title,
          Year: Number(year),
          Genre:this.genreList,
          Director:director,
          Writer:writer,
          Actors:actorList,
          Pilot:pilot,
          Language:language,
          Country:country,
          Awards:awards,
          Poster:poster
      }
    )
    this.genreList=[];
  }

}
