import { NavLink } from "react-router-dom";

function Soda() {
    return (
        <div>
            <img
                src="https://images.unsplash.com/photo-1592892111425-15e04305f961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt="Coca Cola image">
            </img>
            <div className="button-div">
                <NavLink exact to="/">
                    Go Back
                </NavLink>                 
            </div>
        </div>
    )
}

export default Soda;