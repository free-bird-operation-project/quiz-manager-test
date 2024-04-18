'use strict'

import { JSDOM } from 'jsdom'
import { setAttributes } from '../set-attributes.js'
import { validateParameters } from '../validate-parameters.js'

jest.mock('../validate-parameters.js', () => ({
	validateParameters: jest.fn()
}))

describe('setAttributes', () => {
	beforeEach(() => {
		const dom = new JSDOM('<!DOCTYPE html>')
		global.window = dom.window
		global.document = window.document
		global.HTMLElement = window.HTMLElement
	})

	afterEach(() => {
		document.body.innerHTML = ''
	})

	it('should return true if isValidParameter is true', () => {
		validateParameters.mockReturnValue(true)

		const element = document.createElement('div')
		const result = setAttributes(element, { name: 'value' })

		expect(validateParameters).toHaveBeenCalled()
		expect(result).toBe(true)
		expect(element.getAttribute('name')).toBe('value')
	})

	it('should return false if isValidParameter is false', () => {
		validateParameters.mockReturnValue(false)

		const element = document.createElement('div')
		const result = setAttributes(element, { name: 'value' })

		expect(validateParameters).toHaveBeenCalled()
		expect(result).toBe(false)
		expect(element.getAttribute('name')).toBe(null)
	})

	it('should not set attributes if isValidParameter is false', () => {
		validateParameters.mockReturnValue(false)

		const element = document.createElement('div')
		setAttributes(element, { name: 'value', id: 'testId' })

		expect(validateParameters).toHaveBeenCalled()
		expect(element.getAttribute('name')).toBe(null)
		expect(element.getAttribute('id')).toBe(null)
	})

	it('should set multiple attributes if isValidParameter is true', () => {
		validateParameters.mockReturnValue(true)

		const element = document.createElement('div')
		const result = setAttributes(element, { name: 'value', id: 'testId' })

		expect(validateParameters).toHaveBeenCalled()
		expect(result).toBe(true)
		expect(element.getAttribute('name')).toBe('value')
		expect(element.getAttribute('id')).toBe('testId')
	})
})
