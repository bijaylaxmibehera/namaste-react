import React from 'react'
import ReactDOM from 'react-dom/client'

//1. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
// const parent = React.createElement("div", {id:"title"} , [
//     React.createElement("h1", {id:"heading1"}, "This is heading1."),
//     React.createElement("h2", {id:"heading2"}, "This is heading2."),
//     React.createElement("h3", {id:"heading3"}, "This is heading3."),
// ]);

//2. Create the same element using JSX
// const  jsxHeading = (
//    <div id="title">
//       <h1 id="heading1">This is heading1</h1>
//       <h2 id="heading2">This is heading2</h2>
//       <h3 id="heading3">This is heading3</h3>
//    </div>
// )

// Create a functional component of the same with JSX
// const HeadingComponent=()=>(
//    <div className="title">
//      <h1 id="heading1">This is heading1</h1>
//      <h2 id="heading2">This is heading2</h2>
//      <h3 id="heading3">This is heading3</h3>
//     </div>
// )

//Composition of Component(Add a component inside another)

// const TitleComponent = () => {
//   return <h1>Namaste React</h1>
// }

// const HeadingComponent = () => (
//   <div id='container'>
//     <TitleComponent />
//     <h1 id='heading'>React using functional component.</h1>
//   </div>
// )


//Create a Header Component from scratch using Functional Components with JSX
//Add a Logo on left
//Add a search bar in middle
//Add User icon on right
//Add CSS to make it look nice

const HeaderComponent = () =>{
    return (
        <div id='container'>
            <div className='left'>
                <img src='https://res.cloudinary.com/bijaylaxmibehera/image/upload/v1711117487/jwellery/brand-logo.png' id='brand-logo'/>
            </div>
            <div className='middle'>
                <input type='text' placeholder='Search something...'/>
                <button>Search</button>
            </div>
            <div className='right'>
                <img src='https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg' id='user-avatar'/>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeaderComponent />)
