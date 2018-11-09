// Import Database Models SEEDS NOMNOM
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync({}).then(function() {
  db.Products.bulkCreate([{
    //men products
    Image: './assets/images/menOffice/Suite.jpg',
    Department: 'Men',
    Item:'Suite',
    Price:'889.99',
    InStock:'10'
  }, {
    Image: './assets/images/menOffice/Watch.jpg',
    Department: 'men',
    Item:'Watch',
    Price:'1199.99',
    InStock:'10'
  }, {
    Image: './assets/images/menOffice/Bag.jpg',
    Department: 'Men',
    Item:'Bag',
    Price:'201.99',
    InStock:'10'   
  },
  {
    Image: './assets/images/menOffice/Blazer.jpg',
    Department: 'Men',
    Item:'Blazer',
    Price:'519.99',
    InStock:'10'
  }, {
    Image: './assets/images/menOffice/Shoe.jpg',
    Department: 'men',
    Item:'Shoe',
    Price:'457.99',
    InStock:'10'
  }, {
    Image: './assets/images/menOffice/belt.jpg',
    Department: 'Men',
    Item:'belt',
    Price:'90.00',
    InStock:'10'
    
  },
  {
    Image: './assets/images/menOffice/Shirt.jpg',
    Department: 'Men',
    Item:'shirt',
    Price:'81.99',
    InStock:'10'
  }, {
    Image: './assets/images/menOffice/Pant.jpg',
    Department: 'men',
    Item:'Pant',
    Price:'85.99',
    InStock:'10'
  }, {
    Image: './assets/images/menOffice/Socks.jpg',
    Department: 'Men',
    Item:'Socks',
    Price:'9.99',
    InStock:'1000'
    
  },
  {
    Image: './assets/images/menOffice/Tie.jpg',
    Department: 'Men',
    Item:'Tie',
    Price:'39.99',
    InStock:'10'
    
  },
  {
    Image: './assets/images/menOffice/Scarf.jpg',
    Department: 'Men',
    Item:'Scarf',
    Price:'99.99',
    InStock:'10'
    
  },

  //women products

  {
    Image: './assets/images/womenOffice/Suite.jpg',
    Department: 'women',
    Item:'Suite',
    Price:'539.99',
    InStock:'10'
  }, {
    Image: './assets/images/womenOffice/Watch.jpg',
    Department: 'women',
    Item:'Watch',
    Price:'1099.99',
    InStock:'10'
  }, {
    Image: './assets/images/womenOffice/Handbag.jpg',
    Department: 'women',
    Item:'Handbag',
    Price:'298.99',
    InStock:'10'   
  },
  {
    Image: './assets/images/womenOffice/Blazer.jpg',
    Department: 'women',
    Item:'Blazer',
    Price:'499.99',
    InStock:'10'
  }, {
    Image: './assets/images/womenOffice/Shoe.jpg',
    Department: 'women',
    Item:'Shoe',
    Price:'259.00',
    InStock:'10'
  }, {
    Image: './assets/images/womenOffice/belt.jpg',
    Department: 'women',
    Item:'belt',
    Price:'77.99',
    InStock:'10'
    
  },
  {
    Image: './assets/images/womenOffice/Shirt.jpg',
    Department: 'women',
    Item:'shirt',
    Price:'55.00',
    InStock:'10'
  }, {
    Image: './assets/images/womenOffice/Pant.jpg',
    Department: 'women',
    Item:'Pant',
    Price:'74.99',
    InStock:'10'
  }, {
    Image: './assets/images/womenOffice/Socks.jpg',
    Department: 'women',
    Item:'Socks',
    Price:'19.99',
    InStock:'100'
    
  },
  {
    Image: './assets/images/womenOffice/Scarf.jpg',
    Department: 'women',
    Item:'Scarf',
    Price:'79.99',
    InStock:'20'
    
  },
  {
    Image: './assets/images/womenOffice/Earings.jpg',
    Department: 'Men',
    Item:'Scarf',
    Price:'59.99',
    InStock:'10'
    
  },
  {
    Image: './assets/images/womenOffice/Skirt.jpg',
    Department: 'women',
    Item:'Scarf',
    Price:'89.99',
    InStock:'20'
    
  },
  {
    Image: './assets/image/womenOffice/Clasic.jpg',
    Department: 'women',
    Item:'Clasic',
    Price:'479.99',
    InStock:'20'
    
  }
]).then(function(response) {
    console.log('Data successfully added!')
  }).catch(function(error) {
    console.log('Error', error)
  });
});