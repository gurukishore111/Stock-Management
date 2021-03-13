import React from 'react'
import {  useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const LocalStorageKey = "stockwithreact.Stocks";
    const [items,setitems] = useState();
    useEffect(() => {
        const elements = JSON.parse(localStorage.getItem(LocalStorageKey))
        setitems(elements) 
    }, [])
    console.log(items)
    return (
        <div className="container">
            <button style={{marginTop:"12px",float:"right",marginBottom:"12px"}} className="btn btn-primary" onClick={() =>window.print()}>Print Shocks</button>
             <table className="movies">
              <tr>
                <th>Items</th>
                <th>Quantity</th>
                <th>Categories</th>
                 <th style={{textAlign:"center"}}>Update Items</th>
              </tr>
              {items && items.map(items => (
                  items.ingredients.map(item => (
                    <tr key={items._id}>
                    <td>
                      {item.name}
                      </td>
                      <td>{item.amount}</td>
                      <td>{items.name}</td>
                    <td style={{textAlign:"center"}}><Link to="/crud">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                          </Link>
                    </td>
                   {/*  <td>{items.rating}</td> */}
                    </tr>
                ))
            ))}
        </table>
        </div>
    )
}

export default Home
