const swap = (arr, left, right) => {
	const temp = arr[left]
	arr[left] = arr[right]
	arr[right] = temp;
}

const partition = (arr, left, right) => {
	const pivot = arr[Math.floor((left + right) / 2)]

	while (left <= right) {
		while (arr[left] < pivot) left++;
		while (arr[right] > pivot) right--;
		if (left <= right) {
			swap(arr, left, right)
			left++;
			right--;
		}
	}

	return left;
}

const quicksort = (arr, left, right) => {
	if (arr.length > 1) {
		let partitionIndex = partition(arr, left, right)
		if (left < partitionIndex - 1) quicksort(arr, left, partitionIndex - 1)
		if (partitionIndex < right) quicksort(arr, partitionIndex, right)
	}
	
	return arr
}

export default quicksort