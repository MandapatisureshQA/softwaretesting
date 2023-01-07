const hamburger =document.querySelector(".hamburger");
const sidebarCloseButton = document.querySelector(".close-button");
const sidebarContainer = document.querySelector(".sidebar-container");
const closeButton = document.querySelector(".close-button");

const openSidebar = ( ) => {
    sidebarContainer.classList.add("show-sidebar");
     console.log(sidebarContainer.classList);
};

const closeSidebar = () => {
    sidebarContainer.classList.remove("show-sidebar");
};

hamburger.addEventListener("click", openSidebar);
closeButton.addEventListener("click", closeSidebar);