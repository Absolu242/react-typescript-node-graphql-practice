import React, { useState } from "react"

export default function Display() {
  const [txt, setTxt] = useState("")
  const [msg, setMsg] = useState("")

  const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value)
  }

  const onClickShowMsg = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setMsg(`welcome to react testing ${txt}`)
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
      </form>
    </div>
  )
}
