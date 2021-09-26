function initItems(items) {
  return items.map(function (item) {
    return {
      ...item,
      quantity: 0,
      actualPrice: () => this.initial_price * this.quantity * this.multiplier,
      enabled: function (cookies) {
        return this.quantity * this.initial_price * this.multiplier >= cookies;
      },
    };
  });
}

export default initItems;
