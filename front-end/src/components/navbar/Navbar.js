import './Navbar.css'
import { Link } from "react-router-dom"

export default function Navbar(){
return( 
<nav className="nav">
    <CustomLink to="/" className="text-3xl hover:text-[color:--Celeste]">Show Room</CustomLink>
    <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
    </ul>
</nav>
)
}

function CustomLink({ to, children, ...props}){
    const path = window.location.pathname;

    return(
        <li className={path === to ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
            </li>
    )
}