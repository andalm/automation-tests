import HomePage from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';

import PostGenerator from '../../generators/Post';
import UserGenerator from '../../generators/User';

import user from '../../fixtures/user.json';

let homePage;
let dashboard;

let user2;
let user3;
let user4;
let post1;
let post2;
let post3;
let post4;

before(() => {
  homePage = new HomePage();
  dashboard = new Dashboard();
  user2 = UserGenerator.get();
  user3 = UserGenerator.get();
  user4 = UserGenerator.get();
  post1 = PostGenerator.get();
  post2 = PostGenerator.get();
  post3 = PostGenerator.get();
  post4 = PostGenerator.get();
});

describe('Escenario de Pruebas 1 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(post1.title)
      .fillText(post1.text)
      .visit();
  });
});

describe('Escenario de Pruebas 2 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Editar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToEditPost(0)
      .fillTitle(post2.title)
      .fillText(post2.text)
      .visit();
  });
});

describe('Escenario de Pruebas 3 Pseudo Aleatorio', () => {
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

describe('Escenario de Pruebas 4 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post, Publicar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(post2.title)
      .fillText(post2.text)
      .visit()
      .goToEditPost(0)
      .publish()
      .visit();
  });
});

describe('Escenario de Pruebas 5 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Editar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToEditPost(0)
      .fillTitle(post3.title)
      .fillText(post3.text)
      .visit();
  });
});

describe('Escenario de Pruebas 6 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Crear Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user2.email)
      .fillPassword(user2.password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(post4.title)
      .fillText(post4.text)
      .visit();
  });
});

describe('Escenario de Pruebas 7 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Editar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user3.email)
      .fillPassword(user3.password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToEditPost(0)
      .fillTitle(post1.title)
      .fillText(post1.text)
      .visit();
  });
});

describe('Escenario de Pruebas 8 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Eliminar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user4.email)
      .fillPassword(user4.password)
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

describe('Escenario de Pruebas 9 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Crear Post, Publicar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user2.email)
      .fillPassword(user2.password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(post2.title)
      .fillText(post2.text)
      .visit()
      .goToEditPost(0)
      .publish()
      .visit();
  });
});

describe('Escenario de Pruebas 10 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Post, Editar Post, Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user3.email)
      .fillPassword(user3.password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToEditPost(0)
      .fillTitle(post3.title)
      .fillText(post3.text)
      .visit();
  });
});

describe('Escenario de Pruebas 11 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Crear Post, Listar Post', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(post4.title)
      .fillText(post4.text)
      .visit()
      .goToNewPost()
      .fillTitle(post1.title)
      .fillText(post1.text)
      .visit();
  });
});

describe('Escenario de Pruebas 12 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Crear Post, Listar Post', () => {
    homePage
      .goToSignIn()
      .fillEmail(user4.email)
      .fillPassword(user4.password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(post2.title)
      .fillText(post2.text)
      .visit()
      .goToNewPost()
      .fillTitle(post3.title)
      .fillText(post3.text)
      .visit();
  });
});

describe('Escenario de Pruebas 13 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Listar Post', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(post4.title)
      .fillText(post4.text)
      .visit()
      .goToEditPost(0)
      .fillTitle(post1.title)
      .fillText(post1.text)
      .visit();
  });
});

describe('Escenario de Pruebas 14 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Listar Post', () => {
    homePage
      .goToSignIn()
      .fillEmail(user2.email)
      .fillPassword(user2.password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(post2.title)
      .fillText(post2.text)
      .visit()
      .goToEditPost(0)
      .fillTitle(post3.title)
      .fillText(post3.text)
      .visit();
  });
});

describe('Escenario de Pruebas 15 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Publicar Post, Listar Post', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(post4.title)
      .fillText(post4.text)
      .visit()
      .goToEditPost(0)
      .fillTitle(post1.title)
      .fillText(post1.text)
      .visit()
      .goToEditPost(0)
      .publish()
      .visit();
  });
});

describe('Escenario de Pruebas 16 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta inválida, Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts, Editar Post, Listar Post', () => {
    homePage
      .goToSignIn()
      .fillEmail(user3.email)
      .fillPassword(user3.password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(post2.title)
      .fillText(post2.text)
      .visit()
      .goToEditPost(0)
      .fillTitle(post3.title)
      .fillText(post3.text)
      .visit();
  });
});

describe('Escenario de Pruebas 17 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post (500 caracteres), Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(post4.title)
      .fillText(post4.text)
      .visit();
  });
});

describe('Escenario de Pruebas 18 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta inválida, Listar Posts, Crear Post (500 caracteres), Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user2.email)
      .fillPassword(user2.password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(post1.title)
      .fillText(post1.text)
      .visit();
  });
});

describe('Escenario de Pruebas 19 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta válida, Listar Posts, Crear Post (500 caracteres), Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(post2.title)
      .fillText(post2.text)
      .visit();
  });
});

describe('Escenario de Pruebas 20 Pseudo Aleatorio', () => {
  it('Ingresar con cuenta inválida, Listar Posts, Crear Post (500 caracteres), Listar Posts', () => {
    homePage
      .goToSignIn()
      .fillEmail(user3.email)
      .fillPassword(user3.password)
      .submit()
      .fillEmail(user.email)
      .fillPassword(user.password)
      .submit();

    dashboard
      .goToPost()
      .goToNewPost()
      .fillTitle(post3.title)
      .fillText(post3.text)
      .visit();
  });
});