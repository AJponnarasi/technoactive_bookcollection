import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-singlebookview',
  templateUrl: './singlebookview.component.html',
  styleUrls: ['./singlebookview.component.css']
})
export class SinglebookviewComponent implements OnInit{
  key_value:string | undefined
  public bookDetails:any = []
  cover_img:any
  author_name:any
  title:any
  content:any
  description:any
  constructor(private route: ActivatedRoute, private commonServ: CommonService){

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.key_value = params['cover_i'];
      this.cover_img = params['cover_i'] ? 'https://covers.openlibrary.org/b/id/'+params['cover_i']+'.jpg' : 'assets/book.jpg'
      this.author_name = params['author_name']
      this.title = params['title']
      this.content = params['']
    });
    
  }

}
