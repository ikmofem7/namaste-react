# What is the difference between Named Export, Default export and \* as export?

- Named exports allow exporting multiple values from a single module. Each named export has its own name, which is used as the identifier when importing.

- A default export allows a single value to be exported per module, without having to specify its name.

- An "\* as" export allows all exports of a module to be imported under a single name.

# What is the importance of config.js file

A config.js file is a common configuration file used to store settings and configuration information for an application. Its importance lies in the following aspects:

1. <b>Centralization:</b> It centralizes the configuration options for an application in one place, making it easier to manage and modify.

2. <b>Modularity:</b> It separates the configuration from the main code, making it easier to switch between different configurations for different environments (e.g. development, testing, production).

3. <b>Flexibility:</b> It allows for the application to be easily configured for different environments, such as local development, staging, or production, without modifying the code.

4. <b>Reusability:</b> It enables sharing of configuration options across multiple parts of the application, reducing duplication and increasing maintainability.

Overall, the config.js file plays a crucial role in the organization, maintenance, and scalability of an application.

# What are React Hooks?

- React Hooks are a feature in React that allow you to add state and other React features to functional components. Prior to the introduction of Hooks, state and other features were only available to class components. With Hooks, you can add state, use lifecycle methods, and manage effects in your functional components, making it easier to reuse code and avoid writing repetitive or complex code.

- React Hooks provide a more direct API to the React framework and make it easier to use state and other React features within your functional components. They simplify your code and allow you to write more readable and maintainable code. React Hooks also help to avoid complex class component hierarchies and make it easier to share stateful logic between components.

- Some of the commonly used React Hooks include useState, useEffect, and useContext, among others. They are a powerful tool for building efficient and scalable React applications and provide a more functional approach to writing React components.
