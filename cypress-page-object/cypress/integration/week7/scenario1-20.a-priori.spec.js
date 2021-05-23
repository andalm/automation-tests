import HomePage from '../../pages/Home';
import Dashboard from '../../pages/Dashboard';

import user from '../../fixtures/user.json';
import user2 from '../../fixtures/user2.json';
import user3 from '../../fixtures/user3.json';
import user4 from '../../fixtures/user4.json';
import post1 from '../../fixtures/post1.json';
import post2 from '../../fixtures/post2.json';
import post3 from '../../fixtures/post3.json';
import post4 from '../../fixtures/post4.json';

let homePage;
let dashboard;

before(() => {
  homePage = new HomePage();
  dashboard = new Dashboard();
});

describe('Escenario de Pruebas 1 A-priori', () => {
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

describe('Escenario de Pruebas 2 A-priori', () => {
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

describe('Escenario de Pruebas 3 A-priori', () => {
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

describe('Escenario de Pruebas 4 A-priori', () => {
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

describe('Escenario de Pruebas 5 A-priori', () => {
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

describe('Escenario de Pruebas 6 A-priori', () => {
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

describe('Escenario de Pruebas 7 A-priori', () => {
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

describe('Escenario de Pruebas 8 A-priori', () => {
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

describe('Escenario de Pruebas 9 A-priori', () => {
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

describe('Escenario de Pruebas 10 A-priori', () => {
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

describe('Escenario de Pruebas 11 A-priori', () => {
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

describe('Escenario de Pruebas 12 A-priori', () => {
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

describe('Escenario de Pruebas 13 A-priori', () => {
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

describe('Escenario de Pruebas 14 A-priori', () => {
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

describe('Escenario de Pruebas 15 A-priori', () => {
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

describe('Escenario de Pruebas 16 A-priori', () => {
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

describe('Escenario de Pruebas 17 A-priori', () => {
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

describe('Escenario de Pruebas 18 A-priori', () => {
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

describe('Escenario de Pruebas 19 A-priori', () => {
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

describe('Escenario de Pruebas 20 A-priori', () => {
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