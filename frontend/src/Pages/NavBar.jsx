import React, { Component } from 'react';
import { NavLink ,Link} from 'react-router-dom';

const links = [
    { to: "/login", element: "Login" },
    { to: "/signup", element: "SignUP" },
    { to: "/", element: "Check the Attendance" },
    { to: "/markatt", element: "Mark Attendance" },
];

const activelink = { marginLeft: "10px", color: "brown", fontSize: "25px", textDecoration: "none", fontFamily: "cursive" };
const defaultlink = { marginLeft: "10px", color: "black", textDecoration: "none", fontFamily: "cursive" };
const mainstyle = { backgroundColor: "lightpink", width: "100%", display: "flex", justifyContent: "space-evenly", height: "50px", alignItems: "center", borderBottom: "1px solid black" };

class NavBar extends Component {
    
    handleLogout = () => {
        localStorage.removeItem("token");
    };
    render() {
        return (
            <div style={mainstyle}>
                {links.map((el, i) => {
                    return (
                        <div key={i}>
                            <NavLink to={el.to} style={({ isActive }) => {
                                return isActive ? activelink : defaultlink;
                            }}>{el.element}</NavLink>
                        </div>
                    );
                })}
                <button onClick={this.handleLogout}><Link to="/login">Logout</Link></button>
            </div>
        );
    }
}

export default NavBar;
