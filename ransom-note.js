/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for(let i of ransomNote) {
        console.log(ransomNote.split(""), magazine[i])
        return ransomNote[i] == magazine[i] ? true : false
    }
}
let ran = "aaa";
let mag = "aab";
canConstruct(ran,mag);