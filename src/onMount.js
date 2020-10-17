
import React, { useState, useEffect } from 'react';

const OnMount = () => {
  const [message, setMessage] = useState('Hi there, how are you?');

  useEffect(() => {
    console.log('trigger use effect hook');

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 1000)
  }/*[]*/)

  return (
      <>
      <h1>{message}</h1>
      <button onClick={()=>setMessage("Thats great to hear")}>useState</button>
      </>
    );
};

export default OnMount;