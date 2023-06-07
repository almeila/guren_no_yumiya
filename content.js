(function() {
  const arrow = document.createElement('img');
  arrow.src = 'data:image/svg+xml;utf8,<svg version="1.1" id="_x31_0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="width: 256px; height: 256px; opacity: 1;" xml:space="preserve"><style type="text/css">.st0{fill:%23FF0000;}</style><g><path class="st0" d="M435.93,226.973L268.797,6.36c-6.422-8.48-19.172-8.48-25.598,0L76.07,226.973c-8.011,10.574-0.469,25.754,12.797,25.754h71.297c8.867,0,16.059,7.191,16.059,16.058v227.156c0,8.871,7.187,16.058,16.058,16.058h127.437c8.867,0,16.055-7.187,16.055-16.058V268.786c0-8.867,7.191-16.058,16.058-16.058h71.297C436.398,252.727,443.941,237.547,435.93,226.973z"></path></g></svg>';
  arrow.id = 'red-arrow';
  arrow.style.position = 'fixed';
  arrow.style.zIndex = '9999';
  arrow.style.cursor = 'move';
  arrow.style.width = '70px';
  arrow.style.height = '70px';
  arrow.style.top = '100px';
  arrow.style.right = '100px';

  document.body.appendChild(arrow);

  arrow.addEventListener('mousedown', handleMouseDown, false);
  window.addEventListener('mouseup', handleMouseUp, false);
  arrow.addEventListener('contextmenu', handleRightClick, false);

  let offsetX, offsetY, isDragging = false;

  function handleMouseDown(e) {
    if (e.button === 0) {
      offsetX = e.clientX - arrow.getBoundingClientRect().left;
      offsetY = e.clientY - arrow.getBoundingClientRect().top;
      isDragging = true;
      window.addEventListener('mousemove', handleMouseMove, false);
    }
  }

  function handleMouseUp(e) {
    if (e.button === 0) {
      isDragging = false;
      window.removeEventListener('mousemove', handleMouseMove, false);
    }
  }

  function handleMouseMove(e) {
    if (isDragging) {
      arrow.style.left = e.clientX - offsetX + 'px';
      arrow.style.top = e.clientY - offsetY + 'px';
    }
  }

  function handleRightClick(e) {
    e.preventDefault();
    const currentRotation = arrow.style.transform || 'rotate(0deg)';
    const rotationValue = parseInt(currentRotation.match(/\d+/)) + (- 90);
    arrow.style.transform = `rotate(${rotationValue % 360}deg)`;
  }
})();
