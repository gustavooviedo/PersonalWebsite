// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Portfolio Backend');
});

// Sample route for fetching projects
app.get('/api/projects', (req, res) => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description for project 1', tech: 'React, Node.js' },
    { id: 2, title: 'Project 2', description: 'Description for project 2', tech: 'Vue, Express' }
  ];
  res.json(projects);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
