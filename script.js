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

carousel.appendChild(img);

setInterval(() => {
    // console.log(counter)
    if(counter < imgs.length){
        img.src = imgs[counter]
        circles.forEach((circle) => {
            circle.setAttribute('style', `background: ${(counter) === circles.indexOf(circle) ? '#f68b1e' : '#ddd'}`)
        })
        counter++
        // x = undefined;
    }else {
        counter = 0
    }
        
}, 7000)

// function mySetInterval(value) {
//     setTimeout(() => {
//         if(counter < imgs.length && counter >= 0){
//             // value === 0 ? counter-- : counter++
//             img.src = imgs[counter-1]
//             circles.forEach((circle) => {
//                 circle.setAttribute('style', `background: ${counter-1 === circles.indexOf(circle) ? '#f68b1e' : '#ddd'}`)
//             })
            
//         }else {
//             counter < 0 ? counter = (imgs.length - 1) : counter = 0
//         }
        
//     }, 1000)
// }

/////ARROWS////
// const arrows = Array.from(document.querySelectorAll('.arrow'))

// function circle(value) {
//     const div = document.createElement('div')
//     div.setAttribute('style', 'width: 40px; height: 40px; border-radius: 100%; background: black;color: white; display: flex; justify-content: center; align-items: center')
//     div.innerHTML = value;
//     return div;
// }

// arrows.forEach((arrow) => {
//     arrow.appendChild(circle(arrows.indexOf(arrow) === 0 ? '<' : '>'))
    
//     arrow.addEventListener('click', (e) => {
//         console.log(counter)
//         e.preventDefault();
//         arrows.indexOf(arrow) === 0 ? x = 1: x = 0;
//         mySetInterval(arrows.indexOf(arrow))
//     })
// })

//CONSUMING APIS
const computings = document.querySelector('.computing')



axios.get('https://api.apify.com/v2/datasets/1LYsVC3JNAzgf6zBM/items?clean=true&format=json').then((res) => {
    console.log(res.data)
    // res.data.forEach((x) => {
    //     console.log(x.categories)
    // })
    const computing = res.data.filter((item, index) => item.categories.toLowerCase().includes('computing') && index < 10)
    const fashion = res.data.filter((item) => item.categories.toLowerCase().includes('fashion'))
    const sporting = res.data.filter((item) => item.categories.toLowerCase().includes('sporting'))
    const phones = res.data.filter((item) => item.categories.toLowerCase().includes('phones'))
    const toys = res.data.filter((item) => item.categories.toLowerCase().includes('toys'))
    console.log(computing)

    computing.forEach((item) => {
        const div = document.createElement('div')
        div.className = 'item';
        const img = document.createElement('img')
        img.src = item['image']

        const title = document.createElement('p')
        title.innerHTML = item['displayName']

        const price = document.createElement('p')
        price.innerHTML = item['price']

        div.appendChild(img)
        div.appendChild(title)
        div.appendChild(price)

        computings.appendChild(div)
    })
}).catch((err) => {
    console.error(err)
}) //Asychronous Code

//https://api.apify.com/v2/datasets/1LYsVC3JNAzgf6zBM/items?clean=true&format=json

