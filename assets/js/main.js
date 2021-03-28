const menuItems = document.querySelectorAll('.menu a[href^="#"');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})



function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target);



    ScrollToPosition(to);
}


function ScrollToPosition(to) {
    window.scroll({
        top: to - 70,
        behavior: "smooth",
    });
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}