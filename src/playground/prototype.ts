interface SuperType {
  name: string
}

interface SuperTypeConstructor {
  new (name: string): SuperType
}
function SuperType(this: SuperType, name: string) {
  this.name = name
}

// const superType = new SuperType('name')

