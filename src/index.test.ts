import {process} from './index.js'

describe('Package name', () => {
  describe('process', () => {
    it('should succeed on input', () => {
      const input = {data: 'testString'}
      const result = process(input)
      expect(result).toEqual('test-string')
    })
  })
})
