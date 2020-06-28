// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. 
// The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

const findMedianSortedArrays = (nums1, nums2) => {
	const totalLength = nums1.length + nums2.length;
	const even = (totalLength % 2) === 0;
	let medianIndex = 0;
	if (even) {
		medianIndex = ((totalLength / 2));
	} else {
		medianIndex = ((totalLength - 1) / 2);
	}

	const mergedArr = [];
	let count = 0;
	while (count <= medianIndex) {
		if (nums2.length <= 0 || nums1[0] <= nums2[0]) {
			mergedArr.push(nums1[0]);
			nums1.shift();
		} else if (nums1.length <= 0 || nums1[0] >= nums2[0]) {
			mergedArr.push(nums2[0]);
			nums2.shift();
		}
		count++;
	}

	if (even) {
		return (mergedArr[medianIndex - 1] + mergedArr[medianIndex]) / 2;
	} else {
		return (mergedArr[medianIndex]);
	}

}

export default findMedianSortedArrays

// Big O (log(m+n))