/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for(let i of ransomNote) {
        console.log(ransomNote[i], magazine[i])
        return ransomNote[i] == magazine[i] ? true : false
    }
}

canConstruct("aaa","aab");