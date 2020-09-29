const swap = (arr, left, right) => {
	const temp = arr[left]
	arr[left] = arr[right]
	arr[right] = temp;
}

const partition = (arr, left, right, pivot) => {
	while (left <= right) {
		while (arr[left] < pivot) left++;
		while (arr[right] > pivot) right--;

		if (left <= right) {
			swap(arr, left, right);
			left++;
			right--;
		}
	}

	return left;
}

const quicksort = (arr, left, right) => {
	if (left >= right) return arr;

	const pivot = arr[left + Math.floor((right - left) / 2)]
	const index = partition(arr, left, right, pivot)

	quicksort(arr, left, index - 1)
	quicksort(arr, index, right)

	return arr;
}

export default quicksort