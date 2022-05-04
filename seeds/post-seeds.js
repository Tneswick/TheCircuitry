const sequelize = require('../config/connection');
const Post = require('../models/post')
const { faker } = require('@faker-js/faker')


// function rTitle () {return faker.internet.domainWord()}
// function rContent () {return faker.lorem.paragraph()}
// function rUserId () {return faker.datatype.number({ min: 1, max: 10 })}

// function rPost() {
//     return {
//         title: faker.internet.domainWord(),
//         content: faker.lorem.paragraph(),
//         user_id: faker.datatype.number({ min: 1, max: 9 })
//     }
// }


// for (let i = 0; i < 5; i++) {
//     const post = rPost()
//     postArr.push(post)
// }


let postArr = [
    {
        title: 'showy-appetizer',
        content: 'Qui ut exercitationem inventore id doloribus nisi. Sit repudiandae sequi dolorum dolorum ea molestiae ipsam. Molestiae et est ut autem itaque vel nam qui vel. Et placeat sed necessitatibus sed reiciendis soluta qui nemo.',
        user_id: 5
    },
    {
        title: 'distant-rum',
        content: 'Et et nulla enim. Repellendus similique velit cum. Hic vel vero tempore quo aliquam quos tenetur. Facere unde error cupiditate dolorum temporibus voluptatem placeat. Excepturi culpa optio ipsam velit magnam.',
        user_id: 1
    },
    {
        title: 'distinct-tongue',
        content: 'Magni veritatis id voluptas nam itaque est. Eos assumenda dolorum. Laboriosam consectetur esse quam. Non ullam doloribus dolorem consequatur suscipit ullam adipisci quae.',
        user_id: 7
    },
    {
        title: 'witty-aim',
        content: 'Dolorem aut qui culpa quibusdam qui. Molestiae laborum quia excepturi nulla similique eaque nihil. Facilis et autem dolorum est officiis. Dolor tempora iusto. Reiciendis repellendus ut earum et voluptatibus atque vero ut. Natus sed temporibus voluptatem qui laudantium rerum quia qui in.',
        user_id: 2
    },
    {
        title: 'mindless-elephant',
        content: 'Voluptatem nulla reprehenderit commodi minima eaque mollitia necessitatibus. Nemo facere alias expedita nulla suscipit. Nostrum ab assumenda quas atque. Ut rerum voluptas consequatur sunt dolores.',
        user_id: 4
    }

]

const seedPosts = () => Post.bulkCreate(postArr)
seedPosts()
module.exports = seedPosts;