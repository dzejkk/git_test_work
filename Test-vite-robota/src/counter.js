export function setupCounter(element, reset) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `plus ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)

  return setCounter
}
