class SignIn {

    _email = '#ember8';
    _password = '#ember10';
    _form = 'form#login';

    visit() {
      cy.visit('/signin');
      cy.wait(300);
      return this;
    }
  
    fillEmail(value) {
      const field = cy.get(this._email);
      field.clear();
      field.type(value);
  
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get(this._password);
      field.clear();
      field.type(value);
  
      return this;
    }
  
    submit() {
      const form = cy.get(this._form);
      form.submit();
      cy.wait(300);
      return this;
    }
  }
  
  export default SignIn;