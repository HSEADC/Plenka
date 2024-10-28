/*добавление зума при наведении на главное фото*/
let addZoom = (target) => {
  /*change photo id here*/
  let container = document.getElementById('articleMainImageVivianMayer1'),
    imgsrc = container.currentStyle || window.getComputedStyle(container, false)
  imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, '')

  let img = new Image()
  img.src = imgsrc
  img.onload = () => {
    let ratio = img.naturalHeight / img.naturalWidth,
      percentage = ratio * 100 + '%'

    container.onmousemove = (e) => {
      let rect = e.target.getBoundingClientRect(),
        xPos = e.clientX - rect.left,
        yPos = e.clientY - rect.top,
        xPercent = xPos / (container.clientWidth / 100) + '%',
        yPercent = yPos / ((container.clientWidth * ratio * 1.5) / 100) + '%'

      Object.assign(container.style, {
        backgroundPosition: xPercent + ' ' + yPercent,
        backgroundSize: img.naturalWidth + 300 + 'px'
      })
    }

    container.onmouseleave = (e) => {
      Object.assign(container.style, {
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      })
    }
  }
}

let isMobile = false

document.addEventListener('DOMContentLoaded', function () {
  if (document.body.clientWidth <= 431) {
    isMobile = true
  }
  if (!isMobile) {
    window.onload = function () {
      /*change photo id here*/
      addZoom('articleMainImageVivianMayer1')
    }
  }
})
