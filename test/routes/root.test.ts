describe('route', async () => {
	it('GET `/`', async ({fastify}) => {
		const response = await fastify.inject({
			method: 'GET',
			url: '/',
		})

		expect(response.statusCode).toEqual(404)
	})

	it('GET `/api`', async ({fastify}) => {
		const response = await fastify.inject({
			method: 'GET',
			url: '/api',
		})

		expect(response.json()).toEqual({message: "success"})
	})
})
