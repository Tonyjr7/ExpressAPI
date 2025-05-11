import { v4 as uuidv4 } from "uuid";

// array in-memory database
let items = [];

// fetch all items
export const fetchItems = (req, res) => {
    res.send(items);
}

// add an item
export const createItem = (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).send("Both name and description are reuired");
    }
    
    items.push({ id: uuidv4(), name, description });

    res.send("Item Added!");
}

// retrive an item by id
export const getItem = (req, res) => {
    const { id } = req.params;

    const foundItem = items.find((item) => item.id === id);

    res.send(foundItem);
}

// update an item
export const updateItem = (req,res) => {
    const { id } = req.params;

    const itemToBeUpdated = items.find((item) => item.id === id);

    if (!itemToBeUpdated) {
        return res.status(404).send("Item not found");
    }

    const { name, description } = req.body;

    if (name) itemToBeUpdated.name = name;
    if (description) itemToBeUpdated.description = description;

    res.send(`Item with ID: ${id} updated!`);
}

// delete an item
export const deleteItem = (req, res) => {
    const { id } = req.params;

    const itemExists = items.some((item) => item.id === id);

    if (!itemExists) {
        return res.status(404).send("Item not found");
    }

    items = items.filter((item) => item.id !== id);

    res.send(`Item with ID: ${id} deleted`);
}