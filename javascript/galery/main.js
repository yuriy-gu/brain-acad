//test1
// var imageHolder = document.getElementById('planet')
// function changeImage(event, elem) {
// 	var img = elem.getAttribute('href');//получает значение атрибута src
// 	imageHolder.setAttribute('src', img);//устанавливает атрибут elem.setAttribute(name, value); имя атрибута и значение
// }
//or we can do this
//var imageHolder = document.getElementById('planet')
// function changeImage(event, elem) {
// 	event.preventDefault();
//  var img = elem.getAttribute('href');
//	var img = elem.href;
//	imageHolder.setAttribute('src', img);
//	imageHolder.src = img;
// }


//test2
// var imageHolder = document.getElementById('planet')
// function changeImage(event) {
// 	event.preventDefault();//остановит переход по ссылке, т.е откроет в этом же окне
// 	var img = event.target.href;//достали атрибут href у eventTarget и присвоили его переменной
// 	imageHolder.src = img;//img id=planet достали атрибут src и присвоили переменнную img
// 	//console.log(event.target);//выводит элемент <a href="img/img1.jpeg">Mercury</a>
// 	//console.log(event.currentTarget);//выведет элемент <ul onclick="changeImage(event)">
// }

//test3
// var imageHolder = document.getElementById('planet')
// function changeImage(event) {
//  	event.preventDefault();
//  	if (event.target.tagName === "A") {//проверяем нажат ли таг a(большая буква по умолчанию)
//  		imageHolder.src = event.target.href;
//  	}
// }

//test4
var imageHolder = document.getElementById('planet');
var ul = document.getElementById('galery');
ul.addEventListener('click', changeImage);
function changeImage(event) {
	event.preventDefault();
	if (event.target.tagName === "A") {//проверяем нажат ли таг a(большая буква по умолчанию)
	imageHolder.src = event.target.href;
	}
}

