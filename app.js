console.log('i am in')

const canvas = document.getElementById('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c

c = canvas.getContext('2d')
// c.fillStyle = 'rgba(255,0,0,0.5)'
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = 'rgba(0,255,0,0.5)'
// c.fillRect(300, 300, 100, 100)
// c.fillStyle = 'rgba(0,0,255,0.5)'
// c.fillRect(200, 200, 100, 100)
// c.beginPath()
// c.moveTo(50, 300)
// c.lineTo(400, 300)
// c.lineTo(300, 100)
// c.strokeStyle = '#fa34a3'
// c.stroke()

// c.beginPath()
// c.arc(300, 300, 30, 0, Math.PI * 2, false)
// c.strokeStyle = '#54BAB9'
// c.stroke()

// canvas.addEventListener('mousemove', event => {
//   c.beginPath()
//   c.arc(
//     event.clientX,
//     event.clientY,
//     Math.random() * 200,
//     0,
//     Math.PI * 2,
//     false
//   )
//   let x = Math.random() * 255
//   let y = Math.random() * 255
//   let z = Math.random() * 255
//   c.strokeStyle = `rgba(${x}, ${y}, ${z}, ${Math.random() * 2})`
//   c.stroke()
// })

// for (let i = 0; i < 299; i++) {
//   let x = Math.random() * window.innerWidth
//   let y = Math.random() * window.innerHeight
//   c.beginPath()
//   c.arc(x, y, 30, 0, Math.PI * 2, false)
//   c.strokeStyle = '#54BAB9'
//   c.stroke()
// }

const colorArray = [
  '#CEF09D',
  '#38184C',
  '#1C646D',
  '#107361',
  '#76BA99',
  '#A0CD60'
]

function Circle (x, y, r, dx, dy) {
  this.x = x
  this.y = y
  this.r = r
  this.dx = dx
  this.dy = dy
  this.minRadius = r
  this.color = colorArray[Math.floor(Math.random() * (colorArray.length - 1))]
  this.maxRadius = 50
  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
    c.strokeStyle = 'blue'
    c.fillStyle = this.color
    c.fill()
  }
  this.update = function () {
    this.x = this.x + this.dx
    this.y = this.y + this.dy
    //this is the way to do it
    if (this.x + this.r > window.innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx
    }
    if (this.y + this.r > window.innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy
    }
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.r < this.maxRadius) {
        this.r += 1
      }
    } else if (this.r > this.minRadius) {
      this.r -= 1
    }

    this.draw()
  }
}

let mouse = {
  x: undefined,
  x: undefined
}

window.addEventListener('mousemove', event => {
  mouse.x = event.x
  mouse.y = event.y
})

window.addEventListener('resize', event => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  circleArray = []
  init()
})
// let circle = new Circle(
//   Math.random() * window.innerWidth,
//   Math.random() * window.innerWidth,
//   30,
//   3,
//   3
// )

// let x = Math.random() * window.innerWidth
// let y = Math.random() * window.innerHeight
// let r = 30
// let dx = (Math.random() - 0.5) * 2
// let dy = (Math.random() - 0.5) * 2
let circleArray = []
function init () {
  for (var i = 0; i < 500; i++) {
    circleArray.push(
      new Circle(
        Math.random() * (window.innerWidth - 30 * 2) + 30,
        Math.random() * (window.innerHeight - 30 * 2) + 30,
        Math.random() * 3 + 1,
        Math.random() - 0.5,
        Math.random() - 0.5
      )
    )
  }
}

init()

function animate () {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, window.innerWidth, window.innerHeight)
  circleArray.forEach(circle => circle.update())
}

animate()
