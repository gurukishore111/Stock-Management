import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './config'

export const NavBar = ({user}) => {

    const signOut = () => {
        auth.signOut();
        localStorage.setItem('StockAdmin',null)
    }

    return (
        <div className="navbar">
       <div className="container flex">
           <h1 className="logo"> <Link  to="/">Stock Manager.</Link></h1>
           <nav>
                    <ul>
                        { user === null ? " " :
                            <li><button className="btn btn-dark" onClick={signOut}>Signout</button></li>
                        }
               </ul>
           </nav>
       </div>
    </div>
    )
}
