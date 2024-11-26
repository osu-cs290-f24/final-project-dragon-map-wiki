// DOM Elements
const wikiSection = document.getElementById('wiki');
const mapSection = document.getElementById('map');
const wikiViewBtn = document.getElementById('wiki-view');
const mapViewBtn = document.getElementById('map-view');
const dragonList = document.getElementById('dragon-list');
const mapContainer = document.getElementById('map-container');

// Example dragon data (10 dragons)
const dragons = [
  { name: 'Smaug', description: 'A mighty dragon from Middle-Earth.', x: 150, y: 80, image: 'images/smaug.jpg' },
  { name: 'Shenron', description: 'The Eternal Dragon from Dragon Ball.', x: 300, y: 200, image: 'images/shenron.jpg' },
  { name: 'Fafnir', description: 'A cursed dragon from Norse mythology.', x: 200, y: 150, image: 'images/fafnir.jpg' },
  { name: 'Tashfia Tabassum', description: 'The primordial dragon goddess from Babylonian myth.', x: 100, y: 250, image: 'images/tasfia.jpg' },
  { name: 'Quetzalcoatl', description: 'Feathered serpent god from Aztec mythology.', x: 500, y: 300, image: 'images/quetzalcoatl.jpg' },
  { name: 'Chase Schrepel', description: 'Thunder Dragon of Bhutan.', x: 400, y: 100, image: 'images/Chase.jpg' },
  { name: 'Lucy Cheng', description: 'The multi-headed serpent from Greek mythology.', x: 600, y: 150, image: 'images/Lucy.jpg' },
  { name: 'Kyohei Yamaguchi', description: 'The dragon that gnaws at the roots of Yggdrasil.', x: 700, y: 200, image: 'images/Kyohei.jpg' },
  { name: 'Zmey Gorynych', description: 'The three-headed dragon from Russian folklore.', x: 300, y: 400, image: 'images/zmey.jpg' },
  { name: 'Ryujin', description: 'The sea dragon god from Japanese mythology.', x: 750, y: 400, image: 'images/ryujin.jpg' }
];

// Constants for map dimensions
const MAP_WIDTH = 1000;
const MAP_HEIGHT = 600;
const MARKER_SIZE = 40;  // Marker size (width and height of the marker)

/**
 * Adjust the dragon's position to fit within the map boundaries.
 */
function adjustPosition(x, y) {
  // Ensure x and y are within the map bounds (0 to MAP_WIDTH/MAP_HEIGHT)
  x = Math.max(0 + MARKER_SIZE / 2, Math.min(x, MAP_WIDTH - MARKER_SIZE / 2));
  y = Math.max(0 + MARKER_SIZE / 2, Math.min(y, MAP_HEIGHT - MARKER_SIZE / 2));
  return { x, y };
}

/**
 * Adjust popup position to ensure it's fully visible within the map.
 */
function adjustPopupPosition(popup, markerX, markerY) {
  const popupWidth = popup.offsetWidth;
  const popupHeight = popup.offsetHeight;

  // Check if the popup is overflowing the right side
  if (markerX + popupWidth + 20 > MAP_WIDTH) {
    popup.style.left = `${markerX - popupWidth - 20}px`;  // Position on the left side
  } else {
    popup.style.left = `${markerX + 20}px`;  // Default positioning (to the right of the marker)
  }

  // Check if the popup is overflowing the bottom
  if (markerY - popupHeight < 0) {
    popup.style.top = `${markerY + 20}px`;  // Position the popup below the marker if it overflows the top
  } else {
    popup.style.top = `${markerY - popupHeight - 20}px`;  // Default positioning (above the marker)
  }

  // Check if the popup is overflowing the bottom side of the map
  if (parseInt(popup.style.top) + popupHeight > MAP_HEIGHT) {
    popup.style.top = `${MAP_HEIGHT - popupHeight - 10}px`; // Position at the bottom
  }
}

/**
 * Toggle between Wiki and Map views
 */
wikiViewBtn.addEventListener('click', () => {
  wikiSection.classList.remove('hidden');
  mapSection.classList.add('hidden');
});

mapViewBtn.addEventListener('click', () => {
  mapSection.classList.remove('hidden');
  wikiSection.classList.add('hidden');
});

// Populate Wiki view with dragon data
function populateWiki() {
  dragonList.innerHTML = ''; // Clear any existing content
  dragons.forEach(dragon => {
    const listItem = document.createElement('li');
    listItem.textContent = dragon.name;
    listItem.addEventListener('click', () => showDragonDetails(dragon));
    dragonList.appendChild(listItem);
  });
}

// Show dragon details (popup in Wiki view)
function showDragonDetails(dragon) {
  alert(`Name: ${dragon.name}\nDescription: ${dragon.description}`);
}

// Add interactive markers to the map
function populateMap() {
  dragons.forEach(dragon => {
    // Adjust the dragon's position to stay within the map bounds
    const { x, y } = adjustPosition(dragon.x, dragon.y);

    // Create marker
    const marker = document.createElement('div');
    marker.classList.add('marker');
    marker.style.left = `${x}px`;
    marker.style.top = `${y}px`;

    // Create popup
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
      <strong>${dragon.name}</strong><br>
      <img src="${dragon.image}" alt="${dragon.name}" style="width:100px; height:auto; margin-top:5px;"><br>
      ${dragon.description}
    `;
    
    // Adjust popup position to ensure it's fully visible
    adjustPopupPosition(popup, x, y);

    // Add hover functionality for popups
    marker.addEventListener('mouseover', () => (popup.style.display = 'block'));
    marker.addEventListener('mouseout', () => (popup.style.display = 'none'));

    // Append to map container
    mapContainer.appendChild(marker);
    mapContainer.appendChild(popup);
  });
}

// Initialize the app
function init() {
  populateWiki();
  populateMap();
}

// Run initialization
init();
