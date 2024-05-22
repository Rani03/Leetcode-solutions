/**
 * @param {number[][]} grid
 * @return {number}
 */
//use DP table
var minPathSum = function(grid) {
    const m =grid.length; //number of rows
    const n=grid[0].length //number of columns

    // Create a 2D array for dp with the same dimensions as grid with all elements initialized to 0
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    
    // Initialize the starting point
    dp[0][0] = grid[0][0];
    
    // Initialize the first row
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }
    
    // Initialize the first column
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    
    // Fill the dp array
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    
    // The minimum path sum is at the bottom-right corner
    return dp[m - 1][n - 1];
};