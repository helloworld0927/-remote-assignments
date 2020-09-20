function max(...nums) {
	var ans=num[0];
	for(var i = 1 ; i<num.length; i++) {
		if(num[i]>ans) {
			ans=num[i];
		}
	}
	return ans;
}

console.log(max1(1,2,4,5));
console.log(max1(5,2,7,1,6));