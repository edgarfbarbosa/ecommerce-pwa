const heroSection = document.getElementById('heroSection')
const heroButtons = document.getElementById('heroButtons')

if (heroButtons) {
  const buttonsToChangeHero = Array.from(heroButtons?.children)
  
  function handleChangeHeroImages(index: number) {
    heroSection?.classList.remove('bg-hero-mobile-1', 'bg-hero-mobile-2', 'bg-hero-mobile-3')
    
    switch(index) {
      case 0:
      heroSection?.classList.add('bg-hero-mobile-1')
      break
      case 1:
      heroSection?.classList.add('bg-hero-mobile-2')
      break
      case 2:
      heroSection?.classList.add('bg-hero-mobile-3')
      break
    }
  }
  
  buttonsToChangeHero.forEach((btn, index) => {
    btn.addEventListener('click', () => handleChangeHeroImages(index))
  })
}