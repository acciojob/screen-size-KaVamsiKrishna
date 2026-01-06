//your JS code here. If required.
const size = document.getElementById('sizeInfo');
size.innerHTML = `<h1>Width: ${window.innerWidth} and Height: ${window.innerHeight}</h1>`
window.addEventListener('resize', () =>{
	size.innerHTML = `<h1>Width: ${window.innerWidth} and Height: ${window.innerHeight}</h1>`
})