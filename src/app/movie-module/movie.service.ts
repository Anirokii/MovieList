import { Injectable } from '@angular/core';
import { filmList } from './models/mock-movie-list';
import { Movie } from './models/Movie';
/*pour injecter le service*/
@Injectable(
  /*{
  /* l'injecteur*/
  /*providedIn: 'root'*/   /*supprimer le root pour que le service soit disponible dans toute l'application*/

)
export class MovieService {
  /*creer des methodes*/
 getListMovie(): Movie[]{
   return filmList
 }

 getMovieById(Id: number): Movie |undefined{

  if (Id){
    return filmList.find(Movie=>Movie.Id==+Id)
  }
  else
  return undefined
 }

 getMovieGenreList(): string[]| null{
    return ["Action", "Adventure", "Fantasy", "Comedy", "Thriller","Horror", "Drama", "History", "Biography" ]
 }


 /*on peut injecter des services dans le cunstructor*/
  constructor() { }
}
