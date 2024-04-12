const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')

function moveShadow(e) {
	// const width = hero.offsetWidth;
	// const height = hero.offsetHeight;
	// Przypisanie wartości do zmiennych, poniżej stworzenie obiektu od razu z jego destrukturyzacją ↓

	const { offsetWidth: width, offsetHeight: height } = hero

	let { offsetX: x, offsetY: y } = e
    // ↑ Przypisanie wartości z eventu mousemove do kluczy x i y
	console.log(x, y)
    console.log(this, e.target)
    // this jest naszym hero, a e.target to na jakim elemencie się znajduje aktualnie myszka. Jeśli myszka jest na dziecku hero czyli na naszej h1 to wartości x i y zaczynają głupieć i nie pokazują tego co chcemy, daltego musimy to naprawić.
    if(this !== e.target) {
       x = x + e.target.offsetLeft; 
       y = y + e.target.offsetTop; 
    }
}

hero.addEventListener('mousemove', moveShadow)
