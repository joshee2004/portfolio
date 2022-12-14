const activeLink = () => {
    const url = window.location.pathname;
    const filename = url.substring(url.lastIndexOf('/') + 1);
    const links = document.getElementsByClassName('headerLinks-left')[0].getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute('href') == '/' + filename) {
            links[i].classList.add('active');
        }
    }
}
activeLink();