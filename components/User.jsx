import React from 'react'
// implementation of props which is passed as a argument inside component
function User(props) {
  return (
    <>
    <h1>I am {props.name} and  I like {props.fruit}</h1>
</>
  )
}
export default User