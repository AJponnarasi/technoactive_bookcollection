import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  authorAPIURL = 'https://openlibrary.org/search/authors.json?q=j%20'
  bookAPIURL = ''
  allBookList:any
  constructor(private http: HttpClient) { }
  loadAuthorsListAPI(){
    return this.http.get(this.authorAPIURL).pipe(
      retry(1),catchError((error: HttpErrorResponse) => this.handleError(error))
    )
  }

  loadBookListAPI(authorname:any){
    return this.http.get("https://openlibrary.org/search.json?author="+authorname).pipe(
      retry(1),catchError((error: HttpErrorResponse) => this.handleError(error))
    )
  }
  loadBookListAPIs(authorname:any,cbk:any){
    this.http.get("https://openlibrary.org/search.json?author="+authorname).subscribe({
      next: (res:any) => {
        this.allBookList = res['docs']
        cbk(true, res);
      },
      error: (err) => {
        cbk(false, err);
      },
      complete: () => {},
    });
  }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
