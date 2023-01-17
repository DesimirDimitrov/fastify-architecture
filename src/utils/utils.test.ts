import assert from 'node:assert'

describe('suite name', () => {
	it('foo', () => {
		assert.equal(Math.sqrt(4), 2)
	})

	it('bar', () => {
		expect(1 + 1).eq(2)
	})

	it('snapshot', () => {
		expect({foo: 'bar'}).toMatchSnapshot()
	})
})

test('Math.sqrt()', () => {
	expect(Math.sqrt(4)).toBe(2)
	expect(Math.sqrt(144)).toBe(12)
	expect(Math.sqrt(2)).toBe(Math.SQRT2)
})

test('JSON', () => {
	const input = {
		foo: 'hello',
		bar: 'world',
	}

	const output = JSON.stringify(input)

	expect(output).eq('{"foo":"hello","bar":"world"}')
	assert.deepEqual(JSON.parse(output), input, 'matches original')
})
