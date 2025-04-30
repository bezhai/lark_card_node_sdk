import { BaseClass } from '../common/json';

// 基础类
class Animal extends BaseClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    super();
    this.name = name;
    this.age = age;
  }

  makeSound(): string {
    return '动物叫声';
  }
}

// 继承类
class Dog extends Animal {
  breed: string;
  toys: string[];

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
    this.toys = [];
  }

  makeSound(): string {
    return '汪汪汪！';
  }

  addToy(toy: string) {
    this.toys.push(toy);
  }
}

// 多层嵌套类
class TreeNode extends BaseClass {
  value: string;
  children: TreeNode[];
  parent: TreeNode | null;

  constructor(value: string) {
    super();
    this.value = value;
    this.children = [];
    this.parent = null;
  }

  addChild(child: TreeNode) {
    this.children.push(child);
    child.parent = this;
  }

  getPath(): string {
    const path = [this.value];
    let current: TreeNode | null = this.parent;
    while (current) {
      path.unshift(current.value);
      current = current.parent;
    }
    return path.join(' -> ');
  }
}

// 复杂数据结构类
class School extends BaseClass {
  name: string;
  students: { [key: string]: Animal[] };
  classes: string[];
  principal: { name: string; office: { building: string; room: number } };

  constructor(name: string) {
    super();
    this.name = name;
    this.students = {};
    this.classes = [];
    this.principal = { name: '', office: { building: '', room: 0 } };
  }

  addClass(className: string) {
    this.classes.push(className);
    this.students[className] = [];
  }

  addStudent(className: string, student: Animal) {
    if (!this.students[className]) {
      this.students[className] = [];
    }
    this.students[className].push(student);
  }
}

// 泛型容器类
class Container<T> extends BaseClass {
  private items: T[];
  private name: string;

  constructor(name: string) {
    super();
    this.name = name;
    this.items = [];
  }

  add(item: T) {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }

  getName(): string {
    return this.name;
  }
}

describe('序列化测试', () => {
  describe('继承测试', () => {
    let dog: Dog;
    let serializedDog: string;
    let deserializedDog: Dog;

    beforeEach(() => {
      dog = new Dog('旺财', 3, '柴犬');
      dog.addToy('骨头');
      dog.addToy('球');
      serializedDog = dog.serialize();
      deserializedDog = Dog.deserialize(serializedDog) as Dog;
    });

    test('应该正确序列化和反序列化基本属性', () => {
      expect(deserializedDog.name).toBe('旺财');
      expect(deserializedDog.age).toBe(3);
      expect(deserializedDog.breed).toBe('柴犬');
      expect(deserializedDog.toys).toEqual(['骨头', '球']);
    });

    test('应该保持方法功能', () => {
      expect(deserializedDog.makeSound()).toBe('汪汪汪！');
    });

    test('应该保持类型信息', () => {
      expect(deserializedDog instanceof Dog).toBe(true);
      expect(deserializedDog instanceof Animal).toBe(true);
    });
  });

  describe('多层嵌套和循环引用测试', () => {
    let root: TreeNode;
    let child1: TreeNode;
    let child2: TreeNode;
    let grandChild: TreeNode;
    let serializedTree: string;
    let deserializedTree: TreeNode;

    beforeEach(() => {
      root = new TreeNode('root');
      child1 = new TreeNode('child1');
      child2 = new TreeNode('child2');
      grandChild = new TreeNode('grandChild');

      root.addChild(child1);
      root.addChild(child2);
      child1.addChild(grandChild);

      serializedTree = root.serialize();
      deserializedTree = TreeNode.deserialize(serializedTree) as TreeNode;
    });

    test('应该正确保持树结构', () => {
      expect(deserializedTree.value).toBe('root');
      expect(deserializedTree.children).toHaveLength(2);
      expect(deserializedTree.children[0].value).toBe('child1');
      expect(deserializedTree.children[1].value).toBe('child2');
      expect(deserializedTree.children[0].children[0].value).toBe('grandChild');
    });

    test('应该正确保持父子关系', () => {
      const deserializedGrandChild = deserializedTree.children[0].children[0];
      expect(deserializedGrandChild.getPath()).toBe('root -> child1 -> grandChild');
    });
  });

  describe('复杂数据结构测试', () => {
    let school: School;
    let serializedSchool: string;
    let deserializedSchool: School;

    beforeEach(() => {
      school = new School('动物学校');
      school.principal = {
        name: '狮子王',
        office: { building: 'A栋', room: 101 }
      };

      school.addClass('一年级');
      school.addClass('二年级');
      school.addStudent('一年级', new Dog('小白', 1, '拉布拉多'));
      school.addStudent('一年级', new Dog('小黑', 2, '哈士奇'));
      school.addStudent('二年级', new Dog('小黄', 2, '金毛'));

      serializedSchool = school.serialize();
      deserializedSchool = School.deserialize(serializedSchool) as School;
    });

    test('应该正确序列化基本属性', () => {
      expect(deserializedSchool.name).toBe('动物学校');
      expect(deserializedSchool.classes).toEqual(['一年级', '二年级']);
      expect(deserializedSchool.principal).toEqual({
        name: '狮子王',
        office: { building: 'A栋', room: 101 }
      });
    });

    test('应该正确序列化学生数据', () => {
      const grade1Students = deserializedSchool.students['一年级'] || [];
      expect(grade1Students).toHaveLength(2);
      expect(grade1Students[0] instanceof Dog).toBe(true);
      expect(grade1Students[0].name).toBe('小白');
      expect(grade1Students[1].name).toBe('小黑');
    });
  });

  describe('泛型测试', () => {
    describe('Dog容器测试', () => {
      let dogContainer: Container<Dog>;
      let serializedContainer: string;
      let deserializedContainer: Container<Dog>;

      beforeEach(() => {
        dogContainer = new Container<Dog>('狗狗容器');
        dogContainer.add(new Dog('小灰', 2, '边牧'));
        dogContainer.add(new Dog('小花', 1, '泰迪'));

        serializedContainer = dogContainer.serialize();
        deserializedContainer = Container.deserialize(serializedContainer) as Container<Dog>;
      });

      test('应该正确序列化容器属性', () => {
        expect(deserializedContainer.getName()).toBe('狗狗容器');
        expect(deserializedContainer.getItems()).toHaveLength(2);
      });

      test('应该正确序列化容器中的对象', () => {
        const items = deserializedContainer.getItems();
        expect(items[0] instanceof Dog).toBe(true);
        expect(items[0].name).toBe('小灰');
        expect(items[0].breed).toBe('边牧');
        expect(items[1].name).toBe('小花');
        expect(items[1].breed).toBe('泰迪');
      });

      test('应该保持对象方法', () => {
        expect(deserializedContainer.getItems()[0].makeSound()).toBe('汪汪汪！');
      });
    });

    describe('Number容器测试', () => {
      let numberContainer: Container<number>;
      let serializedContainer: string;
      let deserializedContainer: Container<number>;

      beforeEach(() => {
        numberContainer = new Container<number>('数字容器');
        numberContainer.add(1);
        numberContainer.add(2);
        numberContainer.add(3);

        serializedContainer = numberContainer.serialize();
        deserializedContainer = Container.deserialize(serializedContainer) as Container<number>;
      });

      test('应该正确序列化基本类型', () => {
        expect(deserializedContainer.getName()).toBe('数字容器');
        expect(deserializedContainer.getItems()).toEqual([1, 2, 3]);
      });
    });
  });
}); 