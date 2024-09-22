import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit{
  topic:any;

  topics=[
    {
      id:1,
      title: 'Web Sockets',
      abstract: 'Web Sockets are interesting and used in Chat applications, video game servers etc, where an open connection is required',
      details:'Details'

    }
  ];

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
      const topicId=Number(this.route.snapshot.paramMap.get('id'));
      this.topic= this.topics.find(t=>t.id === topicId);
  }

}
