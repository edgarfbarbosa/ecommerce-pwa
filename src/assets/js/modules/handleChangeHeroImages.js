export default function handleChangeHeroImages(index) {
    const heroSection = document.getElementById('heroSection');
    const heroButtons = document.getElementById('heroButtons');
    if (heroSection && heroButtons) {
        const buttonsToChangeHero = Array.from(heroButtons.children);
        heroSection.classList.remove('bg-hero-mobile-1', 'bg-hero-mobile-2', 'bg-hero-mobile-3');
        buttonsToChangeHero.forEach((btn) => {
            btn.classList.add('bg-background/40');
            btn.classList.remove('bg-background');
        });
        function toggleHeroButtonColor(button) {
            buttonsToChangeHero[button].classList.remove('bg-background/40');
            buttonsToChangeHero[button].classList.add('bg-background');
        }
        switch (index) {
            case 0:
                heroSection.classList.add('bg-hero-mobile-1');
                toggleHeroButtonColor(0);
                break;
            case 1:
                heroSection.classList.add('bg-hero-mobile-2');
                toggleHeroButtonColor(1);
                break;
            case 2:
                heroSection.classList.add('bg-hero-mobile-3');
                toggleHeroButtonColor(2);
                break;
        }
    }
}
