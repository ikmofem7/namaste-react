# Is JSX mandatory for React?

- JSX is not mandatory for react, but it is highly recommended as it makes it easier to read and write react components.

- Jsx is a syntax extension that allows you to write html-like elements in javascript code.

- It's easy to write reusable components.

# Is ES6 mandatory for React?

- No Es6 is not mandatory for react . React can be used with plain js as well as other languages that can transpile to js, such as Typescript.

# {TitleComponent} vs <TitleComponent/> vs <TitleComponent></TitleComponent> in JSX

## {TitleComponent}

- it is used to render component as expression.

## <TitleComponent/>

- it is self closing syntax for rendering component without children

## <TitleComponent></TitleComponent>

- is the traditional JSX syntax for rendering a component with children or props.

# How can I write comments in JSX?

- In JSX, comments are written using curly braces {} and the JavaScript comment syntax /\* \*/ or //.

# What is <React.Fragment></React.Fragment> and <></> ?

- Fragment is the way to create JSX.Element that does not rendered on the dom.

- it is used to wrap adjacent jsx element.

- React can't render multiple elements directly because it uses a virtual DOM that can only map a single element to a virtual node. Wrapping multiple elements in a <React.Fragment> or <b> allows React to treat them as a single element and map them to a single virtual node, which enables the component to render correctly.

# Virtal Dom

- It is virtual representation of a DOM with us.

- Overall, the Virtual DOM is an important concept in React and other JavaScript libraries that allows for efficient and performant updates to the actual DOM, making the web pages more responsive, less resource-intensive and the overall user experience better.

# Reconciliation

- React use reconciliation as diff algorithm to compare trees (DOM and Virtual DOM) and it find out what need to be updated and change the small portion of it. It just rerender small portion.

- The algorithm react uses to diff one tree with another

The process of Reconciliation in React works in two steps:

<b>Virtual DOM Diffing:</b> React compares the new virtual tree with previous virtual tree, using a process called `diffing`.React uses a heuristic algorithm to identify the minimal number of changes that need to be made, so that it can update the actual DOM as efficiently as possible.

<b>DOM Update:</b> Once React has determined what changes need to be made, it updates the actual DOM by making the minimal number of changes necessary to bring it in line with the virtual representation. This process is called "commit."

# Why we need keys in React? When do we need keys in React?

- suppose we have multiple divs and we need add new div to particular node in the react will re-render all the node in the dom and if we give key for individual div it will understand we are new div and it will only render the particular div

Tracking Elements: React uses keys to keep track of the elements in a list, so that it can efficiently update the DOM when the list changes. Without keys, React would have to re-render the entire list every time an item is added or removed, which can be slow and inefficient.

Maintaining State: When a list is re-rendered, React uses the keys to match the previous elements with the new elements, so that it can maintain the state of the elements. This allows React to update the DOM efficiently, by only changing the elements that have changed.

Avoiding Confusion: Keys help React to differentiate between elements in a list, even if they have the same content. Without keys, React would have no way to tell which element has changed

# What is React Fiber?

Incremental rendering: React Fiber allows React to render a component incrementally, rather than all at once. This means that React can start rendering a component before it has all the information it needs, and then continue rendering as more information becomes available. This can greatly improve the performance of an application, especially when dealing with large or complex components.

Prioritization: React Fiber allows React to assign different priorities to different updates, so that it can prioritize more important updates over less important ones. This allows React to handle user interactions and animations more smoothly, as it can give more resources to the most important updates.

Pause and resume: React Fiber allows React to pause and resume the rendering of a component, so that it can be interrupted if a more important update becomes available. This allows React to handle user interactions and animations more smoothly, as it can give more resources to the most important updates.

Ability to abort: React Fiber allows React to abort the rendering of a component if it is no longer needed. This can help to improve the performance of an application by avoiding unnecessary work.

Better error handling: React Fiber provides a more robust and predictable error handling mechanism, which makes it easier to debug and fix issues in an application.

# Can we use index as keys in React?

- It is possible to use the index of an element as a key in React, but it is generally not recommended.
- When React renders a list of elements, it uses the keys to match the previous elements with the new elements, so that it can maintain the state of the elements. If the index of an element is used as a key, React will assume that the element's position in the list will not change. However, if the list changes and the elements get reordered or removed, React will not be able to match the previous elements with the new elements, and it will not be able to maintain the state of the elements. This can lead to unexpected behavior, such as elements getting re-rendered unnecessarily, or elements losing their state.

- Additionally, using index as key can cause problems if the list is sorted or filtered, since the index of an element may change.

# What is props in React? Ways to

In React, props (short for properties) are a way to pass data from a parent component to a child component. Props are used to customize the behavior or appearance of a child component, and they are passed down from the parent component to the child component as a JavaScript object.

Here are a few ways to use props in React:

<b>Passing Data</b>: Props can be used to pass data from a parent component to a child component. For example, a parent component might pass a user's name and age to a child component, which then renders the information in a specific format.

<b>Customizing Appearance</b>: Props can be used to customize the appearance of a child component. For example, a parent component might pass a color prop to a child component, which then uses that prop to set the color of its text or background.

<b>Controlling Behavior</b>: Props can be used to control the behavior of a child component. For example, a parent component might pass a isVisible prop to a child component, which then uses that prop to determine whether or not to render certain elements.

<b>Communicating between components</b>: Props can be used to communicate between components, i.e. passing information from a parent component to a child component and then to a grandchild component and so on.

Props are a fundamental concept in React, and they are used to pass data and customize the behavior and appearance of child components. They are passed down from parent to child components, and they can be accessed and used within the child component.

# What is a Config Driven UI ?

A config-driven UI, also known as a "configurable UI" or "configurable user interface," is a type of user interface that is designed to be easily customized and configured by non-technical users through a configuration file, rather than through code.

A config-driven UI allows users to customize the look and feel of the interface by adjusting settings in a configuration file, rather than requiring them to write code or make changes to the source code of the application. This can be especially useful in situations where non-technical users need to make changes to the interface, such as in a content management system or a marketing platform.

A config-driven UI can include features such as:

Defining the layout and the widgets to be displayed on a page
Control the behavior and interactions of widgets
Defining the styles and themes of the interface
Creating and customizing forms
Customizing the validation rules for data input
By using a config-driven approach, the development team can provide a powerful set of features and flexibility, while also allowing non-technical users to make customizations to the interface, without having to rely on developers.

In summary, a config-driven UI is a type of user interface that is designed to be easily customized and configured through a configuration file, rather than through code. It allows non-technical users to make changes to the look and feel of the interface, and it can be especially useful in situations where non-technical users need to make changes to the interface.
