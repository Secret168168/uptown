// ป้องกันกด F12, Ctrl+U, Ctrl+Shift+I,คลิ๊กขวา
document.addEventListener("keydown", function(event) {
            
  if (event.key === "F12") {
      event.preventDefault();
      window.location.href = "./img/แดง.jpg";
  }
  
  if (event.ctrlKey && event.key === "u") {
      event.preventDefault();
      window.location.href = "./img/แดง.jpg";
  }
  
  if (event.ctrlKey && event.shiftKey && event.key === "I") {
      event.preventDefault();
      window.location.href = "./img/แดง.jpg"; 
  }
});

า
document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
  window.location.href = "./img/แดง.jpg";
});