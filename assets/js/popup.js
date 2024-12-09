document.addEventListener('DOMContentLoaded', function() {
    var closeBtn = document.querySelector('.close-button');
    var popup = document.getElementById('myPopup');

    closeBtn.addEventListener('click', function() {
      popup.classList.remove('show');
    });

    // Check if the device is mobile using viewport width
    if (window.innerWidth < 768) {
      // On mobile screen sizes, show the popup
      popup.classList.add('show');
    }
  });
  