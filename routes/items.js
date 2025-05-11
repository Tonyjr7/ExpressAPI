import express from 'express';
import { createItem, deleteItem, fetchItems, getItem, updateItem } from '../controller/items.js';

const router = express.Router();

// fetch all items route
router.get('/', fetchItems);

// create an item
router.post('/', createItem);

// retrive item
router.get('/:id', getItem);

// update an item
router.put('/:id', updateItem);

//delete an item
router.delete('/:id', deleteItem);

export default router;