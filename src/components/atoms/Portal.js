import { createPortal } from 'react-dom'
import { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

// In the portal, we are directly mutating the DOM and appending an empty div to the end of the body.
// This is done for our modals to ensure that they open in an independant context
function Portal({ children, wrapperId = 'react-portal-wrapper' }) {
  const [wrapperElement, setWrapperElement] = useState(null)

  // we want to do things synchronously, before dom gets repainted, so using useLayoutEffect here
  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    // we need to ensure that the dynamically added empty div is removed from the DOM when the ReactPortal component is unmounted
    let systemCreated = false

    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true
      element = createWrapperAndAppendToBody(wrapperId)
    }
    setWrapperElement(element)

    return () => {
      // removes the dynamically created DOM element when the Portal component is unmounted or when its wrapperId prop changes.
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])

  // wrapperElement state will be null on the very first render.
  if (wrapperElement === null) return null

  return createPortal(children, wrapperElement)
}

export default Portal

function createWrapperAndAppendToBody(wrapperId) {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

Portal.propTypes = {
  children: PropTypes.node,
  wrapperId: PropTypes.string,
}
