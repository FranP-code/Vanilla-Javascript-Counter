function counter(number, seconds, e, button) {
    
    e.preventDefault()

    seconds = seconds * 1000

    const counterElement = document.getElementById('counter-element')
    let counterNumber = 0

    button.disabled = true

    function setTimeOutFunction() {

        counterNumber++
        counterElement.innerText = counterNumber
        
        if (counterNumber < number) {
            
            button.disabled = true
            setTimeout(setTimeOutFunction, seconds)
        
        } else {

            button.disabled = false
            clearTimeout(setTimeOutFunction)
            return true
        } 
    }

    setTimeout(setTimeOutFunction, seconds)
}

window.onload = () => {
    
    const button = document.getElementById("form-button")
    const counterElement = document.getElementById('counter-element')
    
    counterElement.innerText = 0
    
    const buttonFunction = (e) => {

        const formElement = document.getElementById('form')
        const thingToCount = formElement.children[0].children[1].value
        const seconds = formElement.children[1].children[1].value

        if (!thingToCount || !seconds) {

            alert('Fill all inputs!')
            return
        }

        counter(thingToCount, seconds, e, button)
    }

    button.addEventListener("click", buttonFunction)
}