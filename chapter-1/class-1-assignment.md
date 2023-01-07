### Assignment

# EMMET

Emmet is a plugin for many popular text editor that allow u to write HTML and CSS faster by using abbrevation to expand into full code.
ex: div.opps => <div className="oops"></div>

html =>

## Child >

- to add child we can use >
  - ex: ul>li\*3 =>

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

## Sibling +

- to create parallel elements
  - ex: div+p+ul>li\*3 =>

```html
<div></div>
<p></p>
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

## Climb-up ^

- inside nested u need to add element parallel to nested
  - ex: div+div>p>span+em

```html
<div></div>
<div>
  <p><span></span><em></em></p>
</div>
```

- where if need to climb up example u need p tag parallel to another p tag

  - ex: div+div>p>span+em^p

```html
<div></div>
<div>
  <p><span></span><em></em></p>
  <p></p>
</div>
```

## Multiplier \*

- With \* operator you can define how many times element should be outputted:
  - ex: ul>li\*5

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

## Attribute operators

- to add class and id
  - ex: div#header>div#footer.class1

```html
<div id="header">
  <div id="footer" class="class1"></div>
</div>
```

## Custom attributes

- ex:td[title="Hello world!" colspan=3]

```html
<td title="Hello world!" colspan="3"></td>
```

## Text: {}

- add text in tag
  - ex: a{Click me}

```html
<a href="">Click me</a>
```

## Shorthand

- ex:

1. .wrap>.content
2. ul>.item\*3

```html
1.
<div class="wrap">
  <div class="content"></div>
</div>

2.
<ul>
  <li class="item"></li>
  <li class="item"></li>
  <li class="item"></li>
</ul>
```

## lorem-generator

- p\*4>lorem

## More info?

Much more info is available in the [link](https://docs.emmet.io/abbreviations/syntax/)!

[Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

---

# Library vs Framework

`Main example:` I often use a house as a metaphor for web development concepts.

## library

A library is going to store and purchasing furniture for home.

### Technical Difference

When you use library, you are in charge of the flow . You are choosing when and where to call the library

## Framework

A framework, on the other hand, is like building a model home. You have a set of blueprints and a few limited choices when it comes to architecture and design. Ultimately, the contractor and blueprint are in control. And they will let you know when and where you can provide your input.

### Technical Difference

When you use framework, the framework is in charge of flow it provides place for you to plug your code

## Summary

- Frameworks and Libraries are both code written by someone else that helps you perform common tasks in a less verbose way (Eg: routing, fetching api etc)

- A framework inverts the control of the program. It tells the developer what they need. A library doesn’t. The programmer calls the library where and when they need it.
- The degree of freedom a library or framework gives the developer will dictate how “opinionated” it is.

---

# CDN => Content Delivery Network

- To increase the speed of servers
- A CDN (Content Delivery Network) is a system of distributed servers that deliver web content to users based on their geographic location. CDNs can improve the performance and availability of a website by serving content from servers that are closer to the user, reducing the time it takes for the content to be delivered.

---

# Why is React known as React?

- React was developed for applications that have constantly changing data.
- React is front-end framework or the `View in MVC` this means as the user clicks around and changes the app data , the view should `react` or change with those user events. User events being mouse,typing, submitting a form.

## MVC (Model View Controller) :

## ![Screenshot from 2022-12-29 12-28-10](https://user-images.githubusercontent.com/58848412/209915463-d38ae8aa-89b1-4d52-8b38-642c7cd7eade.png)

- MVC => Controller should not handle data logic request will first reciieved in controller from there it will call model and get data. and through view it will get presentation that is the view we will show in the screen.

##EXAMPLE: user wants to see list of cats he will hit server request and request will enter controller and controller ask modal to return cat data and the response was success controller will then ask view to get cat presentation and view will send html and return back to the user. if error response same thing will be applied.

![Screenshot from 2022-12-29 12-34-43](https://user-images.githubusercontent.com/95607047/209916040-7a05d072-d7e1-49b9-a434-e550aa674f43.png)

---

# What is crossorigin in script tag?

Cors => cross-origin resource sharing.

it's allow us to get data from other urls Ex: foo.com -> bar.com
we need to do this because browser implements same origin policy.

---

# What is diference between React and ReactDOM

React => it is used to create reusable ui components.
React-DOM => it is used render react components in the dom.

---

# What is difference between react.development.js and react.production.js files via CDN?

react.development.js => includes extra warning and error message that can help identify issues during the development process . It also provide additional debugging that can help identify problems in code.

react.production.js => on the other hand, is optimized for performance and is meant to be used in a production environment. It includes features such as minification and dead code elimination, which reduce the size of the file and improve its performance.

---

# What is async and defer? -

when web page is loaded two things happen html parsing and loading scripts.

-`<script /> =>` Browser will start with html parsing and execute line by line and when it come across script tag it pause it will start loading scripts via network and executes the script and it will again start html parsing.

- `<script async /> ` => Browser will start html parsing and execute line by line when its come across script tag it will start loading scripts via network and while executing scripts only html parser will be paused and it will start html parsing

- `<script defer /> ` => Browser will start html parsing and execute line by line when its come across script it will start loading scripts via netwoks and once the html parsing is done then only it will start to execute the scripts

---
