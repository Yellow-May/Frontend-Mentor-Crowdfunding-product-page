"use strict";
const btnBookmark = document.getElementById("bookmark");
const btnSpan = btnBookmark === null || btnBookmark === void 0 ? void 0 : btnBookmark.querySelector("span");
if (btnBookmark && btnSpan) {
    btnBookmark.addEventListener("click", () => {
        if (btnBookmark.classList.contains("bookmarked")) {
            btnBookmark.classList.remove("bookmarked");
            btnSpan.innerText = "Bookmark";
        }
        else {
            btnBookmark.classList.add("bookmarked");
            btnSpan.innerText = "Bookmarked";
        }
    });
}
const btnProject = document.getElementById("bck-project");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalCompleted = document.getElementById("modal-completed");
const btnClsModal = document.getElementById("cls-modal");
const btnContModal = document.getElementsByClassName("gt-modal-complete");
const btnClsModalMain = document.getElementById("cls-modal-main");
const pledgeCards = document.getElementsByClassName("card-body");
if (btnProject &&
    modal &&
    modalContent &&
    modalCompleted &&
    btnClsModal &&
    btnContModal &&
    btnClsModalMain &&
    pledgeCards) {
    btnProject.addEventListener("click", () => {
        modal.style.display = "grid";
    });
    btnClsModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
    Array.from(btnContModal).forEach(btn => {
        btn.addEventListener("click", () => {
            modalContent.style.display = "none";
            modalCompleted.style.display = "grid";
        });
    });
    Array.from(pledgeCards).forEach(card => {
        const checkbox = card.querySelector(".check");
        card.addEventListener("click", () => {
            if (card.parentElement) {
                if (checkbox)
                    checkbox.checked = !checkbox.checked;
                if (checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked)
                    card.parentElement.classList.add("selected");
                else
                    card.parentElement.classList.remove("selected");
            }
        });
    });
    btnClsModalMain.addEventListener("click", () => {
        modalCompleted.style.display = "none";
        modalContent.style.display = "grid";
        modal.style.display = "none";
    });
}
const navBtn = document.getElementById("nav-btn");
const nav = document.getElementById("nav");
let navActive = false;
if (navBtn && nav) {
    navBtn.addEventListener("click", () => {
        if (!navActive) {
            navActive = true;
            nav.style.left = "50%";
        }
        else {
            navActive = false;
            nav.style.left = "-100%";
        }
    });
}
