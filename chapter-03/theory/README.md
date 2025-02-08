### 1. What is JSX?
JSX stands for javascript XML. JSX allows us to write HTML elements in javascript and place them in the DOM without any createElement() and or appendChild() methods. JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements.
- Example using JSX :
``` const myElement = <h1>Hello, world!</h1>;```
```const root= ReactDOM.createRoot(document.getElementById('root'));```
```root.render(myElement);```
- Example without JSX :
``` const myElement= React.createElement('h1',{}, "Hello, world! without using JSX!"); ```
```const root=ReactDOM.createRoot(document.getElementById('root'));```
```root.render(myElement);```

### 2. Superpowers of JSX.
Using JSX, we can write markup inside javascript, providing us with a superpower to write logic and markup of a component inside a single .JSX file. JSX is easy to maintain and debug.

### 3. Role of type attribute in script tag? What options can I use there?
The type attribute specifies the type of the script. The type attribute identifies the content between the ```<script>``` and ```</script>``` tags. It has a default value which is "text/javascript".
#### types of attribute can be the following types:
- text/javascript : It is the basic standard of writting code inside the ```<script>``` tag.
#### syntax:
```<script type="text/javascript"></script>```
- text/ecmascript : This value indecates that the script is following the ECMAScript standards.
- module: This value tells the browser that the script is a module that can import or export other files or module inside it.
- text/babel: This value indecates that the script is a babel type and required babel to transpile it.
- text/typescript: As the name suggest the script is written in typescript.

### 4. ```{TitleComponent}``` vs ```{<TitleComponent/>}``` vs ```{<TitleComponent></TitleComponent>}``` in JSX

- ```{TitleComponent}``` : This value describes the TitleComponent as a javascript expression or a variable. The ```{}`` can embed a javascript expression or a variable inside it.
- ```<TitleComponent/>``` : This value represents a component that is basically returning some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the ```{</>}``` expression.
- ```<TitleComponent></TitleComponent>``` : These are equivalent only when ```<TitleComponent/>``` has no child components. The opening and closing tags are created to include the child components.
#### Example: 
 ```<TitleComponent>```
       ```<ChildComponent/>```
```</TitleComponent>```