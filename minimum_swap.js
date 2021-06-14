function minSwaps(arr,N)
    {
        let ans = 0;
        let temp = [...arr];
        temp.sort(function(a,b){return a-b;});
        for (let i = 0; i < N; i++)
        {
  
            // This is checking whether
            // the current element is
            // at the right place or not
            if (arr[i] != temp[i])
            {
                ans++;
  
                // Swap the current element
                // with the right index
                // so that arr[0] to arr[i] is sorted
                swap(arr, i, indexOf(arr, temp[i]));
            }
        }
        return ans;
    }
     
    function swap(arr,i,j)
    {
         let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;   
    }
     
    function indexOf(arr,ele)
    {
        for (let i = 0; i < arr.length; i++)
        {
            if (arr[i] == ele) {
                return i;
            }
        }
        return -1;
    }
     
    // Driver class
    let a=[101, 758, 315, 730, 472,
        619, 460, 479 ];
let n = a.length;
document.write(minSwaps(a, n));