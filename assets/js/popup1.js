document.addEventListener('DOMContentLoaded', function () {
  var popup = document.getElementById('popup-about');
  var closeBtn = popup.querySelector('.close-button');

  // Close popup when the close button is clicked
  closeBtn.addEventListener('click', function () {
    popup.classList.remove('show');
  });

  // Check if this popup has already been shown in this session
  if (!sessionStorage.getItem('popupShown_about')) {
    // Show the popup
    popup.classList.add('show');
    // Mark this popup as shown
    sessionStorage.setItem('popupShown_about', 'true');
  }
});