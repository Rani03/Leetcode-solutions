/**
 * @param {number[][]} triangle
 * @return {number}
 */
//we will use dp bottom up approach here(we can use top down approach too)
var minimumTotal = function(triangle) {
    const n=triangle.length;
    for(let i=n-2;i>=0;i--)//starting from the second last row since we need the last row to compute with and then we will move upward
        {
            
        for(let j=0;j<triangle[i].length;j++)
            {
                triangle[i][j]+= Math.min(triangle[i+1][j],triangle[i+1][j+1]); 
                //whichever would be the smallest , take it and add it.
        }
        }
    return triangle[0][0];//the top element contains the minimum path sum since we are using bottom-up approach
    
};