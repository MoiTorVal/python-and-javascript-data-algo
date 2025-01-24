function insertionSort(array) {
  // Outer loop starts from the second element
  for (let i = 1; i < array.length; i++) {
    let current = array[i]; // The element to be inserted
    let j = i - 1;

    // Shift elements of array[0..i-1] that are greater than current to one position ahead
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    // Insert the current element into its correct position
    array[j + 1] = current;
  }

  return array; // Return the sorted array
}

// Example usage:
const arr = [12, 11, 13, 5, 6];
console.log("Sorted Array:", insertionSort(arr)); // Output: [5, 6, 11, 12, 13]
