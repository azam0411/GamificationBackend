# **Quiz App Backend** 🚀

A simple **Node.js + Express.js** backend to serve quiz questions from an external API.

## **🛠 Tech Stack**

- **Backend:** Node.js, Express.js
- **API Fetching:** Axios
- **CORS Handling:** Cors

---

## **📦 Installation & Setup**

1️⃣ **Clone the repository**

```sh
git clone https://github.com/your-username/quiz-app-backend.git
cd quiz-app-backend
```

2️⃣ **Install dependencies**

```sh
npm install
```

3️⃣ **Run the server**

```sh
node server.js
```

The server will be running at **`http://localhost:5000/`**

---

## **📡 API Endpoints**

### **GET /api**

Fetches quiz questions from an external API.

**Example Response:**

```json
{
  "questions": [
    {
      "description": "What is 2 + 2?",
      "options": [
        { "description": "3", "is_correct": false },
        { "description": "4", "is_correct": true }
      ]
    }
  ]
}
```

---

## **💡 Future Improvements**

🔹 Implement database storage for questions  
🔹 Add authentication & user tracking  
🔹 Enhance error handling

---
