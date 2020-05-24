console.log('hello')
let word = document.getElementById('word');
let search = document.getElementById('search');
let defBox = document.querySelector('.def')
let loading = document.querySelector('.loading')
let notFound = document.querySelector('.notFound')
let suggestion = document.querySelector('.suggestion')



search.addEventListener('click',(e)=>{

    defBox.innerText=''
    notFound.innerText=''
    suggestion.innerText=''
loading.style.display='block'
    e.preventDefault()
    let input = word.value
let api =`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${input}?key=792cd62e-abd4-4752-9470-eeb698adfb65`

// fetching data
fetch(api)
    .then((response)=>{
        return response.json()
    })
    
    .then((data)=>{
        console.log(data)
        let  output = data
           
        if(!output.length){
            loading.style.display='none'
            notFound.textContent='Result Not Found.'
            return
        }
        if(typeof output[0]=='string'){
            loading.style.display='none'
            console.log('hello')
            let suggedted = document.createElement('h6')
            suggedted.innerText='Did you mean?'
            console.log(output)

            suggestion.appendChild(suggedted)
            output.forEach(element => {
                let suggBox = document.createElement('span')
                suggBox.classList.add('spanBox')
                suggBox.innerText=element
                suggestion.appendChild(suggBox)
            });
            return

        }

        
        

            
        
        loading.style.display='none'
        let def = output[0].shortdef[0]
        console.log(def)
        defBox.textContent = def

        


        

        

    })
   

})
