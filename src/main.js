import "@babel/polyfill";

import App from './App/index.svelte';
import './Assets/css/global.css';


window.fetch = function (url, opts) {
    const {method, props} = opts;

    return new Promise((resolve) => {
        setTimeout(handleRoute, 200);

        function ok(body) {
            resolve({ok: true, body});
        }

        function handleRoute() {
            switch (true) {
                case url.endsWith('/login') && method === 'POST':
                    return login(props);
                    break;
                case url.endsWith('/list') && method === 'GET':
                    return getList(props);
                    break;
            }
        }

        function login(props) {
            ok({'token':'mimimi'});
        }
        function getList(props) {
            ok([{"name": "1","cvUrl": "42"}, {"name": "2","cvUrl": "universe"}]);
        }

    });

}

const app = new App({
    target: document.body
});

window.app = app;

export default app;
