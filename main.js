const aliceTumbling = [
  { transform: 'rotate(0) scale(1) translateY(0)', filter: 'hue-rotate(0deg)' },
  { transform: 'rotate(360deg) scale(1.5) translateY(-50px)', filter: 'hue-rotate(180deg)' },
  { transform: 'rotate(720deg) scale(1) translateY(0)', filter: 'hue-rotate(360deg)' }
];

const aliceTiming = {
  duration: 3000,
  iterations: 1,
  fill: 'forwards',
  easing: 'ease-in-out'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// Add some initial styling
[alice1, alice2, alice3].forEach(alice => {
  alice.style.transformOrigin = 'center center';
  alice.style.filter = 'brightness(1)';
});

// Async/await approach with more interesting animations
async function animateAlices() {
  try {
    // First Alice: Rotate, scale up, and move up with color change
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    
    // Second Alice: Different timing for a wave effect
    await alice2.animate([
      { transform: 'rotate(0) scale(1) translateY(0)', filter: 'hue-rotate(0deg)' },
      { transform: 'rotate(-360deg) scale(0.8) translateY(50px)', filter: 'hue-rotate(-180deg)' },
      { transform: 'rotate(-720deg) scale(1) translateY(0)', filter: 'hue-rotate(-360deg)' }
    ], {
      ...aliceTiming,
      duration: 2500
    }).finished;
    
    // Third Alice: Fast spin with bounce effect
    await alice3.animate([
      { transform: 'rotate(0) scale(1)', filter: 'brightness(1)' },
      { transform: 'rotate(720deg) scale(1.2)', filter: 'brightness(1.5)' },
      { transform: 'rotate(1440deg) scale(1)', filter: 'brightness(1)' }
    ], {
      ...aliceTiming,
      duration: 2000,
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }).finished;
  } catch (error) {
    console.error(`Error animating Alices: ${error}`);
  }
}

animateAlices();
