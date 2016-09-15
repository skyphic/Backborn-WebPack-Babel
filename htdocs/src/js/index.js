import $ from 'jquery';
import indexView from './index/IndexView';

// グローバルにjQueryを出す
if (!window.jQuery) {
    window.jQuery = window.$ = $;
}

// ページ全体動いてる？
const view = new indexView();
view.render();




