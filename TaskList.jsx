import React, { useState } from 'react';

function TaskList() {
  
  const [tasks, setTasks] = useState(['Buy groceries', 'Do laundry', 'Clean the house']);
  const [newTask, setNewTask] = useState(''); 

  
  const addTask = () => {
    if (newTask !== '') {
      setTasks([...tasks, newTask]); 
      setNewTask(''); 
    }
  };

  
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div>
      <h1>Task List</h1>
      
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter new task"
      />
      
    
      <button onClick={addTask}>Add Task</button>

      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li> // Render each task inside a list item
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
