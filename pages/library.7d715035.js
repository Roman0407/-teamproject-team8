(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),window.addEventListener("click",(d=>{d.target===e.modal&&o()})),window.addEventListener("keydown",(d=>{"Escape"!==d.code||e.modal.classList.contains("is-hidden")||o()}))})();
//# sourceMappingURL=library.7d715035.js.map