import Calculator from "./class.js"

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const clearButtons = document.querySelector('[data-clear]')
const previousOperandText = document.querySelector('[data-previous]')
const currentOperandText = document.querySelector('[data-current]')


const cal = new Calculator(previousOperandText, currentOperandText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        cal.appendNumber(button.innerText)
        cal.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        cal.chooseOperation(button.innerText)
        cal.updateDisplay()
    })
})

equalsButtons.addEventListener('click', button => {
    cal.compute()
    cal.updateDisplay()
})

clearButtons.addEventListener('click', button => {
    cal.clear()
    cal.updateDisplay()
})
deleteButtons.addEventListener('click', button => {
    cal.delete()
    cal.updateDisplay()
})