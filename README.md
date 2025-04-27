Student Management Platform - Nupur Dashputre

## 1. Project Overview

    This project is a responsive Singe Page Application (SPA) for a Student Management Platform.

    Following are the features included:
        a) A table consisting of student data (Student ID, Name, Course, Grade, Enrollment Date), with sorting in ascending/descending order in each column
        b) A search box to search for a specific student by Name/Student ID
        c) A form to add student details, with appropriate error/submit messages (for example, showing an error if any of the fields are empty)
        d) A chat interface to show communication between students and advisors, with list of message threads on the left and selected conversation on the right, and visible difference between sent and received texts
        e) A text-box to send messages to students
        f) A navigation bar to switch between student data and chat interface
        g) A localStorage for student table and chats
        h) Responsive page for mobile, tablet, and desktop

## 2. Setup Instructions

    a) Clone the repository: https://github.com/nupurad/student-management-platform.git
    b) Navigate into the project directory: cd student-management-platform
    c) Install dependencis: npm install
    d) Start the development server: npm start
    e) Open your browser and go to: http://localhost:3000/
    f) To test on mobile:
        - Ensure your laptop and mobile are connected to the same Wi-fi Network
        - In your terminal, run: npm start --host 0.0.0.0
        - Find your ip address: ipconfig/ifconfig 
        - On your mobile, open your browser and go to: http://YOUR_IP:3000/

## 3. Explanation of Approach

    a) Application Structure
        - The app is structured with clear separation between components and pages.
        - Routing is handled using `react-router-dom`, with separate routes for the Students page and Chat page.
        - State is managed locally within components using `useState` and `useEffect`.
        - All student and chat data is persisted across page reloads using `localStorage`.

    b) Features Breakdown
        - Student Management: A searchable, sortable table listing student ID, name, course, grade, and enrollment date.
  
        - Student Form: A form that validates required fields and updates the table immediately after successful submission.

        - Student-Advisor Chat: A messaging interface where users can select a thread, view conversation history, and send new messages. Messages are visually distinguished between sent (advisor) and received (student).
        
        - Responsiveness: Flexbox-based layouts dynamically adjust for mobile, tablet, and desktop screen sizes.

    c) Design Decisions
        - Basic CSS and inline styles were used to avoid dependency on heavy UI libraries like Bootstrap or Material UI.
        - Clear and minimalistic design to prioritize readability and user experience.
        - LocalStorage is used to simulate backend persistence without needing an API server.

## 4. Additional Features
    
    a) Highlight Selected Conversation: The currently selected chat thread is visually highlighted in the thread list.
    b) Responsive Input and Form Layouts: Inputs in the Add Student form adapt and wrap neatly on smaller screens.
    c) Styled Chat Bubbles: Sent and received messages have different background colors and alignments, resembling real-world chat apps.
    d) Table Row Styling: Center-aligned table content, padding for better readability, curved table corners, and hover effects (optional).
    e) Clean Mobile Experience: Both Students and Chat views are fully optimized for mobile use.

## 5. Key Learnings

    a) Using React to develop an SPA
    b) Making an SPA responsive for mobile, tablet, desktop
    c) Employing localStorage
    d) Adding validation to forms
    e) Enhancing the UI of applications




