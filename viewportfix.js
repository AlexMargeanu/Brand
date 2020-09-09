function _fixViewportHeight() {
    var html = document.querySelector('html');

    function _onResize(event) {
        html.style.height = window.innerHeight + 'px';
    }

    window.addEventListener('resize', _.debounce(_onResize, 125, {
        leading: true,
        maxWait: 250,
        trailing: true
    }));

    _onResize();
}

_fixViewportHeight();