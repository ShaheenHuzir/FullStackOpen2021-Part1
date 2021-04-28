import React, { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelect] = useState(0);
  
  const [points, setPoint] = useState(new Array(6).fill(0));

  console.log(points);


  console.log(selected);

  let voteCounter = () => {
    let vote = [...points];

    vote[selected] += 1;

    setPoint(vote);
}


  let generateRandom = () => {
setSelect(Math.floor(Math.random() * 6));

  }

  let highest = -1;

for (let i = 0; i < points.length; i++){
    if (points[i] > points[i - 1]) {
      highest= i;
    }
}
  
  return (
    <>
      <h1>Anecdote of the Day </h1>
    {anecdotes[selected]}<br></br><p>Votes: {points[selected]}</p>
    <div>
    <Button handleClick={generateRandom} name={"next Anecdote"} />
    <Button handleClick={voteCounter} name={"Vote"} />   
      </div>
      <div>
        <h2>Highest Voted</h2>
        {anecdotes[highest]}
    </div>  
     
  </>
)

}

let Button = ({ handleClick, name }) => {
  
  return (
    <>
      <button onClick={handleClick}>{name}</button>
    </>
  )

}

export default App;
