import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreColor'
})
export class GenreColorPipe implements PipeTransform {

  transform(color:string):string {
    let rslt ="";
    switch(color){
      case "Action": rslt = 'btnAction';break;
      case "Adventure": rslt = 'btnAdventure';break;
      case "Fantasy": rslt = 'btnFantasy';break;
      case "Horror": rslt = "btnHorror";break;
      case "Comedy": rslt = "btnComedy";break;
      case "Thriller": rslt = "btnThriller";break;
      case "Drama": rslt = "btnDrama";break;
      case "History": rslt = "btnHistory";break;
      case "Biography": rslt = "btnBiography";break;
    }
    return rslt;
  }

}
