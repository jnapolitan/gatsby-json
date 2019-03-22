<h1 align="center">
  Programs Module Coding Challenge
</h1>

<p><b>The challenge:</b> Generate a site using Program metadata from a local JSON file and store
User activity in a persistent state in local storage. The entire app should live entirely in the
browser, with no back-end or external APIs.</p>

1.  **Installation instructions:**

    Clone the repository and then run `npm install` and `npm start`.


1.  **Technologies used:**

    * GatsbyJS
    * GraphQL


1.  **Evaluation components (and how they were approached):**

    * <b>Work off a wireframe to create a user friendly UX:</b> Use Gatsby's built in CSS module functionality to isolate styles and ensure design intricacies were met. Leverage global styles where possible.
    * <b>Create navigation that allows for back/forwards and up/down movememnt within a hierarchical structure:</b> Ensure clean, predictable data upon Gatsby node creation to leverage for up/down movement on the program overview index page and back/forward navigation between program sections. 
    * <b>Design of data structures to allow for:</b>
      * Rendering of an interface based on an object model - Use GraphQL to retrieve relevant data and pass as props to React components rendered in the UI.
      * Tracking of a User's progress / activity - Generate a unique activity ID using the activity's program ID, section order (after section node creation when order data is clean and predictable), and the activity index. For example, an activity ID of 132 indicates program 1, section 3, activity 2. When a text activity is marked as completed or a question is answered, set a relevant value at that activity's localStorage key (either "read" for a text activity or the selected answer for a question activity). Use this data to check if all of a section's activities have a value at their localStorage key when rendering program sections on the Program Overview page, and add a check mark on that program section if so.
    * <b>Knowldge of front-end frameworks, tooling, and language flavors:</b> This project uses GatsbyJS, a framework based on React, as well as some additional npm packages to keep code DRY.
    * <b>Ability to create a clean, well-organized, and testable codebase:</b> This was my first time using Gatsby and GraphQL, but I did my research around conventions and best practices as I went along and followed them to the best of my ability. 


