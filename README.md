# Student Team Members Management Application

A web-based application to manage student teams, built using Java, JDBC, and MySQL. This tool allows administrators to add, view, update, and delete student and team records in an organized manner, supporting seamless academic project management.

## 🛠️ Features

- 🔐 Login system for admin access
- 🧑‍🎓 Add, view, edit, and delete student records
- 👥 Create and manage teams
- 🔄 Assign students to teams
- 📁 Database integration with MySQL using JDBC
- 🖥️ Simple GUI built with Java Swing

## 🚀 Technologies Used

- Java (JDK 8+)
- JDBC (Java Database Connectivity)
- MySQL
- Java Swing (for GUI)
- NetBeans IDE (recommended)

## 🖼️ Screenshots

> _Include screenshots here of the login page, dashboard, student list, team assignment, etc._

## 📦 Setup and Installation

### Prerequisites

- JDK 8 or later
- MySQL Server
- NetBeans IDE (or any Java IDE)
- MySQL JDBC Driver

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Shreeyansh14/Student-Team-Members-Management-Application.git
   cd Student-Team-Members-Management-Application
Create the MySQL Database

Open MySQL and run the provided SQL script (if available), or create a database named student_team_db.

Create necessary tables: students, teams, team_members.

Update Database Credentials

Open the DatabaseConnection.java file and update:

java
Copy
Edit
String url = "jdbc:mysql://localhost:3306/student_team_db";
String user = "root";
String password = "your_mysql_password";
Run the Application

Open the project in NetBeans and click Run to start the application.

## 📁 Project Structure
bash
Copy
Edit
Student-Team-Members-Management-Application/
│
├── src/
│   ├── database/               # Database connection and utilities
│   ├── gui/                    # GUI classes (Login, Dashboard, etc.)
│   ├── models/                 # Student and Team models
│   └── Main.java               # Main entry point
│
└── README.md
## 🤝 Contributors
1. SHREEYANSH VERMA
2. ANANT AGRAWAL
3. ISHAN DEY
4. DIVYANSHU GUPTA

📄 License
This project is licensed under the MIT License.
