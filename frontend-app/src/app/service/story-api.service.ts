import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Story } from '../model/story';
import { Task } from '../model/task';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class StoryApiService {
  private baseUri: string = 'http://localhost:9000/api/stories';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private socket = io(this.baseUri)

  constructor(private http: HttpClient) { }

  createStory(newStory: Story): Observable<Story> {
    const payload = {
      title: newStory.title,
      description: newStory.description,
      status: newStory.status,
      tasks: newStory.tasks
    };
    return this.http.post<Story>(`${this.baseUri}`, payload)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle error
        console.error('Error creating story:', error);
        return throwError(() => new Error("error"));
      })
    );
  }

  getAllStories(): Observable<Story[]> {
    return this.http.get<Story[]>(`${this.baseUri}`);
  }

  getNewData(data: any) {
    this.socket.emit('newStory', data)
  }

}
