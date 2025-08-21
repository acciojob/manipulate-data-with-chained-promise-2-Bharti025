//your JS code here. If required.

let output=document.getElementById("output");
let arr = [1, 2, 3, 4]; // Define the array

const promise1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let ans=arr.filter((element,index)=>
			 element % 2 === 0);
		resolve(ans);
	},1000);
})

const promise2= new Promise((resolve,reject)=>{
setTimeout(()=>{
		let result=ans.map((element,index)=>{
			element*2;
		})
		resolve(result);
	},2000);
	
});

promise1.then((data)=>{
output.textContent(data);	
	return promise2;
}).then((data)=>{
	output.textContent(data);	
})



