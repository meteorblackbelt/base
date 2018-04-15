function focusElement(event) {

  // if clicking already focused element, remove focus
  if (event.target.getAttribute('data-focus') !== null) {
    // event.target.removeAttribute('data-focus');
  }

  // otherwise, change focused element to this one
  else {
    clearFocusInside();

    // remove all other focuses
    Array.from(document.querySelectorAll('[data-focus]')).forEach(function(el) {
      el.removeAttribute('data-focus');
    });

    event.target.setAttribute('data-focus', "");
    setFocusInside(event.target);
  }
}

function clearFocusInside() {
  Array.from(document.querySelectorAll('[data-focus-inside]')).forEach(function(el) {
    el.removeAttribute('data-focus-inside');
  });
}

function setFocusInside(el) {
  if (el.parentElement) {
    el.parentElement.setAttribute('data-focus-inside', "");
    setFocusInside(el.parentElement);
  }
}

document.addEventListener("click", focusElement);

export default focusElement;
