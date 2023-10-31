import Node from "./node.mjs";
/// linkedList class

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // append to the start of the list
  //
  prepend(value) {
    // set the head to the new node,
    // and set the next element to the previous head
    this.head = new Node(value, this.head);
    this.size++;
  }
  // append to the end of the list
  //
  append(value) {
    let node = new Node(value);
    let current;
    /// if list is empty
    /// append the node to its head
    if (!this.head) {
      this.head = node;
    } else {
      // if its not empty
      // traverse to its last element
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      // then set it to the new node
      current.next = node;
    }
    // increment the size of the list, since we added a new element
    this.size++;
  }
  /// print the size of the list
  getSize() {
    return this.size;
  }
  /// get the first element of the list
  //
  getHead() {
    if (!this.head) {
      return "the list is empty";
    } else {
      return this.head;
    }
  }
  // get the last element of the list
  //
  getTail() {
    if (!this.head) return "the list is empty";
    let current = this.head;
    // traverse to the last element
    while (current.next) {
      current = current.next;
    }
    // return the last element
    return current;
  }
  /// get element at nth index
  //
  getAt(index) {
    if (!this.head) return "the list is empty";
    let counter = 0;
    let current = this.head;
    while (current) {
      if (counter === index) {
        return current;
      }
      counter++;
      current = current.next;
    }
  }
  // pop the last element
  // basically set the reference of the element before it to null
  pop() {
    // if empty return
    if (!this.head) return "the list is empty";
    // if one element only, set head to null
    if (!this.head.next) {
      this.head = null;
      this.size--;
      return;
    }
    // else, traverse and pop the last element
    let current = this.head;
    // temp variable to store the reference to the element before the last element
    let temp;
    // traverse to the last element
    while (current.next) {
      temp = current;
      current = current.next;
    }
    temp.next = null;
    this.size--;
  }
  // check if list contains a certain value
  //
  contains(value) {
    if (!this.head) return "the list is empty";
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  // find the index of a specific value
  find(value) {
    if (!this.head) return "the list is empty";
    let current = this.head;
    let counter = 0;
    while (current) {
      if (current.data === value) {
        return counter;
      }
      counter++;
      current = current.next;
    }
    return null;
  }
  /// print the list in string format
  //
  toString() {
    if (!this.head) return "the list is empty";
    let current = this.head;
    //( value ) -> ( value ) -> ( value ) -> null
    let str = "";

    while (current) {
      str += `(${current.data}) -> `;
      current = current.next;
    }
    str += "null";
    console.log(str);
    return str;
  }
  insertAt(value, index) {
    if (!this.head) return "the list is empty";
    let listSize = this.getSize();
    let counter = 0;
    let current, previous;
    const node = new Node(value);
    if (index > listSize || index < 0) {
      console.log("invalid index");
      return "invalid index";
    }
    // if set to first element
    if (index === 0) {
      this.head = new Node(value, this.head);
      return;
    }
    // implementation
    current = this.head;
    while (counter < index) {
      previous = current;
      counter++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  // remove element at nth index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      console.log("invalid index");
      return;
    }
    let current = this.head;
    let previous;
    let counter = 0;
    // remove the first element
    if (index === 0) {
      this.head = current.next;
    }
    while (counter < index) {
      counter++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.append(3);
myLinkedList.append(2);
myLinkedList.append(1);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.prepend(999);
myLinkedList.insertAt(99, 3);
myLinkedList.toString();
myLinkedList.removeAt(2);
myLinkedList.toString();
