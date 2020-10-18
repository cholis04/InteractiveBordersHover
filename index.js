let cards = document.getElementsByClassName('card');

for(let i = 0; i < cards.length; i++ ){
	cards[i].addEventListener('mousemove',function(e){
		let pxCard = cards[i].offsetLeft;
		let pyCard = cards[i].offsetTop;
		let x = e.pageX;
		let y = e.pageY;
		let xSet = x - pxCard;
		let ySet = y - pyCard;
		cards[i].style.setProperty('--xCard',xSet+'px');
		cards[i].style.setProperty('--yCard',ySet+'px');
		
	});
}
