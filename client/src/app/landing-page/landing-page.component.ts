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
  // topics:any[]=[];
  page=0;
  size=10;
  selectedFilter: string = '';
  

  constructor(private filterService: FilterServiceService,private router:Router,private http:HttpClient){}
  
  ngOnInit(): void {
      //load the page on the original postion the user left it from if they are naviagting
      //back to it from the details page
      const savedPosition= localStorage.getItem('scrollPosition');
      if(savedPosition){
        window.scrollTo(0 , +savedPosition);
      }
      this.selectedFilter=this.filterService.getFilter();
      // this.loadTopics();
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

  loadTopics(): void {
    this.filteredService.getTopics(this.page, this.size).subscribe(
      (response: any) => {
        this.topics=[...this.topics, ...response.content];
        
        if(this.topics.length> 50){
          this.topics=this.topics.slice(-100);
        }
    
        this.page += 1;
      },
      (error: any)=>{
        console.log("Error fetching topics",error);
      }
    )
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
    const scrollPosition=window.scrollY;
    localStorage.setItem('scrollPosition', scrollPosition.toString());
    this.router.navigate(['/topic',id]);
  }

  incrementViewCount(id:number){
    this.http.post("localhost:8080/api/details/updateViews",{}).subscribe(
      (response:any)=>{
        console.log("Views updated");
        const updatedTopic=response;

        const index = this.topics.findIndex(topic => topic.id === id);

        if(index != -1){
          this.topics[index]=updatedTopic;
          console.log("The Topic has been updated");
        }
        

      },
      (error)=>{
        console.log("Error while updating views");
      }
    );
  }
}
