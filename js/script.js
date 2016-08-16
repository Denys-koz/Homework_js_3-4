var container = document. createElement('div');
container.className = "container";
document.body.appendChild(container);

var titleText = 'Тест по програмированию';
var listText =  ['Вопрос № 1', 'Вопрос № 2', 'Вопрос № 3'];
var sublistText =  ['Вариант ответа № 1', 'Вариант ответа № 2', 'Вариант ответа № 3'];
var buttonText = 'Проверить мои результаты';


var createDom = {

	createTitle: function(tagtext, tagclass) {
		var title = document.createElement('h4');
		title.innerHTML = tagtext;
		title.className = tagclass;
		container.appendChild(title);
	},

	createList: function(tagtext, tagclass) {
		var list = document.createElement('ol');
		list.className = tagclass;
		console.log(sublist);
		for(var i = 0; i < tagtext.length; i++) {
			var listElement = document.createElement('li');
			listElement.innerHTML = tagtext[i];
			var sublist = createDom.createSubList(sublistText, 'checkbox');

			for(var j = 0; j < sublist.length; j++) {
				listElement.appendChild(sublist[j]);
			}

			list.appendChild(listElement);
			container.appendChild(list);
		}
	},

	createSubList: function(tagtext, tagclass) {
		var sublist = document.createElement('ul');
		var mas = [];
		for(var i = 0; i < tagtext.length; i++) {
			var sublistElement = document.createElement('li');
			sublistElement.className = tagclass;
			var sublistLabel = document.createElement('label');
			var sublistInput = document.createElement('input');

			sublistInput.setAttribute('type', 'checkbox');
			sublistLabel.innerHTML = '<span>' + tagtext[i] + '</span>';
			sublistLabel.insertBefore(sublistInput, sublistLabel.children[0]);
			sublistElement.appendChild(sublistLabel);
			sublist.appendChild(sublistElement);
			mas[i] = sublist;
		}
		return mas;
	},

	createButton: function(tagtext, tagclass) {
		var button = document.createElement('button');
		button.setAttribute('type', 'submit');
		button.innerHTML = tagtext;
		button.className = tagclass;
		container.appendChild(button);
	}

}

createDom.createTitle(titleText, 'text-center');
createDom.createList(listText, 'list');
createDom.createButton(buttonText, 'btn btn-info btn-lg center-block');
