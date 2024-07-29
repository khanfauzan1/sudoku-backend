const express = require('express');
const cors = require('cors');
const app = express();
const sudokuSolver = require('./sudokuSolver');

// app.use(cors());
app.use(cors({ origin: "http://localhost:3000",methods:["POST","GET","PUT","DELETE"], credentials: true }));
app.use(express.json());

app.post('/api/solve', (req, res) => {
  const { puzzle } = req.body;
  const solution = sudokuSolver.solve(puzzle);
  res.json({ solution });
});

app.listen(5000, () => console.log('Server running on port 5000'));