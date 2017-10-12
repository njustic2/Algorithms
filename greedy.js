// ======== Here is the problem to be solved:   ========
COINS = [50, 25, 10, 5, 1];
AMOUNT = 137
coincount = [0,0,0,0,0];

// ======== Here is where your solution begins: ========

// define the function named computeChange here:
function computeChange(coins, amount) {
  var i = 0; var creminder = AMOUNT; var ccoin; 

    while( i < COINS.length )
    {
      while ( COINS[i] <= creminder )
      {
        creminder = creminder - COINS[i];
        ccoin = coincount [i] ;
        ccoin += 1;
        coincount [i] = ccoin ;

      }

      i++;
    }

    return coincount;
}

// ===================================================================
// ======== Everything below here simply displays your output ========
// ======== Do NOT change anything below this line ===================
// ===================================================================


function rightJustify(s, w) {
    // return a string of width w with s in the rightmost characters and
    // at least one space on the left. For simplicity, assume w < 20.
    var slen = s.length;
    var blanks = "                    "
    return blanks.substr(0, Math.min(20, Math.max(1, w - slen))) + s;
}


function makeChange() {
    // compute change as an array: each element of change tells
    // how many of the corresponding value in COINS to give. The
    // total value should equal AMOUNT.
    var change = computeChange(COINS, AMOUNT);
    // now format the results. Output should look like:
    // NUMBER   VALUE
    //    1       50
    //    0       25
    //    1       10
    //    1        5
    //    3        1
    // TOTAL AMOUNT: 68 (total is correct)
    //
    // First, we'll do some type checking in case change is not of the
    // expected type.
    change = [].concat(change); // force whatever it is to be an array
    // it should be an array of numbers, so let's check
    for (i = 0; i < change.length; i++) {
        if (typeof(change[i]) != 'number') {
            return "Error: the function computeChange did not return " +
                   "an array of numbers.";
        }
    }
    if (change.length > COINS.length) {
        return "Error: the function computeChange returned an array " +
               "longer than the length (" + COINS.length + ") of COINS.";
    }
    if (change.length < COINS.length) {
        return "Error: the function computeChange returned an array " +
               "shorter than the length (" + COINS.length + ") of COINS.";
    }
    var output = "<pre>NUMBER   VALUE\n"
    var sum = 0;
    for (i = 0; i < change.length; i++) {
        sum += change[i] * COINS[i];
        var n = change[i].toString();
        var a = COINS[i].toString();
        output += rightJustify(n, 4) + rightJustify(a, 9) + "\n";
    }
    output += "TOTAL AMOUNT: " + sum + " (total is ";
    output += (sum == AMOUNT ? "correct" :
                               "incorrect, should be " + AMOUNT) + ")\n";
    return output;
}


function runSolution()
{
    parent.console.log('loaded, calling runSolution()\n');
    parent.console.log('answer: ' + document.getElementById('answer').toString());
    document.getElementById('answer').innerHTML = makeChange();
}

