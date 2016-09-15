import BaseView from '../common/baseView';


export default class indexView extends BaseView {
    constructor() {
        super({
            el: 'body',
        });

    }

    get events() {
        return {
            // 'click .js-news__link': 'onNewsLinkClick',
        };
    }

    render() {
       console.log('動いてるよー')
    }
}