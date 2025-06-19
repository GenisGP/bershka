# 📚 Statement 

```javascript
const categories = [
  {
    name: 'category1',
    subcategories: [
      {
        name: 'category2',
        subcategories: []
      },
      {
        name: 'category3',
        subcategories: [
          {
            name: 'category4',
            subcategories: []
          }
        ]
      }
    ]
  },
  {
    name: 'category5',
    subcategories: []
  }
];

// TO-DO: Implement this function
const getCategoryPath = (categories, categoryName) => {
  let path;


  return path;
};

// OUTPUT SAMPLES
console.log(getCategoryPath(categories, 'category4')); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, 'category2')); // should output: '/category1/category2'
console.log(getCategoryPath(categories, 'category5')); // should output: '/category5'

```

# 💡 Resolution
To solve this exercise, the method `getCategoryPath` has been created. It takes an array of categories and the name of the category as arguments.

The most efficient way to solve the exercise is by using a **recursive function**.

### *What is a Recursive Function?*
A recursive function is a function that calls itself somewhere within its body until condition met. 

In this case there are two main conditions to stop the loop:
- Find the category by name.
- There are no more categories / subcategories to look for.

# 🚀 Execution
Install dependencies.
```
npm install
```
To run `index.ts` file:
```
npm start
```
There are some logs to see some `getCategoryPath()` outputs in the console!

# 🧪 Unit test
To run unit tests with coverage in the console:
```
npm test
```