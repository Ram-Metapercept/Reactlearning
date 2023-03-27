import React, { useState } from 'react'
import Header from './Header';
import AddTask from "./AddTask"

function Home(props) {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <>
      {showHeader && <Header />}
      {showHeader ? null : <AddTask />}
    </>
  )
}

export default Home












