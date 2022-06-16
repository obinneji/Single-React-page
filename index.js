// let heading = document.createElement("h1")
// heading.textContent= "hello world"
// heading.className = 'header'
// document.getElementById("root").appendChild(heading)
// console.log(heading)



// const page =( <div>
// <h1 className= " header"> This is JSX</h1>
// <p>this is a paragraph</p>
// </div>)


// // console.log(page)

// const navbar= (
// <nav>
//     <h1>Website</h1>
//     <ul>
//         <li>Pricing</li>
//         <li>About</li>
//         <li>Contact</li>
//     </ul>
// </nav>
// )



function TemporaryName(){
    return(
        <div>
        <img src="react-logo.png" className ="logo" />
        <h1>Fun Fact about React</h1>
        <ul>
            <li> Was first released in 2013</li>
            <li>was originally creates by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>is maintained by Facebook</li>
            <li>Powers thousand of enterprise apps, including mobile apps.</li>
        </ul>
    </div>
    )
}
function Header(){
    return (
        <header>
        <nav className = "navbar">
        <img src= "react-logo.png" width = '40px'/>
        <ul className ="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
        </header>
    )
}
function Footer(){
    return (
        <footer>
           <small> @ 2022  Chibuzor obinneji. All right reserved</small>
        </footer>
    )
}
 function Body(){
     return( 
     <>
        <h1>Reasons Why I'm learning React</h1>
        <ol>
            <li>This is the most popular Js library, so i  cna be a front-end developer</li>
            <li>I can get a job </li>
        </ol>
        </>
     )
 }
function Page(){
    return(
        <div>
        <Header />
        <Body />
        <Footer />
        </div>
        
    )
}




ReactDOM.render(<Page />, document.getElementById("root")) 


