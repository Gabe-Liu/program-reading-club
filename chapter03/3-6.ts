{
  enum AnimalType {
    Cat = 'cat',
    Dog = 'dog'
  }
  class Animal {
    constructor(type: AnimalType, id: string) {
      this.type = type;
      this.id = id;
    }
    type: AnimalType;
    id: string;
    next: Animal = null;;
  }

  class Queue {
    constructor() {

    }

    private first: Animal;
    private last: Animal;
    size = 0;

    add(type: AnimalType, id: string): Queue {
      const node = new Animal(type, id)
      if (!this.first) {
        this.first = node;
        this.last = node;
      } else {
        this.last.next = node;
        this.last = node;
      }
      this.size++;
      return this;
    }
    remove(): Animal {
      if (this.first) {
        const itme = this.first;
        this.first = this.first.next;
        this.size--;
        return itme;
      } else {
        return null;
      }
    }
    peek(): Animal {
      return this.first || null;
    }
    isEmpty(): boolean {
      return this.first === null;
    }
    getArray(): number[] {
      const arr = [];
      let item = this.first;
      while (item) {
        arr.push(`${item.type}-${item.id}`);
        item = item.next;
      }
      return arr;
    }
  }

  class AnimalShelter {
    constructor() {

    }

    catQueue = new Queue();
    dogQueue = new Queue();
    allQueue = new Queue();

    enqueue(type: AnimalType): AnimalShelter {
      const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
      if (type === 'cat') {
        console.log('收容一隻貓', id)
        this.catQueue.add(type, id);
      } else {
        console.log('收容一隻狗', id)
        this.dogQueue.add(type, id);
      }
      this.allQueue.add(type, id);
      return this;
    }
    dequeueAny(): Animal {
      const animal = this.allQueue.remove();
      if (animal.type === AnimalType.Cat) {
        return this.dequeueCat();
      } else {
        return this.dequeueDog();
      }
      // return animal;
    }
    dequeueDog(): Animal {
      const luckyDog = this.dogQueue.remove();
      console.log('領養一隻狗', luckyDog.id)
      this.convertAllQueue(luckyDog);
      return luckyDog;
    }
    dequeueCat(): Animal {
      const luckyCat = this.catQueue.remove();
      console.log('領養一隻貓', luckyCat.id)
      this.convertAllQueue(luckyCat);
      return luckyCat;
    }
    convertAllQueue(animal: Animal): void {
      const temAllQueue = new Queue();
      let item = this.allQueue.remove();
      while (item.id !== animal.id) {
        temAllQueue.add(item.type, item.id);
        item = this.allQueue.remove();
      }
      // 跳過被領養的
      item = this.allQueue.remove();
      // 剩餘的移到temp
      while (item) {
        temAllQueue.add(item.type, item.id);
        item = this.allQueue.remove();
      }
      // 全部移回去
      let tempItem = temAllQueue.remove();
      while (tempItem) {
        this.allQueue.add(tempItem.type, tempItem.id);
        tempItem = temAllQueue.remove();
      }
    }
  }

  const animalShelter = new AnimalShelter();
  animalShelter
    .enqueue(AnimalType.Cat)
    .enqueue(AnimalType.Dog)
    .enqueue(AnimalType.Cat)
    .enqueue(AnimalType.Dog)
  console.log('allQueue', animalShelter.allQueue.getArray())

  animalShelter.dequeueDog();


  animalShelter
    .enqueue(AnimalType.Cat)
    .enqueue(AnimalType.Dog)

  animalShelter.dequeueDog();
  animalShelter.dequeueCat();

  console.log('allQueue', animalShelter.allQueue.getArray())
  console.log('dogQueue', animalShelter.dogQueue.getArray())
}