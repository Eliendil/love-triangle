/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var provenIndexes = new Set();
    const N = preferences.length;
    var x =0;
    for(let i=0; i < N; i++) {
      if(!provenIndexes.has(i + 1)) {
        let firstTarget = preferences[i];
        let secondTarget = preferences[firstTarget - 1];
        let thirdTarget = preferences[secondTarget - 1];
        /*
         * if second target is equal to third target, 
         * then object loves himself. 
         */
        if(thirdTarget != secondTarget && thirdTarget == i + 1) {
          x++;
          provenIndexes.add(firstTarget);
          provenIndexes.add(secondTarget);
          provenIndexes.add(thirdTarget);
        }
      }
    }
    return x;
};
