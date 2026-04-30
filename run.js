require("dotenv").config();

const express = require('express');
const app = express();
app.use(express.json()); // Parse JSON bodies

let tStudentRecords = [
  { id:1, Name: "Umukoro Franklin", MatricNumber: 'BTD/Ba-Dev/26/1499', PhoneNumber: +2349023723181 },
  { id:2, Name: "Olatise Michael", MatricNumber: 'BTD/Ba-Dev/26/1500', PhoneNumber: +234804713583 },
  { id:3, Name: "Babatunde Diamond", MatricNumber: 'BTD/Ba-Dev/26/1501', PhoneNumber: +2349002353751 },
  { id:4, Name: "Shirley Laura", MatricNumber: 'BTD/Ba-Dev/26/1502', PhoneNumber: +442399101345 },
]
// GET All – Read
app.get('/Student Records', (req, res) => {
  res.status(200).json(todos); // Send array as JSON
});

 // GET ONLY SINGULAR id
app.get('/StudentRecords/:id', (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id)); // Array.find()
  res.status(200).json(todo); // Send array as JSON
});


// POST New – Create
app.post('/StudentRecords', (req, res) => {
  // you have to update what you fetch here
  const {task, completed, id} = { id: todos.length + 1, ...req.body }; // Auto-ID
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
