/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */ /* there is another similar question at bottom too which is not availabel on leetcode */
// will take 2d array to store if the same subsequence has been encountered or not. 
var longestCommonSubsequence = function(text1, text2) {
    let m= text1.length;
    let n=text2.length;
    let dp=Array.from(Array(m+1),()=>Array(n+1).fill(0));
    for(let i=1;i<=m;i++)
        {
            for(let j=1;j<=n;j++)
                {
                    if(text1[i-1]==text2[j-1])
                        {
                            dp[i][j]=dp[i-1][j-1]+1;// if the charcters matched in both the strings then add 1
                        }
                    else // if it doesn't then
                        {
                            dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]); //take the maximum out of both the combination. In one combination, we will remove an element from the first text, in second combination, we will remove element from the second text.
                        }
                }
        }
    
    return dp[m][n];// return the utmost bottom right;
    
};

// Longest Common Substring, here the common charcters should appear one by one instead of not only following the order but they should be together too as in both the strings.


// var LongestCommonSubstr = function(text1, text2)
// {
        
//         let m=text1.length;
//         let n=text2.length;
//          let dp=Array.from(Array(m+1),()=>Array(n+1).fill(0));// will take 2d array to store if the same charcter has been encountered or not. 
//          let max = 0;
//     // Iterate over each position in the matrix
//     for (let i = 1; i <= text1.length; i++)
//       for (let j = 1; j <= text2.length; j++)

//         // If characters are equal
//         if (text1[i - 1] == text2[j - 1]) {
//           // Get the number from diagonally opposite
//           // and add 1
//           dp[i][j] = dp[i - 1][j - 1] + 1;

//           max = Math.max(dp[i][j], max);
//         }
//     return max;
 
// 		}



