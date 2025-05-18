// js/form.js

async function loadOccupationCategories() {
  try {
    const response = await fetch('./json/occupation-cat.json');
    const data = await response.json();

    const select = document.getElementById('category');
    data.categories.forEach(cat => {
      const option = document.createElement('option');
      option.value = cat;
      option.textContent = cat;
      select.appendChild(option);
    });

  } catch (error) {
    console.error('Error loading occupation categories:', error);
  }
}

// โหลดตอนหน้าเว็บเสร็จ
window.addEventListener('DOMContentLoaded', loadOccupationCategories);
