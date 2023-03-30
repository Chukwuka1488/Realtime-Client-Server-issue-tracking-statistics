import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Story } from '../model/story';

@Injectable({
  providedIn: 'root'
})
export class StoryApiService {
  private baseUri: string = 'http://localhost:9000/api/stories';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // // create story
  // createStory(data: any): Observable<any> {
  //   let url = `${this.baseUri}/create`;
  //   return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  // }

  // // read story
  // getStory(id: String): Observable<any> {
  //   let url = `${this.baseUri}/read/${id}`;
  //   return this.http.get(url, { headers: this.headers }).pipe(
  //     map((res: any) => {
  //       return res || {};
  //     }),
  //     catchError(this.errorMgmt)
  //   );
  // }
  getAllStories(): Observable<Story[]> {
    return this.http.get<Story[]>(`${this.baseUri}`);
  }

  // // update story
  // updateStory(id: String, data): Observable<any> {
  //   let url = `${this.baseUri}/update/${id}`;
  //   return this.http.put(url, data, { headers: this.headers }).pipe(
  //     catchError(this.errorMgmt)
  //   );
  // }

  // // delete story
  // deleteStory(id: String): Observable<any> {
  //   let url = `${this.baseUri}/delete/${id}`;
  //   return this.http.delete(url, { headers: this.headers }).pipe(
  //     catchError(this.errorMgmt)
  //   );
  // }

    // // Error handling
    // errorMgmt(error: any) {
    //   let errorMessage = '';
    //   if (error.error instanceof ErrorEvent) {
    //     // Get client-side error
    //     errorMessage = error.error.message;
    //   } else {
    //     // Get server-side error
    //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //   }
    //   console.log(errorMessage);
    //   return throwError(errorMessage);
    // }
}
