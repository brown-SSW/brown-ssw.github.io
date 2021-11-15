document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    openModalBox()
  })
})

document.getElementById('modal-box-wrapper').addEventListener('click', (event) => {
  if (event.target.id === 'modal-content' || event.target.id === 'modal-box-wrapper') {
    closeModalBox()
  }
})

function openModalBox(){
  document.getElementById('modal-box-wrapper').style.display = 'flex'
}

function closeModalBox(){
  document.getElementById('modal-box-wrapper').style.display = 'none'
}