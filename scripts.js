let toggles = document.querySelectorAll('.toggle')

for (let i = 0; i < toggles.length; i++) { 
  toggles[i].addEventListener('click', function() {
    this.classList.toggle('show')
  })
}