const {add} = require('./index.js')

describe('add', () => {
  it('adds 2 numbers', async () => {
    expect(add(1, 2)).toEqual(3);
  })
})
