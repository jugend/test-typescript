class MyMap<T> {
  private _map: { [key: string]: T } = {}

  setItem(key: string, value: T): void {
    this._map[key] = value
  }

  getItem(key: string): T {
    return this._map[key]
  }

  clear() {
    this._map = {}
  }

  printMap() {
    for (let key in this._map) {
      console.log(key, this._map[key])
    }
  }
}

const numberMap = new MyMap<number>()
numberMap.setItem('apples', 5)
numberMap.setItem('bananas', 10)
numberMap.printMap()
numberMap.clear()
numberMap.printMap()

const stringMap = new MyMap<string>()
stringMap.setItem('name', 'Max')
stringMap.setItem('age', '27')
stringMap.printMap()
