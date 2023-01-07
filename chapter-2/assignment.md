# What is `NPM`?

- Npm (short for node package manager) is a package manager for javascript programming language.
- It is a default manager for js runtime environment Node.js.
- npm helps manage the installation and removal of packages (libraries and tools) that are used in your code.
- npm is a command-line tool that is installed with Node.js and is available on any computer that has Node.js installed.

---

# What is `Parcel/Webpack`

## Parcel

is a web application bundler that is easy to use and requires minimal configuration. It can take in code written in various languages (such as HTML, CSS, JavaScript) and bundle them into a single file (or a set of files) that can be served to the web browser.

## Webpack

is a web application bundler, but it is generally more powerful and flexible than parcel .It allows you to define complex transformations that can be applied to your code, and can also be extended with a wide range of plugins.However, this added flexibility comes with a trade-off, as Webpack requires more configuration and can be more difficult to set up and use than Parcel.

Both Parcel and Webpack can be used to bundle code written in languages like JavaScript, but Webpack is generally more popular for this use case, as it has a wider range of features and is more widely used in the community.

---

# What is `.parcel-cache`

- Parcel caches everything it builds to disk. If you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran. Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, and granularly invalidates the cache when something changes. For example, if you change a configuration file, all of the source files that rely on that configuration will be rebuilt.

- By default, the cache is stored in the .parcel-cache folder inside your project. You should add this folder to your .gitignore (or equivalent) so that it is not committed in your repo. You can also override the location of the cache using the --cache-dir CLI option.

- Caching can also be disabled using the --no-cache flag. Note that this only disables reading from the cache – a .parcel-cache folder will still be created.

---

# What is `npx`

- A package can be executable without installing the package. It is an npm package runner so if any packages aren’t already installed it will install them automatically.

- In npx you can create a react app without installing the package:
  `npx create-react-app myApp`
  This command is required in every app’s life cycle only once.

- Npx is a tool that use to execute packages.

- Packages used by npx are not installed globally. You don’t have to worry about for pollution in the long term.

---

# - What is difference between `dependencies` vs `devDependencies`

The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.

- Some good examples of dependencies which would be required at runtime include React, Redux, Express, and Axios.

- Some good examples of when to install devDependencies would be Nodemon, Babel, ESLint, and testing frameworks like Chai, Mocha, Enzyme, etc…

---

# What is Tree Shaking

- Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

- It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

- In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

---

# What is Hot Module Replacement?

- As you make changes to your code, Parcel automatically rebuilds the changed files and updates your app in the browser. By default, Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR). HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things in your code.

- CSS changes are automatically applied via HMR with no page reload necessary. This is also true when using a framework with HMR support built in, like React (via Fast Refresh), and Vue.

---

# List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

- Dev-server.
- Hot module Replacement
- Lazy mode
- Development target
- Caching
- HTTPS
- File watcher
- Auto install

## Hot module Replacement

when a file change parcel will reload the page for it to reflect in web but some case small changes it will do hot module replacement and make changes

# Lazy mode

while running we dont need for all file to vuild so if we add lazy `parcel 'pages/*.html' --lazy` parrcel will defer files till the page is loaded.

# Caching

- Parcel caches everything it builds to disk. If you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran. Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, and granularly invalidates the cache when something changes. For example, if you change a configuration file, all of the source files that rely on that configuration will be rebuilt.

---

# What is `.gitignore`? What should we add and not add into it?

.gitignore is a file that is used to specify patterns for files that should be ignored by Git when you commit code to a repository. When you run the git add command, Git will check the .gitignore file to see if any of the files being added match a pattern specified in the file. If a file matches a pattern, Git will not add it to the repository, and it will remain untracked.

There are a few common types of files that are usually added to .gitignore:

Build artifacts: These are files that are generated during the build process of your project, and are not meant to be checked into the repository. Examples include compiled code, minified assets, and generated documentation.

Operating system files: These are files that are specific to a particular operating system, and are not relevant to the project itself. Examples include .DS_Store on macOS and Thumbs.db on Windows.

Sensitive information: It is generally a good idea to avoid committing sensitive information, such as passwords, API keys, and other credentials, to the repository. You can add patterns for these types of files to .gitignore to prevent them from being accidentally committed.

It is important to note that .gitignore only applies to untracked files. If you have already committed a file to the repository and later add it to .gitignore, Git will continue to track the file. You will need to manually remove the file from the repository using the git rm command.

---

# What is the difference between `package.json` and `package-lock.json`

The main difference between package.json and package-lock.json is that package.json specifies the dependencies of the project at a high level, while package-lock.json specifies the exact versions of all the dependencies and their dependencies, including transitive dependencies.

When you run npm install, npm will check if a package-lock.json file exists. If it does, npm will use the exact versions of the dependencies specified in the package-lock.json file, rather than using the version ranges specified in package.json. This ensures that the exact same versions of the dependencies are installed every time, which can be useful for reproducing builds and for ensuring that different environments (e.g., development, staging, production) have the same dependencies.

It is generally a good idea to commit both package.json and package-lock.json to version control, as they provide valuable information about the dependencies of the project. However, you should only modify package.json manually, as changes to package-lock.json will be overwritten the next time npm install is run.

---

# Why should I not modify `package-lock.json`?

You should generally not modify package-lock.json because it is meant to be a snapshot of the exact dependencies that were installed for your project. This file is generated automatically based on the contents of package.json and the versions of packages that are installed.

It is generally a good practice to let the package manager handle updating and modifying package-lock.json, so that you don't have to worry about making mistakes that could cause issues with your dependencies.

---

# What is `node_modules` ? Is it a good idea to push that on git?

node_modules is a directory that is created when you run npm install or yarn install in your project. It contains all of the packages and their dependencies that are listed in your package.json file.

Instead of committing the node_modules directory to your repository, you should include a package.json file that lists your project's dependencies, and then use a package manager like npm or yarn to install the dependencies when you set up the project on a new machine. This will ensure that you have the correct versions of all the necessary packages, without cluttering up your repository with unnecessary files.

---

# What is the `dist` folder?

The dist folder (short for "distribution") is a directory that is used to store the built version of a project, ready for distribution or deployment. The contents of the dist folder are the files that will be deployed to a production environment, or distributed to users.

The structure and contents of the dist folder can vary depending on the type of project you are building, and the build process that you are using. For example, a web application built with a JavaScript framework like React or Angular might include compiled JavaScript code, HTML files, and other static assets like images and fonts in the dist folder.

---

# What is `browserlists`

browserslist is a configuration file that allows you to specify the target browser and node versions for your project. It is used by various tools such as Autoprefixer, Babel, and eslint-plugin-compat to automatically determine the necessary browser support and polyfills needed for your code to work across different browsers and environments. You can specify the target browsers in the browserslist file using a number of different queries and configurations, such as by browser name, version range, or global usage statistics.

---

# ^ - caret and ~ - tilda in package.json

In package.json, the caret (^) and tilde (~) are used to specify version ranges for dependencies in your project.

The caret (^) indicates that any version that is compatible with the specified version (and possibly newer) is allowed. For example, ^1.2.3 would allow versions 1.2.3, 1.3.0, and 2.0.0, but not 0.9.9 or 3.0.0.

The tilde (~) is similar to the caret, but it only allows for patch version updates. For example, ~1.2.3 would allow versions 1.2.3, 1.2.4, but not 1.3.0 or 2.0.0.

Using either of these symbols helps to ensure that your project is using compatible versions of dependencies and can help prevent breaking changes from being introduced.
