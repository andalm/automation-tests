const faker = require('faker');
const random = require('lodash/random');
const { writeFileSync } = require('fs');

const path = './cypress/fixtures';

function generateUsers() {
  const limit = 4;
  for(let i = limit; i>1; i--) {
    let user =  JSON.stringify({
      email: faker.internet.email(),
      password: faker.lorem.words(random(1, 10))
    });
    writeFileSync(`${path}/user${i}.json`, user);
  }
  console.info('User fixtures generated');
}

function generatePosts() {
  const limit = 4;
  for(let i = limit; i>0; i--) {
    let post =  JSON.stringify({
      title: faker.lorem.words(random(1, 10)),
      text: faker.lorem.words(random(1, 500))
    });
    writeFileSync(`${path}/post${i}.json`, post);
  }
  console.info('Post fixtures generated');
}

(async function () {
  generateUsers();
  generatePosts();
})();