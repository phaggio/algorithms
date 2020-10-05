// Priority Queue, is a tree based data structure that satisfies the heap invariant.
// priority queue is not a data type, it is an abstract data structure.
// heap lets us to actually implement that behavior
// if A is a parent node of B, then A is ordered with respect to B for all nodes A, B in the heap.

// max heap, all children nodes values are less than or equal to parent node value
// min heap, all children nodes values are greater than or equal to parent node value

// heap isn't necessarily binary tree structure
// all heaps must be trees, no cycle.

// used in certain implementation of Dijkstra's shortest path algo
// or next best or next worst element.
// or best first search algo
// or minimum spanning tree algo

// Binary heap complexity:
// construction O(n), polling O(log(n)), peeking O(1), adding O(log(n))
// naive removing O(n), advanced removing with hash O(log(n)), naive contains O(n), contains with hash O(1)


// example: binary heap representation
// let array = [9, 8, 7, 6, 5, 1, 2, 2, 2, 3, 4, 0, 1, 2, 1];
// if i = parent node index
// then left child index: 2i + 1, right child index: 2i + 2

