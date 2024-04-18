'use strict'

import { Hello } from './hello.js'

it('should true if called', () => {
	const result = Hello()
	expect(result).toBe(true)
})
