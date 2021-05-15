import SignIn from './SignIn';
import Display from './Display';
class Home {

  constructor() {
    Cypress.on('uncaught:exception', _ => {
      return false;
    });

    Cypress.on('fail', _ => {
      return false;
    });
  }

  _display = Display.getInstance();

  visit() {
    cy.visit('/');
    cy.wait(300);
    this._display.screenshot();
    return this;
  }

  goToSignIn() {
    const signIn = new SignIn();
    signIn.visit();
    return signIn;
  }
}

export default Home;