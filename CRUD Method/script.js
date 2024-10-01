const readapi=async ()=>{
    await fetch('https://66f596d6436827ced9747a50.mockapi.io/product/12')
    .then(solution=>{
        solution.json()
    })
    .then(answer=>{
        
       setTimeout(() => {
        console.log(answer);
        
       }, 2000);
        
    })
    .catch(errors=>{
        console.log(errors,"no Answers");
        
    })
}

const normalFUN= async()=> {
    await fetch('https://66f596d6436827ced9747a50.mockapi.io/product',{
     method:'POST',
     headers:{'content-type':'application/json'},
     body:JSON.stringify({
         name:'diwakar',
         amount:75000
     })
    })
    .then(response=> {
     if(!response.ok){
         
          throw new Error("sorry some Network issue!");
     }
     return response.json()
   
     
    }).then(msg=>{
     console.log(msg);
     
    }).catch(err=>{
     console.log(err,"sorry some network issue");
     
    })
 }
 normalFUN()


    const FunUpdate =async ()=> {
       await fetch('https://66f596d6436827ced9747a50.mockapi.io/product/5',{
        method:'PUT',
        headers:{'content-type':'application/json',
        body:JSON.stringify({
            name:'Harshini',
            amount:45000
        })
        }
       })
       .then(res=>{
        if(!res.ok){
            throw new Error("this page is not found!");
            
        }
        return res.json()
       })
       .then(ans=>{
        console.log(ans);
        
       })
       .catch(error=>{
        console.log(error.message);
        
       })
        
    }
    FunUpdate()

    const normalDel= async()=> {
        await fetch('https://66f596d6436827ced9747a50.mockapi.io/product/10',{
         method:'DELETE',
         headers:{'content-type':'application/json'},
         body:JSON.stringify({
             name:'diwakar',
             amount:75000
         })
        })
        .then(response=> {
         if(!response.ok){
             
              throw new Error("sorry some Network issue!");
         }
         return response.json()
       
         
        }).then(msg=>{
         console.log(msg);
         
        }).catch(err=>{
         console.log(err,"sorry some network issue");
         
        })
     }
     normalDel()
 