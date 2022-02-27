 function Navbar(props) {

    return(
        <nav className="navbar">
        <h1>LetsGrowMore</h1>
        <div className="btn">
            <button onClick={props.getTeam}>Get Users</button>
        </div>
        </nav>
    );
 }

   export default Navbar;