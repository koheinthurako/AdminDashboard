const sidebar = document.getElementById('sidebar');
const showSideBar = document.getElementById('showSideBar');
const userBox = document.getElementById("userBox");
const userBtn = document.getElementById("userBtn");
const adminBox = document.getElementById("adminBox");
const sidebarBtns = document.querySelectorAll("#sidebar button");
const dashboardBtn = document.getElementById("dashboardBtn");

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

function showDashBox() {
  if(userBox.classList.contains("show")) {
    userBox.classList.replace("show", "hide");
  }
  adminBox.classList.replace("hide", "show");
}

userBtn.addEventListener('click', showUserBox);
dashboardBtn.addEventListener('click', showDashBox);


sidebarBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    let currentBtn = e.target;
    if(!currentBtn.classList.contains("active")) {
      sidebarBtns.forEach(btn => btn.classList.remove("active")); // အထဲမှာ loop ပြန်ပတ် active class remove လုပ်ပြီးမှ 
      currentBtn.classList.add("active"); // ဒီမှာ active ကို ပြန်ထည့်
    }
  })
})