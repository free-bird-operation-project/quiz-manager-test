'use strict'

function validateParameters(element, attributes) {
	const hasElement = element !== undefined && element !== null
	const hasAttributes = attributes !== undefined && attributes !== null
	const isElementHTMLElement = element instanceof HTMLElement
	const isAttributesObject = typeof attributes === 'object'
	const isAttributesNotEmpty =
		hasAttributes && Object.keys(attributes).length !== 0

	const noElementMessage = 'Please provide an element.'
	const noAttributesMessage = 'Please provide attributes.'
	const elementIsNotHTMLElementMessage = `The provided element '${element}' is not an HTML element.`
	const attributesIsNotObject = `The provided attributes '${attributes}' is not an object.`
	const attributesIsEmpty = 'The provided attributes are empty.'

	const validationRules = [
		{ condition: !hasElement, message: noElementMessage },
		{ condition: !hasAttributes, message: noAttributesMessage },
		{
			condition: !isElementHTMLElement,
			message: elementIsNotHTMLElementMessage
		},
		{ condition: !isAttributesObject, message: attributesIsNotObject },
		{ condition: !isAttributesNotEmpty, message: attributesIsEmpty }
	]

	for (const validationRule of validationRules) {
		if (validationRule.condition) {
			console.error(validationRule.message)
			return false
		}
	}

	return true
}

export { validateParameters }
