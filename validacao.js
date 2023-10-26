const input = document.querySelectorAll('.input-text');

input.forEach(input=> {
    input.addEventListener('change', ()=> {
        if(input.value !== ""){
            input.classList.add('validado')
        }else{
            input.classList.add('naoValidado')
        }
    })
});