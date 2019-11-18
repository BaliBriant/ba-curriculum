function sandhi(a, b) {
    // remove whitespace from input
    var a = a.trim();
    var b = b.trim();

    // extract connecting letters
    var aEnd = a.slice(-1);
    var bStart = b.charAt(0);

    // assign letter groups
    var dasavataras = ['a', 'ā', 'i', 'ī', 'u', 'ū', 'ṛ', 'ṝ', 'ḷ', 'ḹ'];
    var aDvaya = ['a', 'ā'];
    var iDvaya = ['i', 'ī'];
    var uDvaya = ['u', 'ū'];
    var rDvaya = ['ṛ', 'ṝ'];
    var lDvaya = ['ḷ', 'ḹ'];
    var eDvaya = ['e', 'ai'];
    var oDvaya = ['o', 'au'];
    var dvayas = [aDvaya, iDvaya, uDvaya, rDvaya, lDvaya];

    // define functions
    function areEkatmakas(a, b) {
        for (let i = 0; i < dvayas.length; i++) {
            if (dvayas[i].includes(a) && dvayas[i].includes(b)) {
                return true;
            }
        }
        return false;
    }

    function makeTrivikrama(a) {
        for (let i = 0; i < dvayas.length; i++) {
            if (dvayas[i].includes(a)) {
                return dvayas[i][1];
            }
        }
    }

    // do the work

    // दशावतार एकात्मके मिलित्वा त्रिविक्रमः (Hv. 46)
    if (areEkatmakas(aEnd, bStart)) {
        return a.slice(0, -1) + makeTrivikrama(aEnd) + b.slice(1);
    }

    // अद्वयमिद्वये ए (Hv. 48)
    else if (aDvaya.includes(aEnd) && iDvaya.includes(bStart)) {
        return a.slice(0, -1) + "e" + b.slice(1);
    }
    
    // उद्वये ओ (Hv. 50)
    else if (aDvaya.includes(aEnd) && uDvaya.includes(bStart)) {
        return a.slice(0, -1) + "o" + b.slice(1);
    }
    
    // ऋद्वये अर् (Hv. 52)
    else if (aDvaya.includes(aEnd) && rDvaya.includes(bStart)) {
        return a.slice(0, -1) + "ar" + b.slice(1);
    }
    
    // एद्वये ऐ (Hv. )
    else if (false) {
        // pass
    }
    
    // when there's no sandhi
    else {
        return a + " " + b;
    }
}

function applySandhi() {
    var a = document.getElementById('stringA').value;
    var b = document.getElementById('stringB').value;
     document.getElementById('output').innerHTML = sandhi(a, b);
}