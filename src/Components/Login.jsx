import React, { useState } from "react"
import { auth } from "../Config/Config"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("")
        setPassword("")
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }
  return (
    <form onSubmit={handleSignIn} className="body-font relative text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
            Login
          </h1>
        </div>
        <div className="mx-auto w-5/6 sm:w-3/5 md:w-2/5 lg:w-1/3">
          <div className="-m-2 flex flex-wrap">
            <div className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="text-sm leading-7 text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="password"
                  className="text-sm leading-7 text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div>
            <div className="w-full p-6">
              <button
                type="submit"
                className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login
