import React, { useState } from "react"

export default () => {
  const [inputText, setInputText] = useState("")
  const [response, setResponse] = useState("")

  // const handleSubmit = () => {}
  const handleSubmit = (event: React.FormEvent) => {
    setResponse(window.electron.sendInputText(inputText))
    event.preventDefault()
  }

  return (
    <div className="App">
      <h1> Hello, World! from React </h1>
      <form>
        <label htmlFor="input-text">Input text:</label>
        <input
          onChange={(event: React.ChangeEvent<{ value: string }>) =>
            setInputText(event.target.value)
          }
          value={inputText}
          type="text"
          id="input-text"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {response && response !== "" && (
        <>
          <h1>Response was:</h1>
          <p>{response}</p>
        </>
      )}
    </div>
  )
}
