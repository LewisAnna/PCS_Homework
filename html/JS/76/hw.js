(function () {
  'use strict';


  let dragging = false;
  let offset;
  let parts = [];


  document.addEventListener('mousedown', e => {
    if (e.target.classList.contains('part')) {
      e.preventDefault();

      console.log('begin drag', e);
      dragging = e.target;
      offset = { x: e.offsetX, y: e.offsetY };
    }
    if (e.target.parentNode.id === 'sidebar') {
        const p = addPart(e.target);
        p.style.left = `${e.pageX - offset.x}px`;
        p.style.top = `${e.pageY - offset.y}px`;

        dragging = p;
      } else {
        dragging = e.target;
      }
  });

  document.addEventListener('mousemove', e => {
    if (dragging) {
      console.log('dragging', e);
      dragging.style.left = `${e.pageX - offset.x}px`;
      dragging.style.top = `${e.pageY - offset.y}px`;
    }
  });

  document.addEventListener('mouseup', e => {
    dragging = null;
    console.log('done dragging', e);

  });

  function addPart(orig) {
    const p = document.createElement('img');
    p.src = orig.src;
    p.className = orig.className;
    p.style.position = 'absolute';

    document.body.append(p);
    parts.push(p);
    return p;
  }


}());