import { NavLink } from "react-router-dom";
function Candy() {
    return (
        <div> 
            <img
                src="https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                alt="Candy">
            </img>
            <div className="button-div">
                <NavLink exact to="/">
                    Go Back
                </NavLink>                 
            </div>            
        </div>
    )
}

export default Candy;