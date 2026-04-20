import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  newTask: string = '';
  tasks: string[] = [];
  
  addTasks(){
    if(this.newTask.trim()){
      this.tasks = [...this.tasks, this.newTask];
      this.newTask = '';
    }
  }

  deleteTask(index: number){
    this.tasks = this.tasks.filter((_, i) => i != index);
  }
}
