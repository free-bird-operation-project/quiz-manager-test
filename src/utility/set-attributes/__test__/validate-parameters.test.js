'use strict'

import { JSDOM } from 'jsdom'
import { validateParameters } from '../validate-parameters.js'

describe('validateParameters', () => {
	beforeEach(() => {
		const dom = new JSDOM('<!DOCTYPE html>')
		global.window = dom.window
		global.document = window.document
		global.HTMLElement = window.HTMLElement
	})

	afterEach(() => {
		document.body.innerHTML = ''
	})

	it('should return true if element and attributes are valid', () => {
		const element = document.createElement('div')
		const attributes = {
			class: 'element',
			id: 'element'
		}

		const result = validateParameters(element, attributes)

		expect(result).toBe(true)
	})

	describe('hasElement', () => {
		let element
		let attributes

		beforeEach(() => {
			attributes = {
				class: 'element',
				id: 'element'
			}
		})

		it('should return false if there is no element provided', () => {
			const result = validateParameters(element, attributes)
			expect(result).toBe(false)
		})

		it('should log an error in the console if there is no element provided', () => {
			const spyConsoleError = jest
				.spyOn(console, 'error')
				.mockImplementation(() => {})

			validateParameters(element, attributes)

			expect(spyConsoleError).toHaveBeenCalledWith('Please provide an element.')
			expect(spyConsoleError).toHaveBeenCalledTimes(1) // Ensure console.error is called once
			spyConsoleError.mockRestore()
		})
	})

	describe('hasAttributes', () => {
		let element
		let attributes

		beforeEach(() => {
			element = document.createElement('div')
		})

		it('should return false if there are no attributes provided', () => {
			const result = validateParameters(element, attributes)
			expect(result).toBe(false)
		})

		it('should log an error in the console if there are no attributes provided', () => {
			const spyConsoleError = jest
				.spyOn(console, 'error')
				.mockImplementation(() => {})

			validateParameters(element, attributes)

			expect(spyConsoleError).toHaveBeenCalledWith('Please provide attributes.')
			expect(spyConsoleError).toHaveBeenCalledTimes(1)
			spyConsoleError.mockRestore()
		})
	})

	describe('isElementHTMLElement', () => {
		describe('isElementHTMLElement', () => {
			let element
			let attributes

			beforeEach(() => {
				element = 'not an element'
				attributes = {
					class: 'element',
					id: 'element'
				}
			})

			it('should return false if the provided element is not an HTML element', () => {
				const result = validateParameters(element, attributes)
				expect(result).toBe(false)
			})

			it('should log an error in the console if the provided element is not an HTML element', () => {
				const spyConsoleError = jest
					.spyOn(console, 'error')
					.mockImplementation(() => {})

				validateParameters(element, attributes)

				expect(spyConsoleError).toHaveBeenCalledWith(
					`The provided element '${element}' is not an HTML element.`
				)
				expect(spyConsoleError).toHaveBeenCalledTimes(1)
				spyConsoleError.mockRestore()
			})
		})
	})

	describe('isAttributesObject', () => {
		let element
		let attributes

		beforeEach(() => {
			element = document.createElement('div')
			attributes = 'not an object'
		})

		it('should return false if the provided attributes are not an object', () => {
			const result = validateParameters(element, attributes)
			expect(result).toBe(false)
		})

		it('should log an error in the console if the provided attributes are not an object', () => {
			const spyConsoleError = jest
				.spyOn(console, 'error')
				.mockImplementation(() => {})

			validateParameters(element, attributes)

			expect(spyConsoleError).toHaveBeenCalledWith(
				`The provided attributes '${attributes}' is not an object.`
			)
			expect(spyConsoleError).toHaveBeenCalledTimes(1)
			spyConsoleError.mockRestore()
		})
	})

	describe('isAttributesNotEmpty', () => {
		let element
		let attributes

		beforeEach(() => {
			element = document.createElement('div')
			attributes = {}
		})

		it('should return false if the provided attributes are empty', () => {
			const result = validateParameters(element, attributes)
			expect(result).toBe(false)
		})

		it('should log an error in the console if the provided attributes are empty', () => {
			const spyConsoleError = jest
				.spyOn(console, 'error')
				.mockImplementation(() => {})

			validateParameters(element, attributes)

			expect(spyConsoleError).toHaveBeenCalledWith(
				'The provided attributes are empty.'
			)
			expect(spyConsoleError).toHaveBeenCalledTimes(1)
			spyConsoleError.mockRestore()
		})
	})
})
