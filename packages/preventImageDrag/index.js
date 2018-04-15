function preventImageDrag(event) {
	Array.from(document.querySelectorAll('img:not([draggable])')).forEach(function(el) {
    el.draggable = false;
  });
}

document.addEventListener("DOMContentLoaded", preventImageDrag);

export default preventImageDrag;
