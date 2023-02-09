export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

function updateBrie(item: Item): void {
  if (item.quality < 50) {
    item.quality += 1;
  }
  item.sellIn -= 1;
  if (item.sellIn < 0 && item.quality < 50) {
    item.quality += 1;
  }
}

function updatePass(item: Item): void {
  if (item.quality < 50) {
    item.quality += 1;
    if (item.sellIn < 11 && item.quality < 50) {
      item.quality += 1;
    }
    if (item.sellIn < 6 && item.quality < 50) {
      item.quality += 1;
    }
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0) {
    item.quality = 0;
  }
}

function updateHand(item: Item): void {}

function updateOther(item: Item): void {
  if (item.quality > 0) {
    item.quality -= 1;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality > 0) {
    item.quality -= 1;
  }
}

function updateConjure(item: Item): void {
  if (item.quality > 0) {
    item.quality -= 2;
  }
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0 && item.quality > 0) {
    item.quality -= 2;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case "Aged Brie":
          updateBrie(item);
          continue;
        case "Backstage passes to a TAFKAL80ETC concert":
          updatePass(item);
          continue;
        case "Sulfuras, Hand of Ragnaros":
          updateHand(item);
          continue;
        case "Conjured":
          updateConjure(item);
          continue;
        default:
          updateOther(item);
          continue;
      }
    }

    return this.items;
  }
}
