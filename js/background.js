const imgs = [
    "bij_0.jpg", "bij_1.jpg", "bij_2.jpg",
    "cimi_0.jpg", "cimi_1.jpg", "cimi_2.jpg", "cimi_3.jpg","cimi_4.jpg",
    "ld_0.jpg", "ld_1.jpg", "ld_2.jpg", "ld_3.jpg","ld_4.jpg",
    "ny_0.jpg", "ny_1.jpg", "ny_2.jpg", "ny_3.jpg",
    "prs_0.jpg", "prs_1.jpg",
    "sdn_0.jpg", "sdn_1.jpg", "sdn_2.jpg", "sdn_3.jpg","sdn_4.jpg",
    "su_0.jpg", "su_1.jpg", "su_2.jpg", "su_3.jpg","su_4.jpg",
    "tk_0.jpg", "tk_1.jpg", "tk_2.jpg", "tk_3.jpg","tk_4.jpg",
]

const body = document.querySelector('body')
const bgImg = document.createElement('img')
bgImg.classList.add('background')
body.appendChild(bgImg)

const changeImg = setInterval(randomImg, 3000)

function randomImg() {
     imgUrl = imgs[Math.floor(Math.random()*imgs.length)]
     bgImg.src = `img/${imgUrl}`
}

