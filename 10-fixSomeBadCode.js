//Let's Fix Some Bad Code Part 1

//1. Transform var to const/let
const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

//2. Change variables names to descriptive ones
const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

//7. New function due to DRY principle
const getLimit = user => spendingLimits?.[user] ?? 0;

//3. Set default paramter in the function instead of using if
const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  //4. Convert to Ternary Operator and simplify the condition
  //   const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  //Similar Approach
  //   const limit = spendingLimits?.[user] ?? 0;

  //7. Refactoring
  if (value <= getLimit(user)) {
    //5. Simplifying - No need to follow the format property name: value, because of Enhanced Object Literals, it will still give the same.
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');

//8. Removing Logs and putting them at the end.

//6. Change name to descriptive
const checkExpenses = function () {
  //7. Refactor code (Same as #4) by making new function (following DRY principle) then simplify. Then remove braces since the code is just one line now.
  // const limit = spendingLimits?.[entry.user] ?? 0;
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpenses();

//9. Improve name to descriptive
//Diff kind of limit
const logBigExpenses = function (bigLimit) {
  let output = '';

  //10. Convert to Template Literal
  // Emojis are 2 chars
  //11. Convert to Ternary Operator and remove braces
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(1000);
