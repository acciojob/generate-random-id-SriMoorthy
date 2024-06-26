function makeid(l) {
  // write your code here
	let S = ''
	let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	for (let i = 0; i < l; i++) {
		const r = parseInt(Math.random()*str.length)
		S+=str[r]
	}
	return S
}

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
