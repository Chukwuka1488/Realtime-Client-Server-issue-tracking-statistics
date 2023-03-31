import { Task } from './task';
export class Story {
  title: string = '';
  description: string = '';
  status: string = '';
  tasks: Task[] = [];

  constructor(story: Story = {} as Story) {
    const {
      title = '',
      description = '',
      status = '',
      tasks = [],
    } = story;

    this.title = title;
    this.description = description;
    this.status = status;
    this.tasks = tasks;
  }
}