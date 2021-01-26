import React, {useEffect, useState} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'
// import {BrowserRouter as Router, Route} from 'react-router-dom';

let socket;

const Chat = ({location}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = "http://localhost:5000"

  useEffect(() => {
    const {room, name} = queryString.parse(location.search);
    // console.log(room, name)
    setName(name);
    setRoom(room);
    socket = io(ENDPOINT)
    console.log(socket)
  }, [ENDPOINT, location.search])


  console.log(name, room)
  
  return(
    <h1>Hello</h1>
  );
}

export default Chat