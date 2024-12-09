function isMobileDevice() {
    return window.innerWidth <= 768; // Adjust this value for your breakpoint
  }
  
  function showPopup() {
    const popup = document.getElementById("mobilePopup");
    if (popup) {
      popup.style.display = "block";
    }
  }
  
  function closePopup() {
    const popup = document.getElementById("mobilePopup");
    if (popup) {
      popup.style.display = "none";
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    if (isMobileDevice()) {
      showPopup();
    }
  
    const closeBtn = document.querySelector(".popup .close");
    if (closeBtn) {
      closeBtn.addEventListener("click", closePopup);
    }
  });
  