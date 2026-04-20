package com.jakubkrzoska.quickapp.repo;

import com.jakubkrzoska.quickapp.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepo  extends JpaRepository<Task, Long> {
}
