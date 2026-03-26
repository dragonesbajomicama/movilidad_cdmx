const GRID_ID = "smart-grid";
const CELL_VAR = "--grid-cell";
const TEXT_SELECTORS = [".card", ".card-hero", ".card-focus", ".card-details"];

let gridEl = null;
let cellSize = 72;
let cols = 0;
let rows = 0;
let cells = [];

function getCellSize() {
  const value = getComputedStyle(document.documentElement).getPropertyValue(CELL_VAR).trim();
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? 72 : parsed;
}

function ensureGrid() {
  gridEl = document.getElementById(GRID_ID);
  if (!gridEl) return false;
  return true;
}

function buildGrid() {
  if (!ensureGrid()) return;

  cellSize = getCellSize();

  const width = window.innerWidth;
  const height = window.innerHeight;

  cols = Math.ceil(width / cellSize);
  rows = Math.ceil(height / cellSize);

  gridEl.innerHTML = "";
  cells = [];

  const fragment = document.createDocumentFragment();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = document.createElement("div");
      cell.className = "grid-cell";
      cell.dataset.row = row;
      cell.dataset.col = col;
      fragment.appendChild(cell);
      cells.push(cell);
    }
  }

  gridEl.appendChild(fragment);
}

function clearActiveCells() {
  cells.forEach((cell) => cell.classList.remove("is-active"));
}

function activateCellsBehindText() {
  if (!cells.length) return;

  clearActiveCells();

  const elements = document.querySelectorAll(TEXT_SELECTORS.join(","));
  if (!elements.length) return;

  elements.forEach((el) => {
    const style = getComputedStyle(el);
    if (style.display === "none" || style.visibility === "hidden") return;

    const rect = el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const padX = cellSize * 0.35;
    const padY = cellSize * 0.35;

    const left = Math.max(0, rect.left - padX);
    const top = Math.max(0, rect.top - padY);
    const right = Math.min(window.innerWidth, rect.right + padX);
    const bottom = Math.min(window.innerHeight, rect.bottom + padY);

    const startCol = Math.floor(left / cellSize);
    const endCol = Math.floor((right - 1) / cellSize);
    const startRow = Math.floor(top / cellSize);
    const endRow = Math.floor((bottom - 1) / cellSize);

    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        const index = row * cols + col;
        const cell = cells[index];
        if (cell) cell.classList.add("is-active");
      }
    }
  });
}

function updateGrid() {
  buildGrid();
  activateCellsBehindText();
}

let resizeTimeout = null;

function requestUpdate() {
  window.requestAnimationFrame(updateGrid);
}

window.addEventListener("load", requestUpdate);
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(requestUpdate, 120);
});

document.addEventListener("DOMContentLoaded", () => {
  requestUpdate();

  const observer = new MutationObserver(() => {
    requestUpdate();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class", "style", "open"]
  });
});