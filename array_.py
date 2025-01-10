# Creating an array (list in Python)
arr = [1, 2, 3, 4, 5]

# Accessing elements
print(arr[0])  # Output: 1
print(arr[2])  # Output: 3

# Updating elements
arr[1] = 20
print(arr)  # Output: [1, 20, 3, 4, 5]

# Iterating over elements
for element in arr:
    print(element)

# Inserting elements (at index 2)
arr.insert(2, 30)
print(arr)  # Output: [1, 20, 30, 3, 4, 5]

# Deleting elements (at index 3)
del arr[3]
print(arr)  # Output: [1, 20, 30, 4, 5]