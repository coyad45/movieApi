
const buscador = document.querySelector(".buscador");
const contenedorbuscador = document.querySelector("#contenedorBuscadorPrincipal");
const cerrarContenedor = document.querySelector(".closeBuscador");
const userImg = document.querySelector("#user-img");
const userContenedor = document.querySelector("#userContenedor");

buscador.addEventListener("click",manejoDeContenedorBuscador);
cerrarContenedor.addEventListener("click",manejoDeContenedorBuscador);
userImg.addEventListener("click",manejoDeContenedorUsuario);

function manejoDeContenedorBuscador(){
    console.log("hola")
    if(contenedorbuscador.className == "oculto"){
        contenedorbuscador.className = "buscador-ampliado";
    }
    
    else{
        contenedorbuscador.className = "oculto";
    }
}
function manejoDeContenedorUsuario(){
    console.log("hola")
    if(userContenedor.className == "oculto"){
        userContenedor.className = "user"
    }
    
    else{
        userContenedor.className = "oculto";
    }
}



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzU1YzdjNTM1MWEyNjNkNzcyNGY3NjgwMzg2ZDcyNiIsIm5iZiI6MTY5ODIzODc3My40MjIwMDAyLCJzdWIiOiI2NTM5MTEzNWY0OTVlZTAxMWMyNDQ1YjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BLoPUwUkpWjxzZEIsyVXnjXmajHV_ZahgY5JgkR8I08'
  }
};

const url = 'https://api.themoviedb.org/3/authentication';
async function movieFetchUrl() {
    const res = await fetch(url,options);
    const data = await res.json()

    console.log(data);
}
async function movieFetchImg() {
    const resImg = await fetch('https://api.themoviedb.org/3/collection/10/images',options);
    const dataImg = await resImg.json()
    const backgroundCarrousel = document.querySelector(".movie-carrousel");
     if (Array.isArray(dataImg.backdrops) && dataImg.backdrops.length > 0) {
    const filePath = dataImg.backdrops[1].file_path;
    const fullUrl = `https://image.tmdb.org/t/p/w780${filePath}`;

    backgroundCarrousel.style.backgroundImage = `url('${fullUrl}')`;
  }
    
    console.log(dataImg );
}

movieFetchUrl();
movieFetchImg()