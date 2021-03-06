const { transform } = require('babel-core')

const conf = { plugins: ['syntax-jsx', './index.js'] }

describe('babel-plugin-remove-test-ids', () => {
  it('should remove the [data-test-id] attribute if present', () => {
    const jsx = '<Component data-test-id="test">Hello!</Component>;'
    const expected = '<Component>Hello!</Component>;'
    const { code } = transform(jsx, conf)
    expect(code).toEqual(expected)
  })

  it('should do nothing if [data-test-id] attribute is not present', () => {
    const jsx = '<Component content="something">Hello again!</Component>;'
    const { code } = transform(jsx, conf)
    expect(code).toEqual(jsx)
  })
})
