/* Brew, Buddy & Burn — Simple, robust JS */

// -------------------- Tab logic --------------------
function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(el => {
    el.style.display = el.id === id ? 'block' : 'none';
  });
}

// Optional: show first tab on load if none visible
document.addEventListener('DOMContentLoaded', () => {
  const anyVisible = Array.from(document.querySelectorAll('.tab-content'))
    .some(el => el.style.display !== 'none');
  if (!anyVisible) showTab('coffee');
});

// -------------------- Helpers --------------------
const $ = (sel) => document.querySelector(sel);

function toNumber(value) {
  const n = typeof value === 'number' ? value : parseFloat(String(value).trim());
  return Number.isFinite(n) ? n : NaN;
}

function requirePositiveNumber(value) {
  const n = toNumber(value);
  return Number.isFinite(n) && n > 0 ? n : NaN;
}

// -------------------- Coffee: grams & scoops --------------------
// Assumption: 10 g per scoop (change here if you prefer 12g, etc.)
const GRAMS_PER_SCOOP = 10;

$('#calculate-coffee')?.addEventListener('click', () => {
  const gPerL = requirePositiveNumber($('#coffee-strength')?.value);
  const liters = requirePositiveNumber($('#coffee-volume')?.value);

  if (Number.isNaN(gPerL) || Number.isNaN(liters)) {
    $('#coffee-result').textContent = 'Please enter valid numbers for strength (g/L) and volume (L).';
    return;
  }

  const grams = gPerL * liters;
  const scoops = Math.ceil(grams / GRAMS_PER_SCOOP);

  $('#coffee-result').textContent =
    `You need ~${grams.toFixed(1)} g of coffee (≈ ${scoops} scoop${scoops === 1 ? '' : 's'} at ${GRAMS_PER_SCOOP} g/scoop).`;
});

// -------------------- Dog age: dog → human years --------------------
/*
  Simple vet-style rule of thumb:
  - 1st dog year ≈ 15 human years
  - 2nd dog year +9 (total 24)
  - Each additional year +5
*/
function dogToHumanYears(dogYears) {
  if (dogYears <= 0) return 0;
  if (dogYears <= 1) return 15 * dogYears;              // fractional puppies supported
  if (dogYears <= 2) return 15 + 9 * (dogYears - 1);
  return 24 + 5 * (dogYears - 2);
}

$('#calculate-dog-age')?.addEventListener('click', () => {
  const dogYears = requirePositiveNumber($('#dog-age')?.value);

  if (Number.isNaN(dogYears)) {
    $('#dog-age-result').textContent = 'Please enter a valid dog age (years).';
    return;
  }

  const humanYears = dogToHumanYears(dogYears);
  $('#dog-age-result').textContent = `≈ ${humanYears.toFixed(1)} human years.`;
});

// -------------------- Calories → Exercise equivalents --------------------
/*
  Very rough per-minute calorie burn estimates for an average adult:
  - Walking (brisk): ~4 kcal/min
  - Jogging (easy): ~8 kcal/min
  - Cycling (moderate): ~7 kcal/min
  These are illustrative; real burn depends on weight, speed, etc.
*/
const BURN_WALK = 4;
const BURN_JOG = 8;
const BURN_CYCLE = 7;

$('#calculate-exercise')?.addEventListener('click', () => {
  const kcal = requirePositiveNumber($('#calories')?.value);

  if (Number.isNaN(kcal)) {
    $('#exercise-result').textContent = 'Please enter a valid calorie amount.';
    return;
  }

  const minsWalk = Math.ceil(kcal / BURN_WALK);
  const minsJog  = Math.ceil(kcal / BURN_JOG);
  const minsBike = Math.ceil(kcal / BURN_CYCLE);

  $('#exercise-result').textContent =
    `To burn ~${kcal} kcal: walking ≈ ${minsWalk} min, jogging ≈ ${minsJog} min, cycling ≈ ${minsBike} min.`;
});