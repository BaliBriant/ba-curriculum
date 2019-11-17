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


    if (aEnd in ) {

    } else {
        return a + " " + b;
        //return b.charAt(0);
    }
}

function applySandhi() {
    var a = document.getElementById('stringA').value;
    var b = document.getElementById('stringB').value;
     document.getElementById('output').innerHTML = sandhi(a, b);
}
