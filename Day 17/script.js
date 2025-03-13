const gridContainer = document.getElementById("sortableGrid");
let draggedItem = null;

gridContainer.addEventListener("dragstart", (e) => {
  draggedItem = e.target;
  e.target.style.opacity = "0.5";
});


gridContainer.addEventListener("dragend", (e) => {
  e.target.style.opacity = "1";
  draggedItem = null;
});


gridContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
});


gridContainer.addEventListener("drop", (e) => {
  e.preventDefault();

  const targetItem = e.target;

  if (
    targetItem &&
    targetItem !== draggedItem &&
    targetItem.classList.contains("grid-item")
  ) {
    const draggedIndex = [...gridContainer.children].indexOf(draggedItem);
    const targetIndex = [...gridContainer.children].indexOf(targetItem);
    if (draggedIndex < targetIndex) {
      gridContainer.insertBefore(draggedItem, targetItem.nextSibling);
    } else {
      gridContainer.insertBefore(draggedItem, targetItem);
    }
  }
});
