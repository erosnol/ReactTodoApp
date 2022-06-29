const Navbar = () => {
    return (
        <nav style={styles.navStyle}> 
            <h1>Goals App</h1>

            <ul>
                <li>Home</li>
                <li>Tasks</li>
            </ul>
        </nav>
     )
}

const styles = {
    navStyle: {
        display: 'flex',
        justifyContent: 'space-around',
        border: 'solid red 2px'
        
    }
}

export default Navbar