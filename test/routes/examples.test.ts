describe('route', async () => {
	it('GET `/examples`', async ({fastify}) => {
		const response = await fastify.inject({
			method: 'GET',
			url: '/api/examples',
		})

		expect(response.json()).toEqual(
			{"data":[],"meta":{"totalItems":0,"currentPage":1,"limit":5,"totalPages":0}}
		)
	})
})
