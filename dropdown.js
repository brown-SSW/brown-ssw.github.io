const dropdownButton = document.getElementById('dropdown-button')
const dropdownList = document.getElementById('dropdown-list')


dropdownButton.addEventListener('click', (e) => {
  e.preventDefault()
  if (dropdownList.style.display === 'block') {
    dropdownList.style.display = 'none'
  } else {
    dropdownList.style.display = 'block'
  }
})

window.addEventListener('click', (e) => {
  if (!(e.target.id === 'dropdown-button')) {
    dropdownList.style.display = 'none'
  }
})