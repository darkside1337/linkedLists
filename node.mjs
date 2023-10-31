// Node class
class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}
export default Node;

/*  temp = current
      if (counter === index) {
        current = new Node(value, temp)
        new Node(value, current.next);
      }
      next = current.next
      counter++;
      current = current.next;  */
