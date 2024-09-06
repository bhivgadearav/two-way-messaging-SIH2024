# Smart India Hackathon 2024 Project: Two-Way Messaging Feature

## Overview

This project is part of our submission for the **Smart India Hackathon 2024**. It features a two-way messaging system, designed to facilitate real-time communication between users. The system is built using modern web technologies, focusing on ease of use, scalability, and efficiency in message handling. 

## Features
- **Real-time Messaging:** Users can send and receive messages in real-time.
- **User Authentication:** Each user is prompted for their username upon connection.
- **Message Delivery:** Messages are stored and displayed based on the sender and receiver.
- **Responsive UI:** Chat interface is designed to be responsive and works well on both desktop and mobile devices.
- **Scalability:** The backend is deployed on AWS EC2, allowing for horizontal scaling to handle multiple users simultaneously.

## Tech Stack

### Frontend:
- **React.js:** Handles the user interface and dynamic updates.
- **Socket.io-client:** Enables real-time communication between the client and server.
- **CSS:** For styling the chat UI, including message bubbles and input fields.

### Backend:
- **Node.js with Express.js:** Serves the backend logic and Socket.io server.
- **Socket.io:** Handles real-time, bi-directional communication between users.
- **MongoDB:** Stores chat messages between users.
- **AWS EC2:** Hosts the backend server, providing a scalable environment.

## Key Functions

### Messaging:
- **Send and Receive Messages:** Each user is identified by a sender and receiver ID. Messages are displayed on the UI based on the ID of the sender.
- **Message Storage:** Messages are stored in a MongoDB database, ensuring they persist across sessions.
- **Message Polling:** The app uses `useEffect` in React to fetch messages every second, keeping the chat interface updated in real-time.

### User Interface:
- **Inline Chat Display:** The user's avatar and recipient's username are displayed inline to make the conversation flow more intuitive.
- **Header and Footer:** The header contains the project logo, and the footer displays "SIH 2024 Prototype."
- **Responsive Input:** Message input and send button are displayed side by side for a clean user experience.

### Deployment:
- **AWS EC2:** The backend server is hosted on an EC2 instance, and connections are managed via Socket.io. Ensure port 3000 is open for communication.

## General Information on Messaging Apps

Messaging apps enable users to communicate with each other in real-time. Core features include:
- **Real-Time Communication:** Instant sending and receiving of messages.
- **User Authentication:** Ensures that each message is sent by a verified user.
- **Data Storage:** Messages are typically stored in a backend database, like MongoDB, to ensure persistence.
- **WebSocket Protocol:** Modern messaging apps often use WebSockets to handle real-time communication, making it faster and more efficient.

In this project, we’ve leveraged **Socket.io**, which abstracts WebSockets and provides fallback options to ensure reliable messaging, even if WebSocket support is unavailable.

