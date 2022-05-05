//WARNING

const btnWarning = document.getElementsByName("btn-warning")[0];

btnWarning.addEventListener("click", () => {
  const alerta = document.getElementsByClassName("alert-warning")[0];
  alerta.classList.remove("hide");
  alerta.classList.add("show");
  alerta.classList.add("showAlter");
  setTimeout(function () {
    alerta.classList.remove("show");
    alerta.classList.add("hide");
  }, 3000);
});

const btnWarningClose = document.getElementsByClassName("close-btn-warning")[0];

btnWarningClose.addEventListener("click", () => {
  const alerta = document.getElementsByClassName("alert-warning")[0];
  alerta.classList.remove("show");
  alerta.classList.add("hide");
});

//DANGER

const btnDanger = document.getElementsByName("btn-danger")[0];

btnDanger.addEventListener("click", () => {
  const alerta = document.getElementsByClassName("alert-danger")[0];
  alerta.classList.remove("hide");
  alerta.classList.add("show");
  alerta.classList.add("showAlter");
  setTimeout(function () {
    alerta.classList.remove("show");
    alerta.classList.add("hide");
  }, 3000);
});

const btnDangerClose = document.getElementsByClassName("close-btn-danger")[0];

btnDangerClose.addEventListener("click", () => {
  const alerta = document.getElementsByClassName("alert-danger")[0];
  alerta.classList.remove("show");
  alerta.classList.add("hide");
});

//SUCCESS

const btnSuccess = document.getElementsByName("btn-success")[0];

btnSuccess.addEventListener("click", () => {
  const alerta = document.getElementsByClassName("alert-success")[0];
  alerta.classList.remove("hide");
  alerta.classList.add("show");
  alerta.classList.add("showAlter");
  setTimeout(function () {
    alerta.classList.remove("show");
    alerta.classList.add("hide");
  }, 3000);
});

const btnSuccessClose = document.getElementsByClassName("close-btn-success")[0];

btnSuccessClose.addEventListener("click", () => {
  const alerta = document.getElementsByClassName("alert-success")[0];
  alerta.classList.remove("show");
  alerta.classList.add("hide");
});
