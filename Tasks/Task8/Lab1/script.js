function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault(); // allow drop
}

function dropHandler(ev) {
  ev.preventDefault();
  
  const data = ev.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);

  // ensure we drop into the column, not inside another item
  let dropZone = ev.target;
  if (!dropZone.classList.contains("column")) {
    dropZone = dropZone.closest(".column");
  }

  dropZone.appendChild(draggedElement);
}