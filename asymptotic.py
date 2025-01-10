def constant_time_example(arr):
    return arr[0]

def linear_time_example(arr):
    for element in arr:
        print(element)

def quadratic_time_example(arr):
    for i in range(len(arr)):
        for j in range(len(arr)):
            print(arr[i], arr[j])

