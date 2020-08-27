
function noScroll() {
    console.log(scrollX)
    console.log(scrollY)
  }
  
  // add listener to disable scroll
  window.addEventListener('scroll', noScroll);
  
  // Remove listener to re-enable scroll
