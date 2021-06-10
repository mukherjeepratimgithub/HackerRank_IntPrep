
function longestPrefixSuffix(s)
{
    var n = s.length;

    var lps = Array.from({length: n}, (_, i) => 0);
    
    // lps[0] is always 0
    lps[0] = 0; 

    // length of the previous
    // longest prefix suffix
    var len = 0;

    // the loop calculates lps[i]
    // for i = 1 to n-1
    var i = 1;
    while (i < n)
    {
        if (s.charAt(i) == s.charAt(len))
        {
            len++;
            lps[i] = len;
            i++;
        }
        
         // (pat[i] != pat[len])
        else
        {
            // This is tricky. Consider
            // the example. AAACAAAA
            // and i = 7. The idea is
            // similar to search step.
            if (len != 0)
            {
                len = lps[len-1];

                // Also, note that we do
                // not increment i here
            }
            
            // if (len == 0)
            else 
            {
                lps[i] = 0;
                i++;
            }
        }
    }

    var res = lps[n-1];

    // Since we are looking for
    // non overlapping parts.
    return (res > n/2)? n/2 : res;
}

// Driver program 
var s = "abcab";
document.write(longestPrefixSuffix(s));





