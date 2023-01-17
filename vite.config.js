// @ts-check

/// <reference types="vitest" />

import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		globals: true,
		setupFiles: 'test/setup.ts',
		coverage: {
			reporter: ['text', 'json', 'html'],
		},
	},
})
