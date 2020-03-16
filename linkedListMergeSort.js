const LinkedList = require('./linkedList');

function mSort(lst) {
    if (lst.length() <= 1) {
        return lst;
    }

    // find the middle of the linked list and create two new linked lists (left and right)
    const middle = Math.floor(lst.length() / 2);
    let left = new LinkedList();
    let right = new LinkedList();

    for (let i = 0; i < middle; i++) {
        if (left.length() === 0) {
            left.insertFirst(lst.findAt(i), i);
        } else {
            left.insertLast(lst.findAt(i), i)
        }
    } 

    for (let i = middle; i < lst.length(); i++) {
        if (right.length() === 0) {
            right.insertFirst(lst.findAt(i), i)
        } else {
            right.insertLast(lst.findAt(i), i);
        }
    }
    // pass the two new linked lists into mSort
    left = mSort(left);
    right = mSort(right);

    // pass left linked list, right lniked list, and original link list into merge
    return merge(left, right, lst);
};

function merge(left, right, lst) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    // loop through until there are 1 or more items left in BOTH left and right arrays
    while (leftIndex < left.length() && rightIndex < right.length()) {
        // check if the item in the left array is less than item in right array
        if (left.findAt(leftIndex) < right.findAt(rightIndex)) {
            // if it is, replace the value in the array with left item
            lst.insertAt(left.findAt(leftIndex), outputIndex);
            // Increment outputIndex and leftIndex
            outputIndex++;
            leftIndex++;
        } else {
            // else replace the value in the array with the right item
            lst.insertAt(right.findAt(rightIndex), outputIndex);
            // Increment outputIndex and rightIndex
            outputIndex++;
            rightIndex++;
        }
    }

    // After looping, if there is still an item in the left array, add it to the array
    for (let i = leftIndex; i < left.length(); i++) {
        lst.insertAt(left.findAt(i), outputIndex);
        // Increment outputIndex
        outputIndex++;
    }

    // After looping if there is still an item in the right array, add it to the array
    for (let i = rightIndex; i < right.length(); i++) {
        lst.insertAt(right.findAt(i), outputIndex);
        // Increment outputIndex
        outputIndex++;
    }
    return lst;
};

let lst = new LinkedList();
lst.insertFirst(21)
lst.insertLast(1)
lst.insertLast(26)
lst.insertLast(45)
lst.insertLast(29)
lst.insertLast(28)
lst.insertLast(2)
lst.insertLast(9)
lst.insertLast(16)
lst.insertLast(49)
lst.insertLast(39)
lst.insertLast(27)
lst.insertLast(43)
lst.insertLast(34)
lst.insertLast(46)
lst.insertLast(40)

console.log(mSort(lst).display())

// const sampleArr = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40] // 16
