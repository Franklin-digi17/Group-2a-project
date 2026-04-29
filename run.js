require("dotenv").config();

const express = require('express');
const app = express();
app.use(express.json()); // Parse JSON bodies

let todos = [
  { id: 1, task: 'Learn Node.js', completed: false },
  { id: 2, task: 'Build CRUD API', completed: false },
  { id: 3, task: 'Get a first class', completed: true },
  { id: 4, task: 'Become like Jesus', completed: true},
  { id: 5, task: 'Fight lions', completed: true},
  { id: 6, task: 'Build a Car', completed: false },
];

// GET All – Read
app.get('/todos', (req, res) => {
  res.status(200).json(todos); // Send array as JSON
});

 // GET ONLY SINGULAR id
app.get('/todos/:id', (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id)); // Array.find()
  res.status(200).json(todo); // Send array as JSON
});


//filter false:active

export const getAllActiveTasks = (req, res) => {
  try{
    const task = todos.find(todo => todo.active === true)
    if(!task) return res.status.json({message: "All task completed"})
      return res.status(200).hson({message: "success", task})
  } catch(e){
    return
    res.status(500).json({message: "Failed"})
  }
};

// POST New – Create
app.post('/todos', (req, res) => {
  const {task, completed} = { id: todos.length + 1, ...req.body }; // Auto-ID
  if(!task) return res.status(404).json({ message: 'Missing field'});//wor
  todos.push(newTodo);
  res.status(201).json(newTodo); // Echo back
});

// PATCH Update – Partial
app.patch('/todos/:id', (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id)); // Array.find()
  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  Object.assign(todo, req.body); // Merge: e.g., {completed: true}
  res.status(200).json(todo);
});

// DELETE Remove
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = todos.length;
  todos = todos.filter((t) => t.id !== id); // Array.filter() – non-destructive
  if (todos.length === initialLength)
    return res.status(404).json({ error: 'Not found' });
  res.status(204).send(); // Silent success
});

app.get('/todos/completed', (req, res) => {
  const completed = todos.filter((t) => t.completed);
  res.json(completed); // Custom Read!
});
 
app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Server error!' });
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`API live on port ${PORT}`)
});
