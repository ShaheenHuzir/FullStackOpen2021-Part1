import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let goodFunction = () => {
    let goodPoint = good;

    setGood(goodPoint + 1);
}

  
let neutralFunction = () => {
  let neutralPoint = neutral;

  setNeutral(neutralPoint + 1);
}
  

let badFunction = () => {
  let badPoint = bad;

  setBad(badPoint + 1);
}
  
let totalScore = (good*1) +( neutral *0)+ (bad*-1);
let voteCount = good + neutral + bad;
let averageScore = (totalScore) / (voteCount);
let positiveScore = (good / voteCount) * 100;
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button clickFunction={goodFunction} name={"Good"} />
      <Button clickFunction={neutralFunction} name={"Neutral"} />
      <Button clickFunction={badFunction} name={"Bad"} />
      <h2>Statistics</h2>
      {(good !== 0 || bad !== 0 || neutral !== 0) ?<>
       <Statistics text={"Good"} value={good} />
        <Statistics text={"Neutral"} value={neutral}/>
        <Statistics text={"Bad"} value={bad}/>
        <Statistics text={"All"} value={totalScore} />
        <Statistics text= {"Average"} value={averageScore}/>
        <Statistics text={"Positive"} value={positiveScore}/></>
        : <p>No Feedback Given</p>}
    </div>
  )
}

const Button = ({clickFunction,name}) => {
  return (
    <>
      <button onClick={clickFunction}>{name}</button>
    </>
  )
}


const Statistics = ({text,value}) => {
  
  return (
    <div>
      {text === "Positive" ? <p>{text}:{value} %</p> : <p>{text}:{value}</p>}
    </div>
  )
}


