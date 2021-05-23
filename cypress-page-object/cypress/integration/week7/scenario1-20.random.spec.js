import HomePage from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';

import PostGenerator from '../../generators/Post';
import UserGenerator from '../../generators/User';

import user from '../../fixtures/user.json';

let homePage;
let dashboard;

before(() => {
  homePage = new HomePage();
  dashboard = new Dashboard();
});

describe('Escenario de Pruebas 1 Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});

describe('Escenario de Pruebas 2 Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Editar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToEditPost(0)
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});

describe('Escenario de Pruebas 3 Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Eliminar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToEditPost(0)
      .deletePost()
      .visit();
  });
});

describe('Escenario de Pruebas 4 Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post, Publicar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit()
      .goToEditPost(0)
      .publish()
      .visit();
  });
});

describe('Escenario de Pruebas 5 Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Editar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToEditPost(0)
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});

describe('Escenario de Pruebas 6 Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Crear Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(UserGenerator.get().email)
      .fillPassword(UserGenerator.get().password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});

describe('Escenario de Pruebas 7 Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Editar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(UserGenerator.get().email)
      .fillPassword(UserGenerator.get().password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToEditPost(0)
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});

describe('Escenario de Pruebas 8 Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Eliminar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(UserGenerator.get().email)
      .fillPassword(UserGenerator.get().password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToEditPost(0)
      .deletePost()
      .visit();
  });
});

describe('Escenario de Pruebas 9 Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Crear Post, Publicar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(UserGenerator.get().email)
      .fillPassword(UserGenerator.get().password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit()
      .goToEditPost(0)
      .publish()
      .visit();
  });
});

describe('Escenario de Pruebas 10 Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Editar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(UserGenerator.get().email)
      .fillPassword(UserGenerator.get().password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToEditPost(0)
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});

describe('Escenario de Pruebas 11 Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Crear Post, Listar Post', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});

describe('Escenario de Pruebas 12 Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Crear Post, Listar Post', () => {
    homePage
      .goToSignIn()
      .fillEmail(UserGenerator.get().email)
      .fillPassword(UserGenerator.get().password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});

describe('Escenario de Pruebas 13 Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Listar Post', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit()
      .goToEditPost(0)
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});

describe('Escenario de Pruebas 14 Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Listar Post', () => {
    homePage
      .goToSignIn()
      .fillEmail(UserGenerator.get().email)
      .fillPassword(UserGenerator.get().password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit()
      .goToEditPost(0)
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});

describe('Escenario de Pruebas 15 Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Publicar Post, Listar Post', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit()
      .goToEditPost(0)
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit()
      .goToEditPost(0)
      .publish()
      .visit();
  });
});

describe('Escenario de Pruebas 16 Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Listar Post', () => {
    homePage
      .goToSignIn()
      .fillEmail(UserGenerator.get().email)
      .fillPassword(UserGenerator.get().password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit()
      .goToEditPost(0)
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});

describe('Escenario de Pruebas 17 Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post (500 caracteres), Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});

describe('Escenario de Pruebas 18 Aleatorio', () => {
  it('Ingresar con cuenta inválida, Listar Posts, Crear Post (500 caracteres), Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(UserGenerator.get().email)
      .fillPassword(UserGenerator.get().password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});

describe('Escenario de Pruebas 19 Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post (500 caracteres), Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});

describe('Escenario de Pruebas 20 Aleatorio', () => {
  it('Ingresar con cuenta inválida, Listar Posts, Crear Post (500 caracteres), Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(UserGenerator.get().email)
      .fillPassword(UserGenerator.get().password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(PostGenerator.get().title)
      .fillText(PostGenerator.get().text)
      .visit();
  });
});