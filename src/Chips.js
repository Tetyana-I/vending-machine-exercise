import { NavLink } from "react-router-dom";
function Chips() {
    return (
        <div> 
            <img
                src="https://images.unsplash.com/photo-1599490659101-963323d1da50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Chips">
            </img>
            <div className="button-div">
                <NavLink exact to="/">
                    Go Back
                </NavLink>                 
            </div>            
        </div>
    )
}

export default Chips;



