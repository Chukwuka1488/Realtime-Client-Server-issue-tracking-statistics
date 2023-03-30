import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/model/story';
import { StoryApiService } from 'src/app/service/story-api.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  stories: Story[] = [];

  constructor(private storyApiService: StoryApiService) { }

  ngOnInit(): void {
    this.storyApiService.getAllStories().subscribe(stories => {
      console.log("checking 1", stories);
      this.stories = stories;
      console.log("checking 2", stories);
    },
    error => {
      console.log("Error occurred while fetching stories:", error);
  });
  }
}
