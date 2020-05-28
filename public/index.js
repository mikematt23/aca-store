"use strict"

window.onload = (
fetch("https://my-json-server.typicode.com/jubs16/Products/Products")
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  printPoducts(data)
}))

function printPoducts(data){
  data.forEach(function(d){
    let productPlace = document.createElement("div")
    let productPicture = document.createElement("img")
    let button = document.createElement("button")
    productPicture.src = d.imgUrl
    productPicture.style.height = '200px'
    productPicture.style.width = "200px"
    productPlace.appendChild(button)
    productPlace.appendChild(productPicture)
    let pictureHolder = document.getElementById("pictureHolder")
    pictureHolder.appendChild(productPlace)
    //pictureHolder.appendChild()
  })
}