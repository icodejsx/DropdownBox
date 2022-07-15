//VARIABLES
const modal = document.querySelector(".modal");
const btn = document.getElementById("btn");
const closeBtn = document.querySelector(".close");


btn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);


//openModal
function openModal(event) {
    event.preventDefault();
    modal.style.display = "block";
}
//closenModal
function closeModal() {
     modal.style.display = "none";
}