const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedCategories = () => db.Promise.map([
	{name: 'clothing', imageURL: '/images/clothing/dress.jpg'},
	{name: 'food', imageURL: '/images/food/halo.png'},
	{name: 'accessories', imageURL: '/images/accessories/snowhat.jpg'}
], category => db.model('categories').create(category));

const seedProducts = () => db.Promise.map([
	{name: 'Stella and Chewys', category_id: 2, imageURL: '/images/food/stellaandchewys.jpg', description: 'Raw grass-fed beef. 100% complete & balanced dinner. Enchanced with probiotics & antioxidants', price: 1899, weight: "5.5oz", tags:["raw", "grain-free"]},
	{name: 'Primal Raw', category_id: 2, imageURL: '/images/food/primalraw.jpeg', description: 'Raw grass-fed duck. Grain and gluten free. Made in the USA!', price: 2099, weight: "5.5oz", tags:["raw", "grain-free"]},
	{name: 'Nature\'s Variety Instinct', category_id: 2, imageURL: '/images/food/instinct.jpeg', description: 'Raw grass-fed chicken. 95% meat, organs, bone & fat', price: 2199, weight: "5.5oz", tags:["raw", "grain-free"]},
	{name: 'Orijen Original', category_id: 2, imageURL: '/images/food/orijen.jpeg', description: 'Fresh free-run chicken and turkey. Free of rendered poultry meals. Infusions of gently freeze-dried liver', price: 2399, tags:["dry", "grain-free"]},
	{name: 'Taste of the Wild', category_id: 2, imageURL: '/images/food/tasteofthewild.png', description: 'Premium grain-free pet formula. Based on your pet\'s ancestral diet.', price: 1899, tags:["dry", "grain-free"]},
	{name: 'Buffalo Blue', category_id: 2, imageURL: '/images/food/buffaloblue.jpeg', description: 'Features real meat and includes only the finest natural ingredients', price: 1099, tags:["dry", "grain-free"]},
	{name: 'Weruva Grain-Free Selects', category_id: 2, imageURL: '/images/food/weruva.jpeg', description: 'Great for allergy-sensitive pooches. Whole chunks of wild caught tuna mixed with sweet potatoes.', price: 1099, tags:["wet", "grain-free"]},
	{name: 'Halo Spot\'s Stew', category_id: 2, imageURL: '/images/food/halo.png', description: 'Wholesome, pure, and simple recipe for dogs. A complete and balanced formula.', price: 1099, tags:["wet", "grain-free"]},
	{name: 'Nutro', category_id: 2, imageURL: '/images/food/nutro.jpeg', description: 'Provides a wholesome and delicious taste. Enhances skin and coat quality', price: 1099, tags:["wet", "grain-free"]}

	], product => db.model('products').create(product));


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedCategories)
  .then(categories => console.log(`Seeded ${categories.length} categories OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  
  .catch(error => console.error(error))
  .finally(() => db.close())
