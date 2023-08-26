const sidebar = document.getElementById('sidebar');
const showSideBar = document.getElementById('showSideBar');
const userBox = document.getElementById("userBox");
const userBtn = document.getElementById("userBtn");
const adminBox = document.getElementById("adminBox");
const sidebarBtns = document.querySelectorAll("#sidebar button");
const mainDashBoard = document.querySelector(".mainDashBoard");
const dashboardBtn = document.getElementById("dashboardBtn");
const statisticsBox = document.getElementById("statisticsBox");
const statistics = document.getElementById("statisticsBtn");
const homeBtn = document.getElementById("homeBtn");
const invoiceBox = document.getElementById("invoiceBox");
const invoiceBtn = document.getElementById("invoiceBtn");


showSideBar.addEventListener('click', function() {
  sidebar.classList.toggle('show');
  if(sidebar.classList.contains("show")) {
    mainDashBoard.classList.add("blur");
  } else {
    mainDashBoard.classList.remove("blur");
  }
});

function clearBlurEffect() {
  sidebar.classList.remove("show");
  mainDashBoard.classList.remove("blur");
}

function showUserBox() {
  clearBlurEffect();
  if(adminBox.classList.contains("show") || statisticsBox.classList.contains("show") || invoiceBox.classList.contains("show")) {
    adminBox.classList.replace("show", "hide");
    statisticsBox.classList.replace("show", "hide");
    invoiceBox.classList.replace("show", "hide");
  }
    userBox.classList.replace("hide", "show");
}

function showDashBox() {
  clearBlurEffect();
  if(userBox.classList.contains("show") || statisticsBox.classList.contains("show") || invoiceBox.classList.contains("show")) {
    userBox.classList.replace("show", "hide");
    statisticsBox.classList.replace("show", "hide");
    invoiceBox.classList.replace("show", "hide");
  }
    adminBox.classList.replace("hide", "show");
}

function showStatisticsBox() {
  clearBlurEffect();
  if(userBox.classList.contains("show") || adminBox.classList.contains("show" || invoiceBox.classList.contains("show"))) {
    userBox.classList.replace("show", "hide");
    adminBox.classList.replace("show", "hide");
    invoiceBox.classList.replace("show", "hide");
  }
    statisticsBox.classList.replace("hide", "show");
}

function showInvoiceBox() {
  clearBlurEffect();
  if(userBox.classList.contains("show") || adminBox.classList.contains("show") || statisticsBox.classList.contains("show")) {
    userBox.classList.replace("show", "hide");
    adminBox.classList.replace("show", "hide");
    statisticsBox.classList.replace("show", "hide");
  }
    invoiceBox.classList.replace("hide", "show");
}

userBtn.addEventListener('click', showUserBox);
dashboardBtn.addEventListener('click', showDashBox);
statistics.addEventListener('click', showStatisticsBox);
invoiceBtn.addEventListener('click', showInvoiceBox)
homeBtn.addEventListener('click', _ => {
  showDashBox();
  sidebarBtns.forEach(btn => btn.classList.remove("active"));
  sidebarBtns[0].classList.add("active");
});


sidebarBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    let currentBtn = e.target;
    if(!currentBtn.classList.contains("active")) {
      sidebarBtns.forEach(btn => btn.classList.remove("active")); // အထဲမှာ loop ပြန်ပတ် active class remove လုပ်ပြီးမှ 
      currentBtn.classList.add("active"); // ဒီမှာ active ကို ပြန်ထည့်
    }
  })
})