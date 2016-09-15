import _ from 'underscore';
import { View, Events } from 'backbone';

// View間のイベント管理用オブジェクト
const mediator = _.extend({
    startDate: new Date(),
}, Events);


/**
 * Viewの基底クラス。
 *
 * @abstract
 */
export default class BaseView extends View {
    constructor(attributes = {}) {
        super(attributes);
    }

    get events() {
        return {};
    }

    /**
     * メディエータ(共通イベントオブジェクト)を返す。
     */
    get mediator() {
        return mediator;
    }
    
}
