//your JS code here. If required.
  let out = document.getElementById("output");
   let result= new Promise((resolve)=>{
	   setTimeout(()=>{
		   resolve("Hello, world!");
	   },1000)
   })
result.then((data)=>{
	out.innerText=data;
})