function dhatu(root) {
  // Takes a dhatu and outputs its forms to an HTML table

}

function listDhatus(list) {
  // Takes a list of dhatus and outputs them to HTML ul

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

// List of dhatus
var as = new Dhatu('as', 'to be, exist', 2, 'asti', '', '', '', 'astu', '');
as.gramLink = 'https://sanskrit.inria.fr/cgi-bin/SKT/sktconjug.cgi?lex=SH&q=as&t=VH&c=2&font=roma';
as.defLink = '';

var car = new Dhatu('car', 'to move, behave, act, live', 1, 'carati', 'cariṣyati', 'carita', 'caritvā', 'caratu', 'caritum ');

// Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
