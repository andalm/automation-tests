import random from 'lodash/random';
import * as faker from 'faker';

class PostGenerator {

    static get() {
        return {
            title: faker.lorem.words(random(1, 10)),
            text: faker.lorem.words(random(1, 500))
        };
    }
}

export default PostGenerator;