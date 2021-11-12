import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <header className="header"> 
            <h1 >{title}</h1>     
            <button className="btn">Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task'
}

Header.prototype = {
    title : String.isRequired,
}

// const headingStyle = {
//     color: 'red'
// }

export default Header
