/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	swal({
		text: "Капец конечно, но погнали!",
		icon: "ракета.svg",
		button: "Да, супер!",
	  });
})