import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  //load the topics
  //sample topics for now
  topics = [
    {
    id:1,
    title: 'Web Sockets',
    abstract: 'Web Sockets are interesting and used in Chat applications, video game servers etc, where an open connection is required'
    }
  ]

  constructor(private router:Router){}

  details(id:number){
    this.router.navigate(['/topic',id]);
  }
}
