import React from 'react'

const paths = [
  {path:"/BasicExamples", description:"Example: Buttons and basic titles with styled components"},
  {path:"/ExampleLoading", description:"Example: Loading Animation using keyuframes with styled Component "},
  {path:"/ExampleThemes", description:"Example: Dark/Base Theme using."},
  {path:"/ExampleList", description:"Example: List with styled components."},
  {path:"/ExampleForm", description:"Example: Forms with styled components"},
  {path:"/ExampleProduct", description:"Example: Simple Product listing with dynamic css"},
];

// List of posible pages. 
const root = () => {
  return (
    <div>
      <h2>Examples from Course:</h2>
      <ul>
        { 
          paths.map( (item) => {
            return <li><a href={item.path}>{item.description}</a></li>
          }
        )}
      </ul>
    </div>
  )
}

export default root;