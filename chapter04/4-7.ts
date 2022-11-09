{
  class Project {
    constructor(name: string) {
      this.name = name;
    }
    dependencies: number;
    chidren: Project[] = [];
    name: string;
  }
  class Graph {
    constructor() {

    }
  }
  const list = ['a', 'b', 'c', 'd', 'e'];
  const dependList = [
    ['a', 'd'],
    ['f', 'b'],
    ['b', 'd'],
    ['f', 'a'],
    ['d', 'c']
  ];
}