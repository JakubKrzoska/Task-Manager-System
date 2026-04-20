package com.jakubkrzoska.quickapp.controller;

import com.jakubkrzoska.quickapp.model.Task;
import com.jakubkrzoska.quickapp.repo.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController {

    private final TaskRepo taskRepo;

    public TaskController(TaskRepo taskRepo){
        this.taskRepo = taskRepo;
    }

    @GetMapping
    public List<Task> getTasks(){
        return taskRepo.findAll();
    }

    @PostMapping
    public Task addTask(@RequestBody Task task){
        return taskRepo.save(task);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id){
        taskRepo.deleteById(id);
    }

}
