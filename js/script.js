console.log("Lab 4 JavaScript file is connected successfully.");

// Daily revenue values in rubles
const dailyRevenue = [3200, 12500, 7800, 15000, 2800, 9400, 11800];

// Find the maximum daily revenue
function findMax(revenues) {
  let maxRevenue = revenues[0];

  for (let revenue of revenues) {
    if (revenue > maxRevenue) {
      maxRevenue = revenue;
    }
  }
  return maxRevenue;
}

// Filter days with revenue above 10,000 rubles
function filterHighRevenue(revenues) {
  return revenues.filter(function (revenue) {
    return revenue > 10000;
  });
}

// Calculate the total revenue
function calculateSum(revenues) {
  let total = 0;

  for (let revenue of revenues) {
    total += revenue;
  }
  return total;
}

const maxRevenue = findMax(dailyRevenue);
const highRevenueDays = filterHighRevenue(dailyRevenue);
const totalRevenue = calculateSum(dailyRevenue);

console.log("Maximum revenue:", maxRevenue);
console.log("High revenue days:", highRevenueDays);
console.log("Total revenue:", totalRevenue);

// Ask the user for their name
const userName = prompt("Enter your name:");

// Show a greeting
alert(`Hello, ${userName}! Welcome to the revenue analysis.`);

// Check that the script is working
console.log("Daily revenue:", dailyRevenue);

// Count low-revenue days (3,000 rubles or less)
let lowRevenueDays = 0;
for (let revenue of dailyRevenue) {
  if (revenue <= 3000) {
    lowRevenueDays++;
  }
}

// Calculate the percentage of low-revenue days
const lowRevenuePercentage = (lowRevenueDays / dailyRevenue.length) * 100;

console.log("Low revenue days:", lowRevenueDays);
console.log("Low revenue percentage:", lowRevenuePercentage.toFixed(2) + "%");
