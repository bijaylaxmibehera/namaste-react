// const heading = React.createElement('h1', {id:"heading1"}, 'Hello world using React!')
const parent=React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {id:"heading1"}, "Heading1"),
        React.createElement("h2", {id:"heading2"}, "Heading2"),
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {id:"heading1"}, "Heading1"),
        React.createElement("h2", {id:"heading2"}, "Heading2"),
    ]),
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)
