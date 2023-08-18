const sidebar = document.getElementById('sidebar');
const showSideBar = document.getElementById('showSideBar');
const userBox = document.getElementById("userBox");
const userBtn = document.getElementById("userBtn");
const adminBox = document.getElementById("adminBox");

showSideBar.addEventListener('click', function() {
  sidebar.classList.toggle('show');
  if(sidebar.classList.contains("show")) {
    adminBox.classList.add("blur");
  } else {
    adminBox.classList.remove("blur");
  }
});

function showUserBox() {
  if(adminBox.classList.contains("show")) {
    adminBox.classList.replace("show", "hide");
  }
  userBox.classList.replace("hide", "show");
}

userBtn.addEventListener('click', showUserBox);