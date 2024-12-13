import assert from 'node:assert'
import { describe, test } from 'node:test'
import { sum } from '../src/lib/sum.js'

describe('sum', () => {
  test('adds 1 + 1 to equal 2', () => {
    const result = sum(1, 1)
    assert.equal(result, 2)
  })
})
