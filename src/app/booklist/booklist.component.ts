import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
  constructor(private commonServ: CommonService){}
  public showSpinner:boolean = false
  public showAlert:boolean= false
  public authorList: any = [];
  public selectedAuthor:string | undefined
  public booksList:Array<any> = []
  ngOnInit(): void {
    this.loadAuthorsList()
  }
  loadAuthorsList(){
    this.commonServ.loadAuthorsListAPI().subscribe((response: any) =>{
      this.authorList = response['docs'].map((x:any)=>{
        return {
          name : x.name,
          key : x.key
        }
      })
    })
  }
  loadBookList(){
    this.showSpinner = true
    this.commonServ.loadBookListAPI(this.selectedAuthor).subscribe({
      next: (res:any) => {
        this.showSpinner = false
        this.showAlert = false
        this.booksList = res['docs']
      },
      error: (err) => {
        this.showAlert = true
      }
    })
  }
 
}
