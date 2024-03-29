# A Todos App #

Built a todos/tasks app using React, BEM, Sass, Firestore and Firebase as the BaaS with CRUD operations for tracking of tasks. Each user must register/login to use the app.

<br>

---

<br>

<div align="center">
    <img src="./mytodos-app-gif-demo.gif" alt="todos app">
</div>

<br>

---

<br>

### Design/Style ###

<br>

Designed with a clean modern UI utlizing three main colours.
Imported icons fron FontAwesome and styled to colour design palette.
Interaction is designated by a contrasting colour for more visual immediacy
e.g. checkbox and buttons are the same colour (actions)
Responsive mobile first design

<br>

### Functionality ###

<br>

Able to register as a User and subsequently Log in with functionality from Firebase

- created a registration and log in form that is displayed only by clicking a corresponding link
- used `sign in/create user with email/password authentication` from Firebase
- used `updateProfile` for adding & displaying `displayName` as a greeting message
- `createContext/useContext` utilised for storing user info to use throught app
- `onauthstatechange` for obsevering current user status

To store a user's todo(data) used Firestore and each user is assigned their own document
in the collection DB, with nested document and sub/collection pattern.

- wrote Firestore rules so that only authenticated users can log out/in and ONLY view their OWN data.

A User can update a todo via:

- text input field (used React Hook - `useRef`, for DOM reference input value)  
- click the checkbox to show the todo as complete, which is shown with a text line-through
- DELETE a todo

All todo CRUD interactions are performed in a `useEffect` with `async/await` callback functions to fetch
the data from database and displayed as a list to the user.

Added `react-toastify` module to change browser alert function

Created a function to display a greeting based on the time of day e.g 'Good Evening'

Navigation of the app is performed with Routes provided by react-router v6 module

- use of `Navigate` & `usenavigate` for redirection
- created Private/protected route - user only view, redirects if a user isn't logged in

Error handling for authentication procedures by displaying `auth error code/message` to the user

<br>

---

<br>

VISIT: &nbsp; https://mytodosapp-4e40f.firebaseapp.com/

To use app either register or use details below:

email: &nbsp; `example@example.com`

password: &nbsp; `password`
