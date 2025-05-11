### **Example Requests**

### **1. GET `/items`**

**Request:**

```http
GET /items
```

**Response (200 OK):**

```json
[
  {
    "id": "d2f1b2e3-a5c7-4b9a-a1df-2fabc4a82356",
    "name": "Notebook",
    "description": "A ruled notebook."
  }
]
```

---

### **2. POST `/items`**

**Request:**

```http
POST /items
Content-Type: application/json

{
  "name": "Pen",
  "description": "A blue ballpoint pen"
}
```

**Response (200 OK):**

```text
Item Added!
```

**Error Example (400 Bad Request):**

```http
POST /items
Content-Type: application/json

{
  "name": "Pen"
}
```

**Response (400 Bad Request):**

```text
Both name and description are reuired
```

---

### **3. GET `/items/:id`**

**Request:**

```http
GET /items/d2f1b2e3-a5c7-4b9a-a1df-2fabc4a82356
```

**Response (200 OK):**

```json
{
  "id": "d2f1b2e3-a5c7-4b9a-a1df-2fabc4a82356",
  "name": "Notebook",
  "description": "A ruled notebook."
}
```

**If not found:**

```text
null
```

---

### **4. PUT `/items/:id`**

**Request:**

```http
PUT /items/d2f1b2e3-a5c7-4b9a-a1df-2fabc4a82356
Content-Type: application/json

{
  "name": "Updated Notebook"
}
```

**Response (200 OK):**

```text
Item with ID: d2f1b2e3-a5c7-4b9a-a1df-2fabc4a82356 updated!
```

**If not found:**

```text
Item not found
```

---

### **5. DELETE `/items/:id`**

**Request:**

```http
DELETE /items/d2f1b2e3-a5c7-4b9a-a1df-2fabc4a82356
```

**Response (200 OK):**

```text
Item with ID: d2f1b2e3-a5c7-4b9a-a1df-2fabc4a82356 deleted
```

**If not found:**

```text
Item not found
```