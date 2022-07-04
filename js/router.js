const routes = {
    '/': "",
    '/news/:id': 'Detailed View',
};
const states = {};

const rootDiv = document.getElementById('root');
pubsub.subscribe(window.location.pathname,(innerHtml)=>{
    rootDiv.innerHTML = innerHtml;
    states[window.location.pathname] = innerHtml
})
const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname];
    states[pathname] = routes[pathname]
}

window.onpopstate = () => {
    rootDiv.innerHTML = states[window.location.pathname]?states[window.location.pathname]:routes[window.location.pathname];
}

