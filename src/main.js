import "@babel/polyfill";

import App from './App/index.svelte';
import './Assets/css/global.css';

let list = [{"id": 1, "name": "Who","cvUrl": "Douglas Adams", "phone": 424242}, {"id": 2, "name": "What","cvUrl": "Don't panic", "phone": 2424}, {"id": 3, "name": "42","cvUrl": "The Answer", "phone": 123}, {"id": 4, "name": "Answer to the Ultimate Question","cvUrl": "of Life, the Universe, and Everything", "phone": 987}];

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
                case url.endsWith('/competitor/list') && method === 'GET':
                    return getList(props);
                    break;
                case url.endsWith('/change') && method === 'POST':
                    return changeCompetitor(props);
                    break;
                case /\/competitor\/(.*)$/g.test(url) && method === 'GET':
                    return getCompetitor(props);
                    break;
            }
        }

        function login(props) {
            ok({'token':'mimimi'});
        }
        function getList(props) {
            ok(list);
        }
        function getCompetitor(props) {
            const id = url.match(/\/competitor\/(.*)$/g)[0].slice(-1);
            const result = list.find(function (item) {
                return item.id === Number(id);
            })
            ok(result);
        }
        function changeCompetitor(props) {
            list.forEach( (item) => {
                if (item.id === Number(props.id)) {
                    item.name = props.name
                }
            })
            ok(list);
        }
    });
}

const app = new App({
    target: document.body
});

window.app = app;

export default app;
