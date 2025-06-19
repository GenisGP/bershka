import { categories } from "./constants";
import { Category } from "./interfaces";

export const getCategoryPath = (categories: Category[], categoryName: string): string | null => {
  for (const { name, subcategories } of categories) {
    if (name === categoryName) return `/${name}`

    const nestedPath = getCategoryPath(subcategories, categoryName)
    if (nestedPath) return `/${name}${nestedPath}`
  }

  return null
};

// OUTPUT SAMPLES
console.log(
  `should output: '/category1/category3/category4' => `, 
  getCategoryPath(categories, 'category4')
);
console.log(
  `should output: '/category1/category2' => `, 
  getCategoryPath(categories, 'category2')
);
console.log(
  `should output: '/category5' => `, 
  getCategoryPath(categories, 'category5')
);