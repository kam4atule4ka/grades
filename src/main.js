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
                case url.endsWith('/competitor') && method === 'GET':
                    return getCompetitor(props);
                    break;
            }
        }

        function login(props) {
            ok({'token':'mimimi'});
        }
        function getList(props) {
            ok([{"id": 1, "name": "Who","cvUrl": "Douglas Adams", "phone": 424242}, {"id": 2, "name": "What","cvUrl": "Don't panic", "phone": 424242}, {"id": 3, "name": "42","cvUrl": "The Answer", "phone": 424242}, {"id": 4, "name": "Answer to the Ultimate Question","cvUrl": "of Life, the Universe, and Everything", "phone": 424242}]);
        }
        function getCompetitor(props) {
            ok([{"id": 1, "name": "Douglas","status": "is not panicking", "phone": 424242 }]);
        }

    });

}

const app = new App({
    target: document.body
});

window.app = app;

export default app;
