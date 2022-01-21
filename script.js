function counter(number, seconds, e) {
    
    e.preventDefault()

    seconds = seconds * 1000

    const counterElement = document.getElementById('counter-element')
    let counterNumber = 0
    counterElement.innerText = counterNumber

    const button = document.getElementById("form-button")
    
    function setTimeOutFunction() {

        counterElement.innerText = counterNumber
        counterNumber++
        
        if (counterNumber <= number) {
            
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
        const thingToCount = formElement.children[1].value
        const seconds = formElement.children[3].value

        counter(thingToCount, seconds, e)
    }

    button.addEventListener("click", buttonFunction)
}