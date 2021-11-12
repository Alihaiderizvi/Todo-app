import React,{useState} from 'react'
import Header from './components/Header'; 
import Tasks from './components/Tasks';

 function App() {  
    const [tasks, setTasks] = useState([
        {
            id: 1, 
            text: "Go to Gym",
            day: 'Feb 5th at 2:30p',
            reminder: 'true'
        },
        {
            id: 2, 
            text: "Doctor App.",
            day: 'Feb 6th at 2:30p',
            reminder: 'false'
        },
        {
            id: 3, 
            text: "Wash the clothes",
            day: 'Feb 8th at 2:30p',
            reminder: 'false'
        }
    ]);
     
    //Delete Task 

    const deleteTask = id => {
        setTasks( tasks.filter ( task =>   task.id !== id))
    }

     return (   
         <div className="container">
             <Header /> 
             {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : <h3>No Task to show!</h3>}
         </div>
     );
 }

 export default App;