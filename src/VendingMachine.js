import './VendingMachine.css';
import { NavLink } from "react-router-dom";

function VendingMachine() {
    return (
        <div className='VendingMachine'>
            <h1>VENDING MACHINE</h1>
            <table>
                <tr>
                    <td>
                        <img className="VendingMachine-img"
                            src="https://images.unsplash.com/photo-1575224526797-5730d09d781d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt="Vending Machine image">
                        </img>
                    </td>
                    <td>
                        <h1>What whould you like to eat?</h1>
                        <div>
                            <NavLink exact to="/soda">
                                Soda
                            </NavLink>                            
                        </div>
                        <div >
                            <NavLink exact to="/candy">
                                Candy
                            </NavLink>                            
                        </div>
                        <div>
                            <NavLink exact to="/chips">
                                Chips
                            </NavLink>                             
                        </div>
                    </td>
                </tr>
            </table>

            <div className="VendingMachine-img"> 
 
            </div>
        </div>
    )
}

export default VendingMachine;