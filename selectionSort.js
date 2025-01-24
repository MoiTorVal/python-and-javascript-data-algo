const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  // Outer loop iterates through the entire array
  for (let i = 0; i < array.length; i++) {
    let minIndex = i; // Assume the current element is the smallest

    // Inner loop finds the smallest element in the unsorted part
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j; // Update minIndex if a smaller element is found
      }
    }

    // Swap the smallest element with the first unsorted element
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array; // Return the sorted array
}

// Example usage:
const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log("Sorted Array:", selectionSort(arr)); // Output:
