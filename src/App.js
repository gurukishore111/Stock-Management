import React, { useState, useEffect } from "react";
import StockList from "./components/StockList";
import uuidv4 from "uuid/v4";
import ShockEdit from "./components/StockEdit";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/login';
import { NavBar } from "./components/NavBar";
import Home from "./components/Home";
import Footer from './components/Footer';
import { auth } from "./components/config";

export const StocksContext = React.createContext();
const LocalStorageKey = "stockwithreact.Stocks";
function App() {
  const [seletedShockId, setseletedShockId] = useState();
  const [shocks, setShocks] = useState(sampleItems);
  const [user, setUser] = useState(null);

  const selectedShock = shocks.find(
    (shocks) => shocks.id === seletedShockId
  );
  const stockContentvalue = {
    handleStockDelete,
    handleStockAdd,
    handleStockSelect,
    handleStockChange,
  };
  function handleStockSelect(id) {
    setseletedShockId(id);
  }
  function handleStockAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      Department: "",
      instruction: "",
      ingredients: [{ id: uuidv4(), name: "", amount: "" }],
    };
    setseletedShockId(newRecipe.id);
    setShocks([...shocks, newRecipe]);
  }
  function handleStockDelete(id) {
    if (seletedShockId != null && seletedShockId === id) {
      setseletedShockId(undefined);
    }
    setShocks(shocks.filter((shocks) => shocks.id !== id));
  }
  useEffect(() => {
    const shocksJson = localStorage.getItem(LocalStorageKey);
    if (shocksJson) {
      setShocks(JSON.parse(shocksJson));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LocalStorageKey, JSON.stringify(shocks));
  }, [shocks]);

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  function handleStockChange(id, recipe) {
    const newShocks = [...shocks];
    const Index = newShocks.findIndex((r) => r.id === id);
    newShocks[Index] = recipe;
    setShocks(newShocks);
  }
  
  return (
    <StocksContext.Provider value={stockContentvalue}>
      <Router>
      <NavBar user={user} />
        <Switch>
          <Route path="/" exact>
            {user ? <Home/> : <Login /> }
          </Route>
          <Route path="/crud">
          <div >
            <StockList shocks={shocks} />
            {selectedShock && <ShockEdit shocks={selectedShock} />}
          </div>
          </Route>
        </Switch>
        <Footer />
      </Router>
     
    </StocksContext.Provider>
  );
}

const sampleItems = [
  {
    id: 1,
    name: "Beverages",
    Department: "bottom Floor",
    ingredients: [
      {
        id: 1,
        name: "coffee/tea",
        amount: "1000 pls",
      },
      {
        id: 2,
        name: " juice",
        amount: "1000 pls",
      },
      {
        id: 3,
        name: "soda",
        amount:"1000 pls"
      }
    ],
  },
  {
    id: 2,
    name: "Dry/Baking Goods",
    Department: "2 Floor",
    ingredients: [
      {
        id: 1,
        name: "cereals",
        amount: "1000 pkg",
      },
      {
        id: 2,
        name: " sugar",
        amount: "1000 pkg",
      },
      {
        id: 3,
        name: "mixes",
        amount:"1000 pkg"
      }
    ],
  },
 
];
export default App;
