### 1. Is JSX madatory for React?
JSX is an extention syntax that allows writting HTML and javascript together easily in React and is used to create React Elements. These elements are then rendered to the ReactDOM. Each JSX element is just to make use of React easy and for calling React.createElement(component,props,...children) with less work. So anything that is done with JSX can also be done with just plain JS. So JSX is not mandatory but it is used for writting code using React.createElement.
```const sample=<h2>Hello</h2>```

### 2. Is ES6 mandatory for React?
ES6 is not mandatory for React but it is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and we should be familiar with some of the new features like: Classes, Arrow functions, variables (let, const). ES6 stands for ECMAScript6. ECMAScript was created to standardize Javascript, and ES6 is the 6th vaersion of ECMAScript, it was published in 2015.

### 3. How can I write comments in JSX?
JSX comments are written as follows:
```{/**/}``` - for single and multiline comments.

### 4. What is ```<React.Fragment></React.Fragment>``` and ```<></>```?
```<React.Fragment></React.Fragment>``` is a feature in React that allows use to reaturn multiple elements from a React Component by allowing us to group a list of children without adding extra nodes to the DOM. ```<></>``` is shorthand tag for React.Fragment . The only difference between them is that the shorthand version does not support the key attribute.
#### example
```return (``` <br/>
      ```<React.Fragment>```<br/>
      ```<Header/>```<br/>
      ```<Navigation/>```<br/>
      ```</React.Fragment>```<br/>
```)```<br/>

```return (``` <br/>
      ```<>```<br/>
      ```<Header/>```<br/>
      ```<Navigation/>```<br/>
      ```</>```<br/>
```)```

### 5. What is Virtual DOM?
- The virtual DOM is a light weight abstraction of the DOM(Document Object Model). We can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn't have ability to write the screen like real DOM.
- Virtual DOM is like a blue print of a machine that can do changes in the blueprint but those changes will not directly apply to the machine.
- Reconciliation is a process to compare and keep in sync the two files (real and virtual dom). Diffing algorithm is a technique of reconciliation which is used by React.

### 6. What is React Fiber?
React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter. The fiber reconciler, which became the default reconciler for React16 and above, is a complete rewrite of React's reconciliation algorithm to solve some long standing issues in React. Because Fiber is asynchronous, React can:
- pause, resume and restart rendering work on components as new updates come in.
- Reuse previously completed work and even abort it if not needed.
- Split work into chunks and prioritize tasks based on importance.

### 7. Why we need keys in React? When do we need keys in React?
A key is a special attribute we need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated or deleted. In other words, we can say that keys are unique identifier used to give an identity to elements in the lists. Keys should be given to the elements within the array to give the elements a stable identity.

#### example
```<li key={"0"}>0</li>```<br/>
```<li key={"1"}>1</li>```

### 8. Can we use index as keys in React?
Yes, we can use the index as keys, but it is not considered as a good practice to use them because the order of items may change. This can negatively impact performance and may cause issues with component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in usual order.

### 9. What is props in React? Ways to add.
Props stands for properties. Props are arguments passed into React Components. Props are used in React to pass data from one component to another (from a parent component to a child components). They are usefull when we wnat the flow of data in our app to be dynamic.

### 10. What is Config Driven UI?
Config Driven UIs are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application more dynamic. It is very common & basic approach to interact  with the user. It provides a generic interface to develop things which help our project scale well. It saves a lot of development time and effort. A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form validation, dropdown options or design changes.
