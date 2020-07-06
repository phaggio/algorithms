import LinkedList from '../data-structure/LinkedList';

const addTwoNumbers = (l1, l2) => {

  let currentL1 = l1.head;
  let currentL2 = l2.head;
  let carryOver = false;
  let newList = new LinkedList();

  while (currentL1 !== null | currentL2 !== null | carryOver === true) {
    let carry = carryOver === true ? 1 : 0;
    let l1Data = currentL1 !== null ? currentL1.val : 0;
    let l2Data = currentL2 !== null ? currentL2.val : 0;
    let sum = l1Data + l2Data + carry;
    if (sum > 9) {
      newList.insert(sum % 10);
      carryOver = true;
    } else {
      newList.insert(sum);
      carryOver = false;
    }

    currentL1 = currentL1 ? currentL1.next : null;
    currentL2 = currentL2 ? currentL2.next : null;
  }
  return newList;
}

export default addTwoNumbers