type Start = 'S'
type Wall = '#'
type Stone = 'O'
type Machinery = 'M'
type Target = 'T'

function parseMaze(mazes: string[]) {
  const result = []
  for (const maze of mazes) {
      result.push(maze.split(''))
  }
  return result
}
