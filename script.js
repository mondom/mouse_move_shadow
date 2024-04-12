const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')

function moveShadow(e) {
	// const width = hero.offsetWidth;
	// const height = hero.offsetHeight;
	// Przypisanie wartości do zmiennych, poniżej stworzenie obiektu od razu z jego destrukturyzacją ↓

	const { offsetWidth: width, offsetHeight: height } = hero
	console.log(`width: ${width}`)
	let { offsetX: x, offsetY: y } = e
	const walk = 100
	// ↑ 100px max przesunięcia shadow na tekście
	// ↑ Przypisanie wartości z eventu mousemove do kluczy x i y
	console.log(`x: ${x}`)
	// console.log(this, e.target)
	// this jest naszym hero, a e.target to na jakim elemencie się znajduje aktualnie myszka. Jeśli myszka jest na dziecku hero czyli na naszej h1 to wartości x i y zaczynają głupieć i nie pokazują tego co chcemy, daltego musimy to naprawić.
	if (this !== e.target) {
		x = x + e.target.offsetLeft
		y = y + e.target.offsetTop
	}

	const xWalk = Math.round((x / width) * walk - walk / 2)
	// walk jest ustalane na 100 pikseli, co oznacza maksymalną odległość, na jaką cień ma się przesunąć w lewo lub w prawo.
	// x reprezentuje położenie kursora myszy na osi X względem lewej krawędzi elementu, nad którym wystąpiło zdarzenie mousemove.
	// width reprezentuje szerokość elementu .hero, na którym jest nasłuchiwane zdarzenie. Jest to używane do skalowania ruchu kursora myszy w stosunku do szerokości elementu.
	// x / width oblicza stosunek położenia kursora myszy na osi X do szerokości elementu .hero, dając wartość między 0 a 1, która reprezentuje położenie kursora w procentach szerokości elementu.
	// (x / width) * walk skaluje ten stosunek do zakresu od -walk/2 do walk/2, co oznacza, że wynik będzie w przedziale od -50 do 50.
	// Ostatecznie obliczona wartość xWalk reprezentuje przesunięcie cienia poziomo w pikselach, które będzie proporcjonalne do ruchu kursora myszy, ale ograniczone do maksymalnej odległości walk.
	const yWalk = Math.round((y / height) * walk - walk / 2)
	console.log(xWalk, yWalk)
	// ↑ otrzymaliśmy 50px w każdą stronę :)

	text.style.textShadow = `${xWalk}px ${yWalk}px 0 red, ${xWalk * -1}px ${yWalk}px 0 blue, ${xWalk}px ${
		yWalk * -1
	}px 0 green`
}

hero.addEventListener('mousemove', moveShadow)
