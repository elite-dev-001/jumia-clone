const itemsArr = ['Supermarket', 'Health & Beauty', 'Home & Office', 'Phones & Tablets', 'Computing', 'Electronics', 'Fashion', 'Baby Products', 'Gaming', 'Sporting goods', 'Automobiles', 'Other categories']

const items = document.querySelector('.items')

itemsArr.forEach((item) => {
    const p = document.createElement('p')
    p.innerHTML = item
    items.appendChild(p)
})

// setInterval(() => console.log('CAll every 2s'), 2000)
//CAROUSEL

const imgs = [
    'images/slider_1.jpeg',
    'images/slider_2.jpeg',
    'images/slider_3.jpeg',
    'images/slider_4.png',
    'images/slider_5.gif',
    'images/slider_6.png',
    'images/slider_7.jpeg',
]

const carousel = document.querySelector('.carousel')
const img = document.createElement('img')
img.src = imgs[0]
let counter = 1;


const circles = Array.from(document.querySelectorAll('.circle'))
console.log(circles)
circles[0].setAttribute('style', 'background: #f68b1e')



// newCircles.forEach((circle) => {
//     newCircles.indexOf(circle) === counter ? circle.setAttribute('style', 'background: #f68b1e') : circle.setAttribute('style', 'background: #ddd')
// })

carousel.appendChild(img)
setInterval(() => {
    if(counter < imgs.length){
        img.src = imgs[counter]
        circles.forEach((circle) => {
            // console.log(circles.indexOf(circle, counter))
            circle.setAttribute('style', `background: ${counter === circles.indexOf(circle) ? '#f68b1e' : '#ddd'}`)
        })
        counter++
    }else {
        counter = 0
    }
    

    console.log(counter)
}, 2000)

