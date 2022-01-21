function counter(number, seconds) {
    
    seconds = seconds * 1000

    const counterElement = document.getElementById('counter-element')
    let counterNumber = 0
    counterElement.innerText = counterNumber
    
    function setTimeOutFunction() {

        counterElement.innerText = counterNumber
        counterNumber++
        
        if (counterNumber <= number) {
            
            setTimeout(setTimeOutFunction, seconds)
        
        } else {

            clearTimeout(setTimeOutFunction)
        } 
    }

    setTimeout(setTimeOutFunction, seconds)
}

window.onload = () => counter(45, 0.1)