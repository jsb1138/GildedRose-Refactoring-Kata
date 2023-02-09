import { Item, GildedRose } from "@/gilded-rose";

type singleTest = (string | number)[];
const tests: singleTest[] = require("../../test-results.json");

describe("Characterization test suite", () => {
  for (const test of tests) {
    const [item, sellIn, quality, resultSellIn, resultQuality] = test;
    it(JSON.stringify(test), () => {
      const gildedRose = new GildedRose([new Item(item, sellIn, quality)]);
      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(resultSellIn);
      expect(items[0].quality).toBe(resultQuality);
    });
  }

  it("should decrease Conjured items' quality by 2", () => {
    const gildedRose = new GildedRose([new Item("Conjured", 10, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(8);
  });

  it("should decrease Conjured items' quality by 4 if sell by date has passed", () => {
    const gildedRose = new GildedRose([new Item("Conjured", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });
});

// it("should generate all possible test scenarios", () => {
//   const shopItems: string[] = [
//     "Aged Brie",
//     "Backstage passes to a TAFKAL80ETC concert",
//     "Sulfuras, Hand of Ragnaros",
//     "other",
//   ];
//   const [minSellIn, maxSellIn] = [-1, 12];
//   const [minQuality, maxQuality] = [-1, 51];
//   const testResults: singleTest[] = [];
//   for (const item of shopItems) {
//     for (let sellIn = minSellIn; sellIn <= maxSellIn; sellIn++) {
//       for (let quality = minQuality; quality <= maxQuality; quality++) {
//         const gildedRose = new GildedRose([new Item(item, sellIn, quality)]);
//         const items = gildedRose.updateQuality();
//         const resultSellIn = items[0].sellIn;
//         const resultQuality = items[0].quality;
//         testResults.push([item, sellIn, quality, resultSellIn, resultQuality]);
//       }
//     }
//   }
//   console.log(JSON.stringify(testResults));
//   // pipe test result into .json file
// });
