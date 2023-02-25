

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get selector () {
        return $('#root > div > div > div.css-tnxwfz > div > a:nth-child(2)');
    }
    get alert () {
        return $('.chakra-alert');
    }
}

export default new SecurePage();
