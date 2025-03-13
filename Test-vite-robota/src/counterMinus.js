export function setupCounterMinus(element, reset) {
    let counter = 0
    const setCounter = (count) => {
      counter = count
      element.innerHTML = `Minus ${counter}`
    }

    element.addEventListener('click', ()=> setCounter(counter - 1))
    setCounter(0)

    return setCounter;



}