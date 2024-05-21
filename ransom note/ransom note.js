/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 //this is not an anagram question, it's to check if the argument 
//  provided for ransomNote can be made out of argument provide for magazine.
// to solve this, we will take a hashmap and store letters, provided 
//by magazine as argument and then will check if the letters provided by ransomNote
// as argument are there in the hashmap or not.
var canConstruct = function(ransomNote, magazine) {
 const charCount= new Map();
 for(const char of magazine)
 {
    charCount.set(char,(charCount.get(char)|| 0)+1);
 }
 for(const char of ransomNote)
 {
    if(!charCount.has(char) || charCount.get(char)===0)
    {
        return false;
    }
    charCount.set(char,charCount.get(char)-1);//deduct frequency of found letter
 }
 return true;
};