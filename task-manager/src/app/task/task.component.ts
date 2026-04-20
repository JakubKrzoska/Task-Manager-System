import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from './task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(){
    this.taskService.getTasks().subscribe(tasks => (this.tasks));
  }

  addTask(){
    if (!this.newTask.trim()) return;
    const task: Task = { title: this.newTask };
    this.taskService.addTask(task).subscribe(() => {
      this.newTask = '';
      this.loadTasks();
    })
  }

  deleteTask(id: number){
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }

}
