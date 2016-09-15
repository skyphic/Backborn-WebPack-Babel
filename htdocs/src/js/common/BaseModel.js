import { Model } from 'backbone';
import _ from 'underscore';

/**
 * Modelの基底クラス。
 */
export default class BaseModel extends Model {
    /**
     * urlRootを返す
     */
    get urlRoot() {
        return window.global.apiUrl;
    }

    /**
     * APIの結果をパースする。
     */
    parse(json) {
        return json.response;
    }

    /**
     * fetch。
     * デフォルト値をセットするためオーバーライド。
     */
    fetch(options) {
        return super.fetch(_.defaults(options || {}, {
            timeout: 3000,
        }));
    }
}
