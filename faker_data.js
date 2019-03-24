var faker = require('faker')

var randProvName= faker.company.companyName()
var randProvOwner = faker.name.findName()
var randProvEmail = faker.internet.email()
var randProvPass = faker.internet.password()
var randDaysOpened = []
var randImage = faker.system.fileName()

for(let i=5; i <=0; i--){
    randDaysOpened.push(faker.date.weekday())
}

var randAddress = {

    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode()
}

var fakeProv = {
    "name": randProvName,
    "owner": randProvOwner,
    "specialty": "food",
    "email": randProvEmail,
    "password": randProvPass,
    "address": randAddress,
    "date_opened": randDaysOpened,
    "img": randImage
}

var fakeData = JSON.stringify(fakeProv)

console.log(fakeData+',')