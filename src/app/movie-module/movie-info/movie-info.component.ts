import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/Movie';
import { filmList } from '../models/mock-movie-list';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  myMovieList=filmList;
  myMovie:Movie |undefined ;

  constructor(private route: ActivatedRoute, private router:Router){}


  ngOnInit():void{
    
    const id:string|null= this.route.snapshot.paramMap.get('id');
    console.log(id)
    if(id){
       this.myMovie=this.myMovieList.find(film => film.Id == +id)
    }
  }
  goToMovieList(){
    this.router.navigate([`/movie`])
  }

}
