'use strict'

import { renderTab } from './tab-render.js'
import { removeTab } from './tab-remove.js'

class Tab {
	constructor() {
		this.config = {
			parent: document.body.querySelector('main'),
			attributes: {
				class: 'tab',
				id: 'tab'
			}
		}
		this.exist = document.getElementById(this.config.attributes.id)
	}

	render() {
		const tabNotExist = !this.exist
		const renderTab = renderTab(this.config)

		tabNotExist ? (renderTab, true) : false
	}

	remove() {
		const tabExist = this.exist
		const removeTab = removeTab(this.config.attributes.id)

		tabExist ? (removeTab, true) : false
	}
}

export { Tab }
