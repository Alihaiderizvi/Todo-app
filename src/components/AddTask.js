import {useState} from 'react';


const AddTask = ({onAdd}) => {
    
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('please add task') 
            return
        }

        onAdd({text,day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input 
                    type="text" 
                    value={text}
                    placeholder='Add Task'
                    onChange={(e)=> setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day and time</label>
                <input 
                    type="text"
                    value={day} 
                    onChange={(e)=> setDay(e.target.value)} 
                    placeholder='Add Day and time'
                />
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input 
                    type="checkbox"
                    checked = {reminder}
                    onChange={(e)=> setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type='submit' value={reminder} value='Save Task' className="btn btn-block"/>
        </form>
    )
}

export default AddTask
