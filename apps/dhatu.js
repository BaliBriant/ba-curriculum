/*
    This script is under initial development and is not yet functional.
*/

function dhatu(root) {
  // Takes a dhatu and outputs its forms to an HTML table
  output('root', root.root);
  output('trans', root.trans);
  output('pres', root.pres);
  output('fut', root.fut);
  output('imp', root.imp);
  output('pp', root.pp);
  output('abs', root.abs);
  output('inf', root.inf);
  gramlink(root);
}

function output(target, fill) {
  // Makes everything better
  document.getElementById(target).innerHTML = (isRoman(target) ? fill : i2d(fill));
}

function gramlink(dhatu) {
  var root = Sanscript.t(dhatu.root, 'iast', 'hk');
  var link = `https://sanskrit.inria.fr/cgi-bin/SKT/sktconjug.cgi?lex=SH&q=${root}&t=KH&c=${dhatu.cl}&font=roma`;
  document.getElementById('gramlink').innerHTML = `[ <a href="${link}">link</a> ]`;
}

function isRoman(field) {
  if (field == 'trans') {
    return true;
  } else {
    return false;
  }
}

function i2d(s) {
  // Takes a string in IAST, returns Devanagari
  return Sanscript.t(s, 'iast', 'devanagari');
}

function listDhatus() {
  // Outputs list of dhatus to HTML ul
  var list = "";
  console.log(listOfDhatus);
  for (let i = 0; i < listOfDhatus.length; i++) {
    let dhatu = listOfDhatus[i];
    let next = `<li><a onclick="dhatu(${dhatu.root})"><em>${dhatu.root}</em></a>
    &emsp;(${dhatu.trans})</li>\n`;
    list += next;
  }
  document.getElementById('dhatu-list').innerHTML = list;
}

// Define an object type for dhatus
function Dhatu(root, trans, cl, pres, fut, pp, abs, imp, inf) {
  this.root   = root;
  this.trans  = trans;
  this.cl     = cl;
  this.pres   = pres;
  this.fut    = fut;
  this.pp     = pp;
  this.abs    = abs;
  this.imp    = imp;
  this.inf    = inf;
}

// Dhatu objects
var as = new Dhatu('as', 'to be, exist', '2', 'asti', '', '', '', 'astu', '');
var budh = new Dhatu('budh', 'to wake up, awaken', '1', 'bodhati', '', 'buddha', '', '', 'boddhum');
var car = new Dhatu('car', 'to move, behave, act, live', '1', 'carati', 'cariṣyati', 'carita', 'caritvā', 'caratu', 'caritum');
var dā = new Dhatu('dā', 'to give', '3', 'dadāti', 'dāsyati', 'datta', 'dattvā', 'dadātu', 'dātum');

// List of dhatus
var listOfDhatus = [as, budh, car, dā];
