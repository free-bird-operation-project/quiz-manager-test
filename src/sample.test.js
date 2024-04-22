'use strict'

import { Hello, Hi } from './hello.js'

it('should true if Hello called', () => {
	const result = Hello()
	expect(result).toBe(true)
})

it('should true if Hi called', () => {
	const result = Hi()
	expect(result).toBe(false)
})
