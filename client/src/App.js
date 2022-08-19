import React, { useEffect, useState} from 'react'

function App() {

const [backendData, setBackendData] = useState([{}])

useEffect(() => {
  fetch("/api").then(
    response => response.json()
    ).then(
    data => {
    setBackendData(data)
  })
}, [])

console.log(typeof backendData)

  return(
  <div className='first'>
          <h4>{JSON.stringify(backendData)}</h4>
    
  </div>
   
  )
}

export default App