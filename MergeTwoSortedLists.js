// Массивы

list1 = [1, 2, 4, 8, 9];
list2 = [1, 3, 4, 7, 5];

function TwoSortedLists(list1, list2) {
  return list1.concat(list2).sort();
}

console.log(TwoSortedLists(list1, list2));

// Связанные списки

function TwoSortedLists(list1, list2) {
  let newHead = null;
  let current = null;
  let next = null;

  while (list1 != null || list2 != null) {
    if (list1 != null && list2 != null) {
      if (list1.val < list2.val) {
        next = list1;
        list1 = list1.next;
      } else {
        next = list2;
        list2 = list2.next;
      }
    } else if (list1 != null) {
      next = list1;
      list1 = list1.next;
    } else if (list2 != null) {
      next = list2;
      list2 = list2.next;
    }
    if (newHead == null) {
      newHead = next;
      current = newHead;
    } else {
      current.next = next;
      current = current.next;
    }
  }

  return newHead;
}
