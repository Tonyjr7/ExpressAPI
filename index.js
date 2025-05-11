import express from 'express';
import itemsRoutes from './routes/items.js';

const app = express();
const PORT = 5000;

// middleware to parse json
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
    res.send("Hello World, My Express API!");
});

// Items route
app.use('/items', itemsRoutes);

// Handle Invalid Routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
