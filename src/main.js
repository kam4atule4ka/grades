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
            }
        }

        function login(props) {
            ok({'token':'mimimi'});
        }

    });

}

const app = new App({
    target: document.body
});

window.app = app;

export default app;
