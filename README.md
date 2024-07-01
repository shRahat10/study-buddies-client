# Study Buddies

## Website Description

The Study Buddies platform streamlines assignment management, allowing users to create, submit, and mark assignments. With features like assignment creation, submission, marking, and user authentication, it offers a seamless experience for everyone.

# Live Link

```bash
https://study-buddies-7ea63.web.app
```

# Server Side Repository

```bash
https://github.com/shRahat10/study-buddies-server
```

## Features

**Home Page:**

- **Navbar:** Displays different links based on user authentication status. Allows access to assignments, login, register before logging in, and assignments, create assignments, pending assignments, and user profile options after logging in.
- **Banner Section:** Presents a visually appealing section at the top of the page, adhering to the project theme.
- **Feature Section:** Contains cards showcasing various features of the project.
- **FAQ Section:** Provides answers to frequently asked questions.
- **Footer:** Displays copyright information and relevant links.

**Create Assignment Page:**

- Allows logged-in users to create assignments for all users.
- Assignment creation form includes fields for title, description, marks, thumbnail image URL, assignment difficulty level (dropdown/select input field), and due date (using react-datepicker).
- Displays a success message upon successful assignment creation.

**Assignments Page:**

- Displays all assignments created by any user.
- Offers filtering functionality based on assignment difficulty level.
- Each assignment card includes a thumbnail, title, marks, assignment difficulty level, and options for delete, update, and view assignment.
- Provides functionality to delete assignments created by the current user, with confirmation modal, success, and error messages.
- Allows any user to update any assignment, with pre-filled input fields and success message upon update.

**View Assignment Button Functionality:**

- Upon clicking the "View Assignment" button, the user is directed to the assignment details page, which is a private dynamic page.
- On this page, users can view the assignment details provided during assignment creation.
- Additionally, the "Take Assignment" button is displayed, allowing users to submit the assignment.
- Clicking on the "Take Assignment" button opens a modal (or a new page) with the assignment submission form.
- The submission form includes input fields for submitting a PDF/doc link and a text area for providing a quick note.
- By default, every submitted assignment is in pending status, with the user's email saved along with the assignment for identification purposes.

**My Submitted/Attempted Assignment Page:**

- Displays assignments submitted by the specific logged-in user.
- Shows assignment title, status, marks, obtained marks, and feedback (if provided).

**Pending Assignments Page:**

- Lists all pending assignments submitted by any user.
- Each assignment includes title, marks, examinee name, and a "give mark" button.
- Allows marking of assignments, with options to provide marks and feedback.
- Updates assignment status to completed after marking.

**Give Mark Button Functionality:**

- On the pending assignments page, every submitted assignment includes the assignment title, marks, examinee name (who submitted the assignment), and a "Give Mark" button.
- Clicking on the "Give Mark" button opens a modal (or navigates to a new page) where the user can view the PDF/docs link and notes submitted by the examinee.
- The modal/page also contains input fields for providing marks and feedback.
- Users can enter marks and feedback in the respective input fields.
- After filling in the feedback and marks, users can submit the mark by clicking on the submit button.
- Upon marking an assignment, the status of the assignment is changed to completed, indicating that it has been marked.

**Authentication Pages (Login and Registration):**

- Public pages allowing users to log in or register.
- Implements Firebase email/password-based authentication, Google authentication, and GitHub authentication.
- Includes validation in authentication-related forms.

**Validation:** Implemented validation in create assignment form and authentication-related forms.

**JWT:** Utilizes JWT for authentication on private routes, creating and storing tokens client-side.

**Preview PDFs:** Shows a preview of each PDF with iframe on the submitted assignment page.

**Theme Customization:** Includes a theme toggling button to switch between light and dark themes, updating the full system theme based on user interaction.

**Spinner for Loading State:** Displays a spinner when data is in a loading state.

**Pagination:** Implements pagination on the all assignments page for better navigation and user experience.

These features provide users with a seamless and intuitive experience throughout the application, allowing them to create, view, update, and mark assignments efficiently.

## Technologies:

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Library for routing in React applications.
- **react-hook-form**: Library for managing form state in React.
- **react-datepicker**: Library for datepicker components in React.
- \*\*react-icons: Library for icon components in React.
- **react-helmet-async**: Library for managing document head tags in React applications.
- **sweetalert2**: Library for displaying modal dialogs in web applications.
- **Tailwind CSS**: Utility-first CSS framework used for styling.
- **HTML/CSS**: Standard markup and styling languages for web development.
- **JavaScript (ES6+)**: Programming language used for frontend logic.
- **axios**: Promise-based HTTP client for making requests to the backend.
- **react-bootstrap**: React implementation of Bootstrap components.
- **react-toastify**: Library for displaying toast notifications in React applications.
- **Node.js**: Runtime environment for running JavaScript on the server-side.
- **Express.js**: Web application framework for building APIs and handling server-side logic.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express apps.
- **jsonwebtoken (jwt)**: For generating and verifying JSON Web Tokens used for authentication.
- **cookie-parser**: Middleware for parsing cookies attached to the client request object.
- **MongoDB**: NoSQL database used for storing and managing data.
- **dotenv**: Module for loading environment variables from a .env file into process.env.

## Running Locally

To run **Thread Frenzy** locally, follow these steps:

### 1. Clone the Repository
- Open your terminal and run:
  ```bash
  git clone <repository-url>
  cd thread-frenzy
  ```

### 2. Set Up the Server
- Navigate to the server directory:
  ```bash
  cd server
  ```
- Install server dependencies:
  ```bash
  npm install
  ```
- Create a `.env` file in the server directory and add your environment variables (e.g., MongoDB URI, Stripe keys, Firebase credentials).
- Start the server:
  ```bash
  npm start
  ```

### 3. Set Up the Client
- Navigate to the client directory:
  ```bash
  cd ../client
  ```
- Install client dependencies:
  ```bash
  npm install
  ```
- Create a `.env` file in the client directory and add your environment variables (e.g., API endpoint, Firebase configuration).
- Start the client:
  ```bash
  npm start
  ```

### 4. Access the Application
- Open your browser and navigate to:
  ```bash
  http://localhost:3000
  ```
- The server should be running on:
  ```bash
  http://localhost:5000
  ```

