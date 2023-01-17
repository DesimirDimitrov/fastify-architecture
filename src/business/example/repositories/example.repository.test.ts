import { Example } from '@prisma/client'
import { prismaMock } from '../../../modules/database/testing'
import { ExampleRepository } from './example.repository'

const repository = new ExampleRepository()

test('should create new example', async () => {
  const example = {
    id: 1,
    name: 'example'
  } as Example

  prismaMock.example.create.mockResolvedValue(example)

  await expect(repository.create(example)).resolves.toEqual(example)
})
