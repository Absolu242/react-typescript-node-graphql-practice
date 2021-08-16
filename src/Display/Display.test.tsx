import { render, fireEvent } from "@testing-library/react"
import DisplayText from "./Display"
import "@testing-library/jest-dom/extend-expect"

describe("Test DisplayText", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(<DisplayText />)
    console.log(baseElement.innerHTML)
    expect(baseElement).toBeInTheDocument()
  })
  it("receives input text", () => {
    const testuser = "testuser"
    const { getByTestId } = render(<DisplayText />)
    const input = getByTestId("user-input")
    fireEvent.change(input, { target: { value: testuser } })
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue(testuser)
  })
})
