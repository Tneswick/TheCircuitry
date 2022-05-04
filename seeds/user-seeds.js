const sequelize = require('../config/connection');
const User = require('../models/user')
const { faker } = require('@faker-js/faker')

// async function rUser() {
//     return {
//         username: faker.name.findName(),
//         email: faker.internet.email(),
//         password: faker.random.alpha(6)
//     }
// }

let userArr = [
    {
        username: 'Don Yundt II',
        email: 'Modesto_Rippin89@gmail.com',
        password: 'kirjzi'
    },
    {
        username: 'Boyd Crooks',
        email: 'Donnell.Sipes@gmail.com',
        password: 'zvmmzj'
    },
    {
        username: 'Danny Reichel',
        email: 'Jerrell_Wisoky91@hotmail.com',
        password: 'yphpta'
    },
    {
        username: 'Sheila Walter Jr.',
        email: 'Amani12@gmail.com',
        password: 'vsbvvu'
    },
    {
        username: 'Bertha Kemmer',
        email: 'Murray_Altenwerth@yahoo.com',
        password: 'etnrrn'
    },
    {
        username: 'Blanca Schaden',
        email: 'Julianne.Bernhard84@yahoo.com',
        password: 'kvbzmm'
    },
    {
        username: 'Miss Priscilla Heller',
        email: 'Mariana.Cremin58@yahoo.com',
        password: 'nllahy'
    },
    {
        username: 'Tina Bailey PhD',
        email: 'Orin31@hotmail.com',
        password: 'ucvodn'
    },
    {
        username: 'Regina Schaefer',
        email: 'Baylee.Cummings@gmail.com',
        password: 'vhuacd'
    },
    {
        username: 'Elena Smith',
        email: 'Tamara.Balistreri49@hotmail.com',
        password: 'oobemr'
    }
]

// for (let i = 0; i < 10; i++) {
//     const user = rUser()
//     userArr.push(user)
// }

// console.log(userArr)

const seedUsers = async () => {
    await User.bulkCreate(userArr, { individualHooks: true })
}

seedUsers();


module.exports = seedUsers;