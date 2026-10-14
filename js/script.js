// Daily revenue values in rubles
const dailyRevenue = [3200, 12500, 7800, 15000, 2800, 9400, 11800];

// Ask the user for their name and show greetings
const userName = prompt("Enter your name:");
alert(`Hello, ${userName}! Welcome to the revenue analysis.`);

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

// Calculate total revenue
function calculateSum(revenues) {
  let total = 0;
  for (let revenue of revenues) {
    total += revenue;
  }
  return total;
}

// Main calculations
const maxRevenue = findMax(dailyRevenue);
const highRevenueDays = filterHighRevenue(dailyRevenue);
const totalRevenue = calculateSum(dailyRevenue);

// Count low-revenue days
let lowRevenueDays = 0;
for (let revenue of dailyRevenue) {
  if (revenue <= 3000) {
    lowRevenueDays++;
  }
}

// Calculate percentages and average
const lowRevenuePercentage = (lowRevenueDays / dailyRevenue.length) * 100;

const averageRevenue = totalRevenue / dailyRevenue.length;

// Show main result
alert(
  `Total revenue: ${totalRevenue} ₽.\n` +
    `High-revenue days: ${highRevenueDays.length}.`,
);

// Output detailed information to console
console.log("Daily revenue:", dailyRevenue);
console.log("Maximum revenue:", maxRevenue + " ₽");
console.log("High revenue days:", highRevenueDays);
console.log("Total revenue:", totalRevenue + " ₽");
console.log("Average revenue:", averageRevenue.toFixed(2) + " ₽");
console.log("Low revenue days:", lowRevenueDays);
console.log("Low revenue percentage:", lowRevenuePercentage.toFixed(2) + "%");

// Additional condition
if (averageRevenue < 5000) {
  console.log("It is worth analyzing the reasons for low revenue.");
}
