# A Todos App #

A mini project to showcase the skills learnt on the software development course

Built a todos app using React, BEM, Sass, Firestore and Firebase as the BaaS with CRUD operations

### Design/Style ###

Designed with a clean modern UI utlizing three main colours.
Imported icons fron FontAwesome and styled to colour design palette.
Interaction is designated by a contrasting colour for more visual immediacy
e.g. checkbox and buttons are the same colour (actions)

### Functionality ###

Able to register as a User and subsequently Log in with functionality from Firebase

- created a registration and log in form that is displayed only by clicking a corresponding link
- used sign in/create user with email/password authentication from Firebase
- createContext/useContext utilised for storing user info to use throught app

To store a user's todo(data) used Firestore and each user is assigned their own document
in the collection DB, with nested document and sub/collection pattern.

- wrote Firestore rules so that only authenticated users can log out/in and ONLY view their OWN data.

A User can update a todo via:

- text input field
- click the checkbox to show the todo as complete, which is shown with a text line-through
- DELETE a todo

All todo CRUD interactions are performed in a useEffect with async/await callback functions to fetch
the data from database and displayed as a list to the user.

Added react-toastify module to change browser alert function 

Navigation of the app is performed with Routes provided by react-router module


VISIT:  https://tonylubin.github.io/todos-app/

To use app either register or use details below:

email: example@example.com

password: password
