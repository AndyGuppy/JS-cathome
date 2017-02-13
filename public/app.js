catarray = [
  { 
  name: "Name: Simon",
  food: "Favorite Food: Kebab", 
  image: "images/fredo.jpg"
  },
  {
  name: "Name: Matthew",  
  food: "Favorite Food: Cake", 
  image: "images/matthew.jpg"
  },
  {
  name: "Name: solt",  
  food: "Favorite Food: Sardines", 
  image: "images/zsolt.jpg"
  }
  ]

var createCatUl = function(){
  var catUl = document.createElement("ul");
  catUl.classList.add("cat");
  return catUl;
}

var createCatName = function(name){
  var catName = document.createElement("li");
  catName.innerText = name;
  return catName;
}

var createFavFood = function(favFood){
  var food = document.createElement("li");
  food.innerText = favFood;
  return food;
}

// var creatediv = function() {
//   var div = document.createElement('div');
//   div.style.left = '32px'; div.style.top = '-16px';
// document.getElementById('catdiv').appendChild(div);
// }

// var appendElements = function(catdiv, cats, catUl, catName, food, image){
var appendElements = function(cats, catUl, catName, food, image){
  // catdiv.appendChild();
  food.appendChild(image);
  catName.appendChild(food);
  catUl.appendChild(catName);
  cats.appendChild(catUl);
  
}

var createImage = function(sourceImage){
  var image = document.createElement("IMG");
  image.src = sourceImage;
  image.width = "300";
  image.style.padding= "5px";
  image.style.border='2px solid #E8272C';

  document.getElementById('imageDiv').appendChild(image);
  return image;
}


var addCat = function(name, favFood, sourceImg){
  // var catdiv = creatediv();
  var catUl = createCatUl();
  var catName = createCatName(name);
  var favoriteFood = createFavFood(favFood);
  var image = createImage(sourceImg);
  var cats = document.getElementById("cats");

  // appendElements(catdiv, cats,catUl,catName, favoriteFood, image);
  appendElements(cats,catUl,catName, favoriteFood, image);
}

var app = function(){
for(cat of catarray){
  addCat(cat.name, cat.food, cat.image);
}
}
window.onload = app;