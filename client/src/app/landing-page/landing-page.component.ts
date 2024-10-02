import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FilterServiceService } from '../filter-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  //load the topics
  //sample topics for now

  constructor(private filterService: FilterServiceService,private router:Router){}
  
  ngOnInit(): void {
      this.selectedFilter=this.filterService.getFilter();
  }
  
  selectedFilter: string = '';
  
  
  filterOptions: string[] = ['All Topics','Most Viewed','Easiest To Harderst','Hardest to Easiest'];
  
  filteredTopics(){
    if(this.selectedFilter=='All Topics'){
      return this.topics;
    }

    // return this.topics.filter(topic =>
    //   //logic to filter
    // );

    this.filterService.setFilter(this.selectedFilter);

  }

  

  topics = [
    {
    id:1,
    title: 'Web Sockets',
    abstract: 'Web Sockets are interesting and used in Chat applications, video game servers etc, where an open connection is required',
    view_count:100,
    difficulity:3,
    }
  ]


  details(id:number){
    this.router.navigate(['/topic',id]);
  }
}
