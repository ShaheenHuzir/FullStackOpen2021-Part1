import React from 'react';

const Header = ({ id, name }) => {

  
    return (
       <h1 key={id}>{name}</h1>                                     )
  }
  
  const Total = ({part}) => {
    let sum = 0;
    let arr = [...part];
    console.log(arr,"data");
    sum = arr.reduce((sum, item) => {
      console.log(sum + item.exercises);
      return sum + item.exercises;
    },0);
    
    return(
      <p><em>Number of exercises  {sum}</em></p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p >
        {props.name} {props.exercises}
      </p>    
    )
  }
  
  const Content = ({part}) => {
  return (
    <div>
      {part.map(item => 
       <Part key={item.id} name={item.name} exercises={item.exercises}/>
     )} 
    </div>
    )
  }



const Course = () => {
        const courses = [
             {
               name: 'Half Stack application development',
               id: 1,
               parts: [
                 {
                   name: 'Fundamentals of React',
                   exercises: 10,
                   id: 1
                 },
                 {
                   name: 'Using props to pass data',
                   exercises: 7,
                   id: 2
                 },
                 {
                   name: 'State of a component',
                   exercises: 14,
                   id: 3
                 },
                 {
                   name: 'Redux',
                   exercises: 11,
                   id: 4
                 }
               ]
             }, 
             {
               name: 'Node.js',
               id: 2,
               parts: [
                 {
                   name: 'Routing',
                   exercises: 3,
                   id: 1
                 },
                 {
                   name: 'Middlewares',
                   exercises: 7,
                   id: 2
                 }
               ]
             }
           ]
         return (
          <div>
             {courses.map(course => { return (
               <div key={course.id}>
               <Header id={course.id} name={course.name} />
                 <Content  part={course.parts} />
                 <Total  part={course.parts}/>
                </div> )
             })}
            </div> 
             
         )
       }

export default Course;
