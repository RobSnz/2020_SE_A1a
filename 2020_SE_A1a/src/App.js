import React, {useState} from "react";
import Tweet from "./tweet"

function App() {
  const [user, setUsers] = useState([
    {name: 'Ed', message: 'Hi'},
    {name: 'John', message: 'Hello'},
    {name: 'Rob', message: 'Hey'}
  ])

  return(
    <div className="app">
      {user.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
      <button></button>
    </div>
  );
}

export default App;