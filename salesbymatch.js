var findPairs = function(num, k){

    hash = {}
    nums.forEach(n => {
        hash[n] ? hash[n] += 1 : hash[n] = 1
    });

    let numUniques = new Set(nums)
    
    let counter = 0
    numsUnique.ForEach(n=>{

        key = n + k
        if (k === 0 && hash[key]>1) {
            counter ++
        }
        else if ( k!== 0 && hash[key]>0){
            counter++
        }
    })
    return counter

}