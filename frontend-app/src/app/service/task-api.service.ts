import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskApiService {
  baseUri: string = 'http://localhost:9000/api/tasks';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // // create tasks
  // createTask(data: { estimate: number, status: 'Open' | 'Done' }): Observable<any> {
  //   let url = `${this.baseUri}/create`;
  //   return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  // }

  // Get all tasks
  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUri}`)
  }

  // // Get task
  // getTask(id: String): Observable<any> {
  //   let url = `${this.baseUri}/read/${id}`;
  //   return this.http.get(url, {headers: this.headers, observe: 'response'}).pipe(
  //     map((res: HttpResponse<any>) => {
  //       return res.body || {};
  //     }),
  //     catchError(this.errorMgmt));
  // }

  // // update task
  // updateTask(id: any, data: any): Observable<any> {
  //   let url = `${this.baseUri}/update/${id}`;
  //   return this.http
  //     .put(url, data, { headers: this.headers })
  //     .pipe(catchError(this.errorMgmt));
  // }
  
  // // delete task
  // deleteTask(id: any): Observable<any> {
  //   let url = `${this.baseUri}/delete/${id}`;
  //   return this.http
  //   .delete(url, { headers: this.headers})
  //   .pipe(catchError(this.errorMgmt))
  // }

  // // error handling
  // errorMgmt(error: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(() => {
  //     return errorMessage;
  //   });
  // }
}
