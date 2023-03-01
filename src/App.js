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
      <div className="App">
        <>
          {a ? (
            <>Loading...</>
          ) : (
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route
                path="/"
                element={
                  authenticated ? (
                    <>rgrgm{a}</>
                  ) : (
                    // <Navigate replace to="/login" />
                    <>fvfv</> // *** BO IT ON LOGIN PAGE IF LOGED IN REDIRECT TO HOME PAGE
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
