import handleChangeHeroImages from './modules/handleChangeHeroImages.js';

document.addEventListener('DOMContentLoaded', () => {
  const heroButtons = document.getElementById('heroButtons')
  
  if (heroButtons){
    const buttonsToChangeHero = Array.from(heroButtons.children)
    buttonsToChangeHero.forEach((btn, index) => {
      btn.addEventListener('click', () => handleChangeHeroImages(index))
    })
  }
})