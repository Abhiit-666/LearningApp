import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FilterServiceService } from '../filter-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  //load the topics
  //sample topics for now

  constructor(private filterService: FilterServiceService,private router:Router,private http:HttpClient){}
  
  selectedFilter: string = '';
  ngOnInit(): void {
      this.selectedFilter=this.filterService.getFilter();
  }
  
  
  
  filterOptions: string[] = ['All Topics','Most Viewed','Easiest To Harderst','Hardest to Easiest'];
  
  filteredTopics(){
    if(this.selectedFilter=='All Topics'){
      return this.topics;
    }
    
    this.filterService.setFilter(this.selectedFilter);
    return this.topics;
    // return this.topics.filter(topic =>
    //   //logic to filter
    // );


  }

  

  topics = [
    {
    id:1,
    title: 'Web Sockets',
    abstract: 'Web Sockets are interesting and used in Chat applications, video game servers etc, where an open connection is required',
    view_count:100,
    difficulity:3,
    },
    {
      id:1,
      title: 'Parser',
      abstract: 'Web Sockets are interesting and used in Chat applications, video game servers etc, where an open connection is required',
      view_count:120,
      difficulity:1,
    }

  ]

  getStars(difficulity:  number): boolean[]{
    return Array(5).fill(false).map((_,i)=> i < difficulity)
  }

  details(id:number){
    this.incrementViewCount(id); 
    this.router.navigate(['/topic',id]);
  }

  incrementViewCount(id:number){
    this.http.post("localhost:8080/api/details/updateViews",{}).subscribe(
      (response)=>{

        console.log("Views updated");
      },
      (error)=>{
        console.log("Error while updating views");
      }
    );
  }
}
