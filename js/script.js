function leftLogoHeight() {
    var imgHeight = 755;
    var contentPage = parseInt(getComputedStyle(document.querySelector('.main-page')).height);
    var imgBlock = document.querySelector('.sidebar-logo-img');
    // console.log(fh + im)
    var quantity = Math.floor(contentPage / imgHeight);
    imgBlock.style.height = quantity * imgHeight + "px";
}
leftLogoHeight();