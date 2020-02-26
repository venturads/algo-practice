let nums1 = [1,2,2,1];
let nums2 = [2,2];
let temp = new Map;

function inter(nums1, nums2) {
    const map = new Map();
    for (const n of nums1) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
    }
    const result = [];
    for (const n of nums2) {
        if (map.has(n) && map.get(n) > 0) {
            result.push(n);
            map.set(n, map.get(n) - 1);
        }
    }
    return result;
};

const intersect = (nums1, nums2) => {
    const seen = {};
    for (n of nums1) seen[n] ? seen[n]++ : seen[n] = 1;
    return nums2.filter(e => seen[e] ? seen[e]-- : false)
};

console.log(inter(nums1, nums2));