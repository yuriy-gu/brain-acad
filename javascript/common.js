/*window.onload = function (){
	var byId = document.getElementById('outer');
	console.log(byId);
};*/
//==============================================
/*var byId = document.getElementById('outer');
console.log(byId.childNodes);//выводит кол-во узлов
console.log(byId.childNodes[0].nodeType);//возврращает номер (TextNode - №3, ElementNode - №1)
console.log(byId.childNodes[1].nodeType);
console.log(byId.childNodes[2].nodeType);
console.log(byId.childNodes[1].firstChild.nodeValue);//выводит значение 1го spana - one
			byId.childNodes[3].firstChild.nodeValue = 'new value';
console.log(byId.childNodes[3].firstChild.nodeValue);//заменили значение two на new value
console.log(byId.childNodes[0].nextSibling);//переходим к следующему элементу
console.log(byId.childNodes[5].previousSibling);//переходим к предыдущему элементу*/
//==============================================
var byId = document.getElementById('outer');
var newP = document.createElement('p'); //created a new paragraf after span in <p>
var tn = document.createTextNode('my new p');//created a new text in p
newP.innerHTML = '<ul><li>my</li><li>inner</li><list</li></ul>';
newP.appendChild(tn);
byId.appendChild(newP);

var inner = byId.innerHTML;
console.log(typeof inner);
console.log(inner);
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================
//==============================================