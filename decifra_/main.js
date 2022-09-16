//#13A10E green
//#16C60C light-green
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var color = '#34e42a'

const letters = 'QWEËRTYUÜIÏOÖPAÄSDFGHJKLZXCVBNMアイウエオカキクケコサシスセソタチツテトナニヌネ\ノБГДЖЗИЙКЛПФЦЧШЩЪЫ\ЬЭЮЯÆØÅ'
const spacing = canvas.width / 16
var placeholders = []
for (let i = 0; i < spacing; i++) placeholders[i] = Math.floor(4 * Math.random());

function render() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = color
    ctx.font = '16px monospace'

    for (let i = 0; i < placeholders.length; i++) {
        var x = letters.charAt(Math.floor(letters.length * Math.random()))
        ctx.fillText(x, i * 16, placeholders[i] * 16)
        placeholders[i] * 16 > canvas.height && Math.random() > 0.95 ? placeholders[i] = 0 : false
        placeholders[i]++
    }
}
setInterval(function () { render() }, 45)

var gameWork = true
let input = document.querySelectorAll('input')
let wordClasses = document.getElementsByClassName('word-class')
let counter = 0
const word = wordbank[Math.floor(Math.random()*wordbank.length)]
console.log(word)
function checkWord() {
    if (gameWork) {
        let value = input[0].value + input[1].value + input[2].value + input[3].value + input[4].value
        value = value.toLowerCase()
        let wordHTML = []
        for (let i = 0; i < 5; i++) {
            wordHTML[i] = '<span style="color: white;font-size:60px">' + value[i] + '</span>'
        }
        let x = word
        for (let i = 0; i < 5; i++) {
            if (value[i] == word[i]) {
                wordHTML[i] = '<span style="color: #34e42a;font-size:60px">' + value[i] + '</span>'
                let y = x
                x = ''
                for (let o = 0; o < y.length; o++)
                    if (y[o] != word[i]) x += y[o]
            }
        }
        for (let i = 0; i < 5; i++) {
            if(wordHTML[i] != '<span style="color: #34e42a;font-size:60px">' + value[i] + '</span>' && x.includes(value[i]))
            {
                wordHTML[i] = '<span style="color: yellow;font-size:60px">' + value[i] + '</span>'
            }
        }
        wordClasses[counter].innerHTML = '<button class="word-button">' + wordHTML[0] + wordHTML[1] + wordHTML[2] + wordHTML[3] + wordHTML[4] + '</button>'
        wordClasses[counter].style.display = 'block'
        
        if(value == word)
        {
            color = 'blue'
            document.getElementById('header').innerText = 'decifrado_'
            document.getElementById('header').style.color = color
            gameWork = false
        }
        else if(counter >= 5)
        {
            color = 'red'
            document.getElementById('header').innerText = 'A palavra era "'+word+'"'
            document.getElementById('header').style.color = color
            gameWork = false
        }
        counter++
        document.getElementById('contador').innerText = (-counter+6).toString()
    }
}