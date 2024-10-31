// here heading is an object created by react or react element which is later convered to html that browser understands
const heading = React.createElement("h1", {
    "id": "heading" // these are called attributes
}, "Hello World! there"); // this is called children


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // when heading is rendered react creates an h1 tag and gives it to browser