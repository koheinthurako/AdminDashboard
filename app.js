const sidebar = document.getElementById('sidebar');
const showSideBar = document.getElementById('showSideBar');

showSideBar.addEventListener('click', function() {
  sidebar.classList.toggle('show');
});