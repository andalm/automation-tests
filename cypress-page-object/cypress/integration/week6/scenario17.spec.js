import HomePage from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';
import Display from '../../pages/Display';

import user from '../../fixtures/user.json';
import post from '../../fixtures/post3.json';

describe('Escenario de Pruebas 17', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post (500 caracteres), Listar Posts', () => {
    new HomePage()
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    new Dashboard()
      .goToPost()
      .goToNewPost()
      .fillTitle(post.title)
      .fillText(post.text)
      .visit();
    
    new Display()
      .screenshot('scenario17');
  });
});