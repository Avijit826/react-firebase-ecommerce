import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom"
import React, { useEffect, useState } from "react"
import { auth } from "./Config/Config"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Home from "./Components/Home"
import Header from "./Components/Header"

function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [a, setA] = useState(true)
  async function getUser() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        setAuthenticated(true)
        setA(false)
      } else {
        setAuthenticated(false)
        setA(false)
      }
    })
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <Router>
      <Header/>
      <div className="App">
        <>
          {a ? (
            <>Loading...</>
          ) : (
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Home/>} />
              <Route
                path="/user"
                element={
                  authenticated ? (
                    <>authenticated</>
                  ) : (
                    // <Navigate replace to="/login" />
                    <>NOT - authenticated</> // *** BO IT ON LOGIN PAGE IF LOGED IN REDIRECT TO HOME PAGE
                  )
                }
              />
            </Routes>
          )}
        </>
      </div>
    </Router>
  )
}

export default App
