const slider = document.getElementById('unitsSlider');
const unitValue = document.getElementById('unitValue');

function updateUI() {
  // --- a) Read units from slider ---
  const units = parseInt(slider.value, 10);  // convert string → integer
  // --- b) Update unit value display ---
  unitValue.textContent = units;
}

slider.addEventListener('input', updateUI);
updateUI();
