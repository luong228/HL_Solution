function miniMax_sum(arr, n) {
	for (i = 0; i < n - 1; i++) {
		let swapped = false;
		for (j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}
		if (swapped == false)
			break;
	}
	let minSum = 0, maxSum = 0
	for (i = 0; i < n - 1; i++) {
		minSum += arr[i];
		maxSum += arr[i+1];
	}

	console.log(minSum, maxSum);
	
}

var arr = [0,1,1,2,9]
var n = arr.length;
miniMax_sum(arr, n)
miniMaxSum(arr, n)
function miniMaxSum (arr, n) {
	let min = arr[0], max = arr[0], sum = arr[0];
	
	for( i=1;i< n; i++) {
		if(arr[i] > max)
			max = arr[i]
		if(arr[i] < min) {
			min = arr[i]
		}
		sum += arr[i]
	}

	let minSum = sum -max;
	let maxSum = sum - min;
	console.log(minSum, maxSum);
}

