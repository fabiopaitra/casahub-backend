import { Router } from 'express';
import { Todo } from '../models/todo';

let todos: Todo[] = [];
const router = Router();

router.get('/todo', (req, res) => {
  res.status(200).json({ todos });
});

router.post('/todo', (req, res) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todos.push(newTodo);
  res.status(201).json({ message: 'Todo inserted', todo: newTodo, todos });
});

router.put('/todo/:todoId', (req, res) => {
  const tId = req.params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tId);
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
    return res.status(200).json({ message: 'Updated todo', todos });
  }
  return res.status(404).json({ message: 'Could not find todo for this id.' });
});

router.delete('/todo/:todoId', (req, res) => {
  todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId);
  res.status(200).json({ message: 'Deleted todo', todos });
});

export default router;
