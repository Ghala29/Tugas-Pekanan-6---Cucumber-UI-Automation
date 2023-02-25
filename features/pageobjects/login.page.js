

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {''
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#root > div > div > div > div.css-1w7v3tn > div > button');
    }
    get btnCategory () {
        return $('#root > div > div > div.css-tnxwfz > div > a:nth-child(6)');
    }
    get btnTambah () {
        return $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a');
    }
    get inputNama () {
        return $('#nama');
    }
    get inputDeskripsi () {
        return $('#deskripsi');
    }
    get btnSimpan () {
        return $('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button');
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dashboard');
    }
}

export default new LoginPage();
