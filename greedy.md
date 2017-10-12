Write a greedy algorithm to make change with the fewest coins possible using the Greedy Algorithm. You are given an array of coin values and an amount: computeChange(coins, amount). Return an array with the counts of each coin.

For example:  computeChange([50, 25, 10, 5, 1], 137) should return the array [2, 1, 1, 0, 2] which indicates how many of each coin: 2 50-cent pieces, 1 quarter (25 cents), 1 dime (10 cents), no nickels (5 cents), and 2 pennies (1 cent), which add up to 137 cents.

The array you return from computeChange should be the same length as the first argument (coins). Assume that coins contains the values of different coin types in decreasing order.

The greedy algorithm says that you repeatedly look for the largest coin less than or equal to the remaining amount of money, then subtract that coin from the remaining amount. When the remaining amount reaches zero (or less), return the counts of coins used. (This algorithm is not always optimal.)

You can change the variables COINS, which gives the values of the different coins you can use to make change, and AMOUNT, which is the total value of the change to make. Changing these values might be useful for debugging your program.