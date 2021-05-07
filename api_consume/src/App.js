import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function getUser() {
  try {
    const res = await axios.get('https://api.github.com/users/GabrielZanin1997');
    console.log(res);

    return JSON.stringify(res);
  } catch (error) {
    console.error(error);
  }
}

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
   getUser().then((data) => {
     setUser(data);
   });
  },[])

  return (
    <p>{user}</p>
  );
}

export default App;
