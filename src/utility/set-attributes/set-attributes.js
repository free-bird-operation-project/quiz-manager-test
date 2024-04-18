'use strict'

import { validateParameters } from './validate-parameters.js'

function setAttributes(element, attributes) {
	const isValidParameter = validateParameters(element, attributes)
	const setAttributes = () => {
		Object.entries(attributes).forEach(([key, value]) => {
			element.setAttribute(key, value)
		})
	}

	return isValidParameter ? (setAttributes(), true) : false
}

export { setAttributes }
