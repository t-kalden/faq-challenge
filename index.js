document.querySelectorAll('.question-container').forEach(container => {
    container.addEventListener('click', () => {
      const section = container.parentElement
      const isActive = section.classList.contains('active')

      document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'))
      if(!isActive) {
        section.classList.add('active')
      }
    })
})