import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {

    const onClick = _ => console.log('text')

    return (
        <header className="header"> 
            <h1 >{title}</h1>     
            <Button color='green' text="Add" onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task'
}

Header.prototype = {
    title : PropTypes.String,
}

// const headingStyle = {
//     color: 'red'
// }

export default Header
