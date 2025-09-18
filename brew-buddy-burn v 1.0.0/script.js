/* JavaScript for Brew, Buddy & Burn */

// Initial settings object
let settings = {
  coffee: {
    gramsPerScoop: 10,
  },
  dog: {
    yearsPerHumanYear: 7,
  },
  calories: {
    burnRate: 5,
  },
};

// Object to hold user preferences
settings.coffee.gramsPerScoop = 10;
settings.dog.yearsPerHumanYear = 7;
settings.calories.burnRate = 5;

// Persist settings to localStorage
function saveSettings() {
  localStorage.setItem("brewBuddyBurnSettings", JSON.stringify(settings));
}

// Load settings from localStorage
function loadSettings() {
  const savedSettings = localStorage.getItem("brewBuddyBurnSettings");
  if (savedSettings) {
    settings = JSON.parse(savedSettings);
  }
}
loadSettings();

// Update settings based on user input
document
  .getElementById("coffee-grams-per-scoop")
  .addEventListener("input", function () {
    settings.coffee.gramsPerScoop = parseInt(this.value);
    saveSettings();
  });

document
  .getElementById("dog-years-per-human-year")
  .addEventListener("input", function () {
    settings.dog.yearsPerHumanYear = parseInt(this.value);
    saveSettings();
  });
document
  .getElementById("calories-burn-rate")
  .addEventListener("input", function () {
    settings.calories.burnRate = parseInt(this.value);
    saveSettings();
  });

// Coffee Brew Calculator
document
  .getElementById("calculate-coffee")
  .addEventListener("click", function () {
    const waterAmount = parseInt(document.getElementById("water-amount").value);
    const gramsPerScoop = settings.coffee.gramsPerScoop;
    const scoopsNeeded = Math.ceil(waterAmount / gramsPerScoop);
    document.getElementById(
      "coffee-result"
    ).textContent = `You need ${scoopsNeeded} scoops of coffee for ${waterAmount} ml of water.`;
  });

// Dog Age Calculator
document
  .getElementById("calculate-dog-age")
  .addEventListener("click", function () {
    const humanYears = parseInt(document.getElementById("human-years").value);
    const yearsPerHumanYear = settings.dog.yearsPerHumanYear;
    const dogYears = humanYears * yearsPerHumanYear;
    document.getElementById(
      "dog-age-result"
    ).textContent = `Your dog is ${dogYears} dog years old.`;
  });

// Calories Burned Calculator
document
  .getElementById("calculate-calories")
  .addEventListener("click", function () {
    const minutes = parseInt(document.getElementById("exercise-minutes").value);
    const burnRate = settings.calories.burnRate;
    const caloriesBurned = minutes * burnRate;
    document.getElementById(
      "calories-burned-result"
    ).textContent = `You burned approximately ${caloriesBurned} calories in ${minutes} minutes.`;
  });

// Reset all settings to default
document
  .getElementById("reset-settings")
  .addEventListener("click", function () {
    settings = {
      coffee: {
        gramsPerScoop: 10,
      },
      dog: {
        yearsPerHumanYear: 7,
      },
      calories: {
        burnRate: 5,
      },
    };
    saveSettings();
    loadSettings();
  });

// Initialize input fields with current settings
document.getElementById("coffee-grams-per-scoop").value =
  settings.coffee.gramsPerScoop;
document.getElementById("dog-years-per-human-year").value =
  settings.dog.yearsPerHumanYear;
document.getElementById("calories-burn-rate").value =
  settings.calories.burnRate;
// End of Brew, Buddy & Burn JavaScript