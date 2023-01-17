// This file contains code that we reuse between our tests
import fastifyModule from 'fastify'
import fp from 'fastify-plugin'
import type {TestContext} from 'vitest'
import App from '../src/app.js'

// Fill in this config with all the configurations
// needed for testing the application
async function config() {
	return {}
}

// Automatically build and tear down our instance
async function build() {
	const app = fastifyModule()

	// Fastify-plugin ensures that all decorators
	// are exposed for testing purposes, this is
	// different from the production setup
	void app.register(fp(App), await config())

	return app
}

function isIntegration(ctx: TestContext) {
	// All tests inside the `test` folder are integration tests
	return ctx.meta.file?.name.startsWith('test')
}

function isFailed(ctx: TestContext) {
	return ctx.meta.result?.state === 'fail'
}

// Add fastify to the context
beforeEach(async (ctx) => {
	if (isIntegration(ctx)) {
		ctx.fastify = await build()
	}
})
// Tear down our app after we are done
afterEach(async (ctx) => {
	if (isIntegration(ctx) && !isFailed(ctx)) {
		return ctx.fastify.close()
	}
})
