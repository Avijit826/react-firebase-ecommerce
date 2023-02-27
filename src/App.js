import "./App.css"
import { addDoc, collection } from "firebase/firestore"
import { firestore } from "./Config/Config"
import { useRef } from "react"

const handleSubmit = (testdata) => {
  const ref = collection(firestore, "test_data") // Firebase creates this automatically
  let data = { testData: testdata }
  try {
    addDoc(ref, data)
  } catch (err) {
    console.log(err)
  }
}

function App() {
  const dataRef = useRef()
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }
  return (
    <div className="App">
      <form onSubmit={submithandler}>
        <input type="text" ref={dataRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App
