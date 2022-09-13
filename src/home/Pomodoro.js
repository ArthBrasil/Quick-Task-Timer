import React from 'react'
import { useState, useEffect } from 'react';






export default function Pomodoro() {
  
  const [timerOn, setTimerOn] = useState(false)
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplaymessage] = useState(false);
  const [resetTimer, setResetTimer] = useState(false)
 

useEffect(() => {
  if (timerOn) {
  let interval = setInterval (() => {
    clearInterval(interval);
    
    if (seconds === 0 ){
    
      if ( minutes !== 0 ) {
        setSeconds(59) ; 
        setMinutes(minutes - 1)
      } else {
        let minutes = displayMessage ? 24 : 4;
        let seconds = 59 ;

        setSeconds(seconds);
        setMinutes(minutes);
        setDisplaymessage(!displayMessage);
      } 
      }else {
        setSeconds(seconds - 1)
    }
    if (resetTimer){
      setMinutes(25);
      setSeconds(0);
      setTimerOn(false)
      setDisplaymessage(false)
      setResetTimer(false)
    }
  }, 1000,resetTimer)}
 
}, [timerOn,seconds,resetTimer]);



const timerMinutes = minutes < 10 ? `0${minutes}` : minutes ;
const timerSeconds = seconds < 10 ? `0${seconds}` : seconds ;



  return (
    <div className='pomodoro'>
       {displayMessage && <div className='message'>Take a break ! <br/> new session starts in :</div>}
      
        <div className='timer'>{timerMinutes} : {timerSeconds}</div>
       
      <title>{timerMinutes} : {timerSeconds}</title>

    <div className='controls'>
    <button className='playBtn' onClick={() => setTimerOn(true) }> <i className="fa fa-play fa-5x" /> </button>
    <button className='pauseBtn' onClick={() => setTimerOn(false)}><i className="fa  fa-pause fa-5x" /></button>
    <button className='resetBtn' onClick={() => setResetTimer(true)} ><i className="fa fa-stop fa-5x" /></button>
    </div>
 
        </div>

)
}
