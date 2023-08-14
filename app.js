const staffBack = document.querySelector(".staffBack");
const staffWarning = document.querySelector(".staffWarning");
const staffNext = document.querySelector(".staffNext");

const serviceBack = document.querySelector(".serviceBack");
const serviceWarning = document.querySelector(".serviceWarning");
const serviceNext = document.querySelector(".serviceNext");

const dateTimeBack = document.querySelector(".dateTimeBack");
const dateTimeWarning = document.querySelector(".dateTimeWarning");
const dateTimeNext = document.querySelector(".dateTimeNext");

const confirmBack = document.querySelector(".confirmBack");
const confirmWarning = document.querySelector(".confirmWarning");
const confirmBooking = document.querySelector(".confirmBooking");

const staffPage = document.querySelector(".staff-page");
const servicePage = document.querySelector(".service-page");
const dateTimePage = document.querySelector(".date-time-page");
const confirmPage = document.querySelector(".confirm-page");

const staffBox = document.querySelectorAll(".staff-box");
const serviceBox = document.querySelectorAll(".service-box");

const nameInput = document.querySelectorAll(".confirm-form div input")[0];
const surNameInput = document.querySelectorAll(".confirm-form div input")[1];
const emailInput = document.querySelectorAll(".confirm-form div input")[2];
const phoneInput = document.querySelectorAll(".confirm-form div input")[3];

const docNameArr = [];
const serviceNameArr = [];
const servicePriceArr = [];
const dateArr = [];
// *******************************
function cursorNotAllow(a, b, c) {
  document.querySelector("." + a).style.cursor = "not-allowed";
  document.querySelector("." + b).style.cursor = "not-allowed";
  document.querySelector("." + c).style.cursor = "not-allowed";
}
function showStaffPage() {
  staffPage.style.display = "flex";
  cursorNotAllow("serviceLink", "dateTimeLink", "confirmLink");
  document.querySelector(".staffLink").style.color = "#53D56C";
  document.querySelector(".staffLink span").style.background = "#53D56C";
}
function removeStaffPage() {
  staffPage.style.display = "none";
}
function boxTransparent() {
  document.querySelectorAll(".service-box")[0].style.borderColor =
    "transparent";
  document.querySelectorAll(".service-box")[1].style.borderColor =
    "transparent";
  document.querySelectorAll(".service-box")[2].style.borderColor =
    "transparent";
}
function staffBoxFunc() {
  staffBox[0].addEventListener("click", () => {
    if (docNameArr.length > 0) {
      docNameArr.splice(0, 1);
    }
    arrResetAtServiceBox();
    staffBox[0].style.borderColor = "#53d56c";
    staffBox[1].style.borderColor = "transparent";
    staffWarning.style.visibility = "hidden";
    docNameArr.push(document.querySelectorAll(".box-info p")[0].textContent);
    boxTransparent();
  });
  staffBox[1].addEventListener("click", () => {
    if (docNameArr.length > 0) {
      docNameArr.splice(0, 1);
    }
    arrResetAtServiceBox();
    staffBox[1].style.borderColor = "#53d56c";
    staffBox[0].style.borderColor = "transparent";
    staffWarning.style.visibility = "hidden";
    docNameArr.push(document.querySelectorAll(".box-info p")[1].textContent);

    boxTransparent();
  });
}
staffBoxFunc();

showStaffPage();

staffNext.addEventListener("click", () => {
  if (docNameArr.length === 0) {
    staffWarning.style.visibility = "visible";
  } else {
    staffWarning.style.visibility = "hidden";
    showServicePage();
    removeStaffPage();
  }
});
// ****************************
// Start service
function showServicePage() {
  servicePage.style.display = "flex";
  document.querySelector(".staffLink span").style.display = "none";
  document.querySelector(".staffLink i").style.display = "flex";

  document.querySelector(".serviceLink").style.cursor = "pointer";
  document.querySelector(".serviceLink").style.color = "#53D56C";
  document.querySelector(".staffLink").style.color = "#fff";
  document.querySelector(".serviceLink span").style.background = "#53D56C";
}
function removeServicePage() {
  servicePage.style.display = "none";
  document.querySelector(".serviceLink").style.cursor = "pointer";
}

serviceBack.addEventListener("click", () => {
  showStaffPage();
  removeServicePage();
});

serviceBox[0].addEventListener("click", () => {
  arrResetAtServiceBox();
  serviceBoxBorderAndBack(0, 1, 2);

  serviceNameArr.push(
    document.querySelectorAll(".service-box .box .service-box-info p")[0]
      .textContent
  );
  servicePriceArr.push(
    document.querySelectorAll(".service-box .box .service-box-info span")[0]
      .textContent
  );
  serviceWarning.style.visibility = "hidden";
});
serviceBox[1].addEventListener("click", () => {
  arrResetAtServiceBox();
  serviceBoxBorderAndBack(1, 0, 2);

  serviceNameArr.push(
    document.querySelectorAll(".service-box .box .service-box-info p")[1]
      .textContent
  );
  servicePriceArr.push(
    document.querySelectorAll(".service-box .box .service-box-info span")[1]
      .textContent
  );
  serviceWarning.style.visibility = "hidden";
});
serviceBox[2].addEventListener("click", () => {
  arrResetAtServiceBox();
  serviceBoxBorderAndBack(2, 0, 1);

  serviceNameArr.push(
    document.querySelectorAll(".service-box .box .service-box-info p")[2]
      .textContent
  );
  servicePriceArr.push(
    document.querySelectorAll(".service-box .box .service-box-info span")[2]
      .textContent
  );
  serviceWarning.style.visibility = "hidden";
});

serviceNext.addEventListener("click", () => {
  if (serviceNameArr.length == 0 || servicePriceArr.length == 0) {
    serviceWarning.style.visibility = "visible";
  } else {
    removeServicePage();
    showDateTimePage();
  }
});
// End Service
// **************************
function showDateTimePage() {
  dateTimePage.style.display = "flex";
  document.querySelector(".serviceLink span").style.display = "none";
  document.querySelector(".serviceLink i").style.display = "flex";
  document.querySelector(".dateTimeLink").style.cursor = "pointer";
  document.querySelector(".dateTimeLink").style.color = "#53D56C";
  document.querySelector(".serviceLink").style.color = "#fff";
  document.querySelector(".dateTimeLink span").style.background = "#53D56C";
}
function removeDateTimePage() {
  dateTimePage.style.display = "none";
}
dateTimeBack.addEventListener("click", () => {
  showServicePage();
  removeDateTimePage();
});
dateTimeNext.addEventListener("click", () => {
  if (arrDate.length === 0 && Object.keys(arrTime).length === 0) {
    return (dateTimeWarning.style.visibility = "visible");
  } else {
    removeDateTimePage();
    showConfirmPage();
  }
});
// *********************************************
function showConfirmPage() {
  document.querySelector(".confirmLink").style.color = "#53D56C";
  document.querySelector(".confirmLink span").style.background = "#53D56C";
  document.querySelector(".dateTimeLink span").style.display = "none";
  document.querySelector(".dateTimeLink i").style.display = "flex";

  confirmPage.style.display = "flex";
  document.querySelector(".note-box .staff").innerText = docNameArr;
  document.querySelector(".note-box .service").innerText = serviceNameArr;
  document.querySelector(".note-box .price").innerText = servicePriceArr;
  document.querySelector(
    ".note-box .date"
  ).innerText = `${arrDate} / ${arrTime.start_time} ${arrTime.end_time}`;
}
function removeConfirmPage() {
  confirmPage.style.display = "none";
}

confirmBack.addEventListener("click", () => {
  removeConfirmPage();
  showDateTimePage();
});

confirmBooking.addEventListener("click", () => {
  document.querySelector(".confirmLink span").style.display = "none";
  document.querySelector(".confirmLink i").style.display = "flex";
  if (
    nameInput.value !== "" &&
    surNameInput.value !== "" &&
    emailInput.value !== "" &&
    phoneInput.value !== ""
  ) {
    document.querySelector(".success-alert-back").style.display = "flex";
    console.log({
      staff_id: 1,
      service_id: 1,
      date: arrDate,
      time: arrTime,
      customer: {
        name: nameInput.value,
        surname: surNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
      },
    });
  } else {
    document.querySelector(".warning-alert-back").style.display = "flex";
    document.querySelector(".confirmLink span").style.display = "flex";
    document.querySelector(".confirmLink i").style.display = "none";
  }
});
document
  .querySelector(".warning-alert-back .warning-alert .xmark i")
  .addEventListener("click", () => {
    document.querySelector(".warning-alert-back").style.display = "none";
  });
document
  .querySelector(".success-alert .xmark i")
  .addEventListener("click", () => {
    document.querySelector(".success-alert-back").style.display = "none";
  });

const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthYear = document.getElementById("month-year");
const daysTag = document.querySelector(".days-box");
const dateGet = new Date();
let currMonth = dateGet.getMonth();
let currYear = dateGet.getFullYear();
let arrDate = [];
let arrTime = {};

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class='inactive'>${lastDateofLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    liTag += `<li>${i}</li>`;
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class='inactive'>${i - lastDayofMonth + 1}</li>`;
  }
  if (currMonth > 11) {
    currMonth = 0;
  }
  if (currMonth < 0) {
    currMonth = 11;
  }

  monthYear.innerText = `${monthArr[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
  const selectHead = document.querySelector(".select-box-header");
  const span = document.createElement("span");
  selectHead.appendChild(span);
  var listItems = document.querySelectorAll(".days-box li");

  listItems.forEach(function (item) {
    item.addEventListener("click", function () {
      listItems.forEach(function (li) {
        li.style.backgroundColor = "";
      });

      item.style.backgroundColor = "#6C70DC";
    });
  });
  document.querySelectorAll(".days-box li").forEach((li) => {
    li.addEventListener("click", () => {
      if (arrDate.length > 0) {
        arrDate.splice(0, 1);
      }
      formReset();
      arrDate.push(
        `${currYear}-${currMonth < 10 ? "0" : ""}${currMonth}-${
          li.textContent < 10 ? "0" : ""
        }${li.textContent}`
      );

      span.innerText = `${currYear}-${currMonth < 10 ? "0" : ""}${currMonth}-${
        li.textContent < 10 ? "0" : ""
      }${li.textContent}`;
    });
  });
};
renderCalendar();

document
  .querySelectorAll(".select-box-section .box")[0]
  .addEventListener("click", () => {
    selectSectionBoxback(0, 1, 2);

    arrTime.start_time = document.querySelectorAll(
      ".select-box-section .box span"
    )[0].textContent;
    arrTime.end_time = document.querySelectorAll(
      ".select-box-section .box span"
    )[1].textContent;
    formReset();
    dateTimeWarning.style.visibility = "hidden";
  });
document
  .querySelectorAll(".select-box-section .box")[1]
  .addEventListener("click", () => {
    selectSectionBoxback(1, 0, 2);
    arrTime.start_time = document.querySelectorAll(
      ".select-box-section .box span"
    )[2].textContent;
    arrTime.end_time = document.querySelectorAll(
      ".select-box-section .box span"
    )[3].textContent;
    formReset();
    dateTimeWarning.style.visibility = "hidden";
  });
document
  .querySelectorAll(".select-box-section .box")[2]
  .addEventListener("click", () => {
    selectSectionBoxback(2, 1, 0);
    arrTime.start_time = document.querySelectorAll(
      ".select-box-section .box span"
    )[4].textContent;
    arrTime.end_time = document.querySelectorAll(
      ".select-box-section .box span"
    )[5].textContent;
    formReset();
    dateTimeWarning.style.visibility = "hidden";
  });
const dateHeader = document.querySelectorAll(".calendar-header span");
dateHeader.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev-date" ? currMonth - 1 : currMonth + 1;
    if (currMonth > 11) {
      currYear = icon.id === "prev-date" ? currYear - 1 : currYear + 1;
    }
    if (currMonth < 0) {
      currYear = icon.id === "prev-date" ? currYear - 1 : currYear + 1;
    }
    renderCalendar();
  });
});

function formReset() {
  nameInput.value = "";
  surNameInput.value = "";
  phoneInput.value = "";
  emailInput.value = "";
}

function arrResetAtServiceBox() {
  if (serviceNameArr.length > 0) {
    serviceNameArr.splice(0, 1);
  }
  if (servicePriceArr.length > 0) {
    servicePriceArr.splice(0, 1);
  }
  if (arrDate.length > 0) {
    arrDate.splice(0, 1);
  }
}

function selectSectionBoxback(a, b, c) {
  document.querySelectorAll(".select-box-section .box")[a].style.background =
    "#53D56C";
  document.querySelectorAll(".select-box-section .box")[b].style.background =
    "#eceff2";
  document.querySelectorAll(".select-box-section .box")[c].style.background =
    "#eceff2";
}

function serviceBoxBorderAndBack(a, b, c) {
  document.querySelectorAll(".service-box")[a].style.borderColor = "#53d56c";
  document.querySelectorAll(".service-box")[b].style.borderColor =
    "transparent";
  document.querySelectorAll(".service-box")[c].style.borderColor =
    "transparent";
  document.querySelectorAll(".days-box li").forEach((li) => {
    li.style.background = "#f5f7fa";
  });
  document.querySelectorAll(".select-box-section .box").forEach((div) => {
    div.style.background = "#eceff2";
  });
}
