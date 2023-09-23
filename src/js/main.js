const elementos = document.querySelectorAll('.nav-item');

const contenidos = document.querySelectorAll('.contenido');

elementos.forEach((item, index) => {
   item.addEventListener('click', () => {
        
    elementos.forEach((item) => {
        item.classList.remove("activo");
      });

      contenidos.forEach((item)=>{
        item.classList.remove("activo");
      });

    item.classList.add("activo");
    contenidos[index].classList.add("activo");
    console.log(index);    

    })
});