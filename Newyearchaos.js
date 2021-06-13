function main() {
    var T = parseInt(readLine());
    for (var a0 = 0; a0 < T; a0++) {
        var n = parseInt(readLine());
        q = readLine().split(' ');
        q = q.map(Number);

        var ref = [];
        for (var i = 0; i < n; i++) {
            ref[i] = i + 1;
        }
        var totalMoves = 0;
        var offset = 0;
        for (var i = 0; i < n; i++) {
            if (i == n - 1) {
                console.log(totalMoves);
            } else {
                if (q[i] != ref[i]) {
                    var displacement = ref[i + 1] == q[i] ? 1 : (ref[i + 2] == q[i] ? 2 : 0);
                    if (displacement == 0) {
                        console.log('Too chaotic');
                        break;
                    }
                    for (var j = 0; j < displacement; j++) {
                        ref[i + displacement - j] = ref[i + displacement - j - 1];
                    }
                    ref[i] = q[i];
                    totalMoves += displacement;
                }
            
        }
    }
}
}