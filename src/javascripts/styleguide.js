document.querySelectorAll('h4.crazyHeader').forEach((header) => {
  const text = header.innerText
  header.innerHTML = ''

  for (let i = 0; i < text.length; i += 4) {
    const segment = document.createElement('span')
    segment.classList.add('segment')

    const letters = text.slice(i, i + 4).split('')

    if (letters[0]) {
      const firstLetter = document.createElement('span')
      firstLetter.classList.add('firstLetter')
      firstLetter.innerText = letters[0]
      segment.appendChild(firstLetter)
    }

    if (letters[1]) {
      const secondLetter = document.createElement('span')
      secondLetter.classList.add('secondLetter')
      secondLetter.innerText = letters[1]
      segment.appendChild(secondLetter)
    }

    if (letters[2]) {
      const thirdLetter = document.createElement('span')
      thirdLetter.classList.add('thirdLetter')
      thirdLetter.innerText = letters[2]
      segment.appendChild(thirdLetter)
    }

    if (letters[3]) {
      const fourthLetter = document.createElement('span')
      fourthLetter.classList.add('fourthLetter')
      fourthLetter.innerText = letters[3]
      segment.appendChild(fourthLetter)
    }

    header.appendChild(segment)
  }
})
