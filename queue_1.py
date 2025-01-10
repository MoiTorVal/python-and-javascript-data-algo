from collections import deque 

queue = deque()

# enqueue element 
queue.append(1)
queue.append(2)
queue.append(3)

# dequeue elements 
print(queue.popleft())

print(queue[0])

print(len(queue) == 0)