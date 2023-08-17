const sidebar = document.getElementById('sidebar');
const showSideBar = document.getElementById('showSideBar');
const pageview = document.querySelector('.pageview');

showSideBar.addEventListener('click', function() {
  sidebar.classList.toggle('show');
  if(sidebar.classList.contains("show")) {
    pageview.classList.add("blur");
  } else {
    pageview.classList.remove("blur");
  }
});