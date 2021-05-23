import random from 'lodash/random';
import * as faker from 'faker';

class UserGenerator {

    static get() {
        return {
            email: faker.internet.email(),
            password: faker.lorem.words(random(1, 10))
        };
    }
}

export default UserGenerator;