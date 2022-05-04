const sequelize = require('../config/connection');
const Comment = require('../models/comment')
const { faker } = require('@faker-js/faker')

// function rComment() {
//     return {
//         comment_text: faker.lorem.sentence(),
//         user_id: faker.datatype.number({ min: 1, max: 10 }),
//         post_id: faker.datatype.number({ min: 1, max: 5 })
//     }
// }

let commentData = [
    {
        comment_text: 'Quas hic rerum.',
        user_id: 10,
        post_id: 5
    },
    {
        comment_text: 'Officiis quos et quam laudantium debitis beatae deserunt et amet.',
        user_id: 2,
        post_id: 4
    },
    {
        comment_text: 'Voluptatum numquam vel repellat cum voluptatem voluptas vel.',
        user_id: 6,
        post_id: 2
    },
    {
        comment_text: 'Qui expedita facere illo maiores.',
        user_id: 5,
        post_id: 2
    },
    {
        comment_text: 'Quisquam velit fuga necessitatibus.',
        user_id: 9,
        post_id: 4
    },
    {
        comment_text: 'Molestias adipisci quasi et aliquid cumque eos recusandae sunt.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Velit aperiam rerum qui facere et.',
        user_id: 6,
        post_id: 4
    },
    {
        comment_text: 'Veniam sint quod vel nihil eligendi occaecati modi doloribus provident.',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Ut accusamus totam blanditiis magnam eaque eaque.',
        user_id: 9,
        post_id: 5
    },
    {
        comment_text: 'Sit magnam totam cupiditate et quidem ratione voluptas nihil repellat.',
        user_id: 2,
        post_id: 4
    },
    {
        comment_text: 'Aut possimus magni.',
        user_id: 10,
        post_id: 2
    },
    {
        comment_text: 'Illum et enim.',
        user_id: 9,
        post_id: 3
    },
    {
        comment_text: 'Exercitationem aliquam ipsa velit voluptatem maiores accusantium est soluta et.',
        user_id: 8,
        post_id: 3
    },
    {
        comment_text: 'Qui nemo numquam laborum omnis quod recusandae pariatur fuga dolor.',
        user_id: 9,
        post_id: 1
    },
    {
        comment_text: 'Facere omnis autem dolorem laboriosam quasi aut ullam.',
        user_id: 8,
        post_id: 4
    },
    {
        comment_text: 'Quos ipsum rerum nisi sunt sapiente sint enim hic ratione.',
        user_id: 3,
        post_id: 5
    },
    {
        comment_text: 'Unde et quisquam fugit est ad.',
        user_id: 8,
        post_id: 2
    },
    {
        comment_text: 'Voluptas consequatur itaque natus maiores doloribus.',
        user_id: 10,
        post_id: 5
    },
    {
        comment_text: 'In molestias fugit in vel voluptatem nostrum molestias.',
        user_id: 9,
        post_id: 2
    },
    {
        comment_text: 'Veniam dolor voluptatem incidunt recusandae quia dignissimos architecto.',
        user_id: 7,
        post_id: 5
    },
    {
        comment_text: 'Recusandae voluptatibus qui rerum.',
        user_id: 6,
        post_id: 1
    },
    {
        comment_text: 'Iste eos nesciunt impedit consequuntur incidunt cupiditate cum aut incidunt.',
        user_id: 1,
        post_id: 5
    },
    {
        comment_text: 'Qui consequatur vero.',
        user_id: 8,
        post_id: 2
    },
    {
        comment_text: 'In quo commodi ullam nobis consequatur exercitationem aliquam.',
        user_id: 7,
        post_id: 2
    },
    {
        comment_text: 'Omnis quas voluptatem aperiam labore.',
        user_id: 3,
        post_id: 5
    },
    {
        comment_text: 'Quia libero soluta asperiores voluptas veniam accusamus nostrum.',
        user_id: 3,
        post_id: 5
    },
    {
        comment_text: 'Ut non consequatur corporis sint commodi ut.',
        user_id: 5,
        post_id: 2
    },
    {
        comment_text: 'Exercitationem asperiores ducimus dolores aut praesentium vero sunt.',
        user_id: 7,
        post_id: 5
    },
    {
        comment_text: 'Magnam rerum magni omnis debitis beatae et corrupti aut et.',
        user_id: 4,
        post_id: 2
    },
    {
        comment_text: 'Adipisci suscipit omnis culpa nobis laboriosam quia ullam tempore.',
        user_id: 6,
        post_id: 4
    }
]

// for (let i = 0; i < 30; i++) {
//     const comment = rComment();
//     commentData.push(comment)
// }

// console.log(commentData);

const seedComments = () => Comment.bulkCreate(commentData)
seedComments()

module.exports = seedComments;