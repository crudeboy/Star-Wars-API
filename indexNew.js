let imagesArr = ['character1.jpeg','character2.jpeg','character3.jpeg','character4.jpeg','character5.jpeg','character6.jpeg','character7.jpeg','character8.jpeg','character9.jpeg','character10.jpeg']
let container = document.querySelector('.main-container')
 
 function main(){
     
        fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
            let output = ''
            data.results.forEach((item, index) => {
               
                output += `<div class = "character">
                <div class='picture' id="image"><img class = "img" width="40%" src="images/${imagesArr[index]}" alt=""></div>
                <div class="info">${item.name}</div> 
                <div class="result hide" id="fact">${item.name} <br/>${item.height}<br/> ${item.gender}</div> 
            </div>`
            })
            container.innerHTML = output
           

            let infoEl = document.querySelectorAll('.info')
            let resultEl = document.querySelectorAll('.result')
            infoEl.forEach((item, index) => {
            item.addEventListener('click',() => resultEl[index].classList.toggle('hide'))})
        })

 }
 
 main()
 
 
    
 
    