import React, { useState } from "react"

const DisplayText = () => {
  const [txt, setTxt] = useState("")
  const [msg, setMsg] = useState("")
  const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value)
  }

  const onClickShowMsg = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setMsg(`Welcome to React testing ${txt}`)
  }
  return (
    <div>
      <form>
        <div>
          <label>Enter your name</label>
        </div>
        <div>
          <input
            data-testid='user-input'
            type='text'
            value={txt}
            onChange={onChangeTxt}
          />
        </div>
        <button data-testid='input-submit' onClick={onClickShowMsg}>
          Show Message
        </button>
        <div>
          <label data-testid='final-msg'>{msg}</label>
        </div>
        <div>this is just a test entry</div>
      </form>
    </div>
  )
}

export default DisplayText
