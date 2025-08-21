//your JS code here. If required.

let output=document.getElementById("output");
let arr = [1, 2, 3, 4]; // Define the array

const promise1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let ans=arr.filter((element,index)=>
			 element % 2 === 0);
		resolve(ans);
	},1000);
});

const promise2= (even)=> {
	return new Promise((resolve,reject)=>{
   setTimeout(()=>{
		let result=even.map((element,index)=>{
			return element*2;
		});
		resolve(result);
	},2000);
	
});
};

promise1.then((even)=>{
output.innerText=even;
	return promise2(even);
}).then((result)=>{
	output.innerText=result;
})



