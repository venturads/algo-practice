var array1 = [1,3,2,4];
var array2 = [2,1,3,null,4,null,7];

// var sum = array1.map( (num, idx) => num + array2[idx] ); 
// [6,8,10,12]
function TreeNode(val) {
         this.val = val;
         this.left = this.right = null;
    }

const mergeTrees = (t1, t2) => {
    if(!t1 || !t2){
        return t1 || t2;
    }  
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};

const mtrees = mergeTrees(array1, array2);

console.log(mtrees);