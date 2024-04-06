"use strict";
const heroSection = document.getElementById('heroSection');
const heroButtons = document.getElementById('heroButtons');
if (heroButtons) {
    const buttonsToChangeHero = Array.from(heroButtons?.children);
    function handleChangeHeroImages(index) {
        heroSection?.classList.remove('bg-hero-mobile-1', 'bg-hero-mobile-2', 'bg-hero-mobile-3');
        buttonsToChangeHero.forEach((btn) => {
            btn.classList.add('bg-background/40');
            btn.classList.remove('bg-background');
        });
        function toggleHeroButtonColor() {
            buttonsToChangeHero[index].classList.remove('bg-background/40');
            buttonsToChangeHero[index].classList.add('bg-background');
        }
        switch (index) {
            case 0:
                heroSection?.classList.add('bg-hero-mobile-1');
                toggleHeroButtonColor();
                break;
            case 1:
                heroSection?.classList.add('bg-hero-mobile-2');
                toggleHeroButtonColor();
                break;
            case 2:
                heroSection?.classList.add('bg-hero-mobile-3');
                toggleHeroButtonColor();
                break;
        }
    }
    buttonsToChangeHero.forEach((btn, index) => {
        btn.addEventListener('click', () => handleChangeHeroImages(index));
    });
}
