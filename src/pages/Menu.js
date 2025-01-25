export const menuCategories = [
  {
    title: 'Coffee & Espresso',
    items: [
      'Espresso • $2.50',
      'Americano • $3.00',
      'Cappuccino • $4.00',
      'Latte • $4.50',
      'Flat White • $4.50',
      'Mocha • $5.00',
    ],
  },
  {
    title: 'Cold Brews & Iced Drinks',
    items: [
      'Cold Brew Coffee • $4.50',
      'Iced Latte • $4.75',
      'Iced Mocha • $5.25',
      'Affogato (Espresso with Ice Cream) • $5.50',
    ],
  },
  {
    title: 'Teas & More',
    items: [
      'Chai Latte • $4.50',
      'Matcha Latte • $5.00',
      'Hot Tea (Variety of Flavors) • $3.00',
      'Iced Tea (Sweet or Unsweetened) • $3.50',
      'Hot Chocolate • $4.00',
    ],
  },
  {
    title: 'Baked Goods',
    items: [
      'Croissant (Butter or Chocolate) • $3.50',
      'Blueberry Muffin • $3.75',
      'Cinnamon Roll • $4.25',
      'Bagel with Cream Cheese • $3.50',
      'Scone (Seasonal Flavors) • $4.00',
    ],
  },
  {
    title: 'Savory Snacks',
    items: [
      'Quiche Slice (Lorraine or Veggie) • $5.50',
      'Avocado Toast • $6.00',
      'Grilled Cheese Sandwich • $6.50',
      'Breakfast Wrap (Egg, Cheese & Bacon or Veggie) • $6.75',
    ],
  },
];

export const getMenuPage = () => {
  return `
    <section class="menu">
      <h2 class="menu__title">Our Menu</h2>

      <div class="menu__group">
        ${menuCategories
          .map(
            category => `
          <div class="menu__category">
            <h3 class="menu__subtitle">${category.title}</h3>
            <ul class="menu__list">
              ${category.items
                .map(
                  item => `
                <li class="menu__item">${item}</li>
              `
                )
                .join('')}
            </ul>
          </div>
        `
          )
          .join('')}
      </div>
    </section>
  `;
};
