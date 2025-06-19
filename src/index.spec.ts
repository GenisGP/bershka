import { getCategoryPath } from './index';
import { categories } from './constants';

describe.each([
  { categories, categoryName: 'category4', expected: '/category1/category3/category4' },
  { categories, categoryName: 'category2', expected: '/category1/category2' },
  { categories, categoryName: 'category5', expected: '/category5' },
  { categories, categoryName: 'category_not_existing', expected: null },
  { categories: [], categoryName: 'category5', expected: null },
])('getCategoryPath', ({ categories, categoryName, expected }) => {
  describe(`When categories is ${JSON.stringify(categories)}`, () => {
    describe(`And categoryName is ${categoryName}`, () => {
      it(`should return ${expected}`, () => {
        expect(getCategoryPath(categories, categoryName)).toBe(expected)
      });
    });
  });
})
