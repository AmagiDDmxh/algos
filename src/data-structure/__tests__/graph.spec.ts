import { Graph } from '../direct-graph'

describe('Graph', () => {
  it('should create graph', () => {
    const g = new Graph('a')
    expect(g).toBeDefined()
  })
})
