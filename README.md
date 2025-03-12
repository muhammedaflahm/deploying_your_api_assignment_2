# **Lab Exercise: Returning Data Based on the ENV Variable**

## **🎯 Objectives**
Learn how to:
- Configure applications to return data based on environment variables.
- Manage different environments effectively in full-stack development.

---

## **📚 Prerequisites**
Before you begin, ensure you:
- Are familiar with **JavaScript**.
- Understand the basics of **environment variables**.

---

## **🚀 Steps**

### **1. Install dotenv**
Install the `dotenv` package to manage environment variables:
```bash
yarn add dotenv
```

---

### **2. Require dotenv in Your File**
Add the following line at the top of your main file to load the environment variables:
```javascript
require('dotenv').config();
```

---

### **3. Define the Environment Variables**
Create a `.env` file in your project directory and define your variables:
```plaintext
IS_ADMIN=true
```

You can modify the value to `true` or `false` depending on your requirements.

---

### **4. Access Environment Variables**
Use `process.env` to access your variables anywhere in your application. Here's an example:
```javascript
const isAdmin = process.env.IS_ADMIN === 'true';

if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}
```

---

### **5. Return Different Data**
Conditionally return different data based on the value of the environment variable. Example:
```javascript
const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000."));
```

---

## **🏁 Outcome**
By completing this exercise, you will:
- Understand how to manipulate application behavior using environment variables.
- Learn to handle different environments securely and efficiently.

🎉 **Congratulations!** You’ve mastered a crucial skill for **full-stack development**! 💼🔐
