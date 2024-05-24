/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
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
                            dp[i][j]=dp[i-1][j-1]+1;
                        }
                    else
                        {
                            dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]); //take the maximum out of both the combination. In one combination, we will remove an element from the first text, in second combination, we will remove element from the second text.
                        }
                }
        }
    
    return dp[m][n];// return the utmost bottom right;
    
};