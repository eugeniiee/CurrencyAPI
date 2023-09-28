
         
         let out = ""
        
        let ut = document.getElementById("out")
        
        let checkmark
        
         
        
        function klikk(){
        
        fetch("https://jsonplaceholder.typicode.com/photos/10")
        
        .then(respons => {
        
        out += respons.status
        
        return respons.json()
        
        })
        
        .then(data => {
         document.getElementById("bilde").src = data.url
        
        })
        
         
        
        ut.innerHTML = out
        
        out = ""
        
        }
        
         
        
        ut.textContent = out
