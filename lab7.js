const postContainer = document.getElementById("post-container");

for (let i = 1; i <= 826; i++) {
  const imageURL = "https://rickandmortyapi.com/api/character/avatar/" + i + ".jpeg";
  const title = "Character " + i;
  const description = "Esta es mi publicación número " + i + ". Esto es una prueba de generacion de relleno por medio de funciones y ciclos ";

  const postDiv = document.createElement("div");
  postDiv.className = "post";
  
  const postContent = document.createElement("div");
  postContent.className = "post__content";
  
  const titleElement = document.createElement("h3");
  titleElement.innerHTML = title;
  titleElement.className = "post__title";
  
  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = description;
  descriptionElement.className = "post__parrafo";
  
  const imageContainer = document.createElement("div");
  imageContainer.className = "post__container";
  
  const imageContent = document.createElement("img");
  imageContent.className = "post__container--image";
  imageContent.src = imageURL;
  
  imageContainer.appendChild(imageContent);
  
  postContent.appendChild(imageContainer);
  postContent.appendChild(titleElement);
  postContent.appendChild(descriptionElement);
  
  postDiv.appendChild(postContent);
  
  postContainer.appendChild(postDiv);
}

