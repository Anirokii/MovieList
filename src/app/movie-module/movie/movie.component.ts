import { Component,OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { filmList } from '../models/mock-movie-list';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  myMovieList=filmList;
  constructor(private router:Router){}

  ngOnInit():void{

  }

  removeMovie(id:number){
    this.myMovieList=this.myMovieList.filter(elt=>elt.Id != id)
  }
  goToMovieInfo(id:number){
    this.router.navigate([`/info/${id}`])
  }

}
