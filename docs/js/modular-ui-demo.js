
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _danielnarey$elm_toolkit$Toolkit_Function$uncurry4 = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return A4(f, _p1._0, _p1._1, _p1._2, _p1._3);
	});
var _danielnarey$elm_toolkit$Toolkit_Function$uncurry3 = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A3(f, _p3._0, _p3._1, _p3._2);
	});
var _danielnarey$elm_toolkit$Toolkit_Function$curry4 = F5(
	function (f, a, b, c, d) {
		return f(
			{ctor: '_Tuple4', _0: a, _1: b, _2: c, _3: d});
	});
var _danielnarey$elm_toolkit$Toolkit_Function$curry3 = F4(
	function (f, a, b, c) {
		return f(
			{ctor: '_Tuple3', _0: a, _1: b, _2: c});
	});
var _danielnarey$elm_toolkit$Toolkit_Function$composeList = F2(
	function (fList, data) {
		var compose = function (functions) {
			var _p4 = functions;
			if (_p4.ctor === '[]') {
				return _elm_lang$core$Basics$identity;
			} else {
				return function (_p5) {
					return A2(
						compose,
						_p4._1,
						_p4._0(_p5));
				};
			}
		};
		return A2(compose, fList, data);
	});
var _danielnarey$elm_toolkit$Toolkit_Function$composeWithArgs = F3(
	function (f, args, data) {
		return A2(
			_danielnarey$elm_toolkit$Toolkit_Function$composeList,
			A2(_elm_lang$core$List$map, f, args),
			data);
	});
var _danielnarey$elm_toolkit$Toolkit_Function$compose4 = F2(
	function (_p6, data) {
		var _p7 = _p6;
		return _p7._3(
			_p7._2(
				_p7._1(
					_p7._0(data))));
	});
var _danielnarey$elm_toolkit$Toolkit_Function$compose3 = F2(
	function (_p8, data) {
		var _p9 = _p8;
		return _p9._2(
			_p9._1(
				_p9._0(data)));
	});
var _danielnarey$elm_toolkit$Toolkit_Function$compose = F2(
	function (_p10, data) {
		var _p11 = _p10;
		return _p11._1(
			_p11._0(data));
	});
var _danielnarey$elm_toolkit$Toolkit_Function$applyList = F2(
	function (fList, data) {
		var _p12 = fList;
		if (_p12.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p12._0(data),
				_1: A2(_danielnarey$elm_toolkit$Toolkit_Function$applyList, _p12._1, data)
			};
		}
	});
var _danielnarey$elm_toolkit$Toolkit_Function$applyWithArgs = F3(
	function (f, args, data) {
		return A2(
			_danielnarey$elm_toolkit$Toolkit_Function$applyList,
			A2(_elm_lang$core$List$map, f, args),
			data);
	});
var _danielnarey$elm_toolkit$Toolkit_Function$apply4 = F2(
	function (_p13, a) {
		var _p14 = _p13;
		return {
			ctor: '_Tuple4',
			_0: _p14._0(a),
			_1: _p14._1(a),
			_2: _p14._2(a),
			_3: _p14._3(a)
		};
	});
var _danielnarey$elm_toolkit$Toolkit_Function$apply3 = F2(
	function (_p15, a) {
		var _p16 = _p15;
		return {
			ctor: '_Tuple3',
			_0: _p16._0(a),
			_1: _p16._1(a),
			_2: _p16._2(a)
		};
	});
var _danielnarey$elm_toolkit$Toolkit_Function$apply2 = F2(
	function (_p17, a) {
		var _p18 = _p17;
		return {
			ctor: '_Tuple2',
			_0: _p18._0(a),
			_1: _p18._1(a)
		};
	});

var _danielnarey$elm_toolkit$Toolkit_Tuple$map = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: f(_p1._0),
			_1: f(_p1._1)
		};
	});

var _danielnarey$elm_toolkit$Toolkit_Tuple3$map = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple3',
			_0: f(_p1._0),
			_1: f(_p1._1),
			_2: f(_p1._2)
		};
	});
var _danielnarey$elm_toolkit$Toolkit_Tuple3$third = function (_p2) {
	var _p3 = _p2;
	return _p3._2;
};
var _danielnarey$elm_toolkit$Toolkit_Tuple3$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _danielnarey$elm_toolkit$Toolkit_Tuple3$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _danielnarey$elm_toolkit$Toolkit_Maybe$filter = function (maybeList) {
	var toSingleton = function (maybeValue) {
		var _p0 = maybeValue;
		if (_p0.ctor === 'Just') {
			return {
				ctor: '::',
				_0: _p0._0,
				_1: {ctor: '[]'}
			};
		} else {
			return {ctor: '[]'};
		}
	};
	return _elm_lang$core$List$concat(
		A2(_elm_lang$core$List$map, toSingleton, maybeList));
};
var _danielnarey$elm_toolkit$Toolkit_Maybe$zipList = function (maybeList) {
	var toSingleton = function (maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return {
				ctor: '::',
				_0: _p1._0,
				_1: {ctor: '[]'}
			};
		} else {
			return {ctor: '[]'};
		}
	};
	var _p2 = A2(_elm_lang$core$List$member, _elm_lang$core$Maybe$Nothing, maybeList);
	if (_p2 === true) {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			_elm_lang$core$List$concat(
				A2(_elm_lang$core$List$map, toSingleton, maybeList)));
	}
};
var _danielnarey$elm_toolkit$Toolkit_Maybe$zip4 = function (tuple) {
	var _p3 = tuple;
	if (((((_p3.ctor === '_Tuple4') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) && (_p3._2.ctor === 'Just')) && (_p3._3.ctor === 'Just')) {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple4', _0: _p3._0._0, _1: _p3._1._0, _2: _p3._2._0, _3: _p3._3._0});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _danielnarey$elm_toolkit$Toolkit_Maybe$zip3 = function (tuple) {
	var _p4 = tuple;
	if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple3', _0: _p4._0._0, _1: _p4._1._0, _2: _p4._2._0});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _danielnarey$elm_toolkit$Toolkit_Maybe$zip = function (tuple) {
	var _p5 = tuple;
	if (((_p5.ctor === '_Tuple2') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p5._0._0, _1: _p5._1._0});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};

var _danielnarey$elm_toolkit$Toolkit_List$zip4 = function (_p0) {
	var _p1 = _p0;
	return A5(
		_elm_lang$core$List$map4,
		F4(
			function (a, b, c, d) {
				return {ctor: '_Tuple4', _0: a, _1: b, _2: c, _3: d};
			}),
		_p1._0,
		_p1._1,
		_p1._2,
		_p1._3);
};
var _danielnarey$elm_toolkit$Toolkit_List$zip3 = function (_p2) {
	var _p3 = _p2;
	return A4(
		_elm_lang$core$List$map3,
		F3(
			function (a, b, c) {
				return {ctor: '_Tuple3', _0: a, _1: b, _2: c};
			}),
		_p3._0,
		_p3._1,
		_p3._2);
};
var _danielnarey$elm_toolkit$Toolkit_List$zip = function (_p4) {
	var _p5 = _p4;
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		_p5._0,
		_p5._1);
};
var _danielnarey$elm_toolkit$Toolkit_List$unzip4 = function (quads) {
	var step = F2(
		function (_p7, _p6) {
			var _p8 = _p7;
			var _p9 = _p6;
			return {
				ctor: '_Tuple4',
				_0: {ctor: '::', _0: _p8._0, _1: _p9._0},
				_1: {ctor: '::', _0: _p8._1, _1: _p9._1},
				_2: {ctor: '::', _0: _p8._2, _1: _p9._2},
				_3: {ctor: '::', _0: _p8._3, _1: _p9._3}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple4',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'},
			_2: {ctor: '[]'},
			_3: {ctor: '[]'}
		},
		quads);
};
var _danielnarey$elm_toolkit$Toolkit_List$unzip3 = function (triples) {
	var step = F2(
		function (_p11, _p10) {
			var _p12 = _p11;
			var _p13 = _p10;
			return {
				ctor: '_Tuple3',
				_0: {ctor: '::', _0: _p12._0, _1: _p13._0},
				_1: {ctor: '::', _0: _p12._1, _1: _p13._1},
				_2: {ctor: '::', _0: _p12._2, _1: _p13._2}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple3',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'},
			_2: {ctor: '[]'}
		},
		triples);
};
var _danielnarey$elm_toolkit$Toolkit_List$from4Tuple = function (_p14) {
	var _p15 = _p14;
	return {
		ctor: '::',
		_0: _p15._0,
		_1: {
			ctor: '::',
			_0: _p15._1,
			_1: {
				ctor: '::',
				_0: _p15._2,
				_1: {
					ctor: '::',
					_0: _p15._3,
					_1: {ctor: '[]'}
				}
			}
		}
	};
};
var _danielnarey$elm_toolkit$Toolkit_List$from3Tuple = function (_p16) {
	var _p17 = _p16;
	return {
		ctor: '::',
		_0: _p17._0,
		_1: {
			ctor: '::',
			_0: _p17._1,
			_1: {
				ctor: '::',
				_0: _p17._2,
				_1: {ctor: '[]'}
			}
		}
	};
};
var _danielnarey$elm_toolkit$Toolkit_List$from2Tuple = function (_p18) {
	var _p19 = _p18;
	return {
		ctor: '::',
		_0: _p19._0,
		_1: {
			ctor: '::',
			_0: _p19._1,
			_1: {ctor: '[]'}
		}
	};
};
var _danielnarey$elm_toolkit$Toolkit_List$unique = function (_p20) {
	return _elm_lang$core$Set$toList(
		_elm_lang$core$Set$fromList(_p20));
};
var _danielnarey$elm_toolkit$Toolkit_List$getNth = F2(
	function (n, list) {
		return (_elm_lang$core$Native_Utils.cmp(n, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, n, list));
	});
var _danielnarey$elm_toolkit$Toolkit_List$take2Tuple = function (list) {
	return _danielnarey$elm_toolkit$Toolkit_Maybe$zip(
		A2(
			_danielnarey$elm_toolkit$Toolkit_Function$apply2,
			{
				ctor: '_Tuple2',
				_0: _danielnarey$elm_toolkit$Toolkit_List$getNth(0),
				_1: _danielnarey$elm_toolkit$Toolkit_List$getNth(1)
			},
			list));
};
var _danielnarey$elm_toolkit$Toolkit_List$take3Tuple = function (list) {
	return _danielnarey$elm_toolkit$Toolkit_Maybe$zip3(
		A2(
			_danielnarey$elm_toolkit$Toolkit_Function$apply3,
			{
				ctor: '_Tuple3',
				_0: _danielnarey$elm_toolkit$Toolkit_List$getNth(0),
				_1: _danielnarey$elm_toolkit$Toolkit_List$getNth(1),
				_2: _danielnarey$elm_toolkit$Toolkit_List$getNth(2)
			},
			list));
};
var _danielnarey$elm_toolkit$Toolkit_List$take4Tuple = function (list) {
	return _danielnarey$elm_toolkit$Toolkit_Maybe$zip4(
		A2(
			_danielnarey$elm_toolkit$Toolkit_Function$apply4,
			{
				ctor: '_Tuple4',
				_0: _danielnarey$elm_toolkit$Toolkit_List$getNth(0),
				_1: _danielnarey$elm_toolkit$Toolkit_List$getNth(1),
				_2: _danielnarey$elm_toolkit$Toolkit_List$getNth(2),
				_3: _danielnarey$elm_toolkit$Toolkit_List$getNth(3)
			},
			list));
};
var _danielnarey$elm_toolkit$Toolkit_List$isOneOf = F2(
	function (list, value) {
		return A2(_elm_lang$core$List$member, value, list);
	});

var _danielnarey$elm_toolkit$Toolkit_Result$filter = function (resultList) {
	var toSingleton = function (resultValue) {
		var _p0 = resultValue;
		if (_p0.ctor === 'Ok') {
			return {
				ctor: '::',
				_0: _p0._0,
				_1: {ctor: '[]'}
			};
		} else {
			return {ctor: '[]'};
		}
	};
	return _elm_lang$core$List$concat(
		A2(_elm_lang$core$List$map, toSingleton, resultList));
};
var _danielnarey$elm_toolkit$Toolkit_Result$zipList = F2(
	function (error, resultList) {
		var toSingleton = function (resultValue) {
			var _p1 = resultValue;
			if (_p1.ctor === 'Ok') {
				return {
					ctor: '::',
					_0: _p1._0,
					_1: {ctor: '[]'}
				};
			} else {
				return {ctor: '[]'};
			}
		};
		var singletonList = A2(_elm_lang$core$List$map, toSingleton, resultList);
		var _p2 = A2(
			_elm_lang$core$List$member,
			{ctor: '[]'},
			singletonList);
		if (_p2 === true) {
			return _elm_lang$core$Result$Err(error);
		} else {
			return _elm_lang$core$Result$Ok(
				_elm_lang$core$List$concat(singletonList));
		}
	});
var _danielnarey$elm_toolkit$Toolkit_Result$zip4 = F2(
	function (error, tuple) {
		var _p3 = tuple;
		if (((((_p3.ctor === '_Tuple4') && (_p3._0.ctor === 'Ok')) && (_p3._1.ctor === 'Ok')) && (_p3._2.ctor === 'Ok')) && (_p3._3.ctor === 'Ok')) {
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p3._0._0, _1: _p3._1._0, _2: _p3._2._0, _3: _p3._3._0});
		} else {
			return _elm_lang$core$Result$Err(error);
		}
	});
var _danielnarey$elm_toolkit$Toolkit_Result$zip3 = F2(
	function (error, tuple) {
		var _p4 = tuple;
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Ok')) && (_p4._1.ctor === 'Ok')) && (_p4._2.ctor === 'Ok')) {
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple3', _0: _p4._0._0, _1: _p4._1._0, _2: _p4._2._0});
		} else {
			return _elm_lang$core$Result$Err(error);
		}
	});
var _danielnarey$elm_toolkit$Toolkit_Result$zip = F2(
	function (error, tuple) {
		var _p5 = tuple;
		if (((_p5.ctor === '_Tuple2') && (_p5._0.ctor === 'Ok')) && (_p5._1.ctor === 'Ok')) {
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple2', _0: _p5._0._0, _1: _p5._1._0});
		} else {
			return _elm_lang$core$Result$Err(error);
		}
	});
var _danielnarey$elm_toolkit$Toolkit_Result$try = F2(
	function (resultFunction, initialValue) {
		var _p6 = resultFunction(initialValue);
		if (_p6.ctor === 'Ok') {
			return _p6._0;
		} else {
			return initialValue;
		}
	});

var _elm_lang$core$Color$fmod = F2(
	function (f, n) {
		var integer = _elm_lang$core$Basics$floor(f);
		return (_elm_lang$core$Basics$toFloat(
			A2(_elm_lang$core$Basics_ops['%'], integer, n)) + f) - _elm_lang$core$Basics$toFloat(integer);
	});
var _elm_lang$core$Color$rgbToHsl = F3(
	function (red, green, blue) {
		var b = _elm_lang$core$Basics$toFloat(blue) / 255;
		var g = _elm_lang$core$Basics$toFloat(green) / 255;
		var r = _elm_lang$core$Basics$toFloat(red) / 255;
		var cMax = A2(
			_elm_lang$core$Basics$max,
			A2(_elm_lang$core$Basics$max, r, g),
			b);
		var cMin = A2(
			_elm_lang$core$Basics$min,
			A2(_elm_lang$core$Basics$min, r, g),
			b);
		var c = cMax - cMin;
		var lightness = (cMax + cMin) / 2;
		var saturation = _elm_lang$core$Native_Utils.eq(lightness, 0) ? 0 : (c / (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)));
		var hue = _elm_lang$core$Basics$degrees(60) * (_elm_lang$core$Native_Utils.eq(cMax, r) ? A2(_elm_lang$core$Color$fmod, (g - b) / c, 6) : (_elm_lang$core$Native_Utils.eq(cMax, g) ? (((b - r) / c) + 2) : (((r - g) / c) + 4)));
		return {ctor: '_Tuple3', _0: hue, _1: saturation, _2: lightness};
	});
var _elm_lang$core$Color$hslToRgb = F3(
	function (hue, saturation, lightness) {
		var normHue = hue / _elm_lang$core$Basics$degrees(60);
		var chroma = (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)) * saturation;
		var x = chroma * (1 - _elm_lang$core$Basics$abs(
			A2(_elm_lang$core$Color$fmod, normHue, 2) - 1));
		var _p0 = (_elm_lang$core$Native_Utils.cmp(normHue, 0) < 0) ? {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 1) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: x, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 2) < 0) ? {ctor: '_Tuple3', _0: x, _1: chroma, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 3) < 0) ? {ctor: '_Tuple3', _0: 0, _1: chroma, _2: x} : ((_elm_lang$core$Native_Utils.cmp(normHue, 4) < 0) ? {ctor: '_Tuple3', _0: 0, _1: x, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 5) < 0) ? {ctor: '_Tuple3', _0: x, _1: 0, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 6) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: 0, _2: x} : {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0}))))));
		var r = _p0._0;
		var g = _p0._1;
		var b = _p0._2;
		var m = lightness - (chroma / 2);
		return {ctor: '_Tuple3', _0: r + m, _1: g + m, _2: b + m};
	});
var _elm_lang$core$Color$toRgb = function (color) {
	var _p1 = color;
	if (_p1.ctor === 'RGBA') {
		return {red: _p1._0, green: _p1._1, blue: _p1._2, alpha: _p1._3};
	} else {
		var _p2 = A3(_elm_lang$core$Color$hslToRgb, _p1._0, _p1._1, _p1._2);
		var r = _p2._0;
		var g = _p2._1;
		var b = _p2._2;
		return {
			red: _elm_lang$core$Basics$round(255 * r),
			green: _elm_lang$core$Basics$round(255 * g),
			blue: _elm_lang$core$Basics$round(255 * b),
			alpha: _p1._3
		};
	}
};
var _elm_lang$core$Color$toHsl = function (color) {
	var _p3 = color;
	if (_p3.ctor === 'HSLA') {
		return {hue: _p3._0, saturation: _p3._1, lightness: _p3._2, alpha: _p3._3};
	} else {
		var _p4 = A3(_elm_lang$core$Color$rgbToHsl, _p3._0, _p3._1, _p3._2);
		var h = _p4._0;
		var s = _p4._1;
		var l = _p4._2;
		return {hue: h, saturation: s, lightness: l, alpha: _p3._3};
	}
};
var _elm_lang$core$Color$HSLA = F4(
	function (a, b, c, d) {
		return {ctor: 'HSLA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		return A4(
			_elm_lang$core$Color$HSLA,
			hue - _elm_lang$core$Basics$turns(
				_elm_lang$core$Basics$toFloat(
					_elm_lang$core$Basics$floor(hue / (2 * _elm_lang$core$Basics$pi)))),
			saturation,
			lightness,
			alpha);
	});
var _elm_lang$core$Color$hsl = F3(
	function (hue, saturation, lightness) {
		return A4(_elm_lang$core$Color$hsla, hue, saturation, lightness, 1);
	});
var _elm_lang$core$Color$complement = function (color) {
	var _p5 = color;
	if (_p5.ctor === 'HSLA') {
		return A4(
			_elm_lang$core$Color$hsla,
			_p5._0 + _elm_lang$core$Basics$degrees(180),
			_p5._1,
			_p5._2,
			_p5._3);
	} else {
		var _p6 = A3(_elm_lang$core$Color$rgbToHsl, _p5._0, _p5._1, _p5._2);
		var h = _p6._0;
		var s = _p6._1;
		var l = _p6._2;
		return A4(
			_elm_lang$core$Color$hsla,
			h + _elm_lang$core$Basics$degrees(180),
			s,
			l,
			_p5._3);
	}
};
var _elm_lang$core$Color$grayscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$greyscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$RGBA = F4(
	function (a, b, c, d) {
		return {ctor: 'RGBA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$rgba = _elm_lang$core$Color$RGBA;
var _elm_lang$core$Color$rgb = F3(
	function (r, g, b) {
		return A4(_elm_lang$core$Color$RGBA, r, g, b, 1);
	});
var _elm_lang$core$Color$lightRed = A4(_elm_lang$core$Color$RGBA, 239, 41, 41, 1);
var _elm_lang$core$Color$red = A4(_elm_lang$core$Color$RGBA, 204, 0, 0, 1);
var _elm_lang$core$Color$darkRed = A4(_elm_lang$core$Color$RGBA, 164, 0, 0, 1);
var _elm_lang$core$Color$lightOrange = A4(_elm_lang$core$Color$RGBA, 252, 175, 62, 1);
var _elm_lang$core$Color$orange = A4(_elm_lang$core$Color$RGBA, 245, 121, 0, 1);
var _elm_lang$core$Color$darkOrange = A4(_elm_lang$core$Color$RGBA, 206, 92, 0, 1);
var _elm_lang$core$Color$lightYellow = A4(_elm_lang$core$Color$RGBA, 255, 233, 79, 1);
var _elm_lang$core$Color$yellow = A4(_elm_lang$core$Color$RGBA, 237, 212, 0, 1);
var _elm_lang$core$Color$darkYellow = A4(_elm_lang$core$Color$RGBA, 196, 160, 0, 1);
var _elm_lang$core$Color$lightGreen = A4(_elm_lang$core$Color$RGBA, 138, 226, 52, 1);
var _elm_lang$core$Color$green = A4(_elm_lang$core$Color$RGBA, 115, 210, 22, 1);
var _elm_lang$core$Color$darkGreen = A4(_elm_lang$core$Color$RGBA, 78, 154, 6, 1);
var _elm_lang$core$Color$lightBlue = A4(_elm_lang$core$Color$RGBA, 114, 159, 207, 1);
var _elm_lang$core$Color$blue = A4(_elm_lang$core$Color$RGBA, 52, 101, 164, 1);
var _elm_lang$core$Color$darkBlue = A4(_elm_lang$core$Color$RGBA, 32, 74, 135, 1);
var _elm_lang$core$Color$lightPurple = A4(_elm_lang$core$Color$RGBA, 173, 127, 168, 1);
var _elm_lang$core$Color$purple = A4(_elm_lang$core$Color$RGBA, 117, 80, 123, 1);
var _elm_lang$core$Color$darkPurple = A4(_elm_lang$core$Color$RGBA, 92, 53, 102, 1);
var _elm_lang$core$Color$lightBrown = A4(_elm_lang$core$Color$RGBA, 233, 185, 110, 1);
var _elm_lang$core$Color$brown = A4(_elm_lang$core$Color$RGBA, 193, 125, 17, 1);
var _elm_lang$core$Color$darkBrown = A4(_elm_lang$core$Color$RGBA, 143, 89, 2, 1);
var _elm_lang$core$Color$black = A4(_elm_lang$core$Color$RGBA, 0, 0, 0, 1);
var _elm_lang$core$Color$white = A4(_elm_lang$core$Color$RGBA, 255, 255, 255, 1);
var _elm_lang$core$Color$lightGrey = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$grey = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGrey = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightGray = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$gray = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGray = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightCharcoal = A4(_elm_lang$core$Color$RGBA, 136, 138, 133, 1);
var _elm_lang$core$Color$charcoal = A4(_elm_lang$core$Color$RGBA, 85, 87, 83, 1);
var _elm_lang$core$Color$darkCharcoal = A4(_elm_lang$core$Color$RGBA, 46, 52, 54, 1);
var _elm_lang$core$Color$Radial = F5(
	function (a, b, c, d, e) {
		return {ctor: 'Radial', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Color$radial = _elm_lang$core$Color$Radial;
var _elm_lang$core$Color$Linear = F3(
	function (a, b, c) {
		return {ctor: 'Linear', _0: a, _1: b, _2: c};
	});
var _elm_lang$core$Color$linear = _elm_lang$core$Color$Linear;

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _danielnarey$elm_color_math$ColorMath_Hex$toColor = function (hexCode) {
	var errorMsg = A2(
		_elm_lang$core$Basics_ops['++'],
		'\'',
		A2(_elm_lang$core$Basics_ops['++'], hexCode, '\' is not a valid 3- or 6-digit hexadecimal color code'));
	var hexToInt = function (_p0) {
		return A2(
			_elm_lang$core$Basics$uncurry,
			F2(
				function (x, y) {
					return x + y;
				}),
			A2(
				_elm_lang$core$Tuple$mapFirst,
				F2(
					function (x, y) {
						return x * y;
					})(16),
				_p0));
	};
	var separateRgb = function (_p1) {
		return _danielnarey$elm_toolkit$Toolkit_Maybe$zip3(
			A2(
				_danielnarey$elm_toolkit$Toolkit_Function$apply3,
				{
					ctor: '_Tuple3',
					_0: _danielnarey$elm_toolkit$Toolkit_List$take2Tuple,
					_1: function (_p2) {
						return _danielnarey$elm_toolkit$Toolkit_List$take2Tuple(
							A2(_elm_lang$core$List$drop, 2, _p2));
					},
					_2: function (_p3) {
						return _danielnarey$elm_toolkit$Toolkit_List$take2Tuple(
							A2(_elm_lang$core$List$drop, 4, _p3));
					}
				},
				_p1));
	};
	var fromBase16 = function (keyCode) {
		return A2(
			_elm_lang$core$Array$get,
			keyCode - 65,
			_elm_lang$core$Array$fromList(
				{
					ctor: '::',
					_0: 10,
					_1: {
						ctor: '::',
						_0: 11,
						_1: {
							ctor: '::',
							_0: 12,
							_1: {
								ctor: '::',
								_0: 13,
								_1: {
									ctor: '::',
									_0: 14,
									_1: {
										ctor: '::',
										_0: 15,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}));
	};
	var charToInt = function ($char) {
		var _p4 = _elm_lang$core$Char$isDigit($char);
		if (_p4 === true) {
			return _elm_lang$core$Result$toMaybe(
				_elm_lang$core$String$toInt(
					_elm_lang$core$String$fromChar($char)));
		} else {
			return fromBase16(
				_elm_lang$core$Char$toCode($char));
		}
	};
	var checkDigits = function (charList) {
		var _p5 = _elm_lang$core$List$length(charList);
		switch (_p5) {
			case 3:
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$List$concat(
						A2(
							_elm_lang$core$List$map,
							function (c) {
								return {
									ctor: '::',
									_0: c,
									_1: {
										ctor: '::',
										_0: c,
										_1: {ctor: '[]'}
									}
								};
							},
							charList)));
			case 6:
				return _elm_lang$core$Maybe$Just(charList);
			default:
				return _elm_lang$core$Maybe$Nothing;
		}
	};
	var dropFirstChar = function (charList) {
		var _p6 = _elm_lang$core$List$head(charList);
		if ((_p6.ctor === 'Just') && (_p6._0.valueOf() === '#')) {
			return A2(_elm_lang$core$List$drop, 1, charList);
		} else {
			return charList;
		}
	};
	return A2(
		_elm_lang$core$Result$fromMaybe,
		errorMsg,
		A2(
			_elm_lang$core$Maybe$map,
			function (_p7) {
				return A2(
					_danielnarey$elm_toolkit$Toolkit_Function$uncurry3,
					_elm_lang$core$Color$rgb,
					A2(_danielnarey$elm_toolkit$Toolkit_Tuple3$map, hexToInt, _p7));
			},
			A2(
				_elm_lang$core$Maybe$andThen,
				separateRgb,
				A2(
					_elm_lang$core$Maybe$andThen,
					function (_p8) {
						return _danielnarey$elm_toolkit$Toolkit_Maybe$zipList(
							A2(_elm_lang$core$List$map, charToInt, _p8));
					},
					checkDigits(
						dropFirstChar(
							_elm_lang$core$String$toList(
								_elm_lang$core$String$toUpper(hexCode))))))));
};
var _danielnarey$elm_color_math$ColorMath_Hex$fromInt = function ($int) {
	var clamped = A3(_elm_lang$core$Basics$clamp, 0, 255, $int);
	var toBase16 = function ($int) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'!',
			A2(
				_elm_lang$core$Array$get,
				$int,
				_elm_lang$core$Array$fromList(
					{
						ctor: '::',
						_0: '0',
						_1: {
							ctor: '::',
							_0: '1',
							_1: {
								ctor: '::',
								_0: '2',
								_1: {
									ctor: '::',
									_0: '3',
									_1: {
										ctor: '::',
										_0: '4',
										_1: {
											ctor: '::',
											_0: '5',
											_1: {
												ctor: '::',
												_0: '6',
												_1: {
													ctor: '::',
													_0: '7',
													_1: {
														ctor: '::',
														_0: '8',
														_1: {
															ctor: '::',
															_0: '9',
															_1: {
																ctor: '::',
																_0: 'A',
																_1: {
																	ctor: '::',
																	_0: 'B',
																	_1: {
																		ctor: '::',
																		_0: 'C',
																		_1: {
																			ctor: '::',
																			_0: 'D',
																			_1: {
																				ctor: '::',
																				_0: 'E',
																				_1: {
																					ctor: '::',
																					_0: 'F',
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					})));
	};
	return A2(
		_elm_lang$core$Basics$uncurry,
		_elm_lang$core$String$append,
		A2(
			_danielnarey$elm_toolkit$Toolkit_Tuple$map,
			toBase16,
			{
				ctor: '_Tuple2',
				_0: (clamped / 16) | 0,
				_1: A2(_elm_lang$core$Basics$rem, clamped, 16)
			}));
};
var _danielnarey$elm_color_math$ColorMath_Hex$fromColor = function (_p9) {
	return _elm_lang$core$String$concat(
		A2(
			_elm_lang$core$List$map,
			_danielnarey$elm_color_math$ColorMath_Hex$fromInt,
			A2(
				_danielnarey$elm_toolkit$Toolkit_Function$applyList,
				{
					ctor: '::',
					_0: function (_) {
						return _.red;
					},
					_1: {
						ctor: '::',
						_0: function (_) {
							return _.green;
						},
						_1: {
							ctor: '::',
							_0: function (_) {
								return _.blue;
							},
							_1: {ctor: '[]'}
						}
					}
				},
				_elm_lang$core$Color$toRgb(_p9))));
};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _danielnarey$elm_semantic_dom$Dom$Element = F8(
	function (a, b, c, d, e, f, g, h) {
		return {tag: a, id: b, attributes: c, classes: d, children: e, text: f, namespace: g, keys: h};
	});

var _danielnarey$elm_semantic_dom$Dom_Element$hasClass = F2(
	function (name, element) {
		return A2(_elm_lang$core$List$member, name, element.classes);
	});
var _danielnarey$elm_semantic_dom$Dom_Element$hasText = function (element) {
	var _p0 = element.text;
	if (_p0 === '') {
		return false;
	} else {
		return true;
	}
};
var _danielnarey$elm_semantic_dom$Dom_Element$hasChildren = function (element) {
	var _p1 = element.children;
	if (_p1.ctor === '[]') {
		return false;
	} else {
		return true;
	}
};
var _danielnarey$elm_semantic_dom$Dom_Element$setNamespace = F2(
	function (url, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{namespace: url});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$withChildNodes = F2(
	function (nodeList, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{children: nodeList});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$prependText = F2(
	function (moreText, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				text: A2(_elm_lang$core$String$append, moreText, n.text)
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$appendText = F2(
	function (moreText, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				text: A2(_elm_lang$core$String$append, n.text, moreText)
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$withText = F2(
	function (someText, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{text: someText});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$addAttribute = F2(
	function (newAttribute, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				attributes: A2(
					_elm_lang$core$List$append,
					n.attributes,
					{
						ctor: '::',
						_0: newAttribute,
						_1: {ctor: '[]'}
					})
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$withAttributes = F2(
	function (attributeList, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{attributes: attributeList});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$removeClass = F2(
	function (classToRemove, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				classes: A2(
					_elm_lang$core$List$filter,
					F2(
						function (x, y) {
							return !_elm_lang$core$Native_Utils.eq(x, y);
						})(classToRemove),
					n.classes)
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$addClass = F2(
	function (newClass, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				classes: {ctor: '::', _0: newClass, _1: n.classes}
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$withClasses = F2(
	function (classList, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{classes: classList});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$setId = F2(
	function (idString, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{id: idString});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$toNode = function (element) {
	var consTextKeyed = function (keyedList) {
		var _p2 = element.text;
		if (_p2 === '') {
			return keyedList;
		} else {
			return {
				ctor: '::',
				_0: A2(
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					'internal-text',
					_elm_lang$virtual_dom$VirtualDom$text(element.text)),
				_1: keyedList
			};
		}
	};
	var consText = function (childList) {
		var _p3 = element.text;
		if (_p3 === '') {
			return childList;
		} else {
			return {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom$text(element.text),
				_1: childList
			};
		}
	};
	var consNamespace = function (attributeList) {
		var _p4 = element.namespace;
		if (_p4 === '') {
			return attributeList;
		} else {
			return {
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom$property,
					'namespace',
					_elm_lang$core$Json_Encode$string(element.namespace)),
				_1: attributeList
			};
		}
	};
	var consClassName = function (attributeList) {
		var _p5 = element.classes;
		if (_p5.ctor === '[]') {
			return attributeList;
		} else {
			return {
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom$property,
					'className',
					_elm_lang$core$Json_Encode$string(
						_elm_lang$core$String$trim(
							A2(_elm_lang$core$String$join, ' ', element.classes)))),
				_1: attributeList
			};
		}
	};
	var consId = function (attributeList) {
		var _p6 = element.id;
		if (_p6 === '') {
			return attributeList;
		} else {
			return {
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom$property,
					'id',
					_elm_lang$core$Json_Encode$string(element.id)),
				_1: attributeList
			};
		}
	};
	var _p7 = element.keys;
	if (_p7.ctor === '[]') {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			element.tag,
			consNamespace(
				consClassName(
					consId(element.attributes))),
			consText(element.children));
	} else {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$keyedNode,
			element.tag,
			consNamespace(
				consClassName(
					consId(element.attributes))),
			consTextKeyed(
				A3(
					_elm_lang$core$List$map2,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					element.keys,
					element.children)));
	}
};
var _danielnarey$elm_semantic_dom$Dom_Element$withChildren = F2(
	function (childList, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				children: A2(_elm_lang$core$List$map, _danielnarey$elm_semantic_dom$Dom_Element$toNode, childList)
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$appendChild = F2(
	function (newChild, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				children: A2(
					_elm_lang$core$List$append,
					n.children,
					{
						ctor: '::',
						_0: _danielnarey$elm_semantic_dom$Dom_Element$toNode(newChild),
						_1: {ctor: '[]'}
					})
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$prependChild = F2(
	function (newChild, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				children: {
					ctor: '::',
					_0: _danielnarey$elm_semantic_dom$Dom_Element$toNode(newChild),
					_1: n.children
				}
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$wrapNodes = F2(
	function (htmlTag, childNodes) {
		return {
			tag: htmlTag,
			id: '',
			attributes: {ctor: '[]'},
			classes: {ctor: '[]'},
			children: childNodes,
			text: '',
			namespace: '',
			keys: {ctor: '[]'}
		};
	});
var _danielnarey$elm_semantic_dom$Dom_Element$container = F2(
	function (htmlTag, childList) {
		return {
			tag: htmlTag,
			id: '',
			attributes: {ctor: '[]'},
			classes: {ctor: '[]'},
			children: A2(_elm_lang$core$List$map, _danielnarey$elm_semantic_dom$Dom_Element$toNode, childList),
			text: '',
			namespace: '',
			keys: {ctor: '[]'}
		};
	});
var _danielnarey$elm_semantic_dom$Dom_Element$textWrapper = F2(
	function (htmlTag, someText) {
		return {
			tag: htmlTag,
			id: '',
			attributes: {ctor: '[]'},
			classes: {ctor: '[]'},
			children: {ctor: '[]'},
			text: someText,
			namespace: '',
			keys: {ctor: '[]'}
		};
	});
var _danielnarey$elm_semantic_dom$Dom_Element$leaf = function (htmlTag) {
	return {
		tag: htmlTag,
		id: '',
		attributes: {ctor: '[]'},
		classes: {ctor: '[]'},
		children: {ctor: '[]'},
		text: '',
		namespace: '',
		keys: {ctor: '[]'}
	};
};

var _danielnarey$elm_modular_ui$Ui$render = _danielnarey$elm_semantic_dom$Dom_Element$toNode;
var _danielnarey$elm_modular_ui$Ui$setId = _danielnarey$elm_semantic_dom$Dom_Element$setId;
var _danielnarey$elm_modular_ui$Ui$container = _danielnarey$elm_semantic_dom$Dom_Element$container;
var _danielnarey$elm_modular_ui$Ui$textWrapper = _danielnarey$elm_semantic_dom$Dom_Element$textWrapper;
var _danielnarey$elm_modular_ui$Ui$leaf = _danielnarey$elm_semantic_dom$Dom_Element$leaf;

var _danielnarey$elm_semantic_dom$Dom_Event$customWithOptions = F3(
	function (decoder, options, string) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, string, options, decoder);
	});
var _danielnarey$elm_semantic_dom$Dom_Event$custom = F2(
	function (decoder, string) {
		return A2(_elm_lang$virtual_dom$VirtualDom$on, string, decoder);
	});
var _danielnarey$elm_semantic_dom$Dom_Event$submit = F2(
	function (captureKey, idList) {
		var mapDictInsert = F2(
			function (dict, _p0) {
				var _p1 = _p0;
				return A4(_elm_lang$core$Json_Decode$map3, _elm_lang$core$Dict$insert, _p1._0, _p1._1, dict);
			});
		var inputDecoder = function (idString) {
			return A2(
				_elm_lang$core$Json_Decode$at,
				{
					ctor: '::',
					_0: 'target',
					_1: {
						ctor: '::',
						_0: 'elements',
						_1: {
							ctor: '::',
							_0: idString,
							_1: {
								ctor: '::',
								_0: 'value',
								_1: {ctor: '[]'}
							}
						}
					}
				},
				_elm_lang$core$Json_Decode$string);
		};
		var buildDecoder = F2(
			function (idList, dictDecoder) {
				buildDecoder:
				while (true) {
					var _p2 = idList;
					if (_p2.ctor === '[]') {
						return dictDecoder;
					} else {
						var _p3 = _p2._0;
						var _v2 = _p2._1,
							_v3 = A2(
							mapDictInsert,
							dictDecoder,
							{
								ctor: '_Tuple2',
								_0: _elm_lang$core$Json_Decode$succeed(_p3),
								_1: inputDecoder(_p3)
							});
						idList = _v2;
						dictDecoder = _v3;
						continue buildDecoder;
					}
				}
			});
		return A3(
			_elm_lang$virtual_dom$VirtualDom$onWithOptions,
			'submit',
			{stopPropagation: false, preventDefault: true},
			A2(
				_elm_lang$core$Json_Decode$map,
				captureKey,
				A2(
					buildDecoder,
					idList,
					_elm_lang$core$Json_Decode$succeed(_elm_lang$core$Dict$empty))));
	});
var _danielnarey$elm_semantic_dom$Dom_Event$capture = F2(
	function (captureKey, event) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$on,
			event,
			A2(
				_elm_lang$core$Json_Decode$map,
				captureKey,
				A2(
					_elm_lang$core$Json_Decode$at,
					{
						ctor: '::',
						_0: 'target',
						_1: {
							ctor: '::',
							_0: 'value',
							_1: {ctor: '[]'}
						}
					},
					_elm_lang$core$Json_Decode$string)));
	});
var _danielnarey$elm_semantic_dom$Dom_Event$action = F2(
	function (msg, event) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$on,
			event,
			_elm_lang$core$Json_Decode$succeed(msg));
	});
var _danielnarey$elm_semantic_dom$Dom_Event$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _danielnarey$elm_modular_ui$Ui_Action$onKeyUp = function (_p0) {
	var _p1 = _p0;
	var _p3 = _p1._0;
	var customDecoder = A2(
		_elm_lang$core$Json_Decode$andThen,
		function (pressed) {
			var _p2 = _elm_lang$core$Native_Utils.eq(pressed, _p3);
			if (_p2 === true) {
				return _elm_lang$core$Json_Decode$succeed(_p1._1);
			} else {
				return _elm_lang$core$Json_Decode$fail(
					A2(_elm_lang$core$Basics_ops['++'], 'not ', _p3));
			}
		},
		A2(_elm_lang$core$Json_Decode$field, 'key', _elm_lang$core$Json_Decode$string));
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Event$custom, customDecoder, 'keyup'));
};
var _danielnarey$elm_modular_ui$Ui_Action$onKeyPress = function (_p4) {
	var _p5 = _p4;
	var _p7 = _p5._0;
	var customDecoder = A2(
		_elm_lang$core$Json_Decode$andThen,
		function (pressed) {
			var _p6 = _elm_lang$core$Native_Utils.eq(pressed, _p7);
			if (_p6 === true) {
				return _elm_lang$core$Json_Decode$succeed(_p5._1);
			} else {
				return _elm_lang$core$Json_Decode$fail(
					A2(_elm_lang$core$Basics_ops['++'], 'not ', _p7));
			}
		},
		A2(_elm_lang$core$Json_Decode$field, 'key', _elm_lang$core$Json_Decode$string));
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Event$custom, customDecoder, 'keypress'));
};
var _danielnarey$elm_modular_ui$Ui_Action$onKeyDown = function (_p8) {
	var _p9 = _p8;
	var _p11 = _p9._0;
	var customDecoder = A2(
		_elm_lang$core$Json_Decode$andThen,
		function (pressed) {
			var _p10 = _elm_lang$core$Native_Utils.eq(pressed, _p11);
			if (_p10 === true) {
				return _elm_lang$core$Json_Decode$succeed(_p9._1);
			} else {
				return _elm_lang$core$Json_Decode$fail(
					A2(_elm_lang$core$Basics_ops['++'], 'not ', _p11));
			}
		},
		A2(_elm_lang$core$Json_Decode$field, 'key', _elm_lang$core$Json_Decode$string));
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Event$custom, customDecoder, 'keydown'));
};
var _danielnarey$elm_modular_ui$Ui_Action$onMouseOut = function (msg) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Event$action, msg, 'mouseout'));
};
var _danielnarey$elm_modular_ui$Ui_Action$onMouseOver = function (msg) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Event$action, msg, 'mouseover'));
};
var _danielnarey$elm_modular_ui$Ui_Action$onClick = function (msg) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Event$action, msg, 'click'));
};
var _danielnarey$elm_modular_ui$Ui_Action$addList = F2(
	function (tupleList, element) {
		var toAttribute = function (_p12) {
			var _p13 = _p12;
			return A2(_danielnarey$elm_semantic_dom$Dom_Event$action, _p13._1, _p13._0);
		};
		var newAttributes = A2(_elm_lang$core$List$map, toAttribute, tupleList);
		return _elm_lang$core$Native_Utils.update(
			element,
			{
				attributes: A2(_elm_lang$core$Basics_ops['++'], element.attributes, newAttributes)
			});
	});
var _danielnarey$elm_modular_ui$Ui_Action$add = function (_p14) {
	var _p15 = _p14;
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Event$action, _p15._1, _p15._0));
};

var _danielnarey$elm_semantic_dom$Dom_Property$float = F2(
	function (value, key) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$property,
			key,
			_elm_lang$core$Json_Encode$float(value));
	});
var _danielnarey$elm_semantic_dom$Dom_Property$int = F2(
	function (value, key) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$property,
			key,
			_elm_lang$core$Json_Encode$int(value));
	});
var _danielnarey$elm_semantic_dom$Dom_Property$string = F2(
	function (value, key) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$property,
			key,
			_elm_lang$core$Json_Encode$string(value));
	});
var _danielnarey$elm_semantic_dom$Dom_Property$bool = F2(
	function (value, key) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$property,
			key,
			_elm_lang$core$Json_Encode$bool(value));
	});

var _danielnarey$elm_semantic_dom$Dom_Attribute$namespaced = F3(
	function (_p0, value, key) {
		var _p1 = _p0;
		return A3(
			_elm_lang$virtual_dom$VirtualDom$attributeNS,
			_p1._1,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p1._0,
				A2(_elm_lang$core$Basics_ops['++'], ':', key)),
			value);
	});
var _danielnarey$elm_semantic_dom$Dom_Attribute$float = F2(
	function (value, key) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$attribute,
			key,
			_elm_lang$core$Basics$toString(value));
	});
var _danielnarey$elm_semantic_dom$Dom_Attribute$int = F2(
	function (value, key) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$attribute,
			key,
			_elm_lang$core$Basics$toString(value));
	});
var _danielnarey$elm_semantic_dom$Dom_Attribute$string = F2(
	function (value, key) {
		return A2(_elm_lang$virtual_dom$VirtualDom$attribute, key, value);
	});

var _danielnarey$elm_modular_ui$Ui_Attribute$ariaHidden = _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
	A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'true', 'aria-hidden'));
var _danielnarey$elm_modular_ui$Ui_Attribute$ariaDescribedBy = function (value) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, value, 'aria-describedby'));
};
var _danielnarey$elm_modular_ui$Ui_Attribute$ariaLabelledBy = function (value) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, value, 'aria-labelledby'));
};
var _danielnarey$elm_modular_ui$Ui_Attribute$ariaLabel = function (value) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, value, 'aria-label'));
};
var _danielnarey$elm_modular_ui$Ui_Attribute$role = function (value) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, value, 'role'));
};
var _danielnarey$elm_modular_ui$Ui_Attribute$hidden = function (value) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Property$bool, value, 'hidden'));
};
var _danielnarey$elm_modular_ui$Ui_Attribute$title = function (value) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Property$string, value, 'title'));
};
var _danielnarey$elm_modular_ui$Ui_Attribute$addList = F2(
	function (tupleList, element) {
		var toAttribute = function (_p0) {
			var _p1 = _p0;
			return _p1._1(_p1._0);
		};
		var newAttributes = A2(_elm_lang$core$List$map, toAttribute, tupleList);
		return _elm_lang$core$Native_Utils.update(
			element,
			{
				attributes: A2(_elm_lang$core$Basics_ops['++'], element.attributes, newAttributes)
			});
	});
var _danielnarey$elm_modular_ui$Ui_Attribute$add = function (_p2) {
	var _p3 = _p2;
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_p3._1(_p3._0));
};

var _danielnarey$elm_modular_ui$Component$navLink = F2(
	function (token, _p0) {
		var _p1 = _p0;
		return A2(
			_danielnarey$elm_modular_ui$Ui_Attribute$role,
			'link',
			A2(
				_danielnarey$elm_modular_ui$Ui_Action$onClick,
				token(_p1._1),
				A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'a', _p1._0)));
	});
var _danielnarey$elm_modular_ui$Component$navList = function (token) {
	return function (_p2) {
		return A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'ul',
			A2(
				_elm_lang$core$List$map,
				function (_p3) {
					return A2(
						_danielnarey$elm_modular_ui$Ui$container,
						'li',
						_elm_lang$core$List$singleton(
							A2(_danielnarey$elm_modular_ui$Component$navLink, token, _p3)));
				},
				_p2));
	};
};
var _danielnarey$elm_modular_ui$Component$listedItems = function (_p4) {
	return A2(
		_danielnarey$elm_modular_ui$Ui$container,
		'ul',
		A2(
			_elm_lang$core$List$map,
			function (_p5) {
				return A2(
					_danielnarey$elm_modular_ui$Ui$container,
					'li',
					_elm_lang$core$List$singleton(_p5));
			},
			_p4));
};

var _danielnarey$elm_modular_ui$Ui_Modifier$conditional = function (_p0) {
	var _p1 = _p0;
	var _p2 = _p1._1;
	if (_p2 === true) {
		return _danielnarey$elm_semantic_dom$Dom_Element$addClass(_p1._0);
	} else {
		return _elm_lang$core$Basics$identity;
	}
};
var _danielnarey$elm_modular_ui$Ui_Modifier$addList = F2(
	function (modifiers, element) {
		return _elm_lang$core$Native_Utils.update(
			element,
			{
				classes: A2(_elm_lang$core$Basics_ops['++'], element.classes, modifiers)
			});
	});
var _danielnarey$elm_modular_ui$Ui_Modifier$add = _danielnarey$elm_semantic_dom$Dom_Element$addClass;

var _danielnarey$elm_modular_ui$Component_Grid$singleColumn = function (_p0) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'columns',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			_elm_lang$core$List$singleton(
				A2(_danielnarey$elm_modular_ui$Ui_Modifier$add, 'column', _p0))));
};
var _danielnarey$elm_modular_ui$Component_Grid$column = _danielnarey$elm_modular_ui$Ui_Modifier$add('column');
var _danielnarey$elm_modular_ui$Component_Grid$columns = function (_p1) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'columns',
		A2(_danielnarey$elm_modular_ui$Ui$container, 'div', _p1));
};
var _danielnarey$elm_modular_ui$Component_Grid$equalColumns = function (modifier) {
	return function (_p2) {
		return A2(
			_danielnarey$elm_modular_ui$Ui_Modifier$addList,
			{
				ctor: '::',
				_0: 'is-centered',
				_1: {
					ctor: '::',
					_0: 'is-vcentered',
					_1: {ctor: '[]'}
				}
			},
			_danielnarey$elm_modular_ui$Component_Grid$columns(
				A2(
					_elm_lang$core$List$map,
					function (_p3) {
						return A2(
							_danielnarey$elm_modular_ui$Ui_Modifier$add,
							modifier,
							_danielnarey$elm_modular_ui$Component_Grid$column(_p3));
					},
					_p2)));
	};
};

var _danielnarey$elm_modular_ui$Ui_Heading$subtitle = function (htmlTag) {
	return function (_p0) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
			{
				ctor: '::',
				_0: 'subtitle',
				_1: {ctor: '[]'}
			},
			A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, htmlTag, _p0));
	};
};
var _danielnarey$elm_modular_ui$Ui_Heading$title = function (htmlTag) {
	return function (_p1) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
			{
				ctor: '::',
				_0: 'title',
				_1: {ctor: '[]'}
			},
			A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, htmlTag, _p1));
	};
};

var _danielnarey$elm_modular_ui$Component_Hero$container = function (args) {
	var withFoot = function () {
		var _p0 = args.foot;
		if (_p0.ctor === 'Just') {
			return A2(
				_elm_lang$core$Basics$flip,
				_elm_lang$core$List$append,
				{
					ctor: '::',
					_0: _p0._0,
					_1: {ctor: '[]'}
				});
		} else {
			return _elm_lang$core$Basics$identity;
		}
	}();
	var withHead = function () {
		var _p1 = args.head;
		if (_p1.ctor === 'Just') {
			return F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				})(_p1._0);
		} else {
			return _elm_lang$core$Basics$identity;
		}
	}();
	var body = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'hero-body',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui_Modifier$add,
					'container',
					A2(
						_danielnarey$elm_modular_ui$Ui$container,
						'div',
						{
							ctor: '::',
							_0: A2(_danielnarey$elm_modular_ui$Ui_Heading$title, 'h1', args.title),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_modular_ui$Ui_Heading$subtitle, 'h2', args.subtitle),
								_1: {ctor: '[]'}
							}
						})),
				_1: {ctor: '[]'}
			}));
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'hero',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'section',
			withFoot(
				withHead(
					{
						ctor: '::',
						_0: body,
						_1: {ctor: '[]'}
					}))));
};

var _danielnarey$elm_modular_ui$Component_Layout$footer = function (content) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'footer',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui_Modifier$add,
					'container',
					A2(
						_danielnarey$elm_modular_ui$Ui$container,
						'div',
						{
							ctor: '::',
							_0: content,
							_1: {ctor: '[]'}
						})),
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_modular_ui$Component_Layout$container = function (_p0) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'container',
		A2(_danielnarey$elm_modular_ui$Ui$container, 'div', _p0));
};
var _danielnarey$elm_modular_ui$Component_Layout$section = function (_p1) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'section',
		A2(_danielnarey$elm_modular_ui$Ui$container, 'section', _p1));
};

var _danielnarey$elm_modular_ui$Ui_Button$delete = function (msg) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
		{
			ctor: '::',
			_0: A2(_danielnarey$elm_semantic_dom$Dom_Event$action, msg, 'click'),
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
			{
				ctor: '::',
				_0: 'delete',
				_1: {ctor: '[]'}
			},
			_danielnarey$elm_semantic_dom$Dom_Element$leaf('button')));
};
var _danielnarey$elm_modular_ui$Ui_Button$navigation = F2(
	function (msg, label) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'link', 'role'),
				_1: {
					ctor: '::',
					_0: A2(_danielnarey$elm_semantic_dom$Dom_Event$action, msg, 'click'),
					_1: {ctor: '[]'}
				}
			},
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'button',
					_1: {ctor: '[]'}
				},
				A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, 'a', label)));
	});
var _danielnarey$elm_modular_ui$Ui_Button$action = F2(
	function (msg, label) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Event$action, msg, 'click'),
				_1: {ctor: '[]'}
			},
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'button',
					_1: {ctor: '[]'}
				},
				A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, 'button', label)));
	});

var _danielnarey$elm_modular_ui$Component_Modal$card = function (args) {
	var withBody = A2(
		_elm_lang$core$Basics$flip,
		_elm_lang$core$List$append,
		_elm_lang$core$List$singleton(
			A2(
				_danielnarey$elm_modular_ui$Ui_Modifier$add,
				'modal-card-body',
				A2(
					_danielnarey$elm_modular_ui$Ui$container,
					'div',
					{
						ctor: '::',
						_0: args.body,
						_1: {ctor: '[]'}
					}))));
	var withFooter = function () {
		var _p0 = args.footerItems;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Basics$identity;
		} else {
			return A2(
				_elm_lang$core$Basics$flip,
				_elm_lang$core$List$append,
				_elm_lang$core$List$singleton(
					A2(
						_danielnarey$elm_modular_ui$Ui_Modifier$add,
						'modal-card-foot',
						A2(_danielnarey$elm_modular_ui$Ui$container, 'footer', args.footerItems))));
		}
	}();
	var withHeader = function () {
		var _p1 = {ctor: '_Tuple2', _0: args.heading, _1: args.close};
		if (_p1._1.ctor === 'Nothing') {
			if (_p1._0 === '') {
				return _elm_lang$core$Basics$identity;
			} else {
				return A2(
					_elm_lang$core$Basics$flip,
					_elm_lang$core$List$append,
					_elm_lang$core$List$singleton(
						A2(
							_danielnarey$elm_modular_ui$Ui_Modifier$add,
							'modal-card-head',
							A2(
								_danielnarey$elm_modular_ui$Ui$container,
								'header',
								{
									ctor: '::',
									_0: A2(
										_danielnarey$elm_modular_ui$Ui_Modifier$add,
										'modal-card-title',
										A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'p', args.heading)),
									_1: {ctor: '[]'}
								}))));
			}
		} else {
			return A2(
				_elm_lang$core$Basics$flip,
				_elm_lang$core$List$append,
				_elm_lang$core$List$singleton(
					A2(
						_danielnarey$elm_modular_ui$Ui_Modifier$add,
						'modal-card-head',
						A2(
							_danielnarey$elm_modular_ui$Ui$container,
							'header',
							{
								ctor: '::',
								_0: A2(
									_danielnarey$elm_modular_ui$Ui_Modifier$add,
									'modal-card-title',
									A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'p', args.heading)),
								_1: {
									ctor: '::',
									_0: A2(
										_danielnarey$elm_modular_ui$Ui_Attribute$ariaLabel,
										'close',
										_danielnarey$elm_modular_ui$Ui_Button$delete(_p1._1._0)),
									_1: {ctor: '[]'}
								}
							}))));
		}
	}();
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'modal',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			withFooter(
				withBody(
					withHeader(
						{
							ctor: '::',
							_0: A2(
								_danielnarey$elm_modular_ui$Ui_Modifier$add,
								'modal-background',
								_danielnarey$elm_modular_ui$Ui$leaf('div')),
							_1: {ctor: '[]'}
						})))));
};
var _danielnarey$elm_modular_ui$Component_Modal$container = function (args) {
	var withClose = function () {
		var _p2 = args.close;
		if (_p2.ctor === 'Nothing') {
			return _elm_lang$core$Basics$identity;
		} else {
			return A2(
				_elm_lang$core$Basics$flip,
				_elm_lang$core$List$append,
				_elm_lang$core$List$singleton(
					A2(
						_danielnarey$elm_modular_ui$Ui_Attribute$ariaLabel,
						'close',
						A2(
							_danielnarey$elm_modular_ui$Ui_Action$onClick,
							_p2._0,
							A2(
								_danielnarey$elm_modular_ui$Ui_Modifier$addList,
								{
									ctor: '::',
									_0: 'modal-close',
									_1: {
										ctor: '::',
										_0: 'is-large',
										_1: {ctor: '[]'}
									}
								},
								_danielnarey$elm_modular_ui$Ui$leaf('button'))))));
		}
	}();
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'modal',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			withClose(
				{
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$Ui_Modifier$add,
						'modal-background',
						_danielnarey$elm_modular_ui$Ui$leaf('div')),
					_1: {
						ctor: '::',
						_0: A2(
							_danielnarey$elm_modular_ui$Ui_Modifier$add,
							'modal-content',
							A2(
								_danielnarey$elm_modular_ui$Ui$container,
								'div',
								{
									ctor: '::',
									_0: args.content,
									_1: {ctor: '[]'}
								})),
						_1: {ctor: '[]'}
					}
				})));
};

var _danielnarey$elm_modular_ui$Component_Tabs$container = function (args) {
	var toTab = function (_p0) {
		var _p1 = _p0;
		var _p4 = _p1._1;
		return function () {
			var _p2 = _elm_lang$core$Native_Utils.eq(_p4, args.selected);
			if (_p2 === true) {
				return function (_p3) {
					return A2(
						_danielnarey$elm_modular_ui$Ui_Modifier$add,
						'is-active',
						A2(
							_danielnarey$elm_modular_ui$Ui_Attribute$add,
							{
								ctor: '_Tuple2',
								_0: 'aria-selected',
								_1: _danielnarey$elm_semantic_dom$Dom_Attribute$string('true')
							},
							_p3));
				};
			} else {
				return _elm_lang$core$Basics$identity;
			}
		}()(
			A2(
				_danielnarey$elm_modular_ui$Ui_Attribute$role,
				'tab',
				A2(
					_danielnarey$elm_modular_ui$Ui_Action$onClick,
					args.$switch(_p4),
					A2(
						_danielnarey$elm_modular_ui$Ui$container,
						'li',
						{
							ctor: '::',
							_0: A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'a', _p1._0),
							_1: {ctor: '[]'}
						}))));
	};
	return A2(
		_danielnarey$elm_modular_ui$Ui_Attribute$role,
		'tablist',
		A2(
			_danielnarey$elm_modular_ui$Ui_Modifier$add,
			'tabs',
			A2(
				_danielnarey$elm_modular_ui$Ui$container,
				'div',
				{
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$Ui$container,
						'ul',
						A2(_elm_lang$core$List$map, toTab, args.options)),
					_1: {ctor: '[]'}
				})));
};

var _danielnarey$elm_modular_ui$Page_Interactive$title = function (id) {
	var _p0 = id;
	switch (_p0.ctor) {
		case 'Buttons':
			return 'Buttons';
		case 'Input':
			return 'Input';
		case 'Selectors':
			return 'Selectors';
		default:
			return 'Indicators';
	}
};
var _danielnarey$elm_modular_ui$Page_Interactive$hash = function (id) {
	var _p1 = id;
	switch (_p1.ctor) {
		case 'Buttons':
			return '/buttons';
		case 'Input':
			return '/input';
		case 'Selectors':
			return '/selectors';
		default:
			return '/indicators';
	}
};
var _danielnarey$elm_modular_ui$Page_Interactive$Indicators = {ctor: 'Indicators'};
var _danielnarey$elm_modular_ui$Page_Interactive$Selectors = {ctor: 'Selectors'};
var _danielnarey$elm_modular_ui$Page_Interactive$Input = {ctor: 'Input'};
var _danielnarey$elm_modular_ui$Page_Interactive$Buttons = {ctor: 'Buttons'};
var _danielnarey$elm_modular_ui$Page_Interactive$fromHash = function (parsed) {
	var _p2 = _elm_lang$core$List$head(parsed);
	if (_p2.ctor === 'Nothing') {
		return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Interactive$Buttons);
	} else {
		var _p3 = _p2._0;
		switch (_p3) {
			case '':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Interactive$Buttons);
			case 'buttons':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Interactive$Buttons);
			case 'input':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Interactive$Input);
			case 'selectors':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Interactive$Selectors);
			case 'indicators':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Interactive$Indicators);
			default:
				return _elm_lang$core$Maybe$Nothing;
		}
	}
};

var _danielnarey$elm_modular_ui$Page_Content$title = function (id) {
	var _p0 = id;
	switch (_p0.ctor) {
		case 'Text':
			return 'Text';
		case 'Heading':
			return 'Heading';
		case 'Icon':
			return 'Icon';
		case 'Media':
			return 'Media';
		default:
			return 'Source';
	}
};
var _danielnarey$elm_modular_ui$Page_Content$hash = function (id) {
	var _p1 = id;
	switch (_p1.ctor) {
		case 'Text':
			return '/text';
		case 'Heading':
			return '/heading';
		case 'Icon':
			return '/icon';
		case 'Media':
			return '/media';
		default:
			return '/source';
	}
};
var _danielnarey$elm_modular_ui$Page_Content$Source = {ctor: 'Source'};
var _danielnarey$elm_modular_ui$Page_Content$Media = {ctor: 'Media'};
var _danielnarey$elm_modular_ui$Page_Content$Icon = {ctor: 'Icon'};
var _danielnarey$elm_modular_ui$Page_Content$Heading = {ctor: 'Heading'};
var _danielnarey$elm_modular_ui$Page_Content$Text = {ctor: 'Text'};
var _danielnarey$elm_modular_ui$Page_Content$fromHash = function (parsed) {
	var _p2 = _elm_lang$core$List$head(parsed);
	if (_p2.ctor === 'Nothing') {
		return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Content$Text);
	} else {
		var _p3 = _p2._0;
		switch (_p3) {
			case '':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Content$Text);
			case 'text':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Content$Text);
			case 'heading':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Content$Heading);
			case 'icon':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Content$Icon);
			case 'media':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Content$Media);
			case 'source':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Content$Source);
			default:
				return _elm_lang$core$Maybe$Nothing;
		}
	}
};

var _danielnarey$elm_modular_ui$Page_Customize$title = function (id) {
	var _p0 = id;
	switch (_p0.ctor) {
		case 'Modifier':
			return 'Modifier';
		case 'Attribute':
			return 'Attribute';
		case 'Action':
			return 'Action';
		default:
			return 'Style';
	}
};
var _danielnarey$elm_modular_ui$Page_Customize$hash = function (id) {
	var _p1 = id;
	switch (_p1.ctor) {
		case 'Modifier':
			return '/modifier';
		case 'Attribute':
			return '/attribute';
		case 'Action':
			return '/action';
		default:
			return '/style';
	}
};
var _danielnarey$elm_modular_ui$Page_Customize$Style = {ctor: 'Style'};
var _danielnarey$elm_modular_ui$Page_Customize$Action = {ctor: 'Action'};
var _danielnarey$elm_modular_ui$Page_Customize$Attribute = {ctor: 'Attribute'};
var _danielnarey$elm_modular_ui$Page_Customize$Modifier = {ctor: 'Modifier'};
var _danielnarey$elm_modular_ui$Page_Customize$fromHash = function (parsed) {
	var _p2 = _elm_lang$core$List$head(parsed);
	if (_p2.ctor === 'Nothing') {
		return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Customize$Modifier);
	} else {
		var _p3 = _p2._0;
		switch (_p3) {
			case '':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Customize$Modifier);
			case 'modifier':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Customize$Modifier);
			case 'attribute':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Customize$Attribute);
			case 'action':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Customize$Action);
			case 'style':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page_Customize$Style);
			default:
				return _elm_lang$core$Maybe$Nothing;
		}
	}
};

var _danielnarey$elm_modular_ui$Page$title = function (id) {
	var _p0 = id;
	switch (_p0.ctor) {
		case 'Home':
			return 'Overview';
		case 'Interactive':
			return _danielnarey$elm_modular_ui$Page_Interactive$title(_p0._0);
		case 'Content':
			return _danielnarey$elm_modular_ui$Page_Content$title(_p0._0);
		default:
			return _danielnarey$elm_modular_ui$Page_Customize$title(_p0._0);
	}
};
var _danielnarey$elm_modular_ui$Page$hash = function (id) {
	var _p1 = id;
	switch (_p1.ctor) {
		case 'Home':
			return '#/';
		case 'Interactive':
			return A2(
				_elm_lang$core$String$append,
				'#/interactive-elements',
				_danielnarey$elm_modular_ui$Page_Interactive$hash(_p1._0));
		case 'Content':
			return A2(
				_elm_lang$core$String$append,
				'#/content-elements',
				_danielnarey$elm_modular_ui$Page_Content$hash(_p1._0));
		default:
			return A2(
				_elm_lang$core$String$append,
				'#/customize',
				_danielnarey$elm_modular_ui$Page_Customize$hash(_p1._0));
	}
};
var _danielnarey$elm_modular_ui$Page$Customize = function (a) {
	return {ctor: 'Customize', _0: a};
};
var _danielnarey$elm_modular_ui$Page$Content = function (a) {
	return {ctor: 'Content', _0: a};
};
var _danielnarey$elm_modular_ui$Page$Interactive = function (a) {
	return {ctor: 'Interactive', _0: a};
};
var _danielnarey$elm_modular_ui$Page$Home = {ctor: 'Home'};
var _danielnarey$elm_modular_ui$Page$fromHash = function (path) {
	var parsed = A2(
		_elm_lang$core$List$drop,
		1,
		A2(_elm_lang$core$String$split, '/', path));
	var _p2 = _elm_lang$core$List$head(parsed);
	if (_p2.ctor === 'Nothing') {
		return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page$Home);
	} else {
		var _p3 = _p2._0;
		switch (_p3) {
			case '':
				return _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Page$Home);
			case 'interactive-elements':
				return A2(
					_elm_lang$core$Maybe$map,
					_danielnarey$elm_modular_ui$Page$Interactive,
					_danielnarey$elm_modular_ui$Page_Interactive$fromHash(
						A2(_elm_lang$core$List$drop, 1, parsed)));
			case 'content-elements':
				return A2(
					_elm_lang$core$Maybe$map,
					_danielnarey$elm_modular_ui$Page$Content,
					_danielnarey$elm_modular_ui$Page_Content$fromHash(
						A2(_elm_lang$core$List$drop, 1, parsed)));
			case 'customize':
				return A2(
					_elm_lang$core$Maybe$map,
					_danielnarey$elm_modular_ui$Page$Customize,
					_danielnarey$elm_modular_ui$Page_Customize$fromHash(
						A2(_elm_lang$core$List$drop, 1, parsed)));
			default:
				return _elm_lang$core$Maybe$Nothing;
		}
	}
};

var _danielnarey$elm_modular_ui$Tab$Customize = {ctor: 'Customize'};
var _danielnarey$elm_modular_ui$Tab$Content = {ctor: 'Content'};
var _danielnarey$elm_modular_ui$Tab$Interactive = {ctor: 'Interactive'};
var _danielnarey$elm_modular_ui$Tab$fromPage = function (page) {
	var _p0 = page;
	switch (_p0.ctor) {
		case 'Home':
			return _danielnarey$elm_modular_ui$Tab$Interactive;
		case 'Interactive':
			return _danielnarey$elm_modular_ui$Tab$Interactive;
		case 'Content':
			return _danielnarey$elm_modular_ui$Tab$Content;
		default:
			return _danielnarey$elm_modular_ui$Tab$Customize;
	}
};

var _danielnarey$elm_modular_ui$Option$Monthly = {ctor: 'Monthly'};
var _danielnarey$elm_modular_ui$Option$Weekly = {ctor: 'Weekly'};
var _danielnarey$elm_modular_ui$Option$Daily = {ctor: 'Daily'};
var _danielnarey$elm_modular_ui$Option$Global = {ctor: 'Global'};
var _danielnarey$elm_modular_ui$Option$Canada = {ctor: 'Canada'};
var _danielnarey$elm_modular_ui$Option$UnitedStates = {ctor: 'UnitedStates'};

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$navigation$Native_Navigation = function() {


// FAKE NAVIGATION

function go(n)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		if (n !== 0)
		{
			history.go(n);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function pushState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.pushState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function replaceState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.replaceState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}


// REAL NAVIGATION

function reloadPage(skipCache)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		document.location.reload(skipCache);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function setLocation(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		try
		{
			window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			document.location.reload(false);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


// GET LOCATION

function getLocation()
{
	var location = document.location;

	return {
		href: location.href,
		host: location.host,
		hostname: location.hostname,
		protocol: location.protocol,
		origin: location.origin,
		port_: location.port,
		pathname: location.pathname,
		search: location.search,
		hash: location.hash,
		username: location.username,
		password: location.password
	};
}


// DETECT IE11 PROBLEMS

function isInternetExplorer11()
{
	return window.navigator.userAgent.indexOf('Trident') !== -1;
}


return {
	go: go,
	setLocation: setLocation,
	reloadPage: reloadPage,
	pushState: pushState,
	replaceState: replaceState,
	getLocation: getLocation,
	isInternetExplorer11: isInternetExplorer11
};

}();

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
var _elm_lang$navigation$Navigation$reloadPage = _elm_lang$navigation$Native_Navigation.reloadPage;
var _elm_lang$navigation$Navigation$setLocation = _elm_lang$navigation$Native_Navigation.setLocation;
var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
_elm_lang$navigation$Navigation_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$navigation$Navigation$notify = F3(
	function (router, subs, location) {
		var send = function (_p1) {
			var _p2 = _p1;
			return A2(
				_elm_lang$core$Platform$sendToApp,
				router,
				_p2._0(location));
		};
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(_elm_lang$core$List$map, send, subs)),
			_elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'}));
	});
var _elm_lang$navigation$Navigation$cmdHelp = F3(
	function (router, subs, cmd) {
		var _p3 = cmd;
		switch (_p3.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$go(_p3._0);
			case 'New':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$pushState(_p3._0));
			case 'Modify':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$replaceState(_p3._0));
			case 'Visit':
				return _elm_lang$navigation$Navigation$setLocation(_p3._0);
			default:
				return _elm_lang$navigation$Navigation$reloadPage(_p3._0);
		}
	});
var _elm_lang$navigation$Navigation$killPopWatcher = function (popWatcher) {
	var _p4 = popWatcher;
	if (_p4.ctor === 'Normal') {
		return _elm_lang$core$Process$kill(_p4._0);
	} else {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Process$kill(_p4._0),
			_elm_lang$core$Process$kill(_p4._1));
	}
};
var _elm_lang$navigation$Navigation$onSelfMsg = F3(
	function (router, location, state) {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
			_elm_lang$core$Task$succeed(state));
	});
var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$Location = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$navigation$Navigation$State = F2(
	function (a, b) {
		return {subs: a, popWatcher: b};
	});
var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
	A2(
		_elm_lang$navigation$Navigation$State,
		{ctor: '[]'},
		_elm_lang$core$Maybe$Nothing));
var _elm_lang$navigation$Navigation$Reload = function (a) {
	return {ctor: 'Reload', _0: a};
};
var _elm_lang$navigation$Navigation$reload = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(false));
var _elm_lang$navigation$Navigation$reloadAndSkipCache = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(true));
var _elm_lang$navigation$Navigation$Visit = function (a) {
	return {ctor: 'Visit', _0: a};
};
var _elm_lang$navigation$Navigation$load = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Visit(url));
};
var _elm_lang$navigation$Navigation$Modify = function (a) {
	return {ctor: 'Modify', _0: a};
};
var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Modify(url));
};
var _elm_lang$navigation$Navigation$New = function (a) {
	return {ctor: 'New', _0: a};
};
var _elm_lang$navigation$Navigation$newUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$New(url));
};
var _elm_lang$navigation$Navigation$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$navigation$Navigation$back = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(0 - n));
};
var _elm_lang$navigation$Navigation$forward = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(n));
};
var _elm_lang$navigation$Navigation$cmdMap = F2(
	function (_p5, myCmd) {
		var _p6 = myCmd;
		switch (_p6.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$Jump(_p6._0);
			case 'New':
				return _elm_lang$navigation$Navigation$New(_p6._0);
			case 'Modify':
				return _elm_lang$navigation$Navigation$Modify(_p6._0);
			case 'Visit':
				return _elm_lang$navigation$Navigation$Visit(_p6._0);
			default:
				return _elm_lang$navigation$Navigation$Reload(_p6._0);
		}
	});
var _elm_lang$navigation$Navigation$Monitor = function (a) {
	return {ctor: 'Monitor', _0: a};
};
var _elm_lang$navigation$Navigation$program = F2(
	function (locationToMessage, stuff) {
		var init = stuff.init(
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$program(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$programWithFlags = F2(
	function (locationToMessage, stuff) {
		var init = function (flags) {
			return A2(
				stuff.init,
				flags,
				_elm_lang$navigation$Native_Navigation.getLocation(
					{ctor: '_Tuple0'}));
		};
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$programWithFlags(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$subMap = F2(
	function (func, _p7) {
		var _p8 = _p7;
		return _elm_lang$navigation$Navigation$Monitor(
			function (_p9) {
				return func(
					_p8._0(_p9));
			});
	});
var _elm_lang$navigation$Navigation$InternetExplorer = F2(
	function (a, b) {
		return {ctor: 'InternetExplorer', _0: a, _1: b};
	});
var _elm_lang$navigation$Navigation$Normal = function (a) {
	return {ctor: 'Normal', _0: a};
};
var _elm_lang$navigation$Navigation$spawnPopWatcher = function (router) {
	var reportLocation = function (_p10) {
		return A2(
			_elm_lang$core$Platform$sendToSelf,
			router,
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
	};
	return _elm_lang$navigation$Native_Navigation.isInternetExplorer11(
		{ctor: '_Tuple0'}) ? A3(
		_elm_lang$core$Task$map2,
		_elm_lang$navigation$Navigation$InternetExplorer,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)),
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'hashchange', _elm_lang$core$Json_Decode$value, reportLocation))) : A2(
		_elm_lang$core$Task$map,
		_elm_lang$navigation$Navigation$Normal,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)));
};
var _elm_lang$navigation$Navigation$onEffects = F4(
	function (router, cmds, subs, _p11) {
		var _p12 = _p11;
		var _p15 = _p12.popWatcher;
		var stepState = function () {
			var _p13 = {ctor: '_Tuple2', _0: subs, _1: _p15};
			_v6_2:
			do {
				if (_p13._0.ctor === '[]') {
					if (_p13._1.ctor === 'Just') {
						return A2(
							_elm_lang$navigation$Navigation_ops['&>'],
							_elm_lang$navigation$Navigation$killPopWatcher(_p13._1._0),
							_elm_lang$core$Task$succeed(
								A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
					} else {
						break _v6_2;
					}
				} else {
					if (_p13._1.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Task$map,
							function (_p14) {
								return A2(
									_elm_lang$navigation$Navigation$State,
									subs,
									_elm_lang$core$Maybe$Just(_p14));
							},
							_elm_lang$navigation$Navigation$spawnPopWatcher(router));
					} else {
						break _v6_2;
					}
				}
			} while(false);
			return _elm_lang$core$Task$succeed(
				A2(_elm_lang$navigation$Navigation$State, subs, _p15));
		}();
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
					cmds)),
			stepState);
	});
_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

var _danielnarey$elm_semantic_effects$Effect_Routing$customWithFlags = _elm_lang$navigation$Navigation$programWithFlags;
var _danielnarey$elm_semantic_effects$Effect_Routing$custom = _elm_lang$navigation$Navigation$program;
var _danielnarey$elm_semantic_effects$Effect_Routing$runWithFlags = F2(
	function (_p0, programSetup) {
		var _p1 = _p0;
		var _p2 = programSetup.init;
		var initialModel = _p2._0;
		var loadCmd = _p2._1;
		var withDefaultModel = F3(
			function (initializer, flags, location) {
				return A3(
					_elm_lang$core$Basics$flip,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					loadCmd,
					A2(
						_elm_lang$core$Maybe$withDefault,
						initialModel,
						A2(initializer, flags, location)));
			});
		return A2(
			_elm_lang$navigation$Navigation$programWithFlags,
			_p1._1,
			{
				init: withDefaultModel(_p1._0),
				update: programSetup.update,
				subscriptions: programSetup.subscriptions,
				view: programSetup.view
			});
	});
var _danielnarey$elm_semantic_effects$Effect_Routing$run = F2(
	function (_p3, programSetup) {
		var _p4 = _p3;
		var _p5 = programSetup.init;
		var initialModel = _p5._0;
		var loadCmd = _p5._1;
		return A2(
			_elm_lang$navigation$Navigation$program,
			_p4._1,
			{
				init: function (_p6) {
					return A3(
						_elm_lang$core$Basics$flip,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							}),
						loadCmd,
						A2(
							_elm_lang$core$Maybe$withDefault,
							initialModel,
							_p4._0(_p6)));
				},
				update: programSetup.update,
				subscriptions: programSetup.subscriptions,
				view: programSetup.view
			});
	});
var _danielnarey$elm_semantic_effects$Effect_Routing$Setup = F4(
	function (a, b, c, d) {
		return {init: a, update: b, subscriptions: c, view: d};
	});

var _danielnarey$elm_modular_ui$Model$initial = {currentPage: _danielnarey$elm_modular_ui$Page$Home, currentTab: _danielnarey$elm_modular_ui$Tab$Interactive, deleteIsHidden: false, alertText: '', alertIsVisible: false, userName: '', userBio: '', userAge: _elm_lang$core$Maybe$Nothing, packageWeight: _elm_lang$core$Maybe$Nothing, backgroundColor: _elm_lang$core$Maybe$Nothing, starRating: 3, brightness: 1, textColor: '#000000', userAgrees: false, emailFrequency: _danielnarey$elm_modular_ui$Option$Weekly, shippingDestination: _elm_lang$core$Maybe$Nothing, notificationIsHidden: false, tagIsActive: false, tagIsHovered: false};
var _danielnarey$elm_modular_ui$Model$fromLocation = function (location) {
	var updatePage = F2(
		function (model, page) {
			return _elm_lang$core$Native_Utils.update(
				model,
				{
					currentPage: page,
					currentTab: _danielnarey$elm_modular_ui$Tab$fromPage(page)
				});
		});
	return A2(
		_elm_lang$core$Maybe$map,
		updatePage(_danielnarey$elm_modular_ui$Model$initial),
		_danielnarey$elm_modular_ui$Page$fromHash(location.hash));
};
var _danielnarey$elm_modular_ui$Model$Model = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return function (r) {
																		return function (s) {
																			return {currentPage: a, currentTab: b, alertText: c, alertIsVisible: d, deleteIsHidden: e, userName: f, userBio: g, userAge: h, packageWeight: i, backgroundColor: j, starRating: k, brightness: l, textColor: m, userAgrees: n, emailFrequency: o, shippingDestination: p, notificationIsHidden: q, tagIsActive: r, tagIsHovered: s};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};

var _danielnarey$elm_modular_ui$Msg$Hover = function (a) {
	return {ctor: 'Hover', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$ToggleTag = {ctor: 'ToggleTag'};
var _danielnarey$elm_modular_ui$Msg$HideNotification = {ctor: 'HideNotification'};
var _danielnarey$elm_modular_ui$Msg$UpdateShippingDestination = function (a) {
	return {ctor: 'UpdateShippingDestination', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$UpdateEmailFrequency = function (a) {
	return {ctor: 'UpdateEmailFrequency', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$ToggleUserAgrees = {ctor: 'ToggleUserAgrees'};
var _danielnarey$elm_modular_ui$Msg$UpdateTextColor = function (a) {
	return {ctor: 'UpdateTextColor', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$AdjustBrightness = function (a) {
	return {ctor: 'AdjustBrightness', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$UpdateStarRating = function (a) {
	return {ctor: 'UpdateStarRating', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$UpdateBackgroundColor = function (a) {
	return {ctor: 'UpdateBackgroundColor', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$UpdatePackageWeight = function (a) {
	return {ctor: 'UpdatePackageWeight', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$UpdateUserAge = function (a) {
	return {ctor: 'UpdateUserAge', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$UpdateUserBio = function (a) {
	return {ctor: 'UpdateUserBio', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$UpdateUserName = function (a) {
	return {ctor: 'UpdateUserName', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$Disappear = {ctor: 'Disappear'};
var _danielnarey$elm_modular_ui$Msg$LoadUrl = function (a) {
	return {ctor: 'LoadUrl', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$DismissAlert = {ctor: 'DismissAlert'};
var _danielnarey$elm_modular_ui$Msg$Alert = function (a) {
	return {ctor: 'Alert', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$SelectTab = function (a) {
	return {ctor: 'SelectTab', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$Load = function (a) {
	return {ctor: 'Load', _0: a};
};
var _danielnarey$elm_modular_ui$Msg$Route = function (a) {
	return {ctor: 'Route', _0: a};
};

var _danielnarey$elm_semantic_effects$Effect_Url$displayAs = _elm_lang$navigation$Navigation$modifyUrl;
var _danielnarey$elm_semantic_effects$Effect_Url$stepTo = _elm_lang$navigation$Navigation$newUrl;

var _danielnarey$elm_semantic_effects$Effect_Page$forward = _elm_lang$navigation$Navigation$forward;
var _danielnarey$elm_semantic_effects$Effect_Page$back = _elm_lang$navigation$Navigation$back;
var _danielnarey$elm_semantic_effects$Effect_Page$cleanReload = _elm_lang$navigation$Navigation$reloadAndSkipCache;
var _danielnarey$elm_semantic_effects$Effect_Page$reload = _elm_lang$navigation$Navigation$reload;
var _danielnarey$elm_semantic_effects$Effect_Page$load = _elm_lang$navigation$Navigation$load;

var _danielnarey$elm_modular_ui$Update$update = F2(
	function (msg, model) {
		var noCmd = A2(
			_elm_lang$core$Basics$flip,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			_elm_lang$core$Platform_Cmd$none);
		var _p0 = msg;
		switch (_p0.ctor) {
			case 'Route':
				return noCmd(
					A2(
						_elm_lang$core$Maybe$withDefault,
						_danielnarey$elm_modular_ui$Model$initial,
						_danielnarey$elm_modular_ui$Model$fromLocation(_p0._0)));
			case 'Load':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: _danielnarey$elm_semantic_effects$Effect_Url$stepTo(
						_danielnarey$elm_modular_ui$Page$hash(_p0._0))
				};
			case 'SelectTab':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{currentTab: _p0._0}));
			case 'Alert':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{alertText: _p0._0, alertIsVisible: true}));
			case 'DismissAlert':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{alertIsVisible: false}));
			case 'LoadUrl':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: _danielnarey$elm_semantic_effects$Effect_Page$load(_p0._0)
				};
			case 'Disappear':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{deleteIsHidden: true}));
			case 'UpdateUserName':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{userName: _p0._0}));
			case 'UpdateUserBio':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{userBio: _p0._0}));
			case 'UpdateUserAge':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{userAge: _p0._0}));
			case 'UpdatePackageWeight':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{packageWeight: _p0._0}));
			case 'UpdateBackgroundColor':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{backgroundColor: _p0._0}));
			case 'UpdateStarRating':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{starRating: _p0._0}));
			case 'AdjustBrightness':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{brightness: _p0._0}));
			case 'UpdateTextColor':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{textColor: _p0._0}));
			case 'ToggleUserAgrees':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{userAgrees: !model.userAgrees}));
			case 'UpdateEmailFrequency':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{emailFrequency: _p0._0}));
			case 'UpdateShippingDestination':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{shippingDestination: _p0._0}));
			case 'HideNotification':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{notificationIsHidden: true}));
			case 'ToggleTag':
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{tagIsActive: !model.tagIsActive}));
			default:
				return noCmd(
					_elm_lang$core$Native_Utils.update(
						model,
						{tagIsHovered: _p0._0}));
		}
	});

var _danielnarey$elm_modular_ui$Ui_Text$light = function (_p0) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'has-text-weight-light',
			_1: {ctor: '[]'}
		},
		A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, 'span', _p0));
};
var _danielnarey$elm_modular_ui$Ui_Text$semibold = function (_p1) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'has-text-weight-semibold',
			_1: {ctor: '[]'}
		},
		A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, 'span', _p1));
};
var _danielnarey$elm_modular_ui$Ui_Text$bold = function (_p2) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'has-text-weight-bold',
			_1: {ctor: '[]'}
		},
		A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, 'span', _p2));
};
var _danielnarey$elm_modular_ui$Ui_Text$italic = function (_p3) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'is-italic',
			_1: {ctor: '[]'}
		},
		A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, 'span', _p3));
};
var _danielnarey$elm_modular_ui$Ui_Text$link = function (_p4) {
	var _p5 = _p4;
	var attrs = A2(
		_elm_lang$core$List$append,
		{
			ctor: '::',
			_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, _p5._0, 'href'),
			_1: {ctor: '[]'}
		},
		function () {
			var _p6 = _p5._1;
			if (_p6 === true) {
				return {
					ctor: '::',
					_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, '_blank', 'target'),
					_1: {ctor: '[]'}
				};
			} else {
				return {ctor: '[]'};
			}
		}());
	return function (_p7) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			attrs,
			A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, 'a', _p7));
	};
};
var _danielnarey$elm_modular_ui$Ui_Text$plain = _danielnarey$elm_semantic_dom$Dom_Element$textWrapper('span');

var _danielnarey$elm_toolkit$Toolkit_List_Operators_ops = _danielnarey$elm_toolkit$Toolkit_List_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'] = F2(
	function (a, f) {
		return f(
			{
				ctor: '::',
				_0: a,
				_1: {ctor: '[]'}
			});
	});
var _danielnarey$elm_toolkit$Toolkit_List_Operators_ops = _danielnarey$elm_toolkit$Toolkit_List_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'] = F2(
	function (list, f) {
		return A2(_elm_lang$core$List$map, f, list);
	});
var _danielnarey$elm_toolkit$Toolkit_List_Operators_ops = _danielnarey$elm_toolkit$Toolkit_List_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|::'] = F2(
	function (a, b) {
		return {
			ctor: '::',
			_0: a,
			_1: {
				ctor: '::',
				_0: b,
				_1: {ctor: '[]'}
			}
		};
	});
var _danielnarey$elm_toolkit$Toolkit_List_Operators_ops = _danielnarey$elm_toolkit$Toolkit_List_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|++'] = F2(
	function (a, list) {
		return {ctor: '::', _0: a, _1: list};
	});
var _danielnarey$elm_toolkit$Toolkit_List_Operators_ops = _danielnarey$elm_toolkit$Toolkit_List_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['|::'] = F2(
	function (list, a) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			list,
			{
				ctor: '::',
				_0: a,
				_1: {ctor: '[]'}
			});
	});
var _danielnarey$elm_toolkit$Toolkit_List_Operators_ops = _danielnarey$elm_toolkit$Toolkit_List_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['|++'] = F2(
	function (a, b) {
		return A2(_elm_lang$core$Basics_ops['++'], a, b);
	});

var _danielnarey$elm_modular_ui$View_Home$overview = A2(
	_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
	A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		A2(
			_danielnarey$elm_modular_ui$Ui_Modifier$addList,
			{
				ctor: '::',
				_0: 'content',
				_1: {
					ctor: '::',
					_0: 'is-size-4',
					_1: {
						ctor: '::',
						_0: 'has-text-bold',
						_1: {
							ctor: '::',
							_0: 'has-text-dark',
							_1: {ctor: '[]'}
						}
					}
				}
			},
			A2(
				_danielnarey$elm_modular_ui$Ui$container,
				'div',
				{
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$Ui$container,
						'p',
						{
							ctor: '::',
							_0: _danielnarey$elm_modular_ui$Ui_Text$plain(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'Modular UI is a framework for building a modern user interface in Elm ',
									A2(_elm_lang$core$Basics_ops['++'], 'that abstracts out a lot of the details of the underlying HTML and ', 'CSS. It\'s partially inspired by and designed to be used with the '))),
							_1: {
								ctor: '::',
								_0: A2(
									_danielnarey$elm_modular_ui$Ui_Text$link,
									{ctor: '_Tuple2', _0: 'http://bulma.io', _1: true},
									'Bulma CSS '),
								_1: {
									ctor: '::',
									_0: _danielnarey$elm_modular_ui$Ui_Text$plain('framework.'),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_danielnarey$elm_modular_ui$Ui$container,
							'p',
							{
								ctor: '::',
								_0: _danielnarey$elm_modular_ui$Ui_Text$plain(
									A2(_elm_lang$core$Basics_ops['++'], 'This site features live code examples that show Modular UI in action. ', 'The full package documentation is available ')),
								_1: {
									ctor: '::',
									_0: A2(
										_danielnarey$elm_modular_ui$Ui_Text$link,
										{ctor: '_Tuple2', _0: 'http://package.elm-lang.org/packages/danielnarey/elm-modular-ui/latest', _1: true},
										'here'),
									_1: {
										ctor: '::',
										_0: _danielnarey$elm_modular_ui$Ui_Text$plain('.'),
										_1: {ctor: '[]'}
									}
								}
							}),
						_1: {
							ctor: '::',
							_0: _danielnarey$elm_modular_ui$Ui$leaf('hr'),
							_1: {ctor: '[]'}
						}
					}
				})),
		_danielnarey$elm_modular_ui$Component_Layout$container),
	_danielnarey$elm_modular_ui$Component_Layout$section);

var _elm_tools$parser_primitives$Native_ParserPrimitives = function() {


// STRINGS

function isSubString(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var bigLength = bigString.length - offset;

	if (bigLength < smallLength)
	{
		return tuple3(-1, row, col);
	}

	for (var i = 0; i < smallLength; i++)
	{
		var char = smallString[i];

		if (char !== bigString[offset + i])
		{
			return tuple3(-1, row, col);
		}

		// if it is a two word character
		if ((bigString.charCodeAt(offset) & 0xF800) === 0xD800)
		{
			i++
			if (smallString[i] !== bigString[offset + i])
			{
				return tuple3(-1, row, col);
			}
			col++;
			continue;
		}

		// if it is a newline
		if (char === '\n')
		{
			row++;
			col = 1;
			continue;
		}

		// if it is a one word character
		col++
	}

	return tuple3(offset + smallLength, row, col);
}

function tuple3(a, b, c)
{
	return { ctor: '_Tuple3', _0: a, _1: b, _2: c };
}


// CHARS

var mkChar = _elm_lang$core$Native_Utils.chr;

function isSubChar(predicate, offset, string)
{
	if (offset >= string.length)
	{
		return -1;
	}

	if ((string.charCodeAt(offset) & 0xF800) === 0xD800)
	{
		return predicate(mkChar(string.substr(offset, 2)))
			? offset + 2
			: -1;
	}

	var char = string[offset];

	return predicate(mkChar(char))
		? ((char === '\n') ? -2 : (offset + 1))
		: -1;
}


// FIND STRING

function findSubString(before, smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);

	if (newOffset === -1)
	{
		return tuple3(-1, row, col);
	}

	var scanTarget = before ? newOffset	: newOffset + smallString.length;

	while (offset < scanTarget)
	{
		var char = bigString[offset];

		if (char === '\n')
		{
			offset++;
			row++;
			col = 1;
			continue;
		}

		if ((bigString.charCodeAt(offset) & 0xF800) === 0xD800)
		{
			offset += 2;
			col++;
			continue;
		}

		offset++;
		col++;
	}

	return tuple3(offset, row, col);
}


return {
	isSubString: F5(isSubString),
	isSubChar: F3(isSubChar),
	findSubString: F6(findSubString)
};

}();

var _elm_tools$parser_primitives$ParserPrimitives$findSubString = _elm_tools$parser_primitives$Native_ParserPrimitives.findSubString;
var _elm_tools$parser_primitives$ParserPrimitives$isSubChar = _elm_tools$parser_primitives$Native_ParserPrimitives.isSubChar;
var _elm_tools$parser_primitives$ParserPrimitives$isSubString = _elm_tools$parser_primitives$Native_ParserPrimitives.isSubString;

var _elm_tools$parser$Parser_Internal$isPlusOrMinus = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('+')) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('-'));
};
var _elm_tools$parser$Parser_Internal$isZero = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('0'));
};
var _elm_tools$parser$Parser_Internal$isE = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('e')) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('E'));
};
var _elm_tools$parser$Parser_Internal$isDot = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('.'));
};
var _elm_tools$parser$Parser_Internal$isBadIntEnd = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (_elm_lang$core$Char$isUpper($char) || (_elm_lang$core$Char$isLower($char) || _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('.'))));
};
var _elm_tools$parser$Parser_Internal$chomp = F3(
	function (isGood, offset, source) {
		chomp:
		while (true) {
			var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, isGood, offset, source);
			if (_elm_lang$core$Native_Utils.cmp(newOffset, 0) < 0) {
				return offset;
			} else {
				var _v0 = isGood,
					_v1 = newOffset,
					_v2 = source;
				isGood = _v0;
				offset = _v1;
				source = _v2;
				continue chomp;
			}
		}
	});
var _elm_tools$parser$Parser_Internal$chompDigits = F3(
	function (isValidDigit, offset, source) {
		var newOffset = A3(_elm_tools$parser$Parser_Internal$chomp, isValidDigit, offset, source);
		return _elm_lang$core$Native_Utils.eq(newOffset, offset) ? _elm_lang$core$Result$Err(newOffset) : ((!_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isBadIntEnd, newOffset, source),
			-1)) ? _elm_lang$core$Result$Err(newOffset) : _elm_lang$core$Result$Ok(newOffset));
	});
var _elm_tools$parser$Parser_Internal$chompExp = F2(
	function (offset, source) {
		var eOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isE, offset, source);
		if (_elm_lang$core$Native_Utils.eq(eOffset, -1)) {
			return _elm_lang$core$Result$Ok(offset);
		} else {
			var opOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isPlusOrMinus, eOffset, source);
			var expOffset = _elm_lang$core$Native_Utils.eq(opOffset, -1) ? eOffset : opOffset;
			return (!_elm_lang$core$Native_Utils.eq(
				A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isZero, expOffset, source),
				-1)) ? _elm_lang$core$Result$Err(expOffset) : (_elm_lang$core$Native_Utils.eq(
				A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_lang$core$Char$isDigit, expOffset, source),
				-1) ? _elm_lang$core$Result$Err(expOffset) : A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isDigit, expOffset, source));
		}
	});
var _elm_tools$parser$Parser_Internal$chompDotAndExp = F2(
	function (offset, source) {
		var dotOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isDot, offset, source);
		return _elm_lang$core$Native_Utils.eq(dotOffset, -1) ? A2(_elm_tools$parser$Parser_Internal$chompExp, offset, source) : A2(
			_elm_tools$parser$Parser_Internal$chompExp,
			A3(_elm_tools$parser$Parser_Internal$chomp, _elm_lang$core$Char$isDigit, dotOffset, source),
			source);
	});
var _elm_tools$parser$Parser_Internal$State = F6(
	function (a, b, c, d, e, f) {
		return {source: a, offset: b, indent: c, context: d, row: e, col: f};
	});
var _elm_tools$parser$Parser_Internal$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _elm_tools$parser$Parser_Internal$Bad = F2(
	function (a, b) {
		return {ctor: 'Bad', _0: a, _1: b};
	});
var _elm_tools$parser$Parser_Internal$Good = F2(
	function (a, b) {
		return {ctor: 'Good', _0: a, _1: b};
	});

var _elm_tools$parser$Parser$changeContext = F2(
	function (newContext, _p0) {
		var _p1 = _p0;
		return {source: _p1.source, offset: _p1.offset, indent: _p1.indent, context: newContext, row: _p1.row, col: _p1.col};
	});
var _elm_tools$parser$Parser$sourceMap = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p4) {
				var _p5 = _p4;
				var _p6 = _p3._0(_p5);
				if (_p6.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p6._0, _p6._1);
				} else {
					var _p7 = _p6._1;
					var subString = A3(_elm_lang$core$String$slice, _p5.offset, _p7.offset, _p5.source);
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						A2(func, subString, _p6._0),
						_p7);
				}
			});
	});
var _elm_tools$parser$Parser$source = function (parser) {
	return A2(_elm_tools$parser$Parser$sourceMap, _elm_lang$core$Basics$always, parser);
};
var _elm_tools$parser$Parser$badFloatMsg = 'The `Parser.float` parser seems to have a bug.\nPlease report an SSCCE to <https://github.com/elm-tools/parser/issues>.';
var _elm_tools$parser$Parser$floatHelp = F3(
	function (offset, zeroOffset, source) {
		if (_elm_lang$core$Native_Utils.cmp(zeroOffset, 0) > -1) {
			return A2(_elm_tools$parser$Parser_Internal$chompDotAndExp, zeroOffset, source);
		} else {
			var dotOffset = A3(_elm_tools$parser$Parser_Internal$chomp, _elm_lang$core$Char$isDigit, offset, source);
			var result = A2(_elm_tools$parser$Parser_Internal$chompDotAndExp, dotOffset, source);
			var _p8 = result;
			if (_p8.ctor === 'Err') {
				return result;
			} else {
				var _p9 = _p8._0;
				return _elm_lang$core$Native_Utils.eq(_p9, offset) ? _elm_lang$core$Result$Err(_p9) : result;
			}
		}
	});
var _elm_tools$parser$Parser$badIntMsg = 'The `Parser.int` parser seems to have a bug.\nPlease report an SSCCE to <https://github.com/elm-tools/parser/issues>.';
var _elm_tools$parser$Parser$isX = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('x'));
};
var _elm_tools$parser$Parser$isO = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('o'));
};
var _elm_tools$parser$Parser$isZero = function ($char) {
	return _elm_lang$core$Native_Utils.eq(
		$char,
		_elm_lang$core$Native_Utils.chr('0'));
};
var _elm_tools$parser$Parser$intHelp = F3(
	function (offset, zeroOffset, source) {
		return _elm_lang$core$Native_Utils.eq(zeroOffset, -1) ? A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isDigit, offset, source) : ((!_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isX, zeroOffset, source),
			-1)) ? A3(_elm_tools$parser$Parser_Internal$chompDigits, _elm_lang$core$Char$isHexDigit, offset + 2, source) : (_elm_lang$core$Native_Utils.eq(
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser_Internal$isBadIntEnd, zeroOffset, source),
			-1) ? _elm_lang$core$Result$Ok(zeroOffset) : _elm_lang$core$Result$Err(zeroOffset)));
	});
var _elm_tools$parser$Parser$token = F2(
	function (makeProblem, str) {
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p10) {
				var _p11 = _p10;
				var _p13 = _p11.source;
				var _p12 = A5(_elm_tools$parser_primitives$ParserPrimitives$isSubString, str, _p11.offset, _p11.row, _p11.col, _p13);
				var newOffset = _p12._0;
				var newRow = _p12._1;
				var newCol = _p12._2;
				return _elm_lang$core$Native_Utils.eq(newOffset, -1) ? A2(
					_elm_tools$parser$Parser_Internal$Bad,
					makeProblem(str),
					_p11) : A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					{source: _p13, offset: newOffset, indent: _p11.indent, context: _p11.context, row: newRow, col: newCol});
			});
	});
var _elm_tools$parser$Parser$delayedCommitMap = F3(
	function (func, _p15, _p14) {
		var _p16 = _p15;
		var _p17 = _p14;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p18 = _p16._0(state1);
				if (_p18.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p18._0, state1);
				} else {
					var _p22 = _p18._1;
					var _p19 = _p17._0(_p22);
					if (_p19.ctor === 'Good') {
						return A2(
							_elm_tools$parser$Parser_Internal$Good,
							A2(func, _p18._0, _p19._0),
							_p19._1);
					} else {
						var _p21 = _p19._0;
						var _p20 = _p19._1;
						return (_elm_lang$core$Native_Utils.eq(_p22.row, _p20.row) && _elm_lang$core$Native_Utils.eq(_p22.col, _p20.col)) ? A2(_elm_tools$parser$Parser_Internal$Bad, _p21, state1) : A2(_elm_tools$parser$Parser_Internal$Bad, _p21, _p20);
					}
				}
			});
	});
var _elm_tools$parser$Parser$delayedCommit = F2(
	function (filler, realStuff) {
		return A3(
			_elm_tools$parser$Parser$delayedCommitMap,
			F2(
				function (_p23, v) {
					return v;
				}),
			filler,
			realStuff);
	});
var _elm_tools$parser$Parser$lazy = function (thunk) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			var _p24 = thunk(
				{ctor: '_Tuple0'});
			var parse = _p24._0;
			return parse(state);
		});
};
var _elm_tools$parser$Parser$andThen = F2(
	function (callback, _p25) {
		var _p26 = _p25;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p27 = _p26._0(state1);
				if (_p27.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p27._0, _p27._1);
				} else {
					var _p28 = callback(_p27._0);
					var parseB = _p28._0;
					return parseB(_p27._1);
				}
			});
	});
var _elm_tools$parser$Parser$apply = F2(
	function (f, a) {
		return f(a);
	});
var _elm_tools$parser$Parser$map2 = F3(
	function (func, _p30, _p29) {
		var _p31 = _p30;
		var _p32 = _p29;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p33 = _p31._0(state1);
				if (_p33.ctor === 'Bad') {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p33._0, _p33._1);
				} else {
					var _p34 = _p32._0(_p33._1);
					if (_p34.ctor === 'Bad') {
						return A2(_elm_tools$parser$Parser_Internal$Bad, _p34._0, _p34._1);
					} else {
						return A2(
							_elm_tools$parser$Parser_Internal$Good,
							A2(func, _p33._0, _p34._0),
							_p34._1);
					}
				}
			});
	});
var _elm_tools$parser$Parser_ops = _elm_tools$parser$Parser_ops || {};
_elm_tools$parser$Parser_ops['|='] = F2(
	function (parseFunc, parseArg) {
		return A3(_elm_tools$parser$Parser$map2, _elm_tools$parser$Parser$apply, parseFunc, parseArg);
	});
var _elm_tools$parser$Parser_ops = _elm_tools$parser$Parser_ops || {};
_elm_tools$parser$Parser_ops['|.'] = F2(
	function (keepParser, ignoreParser) {
		return A3(_elm_tools$parser$Parser$map2, _elm_lang$core$Basics$always, keepParser, ignoreParser);
	});
var _elm_tools$parser$Parser$map = F2(
	function (func, _p35) {
		var _p36 = _p35;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (state1) {
				var _p37 = _p36._0(state1);
				if (_p37.ctor === 'Good') {
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						func(_p37._0),
						_p37._1);
				} else {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p37._0, _p37._1);
				}
			});
	});
var _elm_tools$parser$Parser$succeed = function (a) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A2(_elm_tools$parser$Parser_Internal$Good, a, state);
		});
};
var _elm_tools$parser$Parser$run = F2(
	function (_p38, source) {
		var _p39 = _p38;
		var initialState = {
			source: source,
			offset: 0,
			indent: 1,
			context: {ctor: '[]'},
			row: 1,
			col: 1
		};
		var _p40 = _p39._0(initialState);
		if (_p40.ctor === 'Good') {
			return _elm_lang$core$Result$Ok(_p40._0);
		} else {
			return _elm_lang$core$Result$Err(
				{row: _p40._1.row, col: _p40._1.col, source: source, problem: _p40._0, context: _p40._1.context});
		}
	});
var _elm_tools$parser$Parser$Error = F5(
	function (a, b, c, d, e) {
		return {row: a, col: b, source: c, problem: d, context: e};
	});
var _elm_tools$parser$Parser$Context = F3(
	function (a, b, c) {
		return {row: a, col: b, description: c};
	});
var _elm_tools$parser$Parser$inContext = F2(
	function (ctx, _p41) {
		var _p42 = _p41;
		return _elm_tools$parser$Parser_Internal$Parser(
			function (_p43) {
				var _p44 = _p43;
				var _p46 = _p44.context;
				var state1 = A2(
					_elm_tools$parser$Parser$changeContext,
					{
						ctor: '::',
						_0: A3(_elm_tools$parser$Parser$Context, _p44.row, _p44.col, ctx),
						_1: _p46
					},
					_p44);
				var _p45 = _p42._0(state1);
				if (_p45.ctor === 'Good') {
					return A2(
						_elm_tools$parser$Parser_Internal$Good,
						_p45._0,
						A2(_elm_tools$parser$Parser$changeContext, _p46, _p45._1));
				} else {
					return _p45;
				}
			});
	});
var _elm_tools$parser$Parser$Fail = function (a) {
	return {ctor: 'Fail', _0: a};
};
var _elm_tools$parser$Parser$fail = function (message) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$Fail(message),
				state);
		});
};
var _elm_tools$parser$Parser$ExpectingClosing = function (a) {
	return {ctor: 'ExpectingClosing', _0: a};
};
var _elm_tools$parser$Parser$ignoreUntil = function (str) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (_p47) {
			var _p48 = _p47;
			var _p50 = _p48.source;
			var _p49 = A6(_elm_tools$parser_primitives$ParserPrimitives$findSubString, false, str, _p48.offset, _p48.row, _p48.col, _p50);
			var newOffset = _p49._0;
			var newRow = _p49._1;
			var newCol = _p49._2;
			return _elm_lang$core$Native_Utils.eq(newOffset, -1) ? A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$ExpectingClosing(str),
				_p48) : A2(
				_elm_tools$parser$Parser_Internal$Good,
				{ctor: '_Tuple0'},
				{source: _p50, offset: newOffset, indent: _p48.indent, context: _p48.context, row: newRow, col: newCol});
		});
};
var _elm_tools$parser$Parser$ExpectingVariable = {ctor: 'ExpectingVariable'};
var _elm_tools$parser$Parser$ExpectingKeyword = function (a) {
	return {ctor: 'ExpectingKeyword', _0: a};
};
var _elm_tools$parser$Parser$keyword = function (str) {
	return A2(_elm_tools$parser$Parser$token, _elm_tools$parser$Parser$ExpectingKeyword, str);
};
var _elm_tools$parser$Parser$ExpectingSymbol = function (a) {
	return {ctor: 'ExpectingSymbol', _0: a};
};
var _elm_tools$parser$Parser$symbol = function (str) {
	return A2(_elm_tools$parser$Parser$token, _elm_tools$parser$Parser$ExpectingSymbol, str);
};
var _elm_tools$parser$Parser$ExpectingEnd = {ctor: 'ExpectingEnd'};
var _elm_tools$parser$Parser$end = _elm_tools$parser$Parser_Internal$Parser(
	function (state) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$String$length(state.source),
			state.offset) ? A2(
			_elm_tools$parser$Parser_Internal$Good,
			{ctor: '_Tuple0'},
			state) : A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$ExpectingEnd, state);
	});
var _elm_tools$parser$Parser$BadRepeat = {ctor: 'BadRepeat'};
var _elm_tools$parser$Parser$repeatExactly = F4(
	function (n, parse, revList, state1) {
		repeatExactly:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_elm_lang$core$List$reverse(revList),
					state1);
			} else {
				var _p51 = parse(state1);
				if (_p51.ctor === 'Good') {
					var _p52 = _p51._1;
					if (_elm_lang$core$Native_Utils.eq(state1.row, _p52.row) && _elm_lang$core$Native_Utils.eq(state1.col, _p52.col)) {
						return A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, _p52);
					} else {
						var _v25 = n - 1,
							_v26 = parse,
							_v27 = {ctor: '::', _0: _p51._0, _1: revList},
							_v28 = _p52;
						n = _v25;
						parse = _v26;
						revList = _v27;
						state1 = _v28;
						continue repeatExactly;
					}
				} else {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _p51._0, _p51._1);
				}
			}
		}
	});
var _elm_tools$parser$Parser$repeatAtLeast = F4(
	function (n, parse, revList, state1) {
		repeatAtLeast:
		while (true) {
			var _p53 = parse(state1);
			if (_p53.ctor === 'Good') {
				var _p54 = _p53._1;
				if (_elm_lang$core$Native_Utils.eq(state1.row, _p54.row) && _elm_lang$core$Native_Utils.eq(state1.col, _p54.col)) {
					return A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, _p54);
				} else {
					var _v30 = n - 1,
						_v31 = parse,
						_v32 = {ctor: '::', _0: _p53._0, _1: revList},
						_v33 = _p54;
					n = _v30;
					parse = _v31;
					revList = _v32;
					state1 = _v33;
					continue repeatAtLeast;
				}
			} else {
				var _p55 = _p53._1;
				return (_elm_lang$core$Native_Utils.eq(state1.row, _p55.row) && (_elm_lang$core$Native_Utils.eq(state1.col, _p55.col) && (_elm_lang$core$Native_Utils.cmp(n, 0) < 1))) ? A2(
					_elm_tools$parser$Parser_Internal$Good,
					_elm_lang$core$List$reverse(revList),
					state1) : A2(_elm_tools$parser$Parser_Internal$Bad, _p53._0, _p55);
			}
		}
	});
var _elm_tools$parser$Parser$repeat = F2(
	function (count, _p56) {
		var _p57 = _p56;
		var _p59 = _p57._0;
		var _p58 = count;
		if (_p58.ctor === 'Exactly') {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (state) {
					return A4(
						_elm_tools$parser$Parser$repeatExactly,
						_p58._0,
						_p59,
						{ctor: '[]'},
						state);
				});
		} else {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (state) {
					return A4(
						_elm_tools$parser$Parser$repeatAtLeast,
						_p58._0,
						_p59,
						{ctor: '[]'},
						state);
				});
		}
	});
var _elm_tools$parser$Parser$ignoreExactly = F8(
	function (n, predicate, source, offset, indent, context, row, col) {
		ignoreExactly:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					{source: source, offset: offset, indent: indent, context: context, row: row, col: col});
			} else {
				var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, predicate, offset, source);
				if (_elm_lang$core$Native_Utils.eq(newOffset, -1)) {
					return A2(
						_elm_tools$parser$Parser_Internal$Bad,
						_elm_tools$parser$Parser$BadRepeat,
						{source: source, offset: offset, indent: indent, context: context, row: row, col: col});
				} else {
					if (_elm_lang$core$Native_Utils.eq(newOffset, -2)) {
						var _v36 = n - 1,
							_v37 = predicate,
							_v38 = source,
							_v39 = offset + 1,
							_v40 = indent,
							_v41 = context,
							_v42 = row + 1,
							_v43 = 1;
						n = _v36;
						predicate = _v37;
						source = _v38;
						offset = _v39;
						indent = _v40;
						context = _v41;
						row = _v42;
						col = _v43;
						continue ignoreExactly;
					} else {
						var _v44 = n - 1,
							_v45 = predicate,
							_v46 = source,
							_v47 = newOffset,
							_v48 = indent,
							_v49 = context,
							_v50 = row,
							_v51 = col + 1;
						n = _v44;
						predicate = _v45;
						source = _v46;
						offset = _v47;
						indent = _v48;
						context = _v49;
						row = _v50;
						col = _v51;
						continue ignoreExactly;
					}
				}
			}
		}
	});
var _elm_tools$parser$Parser$ignoreAtLeast = F8(
	function (n, predicate, source, offset, indent, context, row, col) {
		ignoreAtLeast:
		while (true) {
			var newOffset = A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, predicate, offset, source);
			if (_elm_lang$core$Native_Utils.eq(newOffset, -1)) {
				var state = {source: source, offset: offset, indent: indent, context: context, row: row, col: col};
				return (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) ? A2(
					_elm_tools$parser$Parser_Internal$Good,
					{ctor: '_Tuple0'},
					state) : A2(_elm_tools$parser$Parser_Internal$Bad, _elm_tools$parser$Parser$BadRepeat, state);
			} else {
				if (_elm_lang$core$Native_Utils.eq(newOffset, -2)) {
					var _v52 = n - 1,
						_v53 = predicate,
						_v54 = source,
						_v55 = offset + 1,
						_v56 = indent,
						_v57 = context,
						_v58 = row + 1,
						_v59 = 1;
					n = _v52;
					predicate = _v53;
					source = _v54;
					offset = _v55;
					indent = _v56;
					context = _v57;
					row = _v58;
					col = _v59;
					continue ignoreAtLeast;
				} else {
					var _v60 = n - 1,
						_v61 = predicate,
						_v62 = source,
						_v63 = newOffset,
						_v64 = indent,
						_v65 = context,
						_v66 = row,
						_v67 = col + 1;
					n = _v60;
					predicate = _v61;
					source = _v62;
					offset = _v63;
					indent = _v64;
					context = _v65;
					row = _v66;
					col = _v67;
					continue ignoreAtLeast;
				}
			}
		}
	});
var _elm_tools$parser$Parser$ignore = F2(
	function (count, predicate) {
		var _p60 = count;
		if (_p60.ctor === 'Exactly') {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (_p61) {
					var _p62 = _p61;
					return A8(_elm_tools$parser$Parser$ignoreExactly, _p60._0, predicate, _p62.source, _p62.offset, _p62.indent, _p62.context, _p62.row, _p62.col);
				});
		} else {
			return _elm_tools$parser$Parser_Internal$Parser(
				function (_p63) {
					var _p64 = _p63;
					return A8(_elm_tools$parser$Parser$ignoreAtLeast, _p60._0, predicate, _p64.source, _p64.offset, _p64.indent, _p64.context, _p64.row, _p64.col);
				});
		}
	});
var _elm_tools$parser$Parser$keep = F2(
	function (count, predicate) {
		return _elm_tools$parser$Parser$source(
			A2(_elm_tools$parser$Parser$ignore, count, predicate));
	});
var _elm_tools$parser$Parser$BadFloat = {ctor: 'BadFloat'};
var _elm_tools$parser$Parser$float = _elm_tools$parser$Parser_Internal$Parser(
	function (_p65) {
		var _p66 = _p65;
		var _p77 = _p66.source;
		var _p76 = _p66.row;
		var _p75 = _p66.offset;
		var _p74 = _p66.indent;
		var _p73 = _p66.context;
		var _p72 = _p66.col;
		var _p67 = A3(
			_elm_tools$parser$Parser$floatHelp,
			_p75,
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isZero, _p75, _p77),
			_p77);
		if (_p67.ctor === 'Err') {
			var _p68 = _p67._0;
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$BadFloat,
				{source: _p77, offset: _p68, indent: _p74, context: _p73, row: _p76, col: _p72 + (_p68 - _p75)});
		} else {
			var _p71 = _p67._0;
			var _p69 = _elm_lang$core$String$toFloat(
				A3(_elm_lang$core$String$slice, _p75, _p71, _p77));
			if (_p69.ctor === 'Err') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Parser',
					{
						start: {line: 733, column: 9},
						end: {line: 745, column: 16}
					},
					_p69)(_elm_tools$parser$Parser$badFloatMsg);
			} else {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_p69._0,
					{source: _p77, offset: _p71, indent: _p74, context: _p73, row: _p76, col: _p72 + (_p71 - _p75)});
			}
		}
	});
var _elm_tools$parser$Parser$BadInt = {ctor: 'BadInt'};
var _elm_tools$parser$Parser$int = _elm_tools$parser$Parser_Internal$Parser(
	function (_p78) {
		var _p79 = _p78;
		var _p90 = _p79.source;
		var _p89 = _p79.row;
		var _p88 = _p79.offset;
		var _p87 = _p79.indent;
		var _p86 = _p79.context;
		var _p85 = _p79.col;
		var _p80 = A3(
			_elm_tools$parser$Parser$intHelp,
			_p88,
			A3(_elm_tools$parser_primitives$ParserPrimitives$isSubChar, _elm_tools$parser$Parser$isZero, _p88, _p90),
			_p90);
		if (_p80.ctor === 'Err') {
			var _p81 = _p80._0;
			return A2(
				_elm_tools$parser$Parser_Internal$Bad,
				_elm_tools$parser$Parser$BadInt,
				{source: _p90, offset: _p81, indent: _p87, context: _p86, row: _p89, col: _p85 + (_p81 - _p88)});
		} else {
			var _p84 = _p80._0;
			var _p82 = _elm_lang$core$String$toInt(
				A3(_elm_lang$core$String$slice, _p88, _p84, _p90));
			if (_p82.ctor === 'Err') {
				return _elm_lang$core$Native_Utils.crashCase(
					'Parser',
					{
						start: {line: 638, column: 9},
						end: {line: 650, column: 16}
					},
					_p82)(_elm_tools$parser$Parser$badIntMsg);
			} else {
				return A2(
					_elm_tools$parser$Parser_Internal$Good,
					_p82._0,
					{source: _p90, offset: _p84, indent: _p87, context: _p86, row: _p89, col: _p85 + (_p84 - _p88)});
			}
		}
	});
var _elm_tools$parser$Parser$BadOneOf = function (a) {
	return {ctor: 'BadOneOf', _0: a};
};
var _elm_tools$parser$Parser$oneOfHelp = F3(
	function (state, problems, parsers) {
		oneOfHelp:
		while (true) {
			var _p91 = parsers;
			if (_p91.ctor === '[]') {
				return A2(
					_elm_tools$parser$Parser_Internal$Bad,
					_elm_tools$parser$Parser$BadOneOf(
						_elm_lang$core$List$reverse(problems)),
					state);
			} else {
				var _p92 = _p91._0._0(state);
				if (_p92.ctor === 'Good') {
					return _p92;
				} else {
					if (_elm_lang$core$Native_Utils.eq(state.row, _p92._1.row) && _elm_lang$core$Native_Utils.eq(state.col, _p92._1.col)) {
						var _v79 = state,
							_v80 = {ctor: '::', _0: _p92._0, _1: problems},
							_v81 = _p91._1;
						state = _v79;
						problems = _v80;
						parsers = _v81;
						continue oneOfHelp;
					} else {
						return _p92;
					}
				}
			}
		}
	});
var _elm_tools$parser$Parser$oneOf = function (parsers) {
	return _elm_tools$parser$Parser_Internal$Parser(
		function (state) {
			return A3(
				_elm_tools$parser$Parser$oneOfHelp,
				state,
				{ctor: '[]'},
				parsers);
		});
};
var _elm_tools$parser$Parser$Exactly = function (a) {
	return {ctor: 'Exactly', _0: a};
};
var _elm_tools$parser$Parser$AtLeast = function (a) {
	return {ctor: 'AtLeast', _0: a};
};
var _elm_tools$parser$Parser$zeroOrMore = _elm_tools$parser$Parser$AtLeast(0);
var _elm_tools$parser$Parser$oneOrMore = _elm_tools$parser$Parser$AtLeast(1);

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$colorToCss = F2(
	function (property, color) {
		var _p0 = color;
		switch (_p0.ctor) {
			case 'DefaultColor':
				return '';
			case 'Hex':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					property,
					A2(_elm_lang$core$Basics_ops['++'], _p0._0, ';'));
			case 'Rgb':
				return _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: property,
						_1: {
							ctor: '::',
							_0: 'rgb(',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(_p0._0),
								_1: {
									ctor: '::',
									_0: ', ',
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Basics$toString(_p0._1),
										_1: {
											ctor: '::',
											_0: ',',
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Basics$toString(_p0._2),
												_1: {
													ctor: '::',
													_0: ');',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					});
			default:
				return _elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: property,
						_1: {
							ctor: '::',
							_0: 'rgba(',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(_p0._0),
								_1: {
									ctor: '::',
									_0: ', ',
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Basics$toString(_p0._1),
										_1: {
											ctor: '::',
											_0: ',',
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Basics$toString(_p0._2),
												_1: {
													ctor: '::',
													_0: ', ',
													_1: {
														ctor: '::',
														_0: _elm_lang$core$Basics$toString(_p0._3),
														_1: {
															ctor: '::',
															_0: ');',
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					});
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$emptyIfFalse = F2(
	function (bool, str) {
		return bool ? str : '';
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$styleToCss = function (_p1) {
	var _p2 = _p1;
	return _elm_lang$core$String$concat(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$emptyIfFalse, _p2.isBold, 'font-weight: bold;'),
			_1: {
				ctor: '::',
				_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$emptyIfFalse, _p2.isItalic, 'font-style: italic;'),
				_1: {
					ctor: '::',
					_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$emptyIfFalse, _p2.isUnderline, 'text-decoration: underline;'),
					_1: {
						ctor: '::',
						_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$colorToCss, 'color: ', _p2.text),
						_1: {
							ctor: '::',
							_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$colorToCss, 'background: ', _p2.background),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$toCssClass = function (_p3) {
	var _p4 = _p3;
	var _p5 = _p4._0;
	return _elm_lang$core$String$isEmpty(_p5) ? '' : A2(
		_elm_lang$core$Basics_ops['++'],
		_p5,
		A2(
			_elm_lang$core$Basics_ops['++'],
			' {',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$styleToCss(_p4._1),
				'}')));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$toCss = function (classes) {
	return _elm_lang$core$String$concat(
		A2(_elm_lang$core$List$map, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$toCssClass, classes));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$bold = function (style) {
	return _elm_lang$core$Native_Utils.update(
		style,
		{isBold: true});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$italic = function (style) {
	return _elm_lang$core$Native_Utils.update(
		style,
		{isItalic: true});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$noEmphasis = F2(
	function (text, background) {
		return {isBold: false, isItalic: false, isUnderline: false, text: text, background: background};
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$RequiredStyles = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return {$default: a, highlight: b, addition: c, deletion: d, comment: e, style1: f, style2: g, style3: h, style4: i, style5: j, style6: k, style7: l};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style = F5(
	function (a, b, c, d, e) {
		return {isBold: a, isItalic: b, isUnderline: c, text: d, background: e};
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style7 = {ctor: 'Style7'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style6 = {ctor: 'Style6'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style5 = {ctor: 'Style5'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style4 = {ctor: 'Style4'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style3 = {ctor: 'Style3'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style2 = {ctor: 'Style2'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style1 = {ctor: 'Style1'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Comment = {ctor: 'Comment'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Default = {ctor: 'Default'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Rgba = F4(
	function (a, b, c, d) {
		return {ctor: 'Rgba', _0: a, _1: b, _2: c, _3: d};
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Rgb = F3(
	function (a, b, c) {
		return {ctor: 'Rgb', _0: a, _1: b, _2: c};
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex = function (a) {
	return {ctor: 'Hex', _0: a};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$DefaultColor = {ctor: 'DefaultColor'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor = function (text) {
	return {isBold: false, isItalic: false, isUnderline: false, text: text, background: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$DefaultColor};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$backgroundColor = function (background) {
	return {isBold: false, isItalic: false, isUnderline: false, text: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$DefaultColor, background: background};
};

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$highlightLinesHelp = F5(
	function (maybeHighlight, start, end, index, line) {
		return ((_elm_lang$core$Native_Utils.cmp(index, start) > -1) && (_elm_lang$core$Native_Utils.cmp(index, end) < 0)) ? _elm_lang$core$Native_Utils.update(
			line,
			{highlight: maybeHighlight}) : line;
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$highlightLines = F4(
	function (maybeHighlight, start, end, lines) {
		var length = _elm_lang$core$List$length(lines);
		var start_ = (_elm_lang$core$Native_Utils.cmp(start, 0) < 0) ? (length + start) : start;
		var end_ = (_elm_lang$core$Native_Utils.cmp(end, 0) < 0) ? (length + end) : end;
		return A2(
			_elm_lang$core$List$indexedMap,
			A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$highlightLinesHelp, maybeHighlight, start_, end_),
			lines);
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Line = F2(
	function (a, b) {
		return {fragments: a, highlight: b};
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Fragment = F3(
	function (a, b, c) {
		return {text: a, requiredStyle: b, additionalClass: c};
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Del = {ctor: 'Del'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Add = {ctor: 'Add'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Normal = {ctor: 'Normal'};

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$consoleFragmentView = F2(
	function (options, _p0) {
		var _p1 = _p0;
		var _p3 = _p1.text;
		var _p2 = _p1.requiredStyle;
		switch (_p2.ctor) {
			case 'Default':
				return options.$default(_p3);
			case 'Comment':
				return options.comment(_p3);
			case 'Style1':
				return options.style1(_p3);
			case 'Style2':
				return options.style2(_p3);
			case 'Style3':
				return options.style3(_p3);
			case 'Style4':
				return options.style4(_p3);
			case 'Style5':
				return options.style5(_p3);
			case 'Style6':
				return options.style6(_p3);
			default:
				return options.style7(_p3);
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toConsole = F2(
	function (options, lines) {
		return A2(
			_elm_lang$core$List$map,
			function (_p4) {
				var _p5 = _p4;
				var _p8 = _p5.highlight;
				var _p7 = _p5.fragments;
				return _elm_lang$core$Native_Utils.eq(_p8, _elm_lang$core$Maybe$Nothing) ? _elm_lang$core$String$concat(
					A2(
						_elm_lang$core$List$map,
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$consoleFragmentView(options),
						_p7)) : function (n) {
					var _p6 = _p8;
					if (_p6.ctor === 'Nothing') {
						return n;
					} else {
						switch (_p6._0.ctor) {
							case 'Normal':
								return options.highlight(n);
							case 'Add':
								return options.addition(n);
							default:
								return options.deletion(n);
						}
					}
				}(
					_elm_lang$core$String$concat(
						A2(
							_elm_lang$core$List$map,
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$consoleFragmentView(options),
							_p7)));
			},
			lines);
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$emptyIfFalse = F2(
	function (bool, str) {
		return bool ? str : '';
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$requiredStyleToString = function (required) {
	return A2(
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		'elmsh',
		function () {
			var _p9 = required;
			switch (_p9.ctor) {
				case 'Default':
					return '0';
				case 'Comment':
					return '-comm';
				case 'Style1':
					return '1';
				case 'Style2':
					return '2';
				case 'Style3':
					return '3';
				case 'Style4':
					return '4';
				case 'Style5':
					return '5';
				case 'Style6':
					return '6';
				default:
					return '7';
			}
		}());
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$staticFragmentView = function (_p10) {
	var _p11 = _p10;
	var _p14 = _p11.text;
	var _p13 = _p11.requiredStyle;
	var _p12 = _p11.additionalClass;
	return (_elm_lang$core$Native_Utils.eq(_p13, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Default) && _elm_lang$core$String$isEmpty(_p12)) ? _p14 : _elm_lang$core$String$concat(
		{
			ctor: '::',
			_0: '<span class=\"',
			_1: {
				ctor: '::',
				_0: A2(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$emptyIfFalse,
					!_elm_lang$core$Native_Utils.eq(_p13, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Default),
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$requiredStyleToString(_p13)),
				_1: {
					ctor: '::',
					_0: ' ',
					_1: {
						ctor: '::',
						_0: A2(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$emptyIfFalse,
							!_elm_lang$core$Native_Utils.eq(_p12, ''),
							A2(_elm_lang$core$Basics_ops['++'], 'elmsh-', _p12)),
						_1: {
							ctor: '::',
							_0: '\">',
							_1: {
								ctor: '::',
								_0: _p14,
								_1: {
									ctor: '::',
									_0: '</span>',
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$staticLineView = F3(
	function (start, index, _p15) {
		var _p16 = _p15;
		var _p17 = _p16.highlight;
		return _elm_lang$core$String$concat(
			{
				ctor: '::',
				_0: '<div class=\"',
				_1: {
					ctor: '::',
					_0: 'elmsh-line ',
					_1: {
						ctor: '::',
						_0: A2(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$emptyIfFalse,
							_elm_lang$core$Native_Utils.eq(
								_p17,
								_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Normal)),
							'elmsh-hl '),
						_1: {
							ctor: '::',
							_0: A2(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$emptyIfFalse,
								_elm_lang$core$Native_Utils.eq(
									_p17,
									_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Add)),
								'elmsh-add '),
							_1: {
								ctor: '::',
								_0: A2(
									_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$emptyIfFalse,
									_elm_lang$core$Native_Utils.eq(
										_p17,
										_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Del)),
									'elmsh-del '),
								_1: {
									ctor: '::',
									_0: '\" data-elmsh-lc=\"',
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Basics$toString(start + index),
										_1: {
											ctor: '::',
											_0: '\">',
											_1: {
												ctor: '::',
												_0: _elm_lang$core$String$concat(
													A2(_elm_lang$core$List$map, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$staticFragmentView, _p16.fragments)),
												_1: {
													ctor: '::',
													_0: '</div>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toStaticInlineHtml = function (lines) {
	return _elm_lang$core$String$concat(
		{
			ctor: '::',
			_0: '<code class=\"elmsh\">',
			_1: {
				ctor: '::',
				_0: _elm_lang$core$String$concat(
					_elm_lang$core$List$concat(
						A2(
							_elm_lang$core$List$map,
							function (_p18) {
								var _p19 = _p18;
								var _p21 = _p19.highlight;
								var _p20 = _p19.fragments;
								return _elm_lang$core$Native_Utils.eq(_p21, _elm_lang$core$Maybe$Nothing) ? A2(_elm_lang$core$List$map, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$staticFragmentView, _p20) : {
									ctor: '::',
									_0: '<span class=\"',
									_1: {
										ctor: '::',
										_0: A2(
											_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$emptyIfFalse,
											_elm_lang$core$Native_Utils.eq(
												_p21,
												_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Normal)),
											'elmsh-hl '),
										_1: {
											ctor: '::',
											_0: A2(
												_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$emptyIfFalse,
												_elm_lang$core$Native_Utils.eq(
													_p21,
													_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Add)),
												'elmsh-add '),
											_1: {
												ctor: '::',
												_0: A2(
													_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$emptyIfFalse,
													_elm_lang$core$Native_Utils.eq(
														_p21,
														_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Del)),
													'elmsh-del '),
												_1: {
													ctor: '::',
													_0: _elm_lang$core$String$concat(
														A2(_elm_lang$core$List$map, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$staticFragmentView, _p20)),
													_1: {
														ctor: '::',
														_0: '</span>',
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								};
							},
							lines))),
				_1: {
					ctor: '::',
					_0: '</code>',
					_1: {ctor: '[]'}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toStaticBlockHtml = F2(
	function (maybeStart, lines) {
		var _p22 = maybeStart;
		if (_p22.ctor === 'Nothing') {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'<pre class=\"elmsh\">',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toStaticInlineHtml(lines),
					'</pre>'));
		} else {
			return _elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: '<pre class=\"elmsh\"><code>',
					_1: {
						ctor: '::',
						_0: _elm_lang$core$String$concat(
							A2(
								_elm_lang$core$List$indexedMap,
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$staticLineView(_p22._0),
								lines)),
						_1: {
							ctor: '::',
							_0: '</code></pre>',
							_1: {ctor: '[]'}
						}
					}
				});
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$fragmentView = function (_p23) {
	var _p24 = _p23;
	var _p27 = _p24.text;
	var _p26 = _p24.requiredStyle;
	var _p25 = _p24.additionalClass;
	return (_elm_lang$core$Native_Utils.eq(_p26, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Default) && _elm_lang$core$String$isEmpty(_p25)) ? _elm_lang$html$Html$text(_p27) : A2(
		_elm_lang$html$Html$span,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$classList(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$requiredStyleToString(_p26),
						_1: !_elm_lang$core$Native_Utils.eq(_p26, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Default)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: A2(_elm_lang$core$Basics_ops['++'], 'elmsh-', _p25),
							_1: !_elm_lang$core$Native_Utils.eq(_p25, '')
						},
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(_p27),
			_1: {ctor: '[]'}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toInlineHtml = function (lines) {
	return A2(
		_elm_lang$html$Html$code,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('elmsh'),
			_1: {ctor: '[]'}
		},
		_elm_lang$core$List$concat(
			A2(
				_elm_lang$core$List$map,
				function (_p28) {
					var _p29 = _p28;
					var _p31 = _p29.highlight;
					var _p30 = _p29.fragments;
					return _elm_lang$core$Native_Utils.eq(_p31, _elm_lang$core$Maybe$Nothing) ? A2(_elm_lang$core$List$map, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$fragmentView, _p30) : {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$span,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$classList(
									{
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'elmsh-hl',
											_1: _elm_lang$core$Native_Utils.eq(
												_p31,
												_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Normal))
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'elmsh-add',
												_1: _elm_lang$core$Native_Utils.eq(
													_p31,
													_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Add))
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'elmsh-del',
													_1: _elm_lang$core$Native_Utils.eq(
														_p31,
														_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Del))
												},
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {ctor: '[]'}
							},
							A2(_elm_lang$core$List$map, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$fragmentView, _p30)),
						_1: {ctor: '[]'}
					};
				},
				lines)));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$lineView = F3(
	function (start, index, _p32) {
		var _p33 = _p32;
		var _p34 = _p33.highlight;
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'elmsh-line', _1: true},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'elmsh-hl',
								_1: _elm_lang$core$Native_Utils.eq(
									_p34,
									_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Normal))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'elmsh-add',
									_1: _elm_lang$core$Native_Utils.eq(
										_p34,
										_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Add))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'elmsh-del',
										_1: _elm_lang$core$Native_Utils.eq(
											_p34,
											_elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Del))
									},
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html_Attributes$attribute,
						'data-elmsh-lc',
						_elm_lang$core$Basics$toString(start + index)),
					_1: {ctor: '[]'}
				}
			},
			A2(_elm_lang$core$List$map, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$fragmentView, _p33.fragments));
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toBlockHtml = F2(
	function (maybeStart, lines) {
		var _p35 = maybeStart;
		if (_p35.ctor === 'Nothing') {
			return A2(
				_elm_lang$html$Html$pre,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('elmsh'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toInlineHtml(lines),
					_1: {ctor: '[]'}
				});
		} else {
			return A2(
				_elm_lang$html$Html$pre,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('elmsh'),
					_1: {ctor: '[]'}
				},
				_elm_lang$core$List$singleton(
					A2(
						_elm_lang$html$Html$code,
						{ctor: '[]'},
						A2(
							_elm_lang$core$List$indexedMap,
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$lineView(_p35._0),
							lines))));
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$ConsoleOptions = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return {$default: a, highlight: b, addition: c, deletion: d, comment: e, style1: f, style2: g, style3: h, style4: i, style5: j, style6: k, style7: l};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C = function (a) {
	return {ctor: 'C', _0: a};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$LineBreak = {ctor: 'LineBreak'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Comment = {ctor: 'Comment'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal = {ctor: 'Normal'};

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$escapableSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('\''),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('\"'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('\\'),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('n'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('r'),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('t'),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr('b'),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr('f'),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.chr('v'),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isEscapableChar = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$escapableSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isEscapable = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\\'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$escapable = A2(
	_elm_tools$parser$Parser$delayedCommit,
	_elm_tools$parser$Parser$symbol('\\'),
	A2(
		_elm_tools$parser$Parser$ignore,
		_elm_tools$parser$Parser$Exactly(1),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isEscapableChar));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$addThen = F3(
	function (f, list, plist) {
		return A2(
			_elm_tools$parser$Parser$andThen,
			function (n) {
				return f(
					A2(_elm_lang$core$Basics_ops['++'], n, list));
			},
			plist);
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen = F3(
	function (f, list, pn) {
		return A2(
			_elm_tools$parser$Parser$andThen,
			function (n) {
				return f(
					{ctor: '::', _0: n, _1: list});
			},
			pn);
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore = F3(
	function (count, isNotRelevant, previousParser) {
		return A2(
			_elm_tools$parser$Parser_ops['|.'],
			previousParser,
			A2(_elm_tools$parser$Parser$ignore, count, isNotRelevant));
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimitedUnnestable = F2(
	function (_p0, revAList) {
		var _p1 = _p0;
		var _p5 = _p1;
		var _p4 = _p1.isNotRelevant;
		var _p3 = _p1.end;
		var _p2 = _p1.defaultMap;
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					_elm_lang$core$Basics$always(
						{
							ctor: '::',
							_0: _p2(_p3),
							_1: revAList
						}),
					_elm_tools$parser$Parser$symbol(_p3)),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$map,
						_elm_lang$core$Basics$always(revAList),
						_elm_tools$parser$Parser$end),
					_1: {
						ctor: '::',
						_0: A3(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$addThen,
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimitedUnnestable(_p5),
							revAList,
							_elm_tools$parser$Parser$oneOf(_p1.innerParsers)),
						_1: {
							ctor: '::',
							_0: A3(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen,
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimitedUnnestable(_p5),
								revAList,
								_elm_tools$parser$Parser$oneOf(
									{
										ctor: '::',
										_0: A2(
											_elm_tools$parser$Parser$map,
											_p2,
											A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _p4)),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_tools$parser$Parser$map,
												_p2,
												_elm_tools$parser$Parser$source(
													A3(
														_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore,
														_elm_tools$parser$Parser$zeroOrMore,
														_p4,
														A2(
															_elm_tools$parser$Parser$ignore,
															_elm_tools$parser$Parser$Exactly(1),
															_elm_lang$core$Basics$always(true))))),
											_1: {ctor: '[]'}
										}
									})),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimitedNestable = F3(
	function (nestLevel, _p6, revAList) {
		var _p7 = _p6;
		var _p11 = _p7;
		var _p10 = _p7.isNotRelevant;
		var _p9 = _p7.end;
		var _p8 = _p7.defaultMap;
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					function (n) {
						return _elm_lang$core$Native_Utils.eq(nestLevel, 1) ? _elm_tools$parser$Parser$succeed(n) : A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimitedNestable, nestLevel - 1, _p11, n);
					},
					A2(
						_elm_tools$parser$Parser$map,
						_elm_lang$core$Basics$always(
							{
								ctor: '::',
								_0: _p8(_p9),
								_1: revAList
							}),
						_elm_tools$parser$Parser$symbol(_p9))),
				_1: {
					ctor: '::',
					_0: A3(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen,
						A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimitedNestable, nestLevel + 1, _p11),
						revAList,
						A2(
							_elm_tools$parser$Parser$map,
							_p8,
							_elm_tools$parser$Parser$source(
								A3(
									_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore,
									_elm_tools$parser$Parser$zeroOrMore,
									_p10,
									_elm_tools$parser$Parser$symbol(_p7.start))))),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser$map,
							_elm_lang$core$Basics$always(revAList),
							_elm_tools$parser$Parser$end),
						_1: {
							ctor: '::',
							_0: A3(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$addThen,
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimitedUnnestable(_p11),
								revAList,
								_elm_tools$parser$Parser$oneOf(_p7.innerParsers)),
							_1: {
								ctor: '::',
								_0: A3(
									_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen,
									A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimitedNestable, nestLevel, _p11),
									revAList,
									_elm_tools$parser$Parser$oneOf(
										{
											ctor: '::',
											_0: A2(
												_elm_tools$parser$Parser$map,
												_p8,
												A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _p10)),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_tools$parser$Parser$map,
													_p8,
													_elm_tools$parser$Parser$source(
														A3(
															_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore,
															_elm_tools$parser$Parser$zeroOrMore,
															_p10,
															A2(
																_elm_tools$parser$Parser$ignore,
																_elm_tools$parser$Parser$Exactly(1),
																_elm_lang$core$Basics$always(true))))),
												_1: {ctor: '[]'}
											}
										})),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimitedHelp = F2(
	function (_p12, revAList) {
		var _p13 = _p12;
		var _p17 = _p13;
		var _p16 = _p13.isNotRelevant;
		var _p14 = {
			ctor: '_Tuple2',
			_0: _elm_lang$core$String$uncons(_p17.start),
			_1: _elm_lang$core$String$uncons(_p17.end)
		};
		if (_p14._0.ctor === 'Nothing') {
			return _elm_tools$parser$Parser$fail('Trying to parse a delimited helper, but the start token cannot be an empty string!');
		} else {
			if (_p14._1.ctor === 'Nothing') {
				return _elm_tools$parser$Parser$fail('Trying to parse a delimited helper, but the end token cannot be an empty string!');
			} else {
				var _p15 = _p14._1._0._0;
				return _p17.isNestable ? A3(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimitedNestable,
					1,
					_elm_lang$core$Native_Utils.update(
						_p17,
						{
							isNotRelevant: function (c) {
								return _p16(c) && ((!_elm_lang$core$Native_Utils.eq(c, _p14._0._0._0)) && (!_elm_lang$core$Native_Utils.eq(c, _p15)));
							}
						}),
					revAList) : A2(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimitedUnnestable,
					_elm_lang$core$Native_Utils.update(
						_p17,
						{
							isNotRelevant: function (c) {
								return _p16(c) && (!_elm_lang$core$Native_Utils.eq(c, _p15));
							}
						}),
					revAList);
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited = function (_p18) {
	var _p19 = _p18;
	var _p20 = _p19.start;
	return A2(
		_elm_tools$parser$Parser$andThen,
		function (n) {
			return A2(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimitedHelp,
				_p19,
				{
					ctor: '::',
					_0: n,
					_1: {ctor: '[]'}
				});
		},
		A2(
			_elm_tools$parser$Parser$map,
			_elm_lang$core$Basics$always(
				_p19.defaultMap(_p20)),
			_elm_tools$parser$Parser$symbol(_p20)));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isNumber = function (c) {
	return _elm_lang$core$Char$isDigit(c) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('.'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$positiveNumber = A2(_elm_tools$parser$Parser$ignore, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isNumber);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$number = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$positiveNumber,
		_1: {
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$delayedCommit,
				_elm_tools$parser$Parser$symbol('-'),
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$positiveNumber),
			_1: {ctor: '[]'}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\n'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isSpace = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(' ')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\t'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$whitespaceCharSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr(' '),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('\t'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('\n'),
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isWhitespace = function (c) {
	return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isSpace(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(c);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$Delimiter = F6(
	function (a, b, c, d, e, f) {
		return {start: a, end: b, isNestable: c, defaultMap: d, innerParsers: e, isNotRelevant: f};
	});

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$newLine = function (fragments) {
	return {fragments: fragments, highlight: _elm_lang$core$Maybe$Nothing};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toFragment = F2(
	function (toStyle, _p0) {
		var _p1 = _p0;
		var _p4 = _p1._1;
		var _p2 = _p1._0;
		switch (_p2.ctor) {
			case 'Normal':
				return {text: _p4, requiredStyle: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Default, additionalClass: ''};
			case 'Comment':
				return {text: _p4, requiredStyle: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Comment, additionalClass: ''};
			case 'LineBreak':
				return {text: _p4, requiredStyle: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Default, additionalClass: ''};
			default:
				var _p3 = toStyle(_p2._0);
				var requiredStyle = _p3._0;
				var additionalClass = _p3._1;
				return {text: _p4, requiredStyle: requiredStyle, additionalClass: additionalClass};
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toLinesHelp = F3(
	function (toStyle, _p6, _p5) {
		var _p7 = _p6;
		var _p15 = _p7._1;
		var _p14 = _p7._0;
		var _p8 = _p5;
		var _p13 = _p8._2;
		var _p12 = _p8._0;
		var _p11 = _p8._1;
		if (_elm_lang$core$Native_Utils.eq(_p14, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$LineBreak)) {
			return {
				ctor: '_Tuple3',
				_0: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$newLine(_p11),
					_1: _p12
				},
				_1: {
					ctor: '::',
					_0: A2(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toFragment,
						toStyle,
						{ctor: '_Tuple2', _0: _p14, _1: _p15}),
					_1: {ctor: '[]'}
				},
				_2: _elm_lang$core$Maybe$Nothing
			};
		} else {
			if (_elm_lang$core$Native_Utils.eq(
				_elm_lang$core$Maybe$Just(_p14),
				_p13)) {
				var _p9 = _p11;
				if (_p9.ctor === '::') {
					var _p10 = _p9._0;
					return {
						ctor: '_Tuple3',
						_0: _p12,
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.update(
								_p10,
								{
									text: A2(_elm_lang$core$Basics_ops['++'], _p15, _p10.text)
								}),
							_1: _p9._1
						},
						_2: _p13
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: _p12,
						_1: {
							ctor: '::',
							_0: A2(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toFragment,
								toStyle,
								{ctor: '_Tuple2', _0: _p14, _1: _p15}),
							_1: _p11
						},
						_2: _p13
					};
				}
			} else {
				return {
					ctor: '_Tuple3',
					_0: _p12,
					_1: {
						ctor: '::',
						_0: A2(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toFragment,
							toStyle,
							{ctor: '_Tuple2', _0: _p14, _1: _p15}),
						_1: _p11
					},
					_2: _elm_lang$core$Maybe$Just(_p14)
				};
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toLines = F2(
	function (toStyle, revTokens) {
		return function (_p16) {
			var _p17 = _p16;
			return {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$newLine(_p17._1),
				_1: _p17._0
			};
		}(
			A3(
				_elm_lang$core$List$foldl,
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toLinesHelp(toStyle),
				{
					ctor: '_Tuple3',
					_0: {ctor: '[]'},
					_1: {ctor: '[]'},
					_2: _elm_lang$core$Maybe$Nothing
				},
				revTokens));
	});

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$syntaxToStyle = function (syntax) {
	var _p0 = syntax;
	switch (_p0.ctor) {
		case 'String':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style2, _1: 'elm-s'};
		case 'BasicSymbol':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style3, _1: 'elm-bs'};
		case 'GroupSymbol':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style4, _1: 'elm-gs'};
		case 'Capitalized':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style6, _1: 'elm-c'};
		case 'Keyword':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style3, _1: 'elm-k'};
		case 'Function':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style5, _1: 'elm-f'};
		case 'TypeSignature':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style4, _1: 'elm-ts'};
		default:
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style1, _1: 'elm-n'};
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineBreak = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$LineBreak),
	A2(
		_elm_tools$parser$Parser$keep,
		_elm_tools$parser$Parser$Exactly(1),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineBreakList = A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineBreak);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$space = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
	A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isSpace));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isCommentChar = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('-')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('{'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$commentChar = A2(
	_elm_tools$parser$Parser$keep,
	_elm_tools$parser$Parser$Exactly(1),
	_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isCommentChar);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$multilineComment = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(
	{
		start: '{-',
		end: '-}',
		isNestable: true,
		defaultMap: F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Comment),
		innerParsers: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineBreakList,
			_1: {ctor: '[]'}
		},
		isNotRelevant: function (c) {
			return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(c);
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$inlineComment = A2(
	_elm_tools$parser$Parser$map,
	function (_p1) {
		return _elm_lang$core$List$singleton(
			A2(
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Comment,
				_p1));
	},
	_elm_tools$parser$Parser$source(
		A3(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore,
			_elm_tools$parser$Parser$zeroOrMore,
			function (_p2) {
				return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(_p2);
			},
			_elm_tools$parser$Parser$symbol('--'))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$comment = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$inlineComment,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$multilineComment,
			_1: {ctor: '[]'}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment = F2(
	function (continueFunction, revTokens) {
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen, continueFunction, revTokens, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$space),
				_1: {
					ctor: '::',
					_0: A3(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen,
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$checkContext(continueFunction),
						revTokens,
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineBreak),
					_1: {
						ctor: '::',
						_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$addThen, continueFunction, revTokens, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$comment),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$checkContext = F2(
	function (continueFunction, revTokens) {
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, continueFunction, revTokens),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$succeed(revTokens),
					_1: {ctor: '[]'}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isStringLiteralChar = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\"')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\''));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$infixSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('+'),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('-'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('/'),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('*'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('='),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('.'),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr('$'),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr('<'),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.chr('>'),
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Native_Utils.chr(':'),
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Native_Utils.chr('&'),
												_1: {
													ctor: '::',
													_0: _elm_lang$core$Native_Utils.chr('|'),
													_1: {
														ctor: '::',
														_0: _elm_lang$core$Native_Utils.chr('^'),
														_1: {
															ctor: '::',
															_0: _elm_lang$core$Native_Utils.chr('?'),
															_1: {
																ctor: '::',
																_0: _elm_lang$core$Native_Utils.chr('%'),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$core$Native_Utils.chr('#'),
																	_1: {
																		ctor: '::',
																		_0: _elm_lang$core$Native_Utils.chr('@'),
																		_1: {
																			ctor: '::',
																			_0: _elm_lang$core$Native_Utils.chr('~'),
																			_1: {
																				ctor: '::',
																				_0: _elm_lang$core$Native_Utils.chr('!'),
																				_1: {
																					ctor: '::',
																					_0: _elm_lang$core$Native_Utils.chr(','),
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isInfixChar = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$infixSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$groupSymbols = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr(','),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('['),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr(']'),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('{'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('}'),
						_1: {ctor: '[]'}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isGroupSymbol = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$groupSymbols);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$groupSymbol = A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isGroupSymbol);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$basicSymbols = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('|'),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('.'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('='),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('\\'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('/'),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('('),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr(')'),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr('-'),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.chr('>'),
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Native_Utils.chr('<'),
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Native_Utils.chr(':'),
												_1: {
													ctor: '::',
													_0: _elm_lang$core$Native_Utils.chr('+'),
													_1: {
														ctor: '::',
														_0: _elm_lang$core$Native_Utils.chr('!'),
														_1: {
															ctor: '::',
															_0: _elm_lang$core$Native_Utils.chr('$'),
															_1: {
																ctor: '::',
																_0: _elm_lang$core$Native_Utils.chr('%'),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$core$Native_Utils.chr('&'),
																	_1: {
																		ctor: '::',
																		_0: _elm_lang$core$Native_Utils.chr('*'),
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isBasicSymbol = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$basicSymbols);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isVariableChar = function (c) {
	return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isWhitespace(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isBasicSymbol(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isGroupSymbol(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isStringLiteralChar(c))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$capitalized = _elm_tools$parser$Parser$source(
	A3(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore,
		_elm_tools$parser$Parser$zeroOrMore,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isVariableChar,
		A2(
			_elm_tools$parser$Parser$ignore,
			_elm_tools$parser$Parser$Exactly(1),
			_elm_lang$core$Char$isUpper)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$variable = _elm_tools$parser$Parser$source(
	A3(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore,
		_elm_tools$parser$Parser$zeroOrMore,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isVariableChar,
		A2(
			_elm_tools$parser$Parser$ignore,
			_elm_tools$parser$Parser$Exactly(1),
			_elm_lang$core$Char$isLower)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$weirdText = A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isVariableChar);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$basicSymbol = A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isBasicSymbol);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$keywordSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: 'as',
		_1: {
			ctor: '::',
			_0: 'where',
			_1: {
				ctor: '::',
				_0: 'let',
				_1: {
					ctor: '::',
					_0: 'in',
					_1: {
						ctor: '::',
						_0: 'if',
						_1: {
							ctor: '::',
							_0: 'else',
							_1: {
								ctor: '::',
								_0: 'then',
								_1: {
									ctor: '::',
									_0: 'case',
									_1: {
										ctor: '::',
										_0: 'of',
										_1: {
											ctor: '::',
											_0: 'type',
											_1: {
												ctor: '::',
												_0: 'alias',
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isKeyword = function (str) {
	return A2(_elm_lang$core$Set$member, str, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$keywordSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigIsNotRelevant = function (c) {
	return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isWhitespace(c) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('(')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(')')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('-')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(','))))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$mdpnIsSpecialChar = function (c) {
	return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isCommentChar(c) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('(')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(')'))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$mdpIsNotRelevant = function (c) {
	return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isWhitespace(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isCommentChar(c) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('(')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(')')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(',')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('.')))))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecIsNotRelevant = function (c) {
	return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isWhitespace(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isCommentChar(c) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('('))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Number = {ctor: 'Number'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$TypeSignature = {ctor: 'TypeSignature'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Function = {ctor: 'Function'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$infixParser = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Function)),
	_elm_tools$parser$Parser$source(
		A2(
			_elm_tools$parser$Parser$delayedCommit,
			_elm_tools$parser$Parser$symbol('('),
			A2(
				_elm_tools$parser$Parser$delayedCommit,
				A2(_elm_tools$parser$Parser$ignore, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isInfixChar),
				_elm_tools$parser$Parser$symbol(')')))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword = {ctor: 'Keyword'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$moduleDeclaration = function (revTokens) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$moduleDeclaration, revTokens),
			_1: {
				ctor: '::',
				_0: A3(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParentheses,
					revTokens,
					A2(
						_elm_tools$parser$Parser$map,
						_elm_lang$core$Basics$always(
							{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: '('}),
						_elm_tools$parser$Parser$symbol('('))),
				_1: {
					ctor: '::',
					_0: A3(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen,
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$moduleDeclaration,
						revTokens,
						_elm_tools$parser$Parser$oneOf(
							{
								ctor: '::',
								_0: A2(
									_elm_tools$parser$Parser$map,
									F2(
										function (v0, v1) {
											return {ctor: '_Tuple2', _0: v0, _1: v1};
										})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
									_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$commentChar),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser$map,
										_elm_lang$core$Basics$always(
											{
												ctor: '_Tuple2',
												_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword),
												_1: 'exposing'
											}),
										_elm_tools$parser$Parser$keyword('exposing')),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_tools$parser$Parser$map,
											_elm_lang$core$Basics$always(
												{
													ctor: '_Tuple2',
													_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword),
													_1: 'as'
												}),
											_elm_tools$parser$Parser$keyword('as')),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_tools$parser$Parser$map,
												F2(
													function (v0, v1) {
														return {ctor: '_Tuple2', _0: v0, _1: v1};
													})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
												A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecIsNotRelevant)),
											_1: {ctor: '[]'}
										}
									}
								}
							})),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$succeed(revTokens),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParentheses = function (revTokens) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParentheses, revTokens),
			_1: {
				ctor: '::',
				_0: A3(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$moduleDeclaration,
					revTokens,
					A2(
						_elm_tools$parser$Parser$map,
						_elm_lang$core$Basics$always(
							{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: ')'}),
						_elm_tools$parser$Parser$symbol(')'))),
				_1: {
					ctor: '::',
					_0: A3(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen,
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParentheses,
						revTokens,
						_elm_tools$parser$Parser$oneOf(
							{
								ctor: '::',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$infixParser,
								_1: {
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser$map,
										F2(
											function (v0, v1) {
												return {ctor: '_Tuple2', _0: v0, _1: v1};
											})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
										_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$commentChar),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_tools$parser$Parser$map,
											F2(
												function (v0, v1) {
													return {ctor: '_Tuple2', _0: v0, _1: v1};
												})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
											A2(
												_elm_tools$parser$Parser$keep,
												_elm_tools$parser$Parser$oneOrMore,
												function (c) {
													return _elm_lang$core$Native_Utils.eq(
														c,
														_elm_lang$core$Native_Utils.chr(',')) || _elm_lang$core$Native_Utils.eq(
														c,
														_elm_lang$core$Native_Utils.chr('.'));
												})),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_tools$parser$Parser$map,
												F2(
													function (v0, v1) {
														return {ctor: '_Tuple2', _0: v0, _1: v1};
													})(
													_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$TypeSignature)),
												_elm_tools$parser$Parser$source(
													A3(
														_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore,
														_elm_tools$parser$Parser$zeroOrMore,
														_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$mdpIsNotRelevant,
														A2(
															_elm_tools$parser$Parser$ignore,
															_elm_tools$parser$Parser$Exactly(1),
															_elm_lang$core$Char$isUpper)))),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_tools$parser$Parser$map,
													F2(
														function (v0, v1) {
															return {ctor: '_Tuple2', _0: v0, _1: v1};
														})(
														_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Function)),
													A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$mdpIsNotRelevant)),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							})),
					_1: {
						ctor: '::',
						_0: A3(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen,
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParNest(0),
							revTokens,
							A2(
								_elm_tools$parser$Parser$map,
								_elm_lang$core$Basics$always(
									{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: '('}),
								_elm_tools$parser$Parser$symbol('('))),
						_1: {
							ctor: '::',
							_0: _elm_tools$parser$Parser$succeed(revTokens),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParNest = F2(
	function (nestLevel, revTokens) {
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A2(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParNest(nestLevel),
					revTokens),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$andThen,
						function (n) {
							return A2(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParNest,
								nestLevel + 1,
								{ctor: '::', _0: n, _1: revTokens});
						},
						A2(
							_elm_tools$parser$Parser$map,
							_elm_lang$core$Basics$always(
								{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: '('}),
							_elm_tools$parser$Parser$symbol('('))),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser$andThen,
							function (n) {
								return _elm_lang$core$Native_Utils.eq(nestLevel, 0) ? _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParentheses(
									{ctor: '::', _0: n, _1: revTokens}) : A2(
									_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParNest,
									nestLevel - 1,
									{ctor: '::', _0: n, _1: revTokens});
							},
							A2(
								_elm_tools$parser$Parser$map,
								_elm_lang$core$Basics$always(
									{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: ')'}),
								_elm_tools$parser$Parser$symbol(')'))),
						_1: {
							ctor: '::',
							_0: A3(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen,
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$modDecParNest(nestLevel),
								revTokens,
								_elm_tools$parser$Parser$oneOf(
									{
										ctor: '::',
										_0: A2(
											_elm_tools$parser$Parser$map,
											F2(
												function (v0, v1) {
													return {ctor: '_Tuple2', _0: v0, _1: v1};
												})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
											_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$commentChar),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_tools$parser$Parser$map,
												F2(
													function (v0, v1) {
														return {ctor: '_Tuple2', _0: v0, _1: v1};
													})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
												A2(
													_elm_tools$parser$Parser$keep,
													_elm_tools$parser$Parser$oneOrMore,
													function (_p3) {
														return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$mdpnIsSpecialChar(_p3);
													})),
											_1: {ctor: '[]'}
										}
									})),
							_1: {
								ctor: '::',
								_0: _elm_tools$parser$Parser$succeed(revTokens),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Capitalized = {ctor: 'Capitalized'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$elmEscapable = A2(
	_elm_tools$parser$Parser$repeat,
	_elm_tools$parser$Parser$oneOrMore,
	A2(
		_elm_tools$parser$Parser$map,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Capitalized)),
		_elm_tools$parser$Parser$source(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$escapable)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$GroupSymbol = {ctor: 'GroupSymbol'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$BasicSymbol = {ctor: 'BasicSymbol'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigContentHelp = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_tools$parser$Parser$map,
			_elm_lang$core$Basics$always(
				{
					ctor: '_Tuple2',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$TypeSignature),
					_1: '()'
				}),
			_elm_tools$parser$Parser$symbol('()')),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$map,
				_elm_lang$core$Basics$always(
					{
						ctor: '_Tuple2',
						_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$BasicSymbol),
						_1: '->'
					}),
				_elm_tools$parser$Parser$symbol('->')),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
					A2(
						_elm_tools$parser$Parser$keep,
						_elm_tools$parser$Parser$oneOrMore,
						function (c) {
							return _elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr('(')) || (_elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr(')')) || (_elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr('-')) || _elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr(','))));
						})),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$map,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							})(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$TypeSignature)),
						_elm_tools$parser$Parser$source(
							A3(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore,
								_elm_tools$parser$Parser$zeroOrMore,
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigIsNotRelevant,
								A2(
									_elm_tools$parser$Parser$ignore,
									_elm_tools$parser$Parser$Exactly(1),
									_elm_lang$core$Char$isUpper)))),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser$map,
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
							A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigIsNotRelevant)),
						_1: {ctor: '[]'}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigContent = function (revTokens) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigContent, revTokens),
			_1: {
				ctor: '::',
				_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigContent, revTokens, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigContentHelp),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$succeed(revTokens),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBodyContent = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_tools$parser$Parser$map,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				})(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Number)),
			_elm_tools$parser$Parser$source(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$number)),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$map,
				_elm_lang$core$Basics$always(
					{
						ctor: '_Tuple2',
						_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Capitalized),
						_1: '()'
					}),
				_elm_tools$parser$Parser$symbol('()')),
			_1: {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$infixParser,
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$map,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							})(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$BasicSymbol)),
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$basicSymbol),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser$map,
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								})(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$GroupSymbol)),
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$groupSymbol),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_tools$parser$Parser$map,
								F2(
									function (v0, v1) {
										return {ctor: '_Tuple2', _0: v0, _1: v1};
									})(
									_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Capitalized)),
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$capitalized),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_tools$parser$Parser$map,
									function (n) {
										return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isKeyword(n) ? {
											ctor: '_Tuple2',
											_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword),
											_1: n
										} : {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: n};
									},
									_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$variable),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser$map,
										F2(
											function (v0, v1) {
												return {ctor: '_Tuple2', _0: v0, _1: v1};
											})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
										_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$weirdText),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$String = {ctor: 'String'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$stringDelimiter = {
	start: '\"',
	end: '\"',
	isNestable: false,
	defaultMap: F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$String)),
	innerParsers: {
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineBreakList,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$elmEscapable,
			_1: {ctor: '[]'}
		}
	},
	isNotRelevant: function (c) {
		return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isEscapable(c));
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$doubleQuote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$stringDelimiter);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$tripleDoubleQuote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(
	_elm_lang$core$Native_Utils.update(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$stringDelimiter,
		{start: '\"\"\"', end: '\"\"\"'}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$quote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(
	_elm_lang$core$Native_Utils.update(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$stringDelimiter,
		{start: '\'', end: '\''}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$stringLiteral = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$tripleDoubleQuote,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$doubleQuote,
			_1: {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$quote,
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody = function (revTokens) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody, revTokens),
			_1: {
				ctor: '::',
				_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$addThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody, revTokens, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$stringLiteral),
				_1: {
					ctor: '::',
					_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody, revTokens, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBodyContent),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$succeed(revTokens),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionSignature = function (revTokens) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A3(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen,
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$fnSigContent,
				revTokens,
				A2(
					_elm_tools$parser$Parser$map,
					_elm_lang$core$Basics$always(
						{
							ctor: '_Tuple2',
							_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$BasicSymbol),
							_1: ':'
						}),
					_elm_tools$parser$Parser$symbol(':'))),
			_1: {
				ctor: '::',
				_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionSignature, revTokens),
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody(revTokens),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$portDeclarationHelp = F2(
	function (revTokens, str) {
		return _elm_lang$core$Native_Utils.eq(str, 'module') ? _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$moduleDeclaration(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword),
					_1: str
				},
				_1: revTokens
			}) : _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionSignature(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Function),
					_1: str
				},
				_1: revTokens
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$portDeclaration = function (revTokens) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$portDeclaration, revTokens),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$portDeclarationHelp(revTokens),
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$variable),
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody(revTokens),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineStartVariable = F2(
	function (revTokens, n) {
		return (_elm_lang$core$Native_Utils.eq(n, 'module') || _elm_lang$core$Native_Utils.eq(n, 'import')) ? _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$moduleDeclaration(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword),
					_1: n
				},
				_1: revTokens
			}) : (_elm_lang$core$Native_Utils.eq(n, 'port') ? _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$portDeclaration(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword),
					_1: n
				},
				_1: revTokens
			}) : (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$isKeyword(n) ? _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Keyword),
					_1: n
				},
				_1: revTokens
			}) : _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionSignature(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$Function),
					_1: n
				},
				_1: revTokens
			})));
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineStart = function (revTokens) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$whitespaceOrComment, _elm_tools$parser$Parser$succeed, revTokens),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineStartVariable(revTokens),
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$variable),
				_1: {
					ctor: '::',
					_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$addThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody, revTokens, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$stringLiteral),
					_1: {
						ctor: '::',
						_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBody, revTokens, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$functionBodyContent),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$toRevTokens = _elm_tools$parser$Parser$run(
	A2(
		_elm_tools$parser$Parser$map,
		function (_p4) {
			return _elm_lang$core$List$concat(
				_elm_lang$core$List$reverse(_p4));
		},
		A2(
			_elm_tools$parser$Parser$repeat,
			_elm_tools$parser$Parser$zeroOrMore,
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$lineStart(
				{ctor: '[]'}))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$toLines = function (_p5) {
	return A2(
		_elm_lang$core$Result$map,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toLines(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$syntaxToStyle),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$toRevTokens(_p5));
};

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$syntaxToStyle = function (syntax) {
	var _p0 = syntax;
	switch (_p0.ctor) {
		case 'Tag':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style3, _1: 'xml-t'};
		case 'Attribute':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style5, _1: 'xml-a'};
		default:
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style2, _1: 'xlm-av'};
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$lineBreak = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$LineBreak),
	A2(
		_elm_tools$parser$Parser$keep,
		_elm_tools$parser$Parser$Exactly(1),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$lineBreakList = A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$lineBreak);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$whitespace = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_tools$parser$Parser$map,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
			A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isSpace)),
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$lineBreak,
			_1: {ctor: '[]'}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isStartTagChar = function (c) {
	return _elm_lang$core$Char$isUpper(c) || (_elm_lang$core$Char$isLower(c) || _elm_lang$core$Char$isDigit(c));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isTagChar = function (c) {
	return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isStartTagChar(c) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('-'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isAttributeChar = function (c) {
	return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isTagChar(c) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('_'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$AttributeValue = {ctor: 'AttributeValue'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$doubleQuoteDelimiter = {
	start: '\"',
	end: '\"',
	isNestable: false,
	defaultMap: F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$AttributeValue)),
	innerParsers: {
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$lineBreakList,
		_1: {ctor: '[]'}
	},
	isNotRelevant: function (_p1) {
		return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(_p1);
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$doubleQuote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$doubleQuoteDelimiter);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$quote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(
	_elm_lang$core$Native_Utils.update(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$doubleQuoteDelimiter,
		{start: '\'', end: '\''}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeValue = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$doubleQuote,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$quote,
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					function (_p2) {
						return _elm_lang$core$List$singleton(
							A2(
								F2(
									function (v0, v1) {
										return {ctor: '_Tuple2', _0: v0, _1: v1};
									}),
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$AttributeValue),
								_p2));
					},
					_elm_tools$parser$Parser$source(
						A2(
							_elm_tools$parser$Parser$ignore,
							_elm_tools$parser$Parser$oneOrMore,
							function (c) {
								return (!_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isWhitespace(c)) && (!_elm_lang$core$Native_Utils.eq(
									c,
									_elm_lang$core$Native_Utils.chr('>')));
							}))),
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeValueLoop = function (revTokens) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeValueLoop, revTokens, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$whitespace),
			_1: {
				ctor: '::',
				_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$addThen, _elm_tools$parser$Parser$succeed, revTokens, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeValue),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$succeed(revTokens),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeConfirm = function (revTokens) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeConfirm, revTokens, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$whitespace),
			_1: {
				ctor: '::',
				_0: A3(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeValueLoop,
					revTokens,
					A2(
						_elm_tools$parser$Parser$map,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
						A2(
							_elm_tools$parser$Parser$keep,
							_elm_tools$parser$Parser$Exactly(1),
							F2(
								function (x, y) {
									return _elm_lang$core$Native_Utils.eq(x, y);
								})(
								_elm_lang$core$Native_Utils.chr('='))))),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$succeed(revTokens),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$comment = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(
	_elm_lang$core$Native_Utils.update(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$doubleQuoteDelimiter,
		{
			start: '<!--',
			end: '-->',
			defaultMap: F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Comment)
		}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Attribute = {ctor: 'Attribute'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A3(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen,
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeConfirm,
			{ctor: '[]'},
			A2(
				_elm_tools$parser$Parser$map,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					})(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Attribute)),
				A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isAttributeChar))),
		_1: {
			ctor: '::',
			_0: A2(_elm_tools$parser$Parser$map, _elm_lang$core$List$singleton, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$whitespace),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					function (_p3) {
						return _elm_lang$core$List$singleton(
							A2(
								F2(
									function (v0, v1) {
										return {ctor: '_Tuple2', _0: v0, _1: v1};
									}),
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
								_p3));
					},
					A2(
						_elm_tools$parser$Parser$keep,
						_elm_tools$parser$Parser$oneOrMore,
						function (c) {
							return (!_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isWhitespace(c)) && (!_elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr('>')));
						})),
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Tag = {ctor: 'Tag'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$tag = function (revTokens) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$andThen,
				function (n) {
					return A2(
						_elm_tools$parser$Parser$map,
						function (_p4) {
							return _elm_lang$core$List$concat(
								_elm_lang$core$List$reverse(
									A2(
										F2(
											function (x, y) {
												return {ctor: '::', _0: x, _1: y};
											}),
										{ctor: '::', _0: n, _1: revTokens},
										_p4)));
						},
						A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$attributeLoop));
				},
				A2(
					_elm_tools$parser$Parser$map,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						})(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$Tag)),
					_elm_tools$parser$Parser$source(
						A3(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore,
							_elm_tools$parser$Parser$zeroOrMore,
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isTagChar,
							A2(
								_elm_tools$parser$Parser$ignore,
								_elm_tools$parser$Parser$Exactly(1),
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$isStartTagChar))))),
			_1: {
				ctor: '::',
				_0: _elm_tools$parser$Parser$succeed(revTokens),
				_1: {ctor: '[]'}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$openTag = A2(
	_elm_tools$parser$Parser$andThen,
	_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$tag,
	A2(
		_elm_tools$parser$Parser$map,
		function (_p5) {
			return _elm_lang$core$List$singleton(
				A2(
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
					_p5));
		},
		_elm_tools$parser$Parser$source(
			A2(
				_elm_tools$parser$Parser_ops['|.'],
				A2(
					_elm_tools$parser$Parser$ignore,
					_elm_tools$parser$Parser$oneOrMore,
					F2(
						function (x, y) {
							return _elm_lang$core$Native_Utils.eq(x, y);
						})(
						_elm_lang$core$Native_Utils.chr('<'))),
				_elm_tools$parser$Parser$oneOf(
					{
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser$ignore,
							_elm_tools$parser$Parser$Exactly(1),
							function (c) {
								return _elm_lang$core$Native_Utils.eq(
									c,
									_elm_lang$core$Native_Utils.chr('/')) || _elm_lang$core$Native_Utils.eq(
									c,
									_elm_lang$core$Native_Utils.chr('!'));
							}),
						_1: {
							ctor: '::',
							_0: _elm_tools$parser$Parser$succeed(
								{ctor: '_Tuple0'}),
							_1: {ctor: '[]'}
						}
					})))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$mainLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A2(_elm_tools$parser$Parser$map, _elm_lang$core$List$singleton, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$whitespace),
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$comment,
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					function (_p6) {
						return _elm_lang$core$List$singleton(
							A2(
								F2(
									function (v0, v1) {
										return {ctor: '_Tuple2', _0: v0, _1: v1};
									}),
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
								_p6));
					},
					A2(
						_elm_tools$parser$Parser$keep,
						_elm_tools$parser$Parser$oneOrMore,
						function (c) {
							return (!_elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr('<'))) && (!_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(c));
						})),
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$openTag,
					_1: {ctor: '[]'}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$toRevTokens = _elm_tools$parser$Parser$run(
	A2(
		_elm_tools$parser$Parser$map,
		function (_p7) {
			return _elm_lang$core$List$concat(
				_elm_lang$core$List$reverse(_p7));
		},
		A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$mainLoop)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$toLines = function (_p8) {
	return A2(
		_elm_lang$core$Result$map,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toLines(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$syntaxToStyle),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$toRevTokens(_p8));
};

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$syntaxToStyle = function (syntax) {
	var _p0 = syntax;
	switch (_p0.ctor) {
		case 'Number':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style1, _1: 'js-n'};
		case 'String':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style2, _1: 'js-s'};
		case 'Keyword':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style3, _1: 'js-k'};
		case 'DeclarationKeyword':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style4, _1: 'js-dk'};
		case 'FunctionEval':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style4, _1: 'js-fe'};
		case 'Function':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style5, _1: 'js-f'};
		case 'LiteralKeyword':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style6, _1: 'js-lk'};
		case 'Param':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style7, _1: 'js-p'};
		default:
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style5, _1: 'js-ce'};
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$consThenRevConcat = function (toCons) {
	return _elm_tools$parser$Parser$map(
		function (_p1) {
			return _elm_lang$core$List$concat(
				_elm_lang$core$List$reverse(
					A2(
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							}),
						toCons,
						_p1)));
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$lineBreakList = A2(
	_elm_tools$parser$Parser$repeat,
	_elm_tools$parser$Parser$oneOrMore,
	A2(
		_elm_tools$parser$Parser$map,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$LineBreak),
		A2(
			_elm_tools$parser$Parser$keep,
			_elm_tools$parser$Parser$Exactly(1),
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isCommentChar = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('/'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$multilineComment = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(
	{
		start: '/*',
		end: '*/',
		isNestable: false,
		defaultMap: F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Comment),
		innerParsers: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$lineBreakList,
			_1: {ctor: '[]'}
		},
		isNotRelevant: function (c) {
			return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(c);
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$inlineComment = A2(
	_elm_tools$parser$Parser$map,
	function (_p2) {
		return _elm_lang$core$List$singleton(
			A2(
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Comment,
				_p2));
	},
	_elm_tools$parser$Parser$source(
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			_elm_tools$parser$Parser$symbol('//'),
			A2(
				_elm_tools$parser$Parser$ignore,
				_elm_tools$parser$Parser$zeroOrMore,
				function (_p3) {
					return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(_p3);
				}))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$comment = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$inlineComment,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$multilineComment,
			_1: {ctor: '[]'}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$whitespaceOrComment = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_tools$parser$Parser$map,
			function (_p4) {
				return _elm_lang$core$List$singleton(
					A2(
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							}),
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
						_p4));
			},
			A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isSpace)),
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$lineBreakList,
			_1: {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$comment,
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isStringLiteralChar = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\"')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\'')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('`')));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$literalKeywordSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: 'true',
		_1: {
			ctor: '::',
			_0: 'false',
			_1: {
				ctor: '::',
				_0: 'null',
				_1: {
					ctor: '::',
					_0: 'undefined',
					_1: {
						ctor: '::',
						_0: 'NaN',
						_1: {
							ctor: '::',
							_0: 'Infinity',
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isLiteralKeyword = function (str) {
	return A2(_elm_lang$core$Set$member, str, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$literalKeywordSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$groupSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('{'),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('}'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('('),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr(')'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('['),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr(']'),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr(','),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr(';'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isGroupChar = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$groupSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$groupChar = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
	A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isGroupChar));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$operatorSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('+'),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('-'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('*'),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('/'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('='),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('!'),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr('<'),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr('>'),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.chr('&'),
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Native_Utils.chr('|'),
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Native_Utils.chr('?'),
												_1: {
													ctor: '::',
													_0: _elm_lang$core$Native_Utils.chr('^'),
													_1: {
														ctor: '::',
														_0: _elm_lang$core$Native_Utils.chr(':'),
														_1: {
															ctor: '::',
															_0: _elm_lang$core$Native_Utils.chr('~'),
															_1: {
																ctor: '::',
																_0: _elm_lang$core$Native_Utils.chr('%'),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$core$Native_Utils.chr('.'),
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isOperatorChar = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$operatorSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$punctuactorSet = A2(_elm_lang$core$Set$union, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$operatorSet, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$groupSet);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isPunctuaction = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$punctuactorSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$declarationKeywordSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: 'var',
		_1: {
			ctor: '::',
			_0: 'const',
			_1: {
				ctor: '::',
				_0: 'let',
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isDeclarationKeyword = function (str) {
	return A2(_elm_lang$core$Set$member, str, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$declarationKeywordSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$keywordSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: 'break',
		_1: {
			ctor: '::',
			_0: 'do',
			_1: {
				ctor: '::',
				_0: 'instanceof',
				_1: {
					ctor: '::',
					_0: 'typeof',
					_1: {
						ctor: '::',
						_0: 'case',
						_1: {
							ctor: '::',
							_0: 'else',
							_1: {
								ctor: '::',
								_0: 'new',
								_1: {
									ctor: '::',
									_0: 'catch',
									_1: {
										ctor: '::',
										_0: 'finally',
										_1: {
											ctor: '::',
											_0: 'return',
											_1: {
												ctor: '::',
												_0: 'void',
												_1: {
													ctor: '::',
													_0: 'continue',
													_1: {
														ctor: '::',
														_0: 'for',
														_1: {
															ctor: '::',
															_0: 'switch',
															_1: {
																ctor: '::',
																_0: 'while',
																_1: {
																	ctor: '::',
																	_0: 'debugger',
																	_1: {
																		ctor: '::',
																		_0: 'this',
																		_1: {
																			ctor: '::',
																			_0: 'with',
																			_1: {
																				ctor: '::',
																				_0: 'default',
																				_1: {
																					ctor: '::',
																					_0: 'if',
																					_1: {
																						ctor: '::',
																						_0: 'throw',
																						_1: {
																							ctor: '::',
																							_0: 'delete',
																							_1: {
																								ctor: '::',
																								_0: 'in',
																								_1: {
																									ctor: '::',
																									_0: 'try',
																									_1: {
																										ctor: '::',
																										_0: 'enum',
																										_1: {
																											ctor: '::',
																											_0: 'extends',
																											_1: {
																												ctor: '::',
																												_0: 'export',
																												_1: {
																													ctor: '::',
																													_0: 'import',
																													_1: {
																														ctor: '::',
																														_0: 'implements',
																														_1: {
																															ctor: '::',
																															_0: 'private',
																															_1: {
																																ctor: '::',
																																_0: 'public',
																																_1: {
																																	ctor: '::',
																																	_0: 'yield',
																																	_1: {
																																		ctor: '::',
																																		_0: 'interface',
																																		_1: {
																																			ctor: '::',
																																			_0: 'package',
																																			_1: {
																																				ctor: '::',
																																				_0: 'protected',
																																				_1: {ctor: '[]'}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isKeyword = function (str) {
	return A2(_elm_lang$core$Set$member, str, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$keywordSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isIdentifierNameChar = function (c) {
	return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isPunctuaction(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isStringLiteralChar(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isCommentChar(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isWhitespace(c))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$ClassExtends = {ctor: 'ClassExtends'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$classExtendsLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$whitespaceOrComment,
		_1: {
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$map,
				function (_p5) {
					return _elm_lang$core$List$singleton(
						A2(
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$ClassExtends),
							_p5));
				},
				A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isIdentifierNameChar)),
			_1: {ctor: '[]'}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Param = {ctor: 'Param'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$argLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$whitespaceOrComment,
		_1: {
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$map,
				function (_p6) {
					return _elm_lang$core$List$singleton(
						A2(
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Param),
							_p6));
				},
				A2(
					_elm_tools$parser$Parser$keep,
					_elm_tools$parser$Parser$oneOrMore,
					function (c) {
						return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isCommentChar(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isWhitespace(c) || (_elm_lang$core$Native_Utils.eq(
							c,
							_elm_lang$core$Native_Utils.chr(',')) || _elm_lang$core$Native_Utils.eq(
							c,
							_elm_lang$core$Native_Utils.chr(')')))));
					})),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					function (_p7) {
						return _elm_lang$core$List$singleton(
							A2(
								F2(
									function (v0, v1) {
										return {ctor: '_Tuple2', _0: v0, _1: v1};
									}),
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
								_p7));
					},
					A2(
						_elm_tools$parser$Parser$keep,
						_elm_tools$parser$Parser$oneOrMore,
						function (c) {
							return _elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr('/')) || _elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr(','));
						})),
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$LiteralKeyword = {ctor: 'LiteralKeyword'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$jsEscapable = A2(
	_elm_tools$parser$Parser$repeat,
	_elm_tools$parser$Parser$oneOrMore,
	A2(
		_elm_tools$parser$Parser$map,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$LiteralKeyword)),
		_elm_tools$parser$Parser$source(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$escapable)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Function = {ctor: 'Function'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$FunctionEval = {ctor: 'FunctionEval'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$functionEvalLoop = F2(
	function (identifier, revTokens) {
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A3(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$addThen,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$functionEvalLoop(identifier),
					revTokens,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$whitespaceOrComment),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$andThen,
						function (n) {
							return _elm_tools$parser$Parser$succeed(
								A2(
									_elm_lang$core$Basics_ops['++'],
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: '('},
										_1: revTokens
									},
									{
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$FunctionEval),
											_1: identifier
										},
										_1: {ctor: '[]'}
									}));
						},
						_elm_tools$parser$Parser$symbol('(')),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$succeed(
							A2(
								_elm_lang$core$Basics_ops['++'],
								revTokens,
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: identifier},
									_1: {ctor: '[]'}
								})),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$DeclarationKeyword = {ctor: 'DeclarationKeyword'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Keyword = {ctor: 'Keyword'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$functionDeclarationLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$whitespaceOrComment,
		_1: {
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$map,
				function (_p8) {
					return _elm_lang$core$List$singleton(
						A2(
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Function),
							_p8));
				},
				A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isIdentifierNameChar)),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					function (_p9) {
						return {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Keyword),
								_1: '*'
							},
							_1: {ctor: '[]'}
						};
					},
					_elm_tools$parser$Parser$symbol('*')),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$andThen,
						function (_p10) {
							return A2(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$consThenRevConcat,
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: '('},
									_1: {ctor: '[]'}
								},
								A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$argLoop));
						},
						_elm_tools$parser$Parser$symbol('(')),
					_1: {ctor: '[]'}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$classDeclarationLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$whitespaceOrComment,
		_1: {
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$andThen,
				function (n) {
					return _elm_lang$core$Native_Utils.eq(n, 'extends') ? A2(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$consThenRevConcat,
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Keyword),
								_1: n
							},
							_1: {ctor: '[]'}
						},
						A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$classExtendsLoop)) : _elm_tools$parser$Parser$succeed(
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Function),
								_1: n
							},
							_1: {ctor: '[]'}
						});
				},
				A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isIdentifierNameChar)),
			_1: {ctor: '[]'}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$keywordParser = function (n) {
	return (_elm_lang$core$Native_Utils.eq(n, 'function') || _elm_lang$core$Native_Utils.eq(n, 'static')) ? A2(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$consThenRevConcat,
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$DeclarationKeyword),
				_1: n
			},
			_1: {ctor: '[]'}
		},
		A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$functionDeclarationLoop)) : (_elm_lang$core$Native_Utils.eq(n, 'class') ? A2(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$consThenRevConcat,
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$DeclarationKeyword),
				_1: n
			},
			_1: {ctor: '[]'}
		},
		A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$classDeclarationLoop)) : ((_elm_lang$core$Native_Utils.eq(n, 'this') || _elm_lang$core$Native_Utils.eq(n, 'super')) ? _elm_tools$parser$Parser$succeed(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Param),
				_1: n
			},
			_1: {ctor: '[]'}
		}) : (_elm_lang$core$Native_Utils.eq(n, 'constructor') ? A2(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$consThenRevConcat,
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Function),
				_1: n
			},
			_1: {ctor: '[]'}
		},
		A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$functionDeclarationLoop)) : (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isKeyword(n) ? _elm_tools$parser$Parser$succeed(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Keyword),
				_1: n
			},
			_1: {ctor: '[]'}
		}) : (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isDeclarationKeyword(n) ? _elm_tools$parser$Parser$succeed(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$DeclarationKeyword),
				_1: n
			},
			_1: {ctor: '[]'}
		}) : (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isLiteralKeyword(n) ? _elm_tools$parser$Parser$succeed(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$LiteralKeyword),
				_1: n
			},
			_1: {ctor: '[]'}
		}) : A2(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$functionEvalLoop,
		n,
		{ctor: '[]'})))))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$operatorChar = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Keyword)),
	A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isOperatorChar));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$String = {ctor: 'String'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$quoteDelimiter = {
	start: '\'',
	end: '\'',
	isNestable: false,
	defaultMap: F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$String)),
	innerParsers: {
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$lineBreakList,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$jsEscapable,
			_1: {ctor: '[]'}
		}
	},
	isNotRelevant: function (c) {
		return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isEscapable(c));
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$quote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$quoteDelimiter);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$doubleQuote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(
	_elm_lang$core$Native_Utils.update(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$quoteDelimiter,
		{start: '\"', end: '\"'}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$templateString = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(
	_elm_lang$core$Native_Utils.update(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$quoteDelimiter,
		{
			start: '`',
			end: '`',
			innerParsers: {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$lineBreakList,
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$jsEscapable,
					_1: {ctor: '[]'}
				}
			},
			isNotRelevant: function (c) {
				return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isEscapable(c));
			}
		}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$stringLiteral = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$quote,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$doubleQuote,
			_1: {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$templateString,
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Number = {ctor: 'Number'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$number = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$Number)),
	_elm_tools$parser$Parser$source(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$number));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$mainLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$whitespaceOrComment,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$stringLiteral,
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					_elm_lang$core$List$singleton,
					_elm_tools$parser$Parser$oneOf(
						{
							ctor: '::',
							_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$operatorChar,
							_1: {
								ctor: '::',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$groupChar,
								_1: {
									ctor: '::',
									_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$number,
									_1: {ctor: '[]'}
								}
							}
						})),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$andThen,
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$keywordParser,
						A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$isIdentifierNameChar)),
					_1: {ctor: '[]'}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$toRevTokens = _elm_tools$parser$Parser$run(
	A2(
		_elm_tools$parser$Parser$map,
		function (_p11) {
			return _elm_lang$core$List$concat(
				_elm_lang$core$List$reverse(_p11));
		},
		A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$mainLoop)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$toLines = function (_p12) {
	return A2(
		_elm_lang$core$Result$map,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toLines(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$syntaxToStyle),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$toRevTokens(_p12));
};

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attributeSelectorToFragment = function (att) {
	var _p0 = att;
	switch (_p0.ctor) {
		case 'AttributeName':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style5, _1: 'css-s-a-an'};
		case 'AttributeValue':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style2, _1: 'css-s-a-av'};
		default:
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style3, _1: 'css-s-a-o'};
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$selectorToFragment = function (selector) {
	var _p1 = selector;
	switch (_p1.ctor) {
		case 'Element':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style3, _1: 'css-s-e'};
		case 'Id':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style5, _1: 'css-s-i'};
		case 'Class':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style5, _1: 'css-s-cl'};
		case 'Combinator':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style7, _1: 'css-s-c'};
		case 'Universal':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style3, _1: 'css-s-u'};
		case 'AttributeSelector':
			return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attributeSelectorToFragment(_p1._0);
		case 'PseudoElement':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Default, _1: 'css-s-pe'};
		default:
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Default, _1: 'css-s-pc'};
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$atRuleToFragment = function (atRule) {
	var _p2 = atRule;
	switch (_p2.ctor) {
		case 'Identifier':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style3, _1: 'css-ar-i'};
		case 'Prefix':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style5, _1: 'css-ar-p'};
		case 'Keyword':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style3, _1: 'css-ar-k'};
		default:
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style4, _1: 'css-ar-v'};
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$syntaxToStyle = function (syntax) {
	var _p3 = syntax;
	switch (_p3.ctor) {
		case 'String':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style2, _1: 'css-s'};
		case 'AtRule':
			return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$atRuleToFragment(_p3._0);
		case 'Selector':
			return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$selectorToFragment(_p3._0);
		case 'Property':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style4, _1: 'css-p'};
		case 'PropertyValue':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style4, _1: 'css-pv'};
		case 'Number':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style1, _1: 'css-n'};
		default:
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style3, _1: 'css-u'};
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$lineBreak = A2(
	_elm_tools$parser$Parser$repeat,
	_elm_tools$parser$Parser$oneOrMore,
	A2(
		_elm_tools$parser$Parser$map,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$LineBreak),
		A2(
			_elm_tools$parser$Parser$keep,
			_elm_tools$parser$Parser$Exactly(1),
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isCommentChar = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('/'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$comment = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(
	{
		start: '/*',
		end: '*/',
		isNestable: false,
		defaultMap: F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Comment),
		innerParsers: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$lineBreak,
			_1: {ctor: '[]'}
		},
		isNotRelevant: function (c) {
			return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(c);
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$whitespaceOrComment = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_tools$parser$Parser$map,
			function (_p4) {
				return _elm_lang$core$List$singleton(
					A2(
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							}),
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
						_p4));
			},
			A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isSpace)),
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$lineBreak,
			_1: {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$comment,
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isStringLiteralChar = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\"')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\''));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$operatorCharSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('+'),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('-'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('%'),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('*'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('/'),
						_1: {ctor: '[]'}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isOperatorChar = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$operatorCharSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$unitSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: 'em',
		_1: {
			ctor: '::',
			_0: 'ex',
			_1: {
				ctor: '::',
				_0: 'ch',
				_1: {
					ctor: '::',
					_0: 'rem',
					_1: {
						ctor: '::',
						_0: 'vw',
						_1: {
							ctor: '::',
							_0: 'vh',
							_1: {
								ctor: '::',
								_0: 'vmin',
								_1: {
									ctor: '::',
									_0: 'vmax',
									_1: {
										ctor: '::',
										_0: 'cm',
										_1: {
											ctor: '::',
											_0: 'mm',
											_1: {
												ctor: '::',
												_0: 'q',
												_1: {
													ctor: '::',
													_0: 'in',
													_1: {
														ctor: '::',
														_0: 'pt',
														_1: {
															ctor: '::',
															_0: 'pc',
															_1: {
																ctor: '::',
																_0: 'px',
																_1: {
																	ctor: '::',
																	_0: 'deg',
																	_1: {
																		ctor: '::',
																		_0: 'grad',
																		_1: {
																			ctor: '::',
																			_0: 'rad',
																			_1: {
																				ctor: '::',
																				_0: 'turn',
																				_1: {
																					ctor: '::',
																					_0: 's',
																					_1: {
																						ctor: '::',
																						_0: 'ms',
																						_1: {
																							ctor: '::',
																							_0: 'Hz',
																							_1: {
																								ctor: '::',
																								_0: 'kHz',
																								_1: {
																									ctor: '::',
																									_0: 'dpi',
																									_1: {
																										ctor: '::',
																										_0: 'dpcm',
																										_1: {
																											ctor: '::',
																											_0: 'dppx',
																											_1: {ctor: '[]'}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isUnit = function (n) {
	return A2(_elm_lang$core$Set$member, n, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$unitSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isNotPropertyValueChar = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('(')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(')')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(':')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(',')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('/')))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isPropertyChar = function (c) {
	return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isWhitespace(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isCommentChar(c) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(':')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(';')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('}'))))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isPropertyValueChar = function (c) {
	return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isPropertyChar(c) && (!(_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('(')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(')')) || (_elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr(',')) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isOperatorChar(c)))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attSelOperatorCharSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('='),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('~'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('|'),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('^'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('$'),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('*'),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attSelNameInvalidCharSet = A2(
	_elm_lang$core$Set$insert,
	_elm_lang$core$Native_Utils.chr(']'),
	A2(_elm_lang$core$Set$union, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attSelOperatorCharSet, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$whitespaceCharSet));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$selectorNameInvalidCharSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr(':'),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('{'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('}'),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr(','),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('.'),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('#'),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr('>'),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr('+'),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.chr('~'),
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Native_Utils.chr('*'),
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Native_Utils.chr('['),
												_1: {
													ctor: '::',
													_0: _elm_lang$core$Native_Utils.chr(']'),
													_1: {
														ctor: '::',
														_0: _elm_lang$core$Native_Utils.chr('|'),
														_1: {
															ctor: '::',
															_0: _elm_lang$core$Native_Utils.chr(';'),
															_1: {
																ctor: '::',
																_0: _elm_lang$core$Native_Utils.chr('('),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$core$Native_Utils.chr(')'),
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isSelectorNameChar = function (c) {
	return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isWhitespace(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isCommentChar(c) || A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$selectorNameInvalidCharSet)));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$atRuleSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: '@page',
		_1: {
			ctor: '::',
			_0: '@font-face',
			_1: {
				ctor: '::',
				_0: '@swash',
				_1: {
					ctor: '::',
					_0: '@annotation',
					_1: {
						ctor: '::',
						_0: '@ornaments',
						_1: {
							ctor: '::',
							_0: '@stylistic',
							_1: {
								ctor: '::',
								_0: '@styleset',
								_1: {
									ctor: '::',
									_0: '@character-variant',
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$atRuleKeywordSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: 'and',
		_1: {
			ctor: '::',
			_0: 'or',
			_1: {
				ctor: '::',
				_0: 'not',
				_1: {
					ctor: '::',
					_0: 'only',
					_1: {ctor: '[]'}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isAtRuleKeyword = function (n) {
	return A2(_elm_lang$core$Set$member, n, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$atRuleKeywordSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$nestableAtRuleOpener = function (ns) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$map,
				_elm_lang$core$Basics$always(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: '{'},
						_1: ns
					}),
				_elm_tools$parser$Parser$symbol('{')),
			_1: {
				ctor: '::',
				_0: _elm_tools$parser$Parser$succeed(ns),
				_1: {ctor: '[]'}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Unit = {ctor: 'Unit'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Number = {ctor: 'Number'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$hexColor = A2(
	_elm_tools$parser$Parser$andThen,
	function (_p5) {
		return A2(
			_elm_tools$parser$Parser$map,
			function (n) {
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Number),
						_1: A2(_elm_lang$core$Basics_ops['++'], '#', n)
					},
					_1: {ctor: '[]'}
				};
			},
			A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isPropertyValueChar));
	},
	_elm_tools$parser$Parser$symbol('#'));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$number = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Number)),
	_elm_tools$parser$Parser$source(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$number));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$cssEscapable = A2(
	_elm_tools$parser$Parser$repeat,
	_elm_tools$parser$Parser$oneOrMore,
	A2(
		_elm_tools$parser$Parser$map,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Number)),
		_elm_tools$parser$Parser$source(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$escapable)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$PropertyValue = {ctor: 'PropertyValue'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Property = {ctor: 'Property'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Selector = function (a) {
	return {ctor: 'Selector', _0: a};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AtRule = function (a) {
	return {ctor: 'AtRule', _0: a};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$String = {ctor: 'String'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$quoteDelimiter = {
	start: '\'',
	end: '\'',
	isNestable: false,
	defaultMap: F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$String)),
	innerParsers: {
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$lineBreak,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$cssEscapable,
			_1: {ctor: '[]'}
		}
	},
	isNotRelevant: function (c) {
		return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isEscapable(c));
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$quote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$quoteDelimiter);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$doubleQuote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(
	_elm_lang$core$Native_Utils.update(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$quoteDelimiter,
		{start: '\"', end: '\"'}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$stringLiteral = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$quote,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$doubleQuote,
			_1: {ctor: '[]'}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$stringArg = function (fnStr) {
	return A2(
		_elm_tools$parser$Parser$andThen,
		function (opener) {
			return _elm_tools$parser$Parser$oneOf(
				{
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$map,
						function (ns) {
							return A2(_elm_lang$core$Basics_ops['++'], ns, opener);
						},
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$stringLiteral),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser$map,
							function (n) {
								return {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$String),
										_1: n
									},
									_1: opener
								};
							},
							A2(
								_elm_tools$parser$Parser$keep,
								_elm_tools$parser$Parser$zeroOrMore,
								F2(
									function (x, y) {
										return !_elm_lang$core$Native_Utils.eq(x, y);
									})(
									_elm_lang$core$Native_Utils.chr(')')))),
						_1: {ctor: '[]'}
					}
				});
		},
		A2(
			_elm_tools$parser$Parser$map,
			_elm_lang$core$Basics$always(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: '('},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$PropertyValue),
							_1: fnStr
						},
						_1: {ctor: '[]'}
					}
				}),
			_elm_tools$parser$Parser$keyword(
				A2(_elm_lang$core$Basics_ops['++'], fnStr, '('))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$valueLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$whitespaceOrComment,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$stringLiteral,
			_1: {
				ctor: '::',
				_0: A2(_elm_tools$parser$Parser$map, _elm_lang$core$List$singleton, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$number),
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$hexColor,
					_1: {
						ctor: '::',
						_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$stringArg('url'),
						_1: {
							ctor: '::',
							_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$stringArg('format'),
							_1: {
								ctor: '::',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$stringArg('local'),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser$map,
										function (n) {
											return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isUnit(n) ? {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Unit),
													_1: n
												},
												_1: {ctor: '[]'}
											} : {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$PropertyValue),
													_1: n
												},
												_1: {ctor: '[]'}
											};
										},
										A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isPropertyValueChar)),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_tools$parser$Parser$map,
											function (_p6) {
												return _elm_lang$core$List$singleton(
													A2(
														F2(
															function (v0, v1) {
																return {ctor: '_Tuple2', _0: v0, _1: v1};
															}),
														_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
														_p6));
											},
											A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isNotPropertyValueChar)),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_tools$parser$Parser$map,
												function (_p7) {
													return _elm_lang$core$List$singleton(
														A2(
															F2(
																function (v0, v1) {
																	return {ctor: '_Tuple2', _0: v0, _1: v1};
																}),
															_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Unit),
															_p7));
												},
												A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isOperatorChar)),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$valueHelper = function (opener) {
	return A2(
		_elm_tools$parser$Parser$map,
		function (_p8) {
			return _elm_lang$core$List$concat(
				_elm_lang$core$List$reverse(
					A2(
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							}),
						{
							ctor: '::',
							_0: opener,
							_1: {ctor: '[]'}
						},
						_p8)));
		},
		A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$valueLoop));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$value = A2(
	_elm_tools$parser$Parser$andThen,
	_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$valueHelper,
	A2(
		_elm_tools$parser$Parser$map,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
		A2(
			_elm_tools$parser$Parser$keep,
			_elm_tools$parser$Parser$oneOrMore,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(
				_elm_lang$core$Native_Utils.chr(':')))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$declarationLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$whitespaceOrComment,
		_1: {
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$map,
				function (_p9) {
					return _elm_lang$core$List$singleton(
						A2(
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Property),
							_p9));
				},
				A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isPropertyChar)),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					function (_p10) {
						return _elm_lang$core$List$singleton(
							A2(
								F2(
									function (v0, v1) {
										return {ctor: '_Tuple2', _0: v0, _1: v1};
									}),
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
								_p10));
					},
					A2(
						_elm_tools$parser$Parser$keep,
						_elm_tools$parser$Parser$oneOrMore,
						function (c) {
							return _elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr(';')) || _elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr('/'));
						})),
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$value,
					_1: {ctor: '[]'}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$declarationBlockHelper = function (opener) {
	return A2(
		_elm_tools$parser$Parser$map,
		function (_p11) {
			return _elm_lang$core$List$concat(
				_elm_lang$core$List$reverse(
					A2(
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							}),
						{
							ctor: '::',
							_0: opener,
							_1: {ctor: '[]'}
						},
						_p11)));
		},
		A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$declarationLoop));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$declarationBlock = A2(
	_elm_tools$parser$Parser$andThen,
	_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$declarationBlockHelper,
	A2(
		_elm_tools$parser$Parser$map,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
		A2(
			_elm_tools$parser$Parser$keep,
			_elm_tools$parser$Parser$oneOrMore,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(
				_elm_lang$core$Native_Utils.chr('{')))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AtRuleValue = {ctor: 'AtRuleValue'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Keyword = {ctor: 'Keyword'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$atRuleKeywordOrValue = A2(
	_elm_tools$parser$Parser$map,
	function (n) {
		return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isAtRuleKeyword(n) ? {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AtRule(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Keyword)),
				_1: n
			},
			_1: {ctor: '[]'}
		} : {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AtRule(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AtRuleValue)),
				_1: n
			},
			_1: {ctor: '[]'}
		};
	},
	A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isSelectorNameChar));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Prefix = {ctor: 'Prefix'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Identifier = {ctor: 'Identifier'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$finishAtRules = F2(
	function (atRule, ns) {
		return _elm_lang$core$List$concat(
			_elm_lang$core$List$reverse(
				{
					ctor: '::',
					_0: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AtRule(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Identifier)),
							_1: atRule
						},
						_1: {ctor: '[]'}
					},
					_1: ns
				}));
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$mediaOrSupports = function (atRule) {
	return A2(
		_elm_tools$parser$Parser$andThen,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$nestableAtRuleOpener,
		A2(
			_elm_tools$parser$Parser$map,
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$finishAtRules(atRule),
			A2(
				_elm_tools$parser$Parser$repeat,
				_elm_tools$parser$Parser$zeroOrMore,
				_elm_tools$parser$Parser$oneOf(
					{
						ctor: '::',
						_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$whitespaceOrComment,
						_1: {
							ctor: '::',
							_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$stringLiteral,
							_1: {
								ctor: '::',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$atRuleKeywordOrValue,
								_1: {
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser$map,
										function (_p12) {
											return _elm_lang$core$List$singleton(
												A2(
													F2(
														function (v0, v1) {
															return {ctor: '_Tuple2', _0: v0, _1: v1};
														}),
													_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
													_p12));
										},
										A2(
											_elm_tools$parser$Parser$keep,
											_elm_tools$parser$Parser$Exactly(1),
											function (c) {
												return !_elm_lang$core$Native_Utils.eq(
													c,
													_elm_lang$core$Native_Utils.chr('{'));
											})),
									_1: {ctor: '[]'}
								}
							}
						}
					}))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$keyframesOrCounterStyle = function (atRule) {
	return A2(
		_elm_tools$parser$Parser$map,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$finishAtRules(atRule),
		A2(
			_elm_tools$parser$Parser$repeat,
			_elm_tools$parser$Parser$zeroOrMore,
			_elm_tools$parser$Parser$oneOf(
				{
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$whitespaceOrComment,
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser$map,
							function (_p13) {
								return _elm_lang$core$List$singleton(
									A2(
										F2(
											function (v0, v1) {
												return {ctor: '_Tuple2', _0: v0, _1: v1};
											}),
										_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(
											_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AtRule(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Prefix)),
										_p13));
							},
							A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isSelectorNameChar)),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_tools$parser$Parser$map,
								function (_p14) {
									return _elm_lang$core$List$singleton(
										A2(
											F2(
												function (v0, v1) {
													return {ctor: '_Tuple2', _0: v0, _1: v1};
												}),
											_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
											_p14));
								},
								A2(
									_elm_tools$parser$Parser$keep,
									_elm_tools$parser$Parser$Exactly(1),
									function (c) {
										return !_elm_lang$core$Native_Utils.eq(
											c,
											_elm_lang$core$Native_Utils.chr('{'));
									})),
							_1: {ctor: '[]'}
						}
					}
				})));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$atRuleHelper = function (atRule) {
	var _p15 = atRule;
	switch (_p15) {
		case '@import':
			return A2(
				_elm_tools$parser$Parser$map,
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$finishAtRules(atRule),
				A2(
					_elm_tools$parser$Parser$repeat,
					_elm_tools$parser$Parser$zeroOrMore,
					_elm_tools$parser$Parser$oneOf(
						{
							ctor: '::',
							_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$whitespaceOrComment,
							_1: {
								ctor: '::',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$stringArg('url'),
								_1: {
									ctor: '::',
									_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$stringLiteral,
									_1: {
										ctor: '::',
										_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$atRuleKeywordOrValue,
										_1: {
											ctor: '::',
											_0: A2(
												_elm_tools$parser$Parser$map,
												function (_p16) {
													return _elm_lang$core$List$singleton(
														A2(
															F2(
																function (v0, v1) {
																	return {ctor: '_Tuple2', _0: v0, _1: v1};
																}),
															_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
															_p16));
												},
												A2(
													_elm_tools$parser$Parser$keep,
													_elm_tools$parser$Parser$Exactly(1),
													function (c) {
														return !_elm_lang$core$Native_Utils.eq(
															c,
															_elm_lang$core$Native_Utils.chr(';'));
													})),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						})));
		case '@namespace':
			return A2(
				_elm_tools$parser$Parser$map,
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$finishAtRules(atRule),
				A2(
					_elm_tools$parser$Parser$repeat,
					_elm_tools$parser$Parser$zeroOrMore,
					_elm_tools$parser$Parser$oneOf(
						{
							ctor: '::',
							_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$whitespaceOrComment,
							_1: {
								ctor: '::',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$stringArg('url'),
								_1: {
									ctor: '::',
									_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$stringLiteral,
									_1: {
										ctor: '::',
										_0: A2(
											_elm_tools$parser$Parser$map,
											function (_p17) {
												return _elm_lang$core$List$singleton(
													A2(
														F2(
															function (v0, v1) {
																return {ctor: '_Tuple2', _0: v0, _1: v1};
															}),
														_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(
															_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AtRule(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Prefix)),
														_p17));
											},
											A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isSelectorNameChar)),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_tools$parser$Parser$map,
												function (_p18) {
													return _elm_lang$core$List$singleton(
														A2(
															F2(
																function (v0, v1) {
																	return {ctor: '_Tuple2', _0: v0, _1: v1};
																}),
															_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
															_p18));
												},
												A2(
													_elm_tools$parser$Parser$keep,
													_elm_tools$parser$Parser$Exactly(1),
													function (c) {
														return !_elm_lang$core$Native_Utils.eq(
															c,
															_elm_lang$core$Native_Utils.chr(';'));
													})),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						})));
		case '@charset':
			return A2(
				_elm_tools$parser$Parser$map,
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$finishAtRules(atRule),
				A2(
					_elm_tools$parser$Parser$repeat,
					_elm_tools$parser$Parser$zeroOrMore,
					_elm_tools$parser$Parser$oneOf(
						{
							ctor: '::',
							_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$whitespaceOrComment,
							_1: {
								ctor: '::',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$stringLiteral,
								_1: {
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser$map,
										function (_p19) {
											return _elm_lang$core$List$singleton(
												A2(
													F2(
														function (v0, v1) {
															return {ctor: '_Tuple2', _0: v0, _1: v1};
														}),
													_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$String),
													_p19));
										},
										A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isSelectorNameChar)),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_tools$parser$Parser$map,
											function (_p20) {
												return _elm_lang$core$List$singleton(
													A2(
														F2(
															function (v0, v1) {
																return {ctor: '_Tuple2', _0: v0, _1: v1};
															}),
														_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
														_p20));
											},
											A2(
												_elm_tools$parser$Parser$keep,
												_elm_tools$parser$Parser$Exactly(1),
												function (c) {
													return !_elm_lang$core$Native_Utils.eq(
														c,
														_elm_lang$core$Native_Utils.chr(';'));
												})),
										_1: {ctor: '[]'}
									}
								}
							}
						})));
		case '@media':
			return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$mediaOrSupports(atRule);
		case '@supports':
			return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$mediaOrSupports(atRule);
		case '@keyframes':
			return A2(
				_elm_tools$parser$Parser$andThen,
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$nestableAtRuleOpener,
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$keyframesOrCounterStyle(atRule));
		case '@counter-style':
			return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$keyframesOrCounterStyle(atRule);
		case '@font-feature-values':
			return A2(
				_elm_tools$parser$Parser$andThen,
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$nestableAtRuleOpener,
				A2(
					_elm_tools$parser$Parser$map,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$finishAtRules(atRule),
					A2(
						_elm_tools$parser$Parser$repeat,
						_elm_tools$parser$Parser$zeroOrMore,
						_elm_tools$parser$Parser$oneOf(
							{
								ctor: '::',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$whitespaceOrComment,
								_1: {
									ctor: '::',
									_0: A2(
										_elm_tools$parser$Parser$map,
										function (_p21) {
											return _elm_lang$core$List$singleton(
												A2(
													F2(
														function (v0, v1) {
															return {ctor: '_Tuple2', _0: v0, _1: v1};
														}),
													_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(
														_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AtRule(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Prefix)),
													_p21));
										},
										A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isSelectorNameChar)),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_tools$parser$Parser$map,
											function (_p22) {
												return _elm_lang$core$List$singleton(
													A2(
														F2(
															function (v0, v1) {
																return {ctor: '_Tuple2', _0: v0, _1: v1};
															}),
														_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
														_p22));
											},
											A2(
												_elm_tools$parser$Parser$keep,
												_elm_tools$parser$Parser$Exactly(1),
												function (c) {
													return !_elm_lang$core$Native_Utils.eq(
														c,
														_elm_lang$core$Native_Utils.chr('{'));
												})),
										_1: {ctor: '[]'}
									}
								}
							}))));
		default:
			return A2(_elm_lang$core$Set$member, atRule, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$atRuleSet) ? _elm_tools$parser$Parser$succeed(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AtRule(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Identifier)),
						_1: atRule
					},
					_1: {ctor: '[]'}
				}) : _elm_tools$parser$Parser$succeed(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: atRule},
					_1: {ctor: '[]'}
				});
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$atRule = A2(
	_elm_tools$parser$Parser$andThen,
	_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$atRuleHelper,
	_elm_tools$parser$Parser$source(
		A3(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore,
			_elm_tools$parser$Parser$zeroOrMore,
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isSelectorNameChar,
			_elm_tools$parser$Parser$symbol('@'))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$PseudoClass = {ctor: 'PseudoClass'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$pseudoClass = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$PseudoClass),
	_elm_tools$parser$Parser$source(
		A3(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore,
			_elm_tools$parser$Parser$zeroOrMore,
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isSelectorNameChar,
			_elm_tools$parser$Parser$symbol(':'))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$PseudoElement = {ctor: 'PseudoElement'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$pseudoElement = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$PseudoElement),
	_elm_tools$parser$Parser$source(
		A3(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore,
			_elm_tools$parser$Parser$zeroOrMore,
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isSelectorNameChar,
			_elm_tools$parser$Parser$symbol('::'))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AttributeSelector = function (a) {
	return {ctor: 'AttributeSelector', _0: a};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Universal = {ctor: 'Universal'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$universal = A2(
	_elm_tools$parser$Parser$map,
	_elm_lang$core$Basics$always(
		{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Universal, _1: '*'}),
	_elm_tools$parser$Parser$symbol('*'));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Combinator = {ctor: 'Combinator'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$combinator = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Combinator),
	_elm_tools$parser$Parser$source(
		_elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: _elm_tools$parser$Parser$symbol('+'),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$symbol('~'),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$symbol('>'),
						_1: {ctor: '[]'}
					}
				}
			})));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Class = {ctor: 'Class'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$class = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Class),
	_elm_tools$parser$Parser$source(
		A3(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore,
			_elm_tools$parser$Parser$zeroOrMore,
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isSelectorNameChar,
			_elm_tools$parser$Parser$symbol('.'))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Id = {ctor: 'Id'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$id = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Id),
	_elm_tools$parser$Parser$source(
		A3(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$thenIgnore,
			_elm_tools$parser$Parser$zeroOrMore,
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isSelectorNameChar,
			_elm_tools$parser$Parser$symbol('#'))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Element = {ctor: 'Element'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$element = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Element),
	A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$isSelectorNameChar));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AttributeOperator = {ctor: 'AttributeOperator'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attributeOperator = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Selector(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AttributeSelector(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AttributeOperator)))),
	_elm_tools$parser$Parser$source(
		_elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: _elm_tools$parser$Parser$symbol('~='),
				_1: {
					ctor: '::',
					_0: _elm_tools$parser$Parser$symbol('|='),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$symbol('^='),
						_1: {
							ctor: '::',
							_0: _elm_tools$parser$Parser$symbol('$='),
							_1: {
								ctor: '::',
								_0: _elm_tools$parser$Parser$symbol('*='),
								_1: {
									ctor: '::',
									_0: _elm_tools$parser$Parser$symbol('='),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			})));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AttributeValue = {ctor: 'AttributeValue'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attributeValue = function (revSyntaxes) {
	return _elm_tools$parser$Parser$oneOf(
		{
			ctor: '::',
			_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$addThen, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attributeValue, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$whitespaceOrComment),
			_1: {
				ctor: '::',
				_0: A3(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$addThen, _elm_tools$parser$Parser$succeed, revSyntaxes, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$stringLiteral),
				_1: {
					ctor: '::',
					_0: A3(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$consThen,
						_elm_tools$parser$Parser$succeed,
						revSyntaxes,
						A2(
							_elm_tools$parser$Parser$map,
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								})(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(
									_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Selector(
										_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AttributeSelector(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AttributeValue)))),
							A2(
								_elm_tools$parser$Parser$keep,
								_elm_tools$parser$Parser$oneOrMore,
								function (c) {
									return (!_elm_lang$core$Native_Utils.eq(
										c,
										_elm_lang$core$Native_Utils.chr(']'))) && (!_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isWhitespace(c));
								}))),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$succeed(revSyntaxes),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AttributeName = {ctor: 'AttributeName'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attributeName = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Selector(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AttributeSelector(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AttributeName)))),
	A2(
		_elm_tools$parser$Parser$keep,
		_elm_tools$parser$Parser$oneOrMore,
		function (c) {
			return !A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attSelNameInvalidCharSet);
		}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attributeSelectorLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$whitespaceOrComment,
		_1: {
			ctor: '::',
			_0: A2(_elm_tools$parser$Parser$map, _elm_lang$core$List$singleton, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attributeName),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					function (operator) {
						return A2(
							_elm_tools$parser$Parser$map,
							A2(
								_elm_lang$core$Basics$flip,
								F2(
									function (x, y) {
										return A2(_elm_lang$core$Basics_ops['++'], x, y);
									}),
								{
									ctor: '::',
									_0: operator,
									_1: {ctor: '[]'}
								}),
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attributeValue(
								{ctor: '[]'}));
					},
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attributeOperator),
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attributeSelector = A2(
	_elm_tools$parser$Parser$andThen,
	function (opener) {
		return A2(
			_elm_tools$parser$Parser$map,
			function (_p23) {
				return _elm_lang$core$List$concat(
					_elm_lang$core$List$reverse(
						A2(
							F2(
								function (x, y) {
									return {ctor: '::', _0: x, _1: y};
								}),
							{
								ctor: '::',
								_0: opener,
								_1: {ctor: '[]'}
							},
							_p23)));
			},
			A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attributeSelectorLoop));
	},
	A2(
		_elm_tools$parser$Parser$map,
		_elm_lang$core$Basics$always(
			{ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: '['}),
		_elm_tools$parser$Parser$symbol('[')));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$selector = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_tools$parser$Parser$map,
			function (_p24) {
				return _elm_lang$core$List$singleton(
					A2(
						_elm_lang$core$Tuple$mapFirst,
						function (_p25) {
							return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Selector(_p25));
						},
						_p24));
			},
			_elm_tools$parser$Parser$oneOf(
				{
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$id,
					_1: {
						ctor: '::',
						_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$class,
						_1: {
							ctor: '::',
							_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$element,
							_1: {
								ctor: '::',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$universal,
								_1: {
									ctor: '::',
									_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$combinator,
									_1: {
										ctor: '::',
										_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$pseudoElement,
										_1: {
											ctor: '::',
											_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$pseudoClass,
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				})),
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$attributeSelector,
			_1: {ctor: '[]'}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$mainLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$whitespaceOrComment,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$atRule,
			_1: {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$selector,
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$declarationBlock,
					_1: {
						ctor: '::',
						_0: A2(
							_elm_tools$parser$Parser$map,
							function (_p26) {
								return _elm_lang$core$List$singleton(
									A2(
										F2(
											function (v0, v1) {
												return {ctor: '_Tuple2', _0: v0, _1: v1};
											}),
										_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
										_p26));
							},
							A2(
								_elm_tools$parser$Parser$keep,
								_elm_tools$parser$Parser$Exactly(1),
								_elm_lang$core$Basics$always(true))),
						_1: {ctor: '[]'}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$toRevTokens = _elm_tools$parser$Parser$run(
	A2(
		_elm_tools$parser$Parser$map,
		function (_p27) {
			return _elm_lang$core$List$concat(
				_elm_lang$core$List$reverse(_p27));
		},
		A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$mainLoop)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$toLines = function (_p28) {
	return A2(
		_elm_lang$core$Result$map,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toLines(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$syntaxToStyle),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$toRevTokens(_p28));
};

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$syntaxToStyle = function (syntax) {
	var _p0 = syntax;
	switch (_p0.ctor) {
		case 'Number':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style1, _1: 'py-n'};
		case 'String':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style2, _1: 'py-s'};
		case 'Keyword':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style3, _1: 'py-k'};
		case 'DeclarationKeyword':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style4, _1: 'py-dk'};
		case 'Function':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style5, _1: 'py-f'};
		case 'LiteralKeyword':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style6, _1: 'py-lk'};
		case 'Param':
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Style7, _1: 'py-p'};
		default:
			return {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Default, _1: 'py-fe'};
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$consThenRevConcat = function (toCons) {
	return _elm_tools$parser$Parser$map(
		function (_p1) {
			return _elm_lang$core$List$concat(
				_elm_lang$core$List$reverse(
					A2(
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							}),
						toCons,
						_p1)));
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$lineBreak = A2(
	_elm_tools$parser$Parser$repeat,
	_elm_tools$parser$Parser$oneOrMore,
	A2(
		_elm_tools$parser$Parser$map,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$LineBreak),
		A2(
			_elm_tools$parser$Parser$keep,
			_elm_tools$parser$Parser$Exactly(1),
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isCommentChar = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('#'));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$multilineComment = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(
	{
		start: '\'\'\'',
		end: '\'\'\'',
		isNestable: false,
		defaultMap: F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Comment),
		innerParsers: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$lineBreak,
			_1: {ctor: '[]'}
		},
		isNotRelevant: function (c) {
			return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(c);
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$inlineComment = A2(
	_elm_tools$parser$Parser$map,
	function (_p2) {
		return _elm_lang$core$List$singleton(
			A2(
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Comment,
				_p2));
	},
	_elm_tools$parser$Parser$source(
		A2(
			_elm_tools$parser$Parser_ops['|.'],
			_elm_tools$parser$Parser$symbol('#'),
			A2(
				_elm_tools$parser$Parser$ignore,
				_elm_tools$parser$Parser$zeroOrMore,
				function (_p3) {
					return !_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(_p3);
				}))));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$comment = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$inlineComment,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$multilineComment,
			_1: {ctor: '[]'}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$whitespaceOrComment = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: A2(
			_elm_tools$parser$Parser$map,
			function (_p4) {
				return _elm_lang$core$List$singleton(
					A2(
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							}),
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
						_p4));
			},
			A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isSpace)),
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$lineBreak,
			_1: {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$comment,
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isStringLiteralChar = function (c) {
	return _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\"')) || _elm_lang$core$Native_Utils.eq(
		c,
		_elm_lang$core$Native_Utils.chr('\''));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$literalKeywordSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: 'True',
		_1: {
			ctor: '::',
			_0: 'False',
			_1: {
				ctor: '::',
				_0: 'None',
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isLiteralKeyword = function (str) {
	return A2(_elm_lang$core$Set$member, str, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$literalKeywordSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$groupSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('{'),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('}'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('('),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr(')'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('['),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr(']'),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr(','),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr(';'),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isGroupChar = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$groupSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$groupChar = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal),
	A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isGroupChar));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$operatorSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: _elm_lang$core$Native_Utils.chr('+'),
		_1: {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('-'),
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.chr('*'),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Native_Utils.chr('/'),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.chr('='),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Native_Utils.chr('!'),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Native_Utils.chr('<'),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Native_Utils.chr('>'),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Native_Utils.chr('&'),
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Native_Utils.chr('|'),
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Native_Utils.chr('?'),
												_1: {
													ctor: '::',
													_0: _elm_lang$core$Native_Utils.chr('^'),
													_1: {
														ctor: '::',
														_0: _elm_lang$core$Native_Utils.chr(':'),
														_1: {
															ctor: '::',
															_0: _elm_lang$core$Native_Utils.chr('~'),
															_1: {
																ctor: '::',
																_0: _elm_lang$core$Native_Utils.chr('%'),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$core$Native_Utils.chr('.'),
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isOperatorChar = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$operatorSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$punctuationSet = A2(_elm_lang$core$Set$union, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$operatorSet, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$groupSet);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isPunctuation = function (c) {
	return A2(_elm_lang$core$Set$member, c, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$punctuationSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$keywordSet = _elm_lang$core$Set$fromList(
	{
		ctor: '::',
		_0: 'finally',
		_1: {
			ctor: '::',
			_0: 'is',
			_1: {
				ctor: '::',
				_0: 'return',
				_1: {
					ctor: '::',
					_0: 'continue',
					_1: {
						ctor: '::',
						_0: 'for',
						_1: {
							ctor: '::',
							_0: 'lambda',
							_1: {
								ctor: '::',
								_0: 'try',
								_1: {
									ctor: '::',
									_0: 'from',
									_1: {
										ctor: '::',
										_0: 'nonlocal',
										_1: {
											ctor: '::',
											_0: 'while',
											_1: {
												ctor: '::',
												_0: 'and',
												_1: {
													ctor: '::',
													_0: 'del',
													_1: {
														ctor: '::',
														_0: 'global',
														_1: {
															ctor: '::',
															_0: 'not',
															_1: {
																ctor: '::',
																_0: 'with',
																_1: {
																	ctor: '::',
																	_0: 'as',
																	_1: {
																		ctor: '::',
																		_0: 'elif',
																		_1: {
																			ctor: '::',
																			_0: 'if',
																			_1: {
																				ctor: '::',
																				_0: 'or',
																				_1: {
																					ctor: '::',
																					_0: 'yield',
																					_1: {
																						ctor: '::',
																						_0: 'assert',
																						_1: {
																							ctor: '::',
																							_0: 'else',
																							_1: {
																								ctor: '::',
																								_0: 'import',
																								_1: {
																									ctor: '::',
																									_0: 'pass',
																									_1: {
																										ctor: '::',
																										_0: 'break',
																										_1: {
																											ctor: '::',
																											_0: 'except',
																											_1: {
																												ctor: '::',
																												_0: 'in',
																												_1: {
																													ctor: '::',
																													_0: 'raise',
																													_1: {ctor: '[]'}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isKeyword = function (str) {
	return A2(_elm_lang$core$Set$member, str, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$keywordSet);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$spaces = A2(
	_elm_tools$parser$Parser$ignore,
	_elm_tools$parser$Parser$zeroOrMore,
	function (c) {
		return _elm_lang$core$Native_Utils.eq(
			c,
			_elm_lang$core$Native_Utils.chr(' '));
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isIdentifierNameChar = function (c) {
	return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isPunctuation(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isStringLiteralChar(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isCommentChar(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isWhitespace(c))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$Param = {ctor: 'Param'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$argLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$whitespaceOrComment,
		_1: {
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$map,
				function (_p5) {
					return _elm_lang$core$List$singleton(
						A2(
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$Param),
							_p5));
				},
				A2(
					_elm_tools$parser$Parser$keep,
					_elm_tools$parser$Parser$oneOrMore,
					function (c) {
						return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isCommentChar(c) || (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isWhitespace(c) || (_elm_lang$core$Native_Utils.eq(
							c,
							_elm_lang$core$Native_Utils.chr(',')) || _elm_lang$core$Native_Utils.eq(
							c,
							_elm_lang$core$Native_Utils.chr(')')))));
					})),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					function (_p6) {
						return _elm_lang$core$List$singleton(
							A2(
								F2(
									function (v0, v1) {
										return {ctor: '_Tuple2', _0: v0, _1: v1};
									}),
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal,
								_p6));
					},
					A2(
						_elm_tools$parser$Parser$keep,
						_elm_tools$parser$Parser$oneOrMore,
						function (c) {
							return _elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr('/')) || _elm_lang$core$Native_Utils.eq(
								c,
								_elm_lang$core$Native_Utils.chr(','));
						})),
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$LiteralKeyword = {ctor: 'LiteralKeyword'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$Function = {ctor: 'Function'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$functionDeclarationLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$whitespaceOrComment,
		_1: {
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$map,
				function (_p7) {
					return _elm_lang$core$List$singleton(
						A2(
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$Function),
							_p7));
				},
				A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isIdentifierNameChar)),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$andThen,
					function (_p8) {
						return A2(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$consThenRevConcat,
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: '('},
								_1: {ctor: '[]'}
							},
							A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$argLoop));
					},
					_elm_tools$parser$Parser$symbol('(')),
				_1: {ctor: '[]'}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$classDeclarationLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$whitespaceOrComment,
		_1: {
			ctor: '::',
			_0: A2(
				_elm_tools$parser$Parser$map,
				function (_p9) {
					return _elm_lang$core$List$singleton(
						A2(
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$Function),
							_p9));
				},
				A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isIdentifierNameChar)),
			_1: {ctor: '[]'}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$FunctionEval = {ctor: 'FunctionEval'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$functionEvalLoop = F2(
	function (identifier, revTokens) {
		return _elm_tools$parser$Parser$oneOf(
			{
				ctor: '::',
				_0: A3(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$addThen,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$functionEvalLoop(identifier),
					revTokens,
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$whitespaceOrComment),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$andThen,
						function (n) {
							return _elm_tools$parser$Parser$succeed(
								A2(
									_elm_lang$core$Basics_ops['++'],
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: '('},
										_1: revTokens
									},
									{
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$FunctionEval),
											_1: identifier
										},
										_1: {ctor: '[]'}
									}));
						},
						_elm_tools$parser$Parser$symbol('(')),
					_1: {
						ctor: '::',
						_0: _elm_tools$parser$Parser$succeed(
							A2(
								_elm_lang$core$Basics_ops['++'],
								revTokens,
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$Normal, _1: identifier},
									_1: {ctor: '[]'}
								})),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$DeclarationKeyword = {ctor: 'DeclarationKeyword'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$Keyword = {ctor: 'Keyword'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$keywordParser = function (n) {
	return _elm_lang$core$Native_Utils.eq(n, 'def') ? A2(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$consThenRevConcat,
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$DeclarationKeyword),
				_1: n
			},
			_1: {ctor: '[]'}
		},
		A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$functionDeclarationLoop)) : (_elm_lang$core$Native_Utils.eq(n, 'class') ? A2(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$consThenRevConcat,
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$DeclarationKeyword),
				_1: n
			},
			_1: {ctor: '[]'}
		},
		A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$classDeclarationLoop)) : (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isKeyword(n) ? _elm_tools$parser$Parser$succeed(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$Keyword),
				_1: n
			},
			_1: {ctor: '[]'}
		}) : (_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isLiteralKeyword(n) ? _elm_tools$parser$Parser$succeed(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$LiteralKeyword),
				_1: n
			},
			_1: {ctor: '[]'}
		}) : A2(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$functionEvalLoop,
		n,
		{ctor: '[]'}))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$operatorChar = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$Keyword)),
	A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isOperatorChar));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$String = {ctor: 'String'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$quoteDelimiter = {
	start: '\'',
	end: '\'',
	isNestable: false,
	defaultMap: F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$String)),
	innerParsers: {
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$lineBreak,
		_1: {ctor: '[]'}
	},
	isNotRelevant: function (c) {
		return !(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isLineBreak(c) || _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$isEscapable(c));
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$quote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$quoteDelimiter);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$doubleQuote = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$delimited(
	_elm_lang$core$Native_Utils.update(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$quoteDelimiter,
		{start: '\"', end: '\"'}));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$stringLiteral = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$quote,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$doubleQuote,
			_1: {ctor: '[]'}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$Number = {ctor: 'Number'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$number = A2(
	_elm_tools$parser$Parser$map,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		})(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Type$C(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$Number)),
	_elm_tools$parser$Parser$source(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Helpers$number));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$mainLoop = _elm_tools$parser$Parser$oneOf(
	{
		ctor: '::',
		_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$whitespaceOrComment,
		_1: {
			ctor: '::',
			_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$stringLiteral,
			_1: {
				ctor: '::',
				_0: A2(
					_elm_tools$parser$Parser$map,
					_elm_lang$core$List$singleton,
					_elm_tools$parser$Parser$oneOf(
						{
							ctor: '::',
							_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$operatorChar,
							_1: {
								ctor: '::',
								_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$groupChar,
								_1: {
									ctor: '::',
									_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$number,
									_1: {ctor: '[]'}
								}
							}
						})),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_tools$parser$Parser$andThen,
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$keywordParser,
						A2(_elm_tools$parser$Parser$keep, _elm_tools$parser$Parser$oneOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$isIdentifierNameChar)),
					_1: {ctor: '[]'}
				}
			}
		}
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$toRevTokens = _elm_tools$parser$Parser$run(
	A2(
		_elm_tools$parser$Parser$map,
		function (_p10) {
			return _elm_lang$core$List$concat(
				_elm_lang$core$List$reverse(_p10));
		},
		A2(_elm_tools$parser$Parser$repeat, _elm_tools$parser$Parser$zeroOrMore, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$mainLoop)));
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$toLines = function (_p11) {
	return A2(
		_elm_lang$core$Result$map,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line_Helpers$toLines(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$syntaxToStyle),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$toRevTokens(_p11));
};

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$syntaxToSelector = function (syntax) {
	var _p0 = syntax;
	switch (_p0.ctor) {
		case 'Elm':
			return _elm_lang$core$Tuple$second(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$syntaxToStyle(_p0._0));
		case 'Xml':
			return _elm_lang$core$Tuple$second(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$syntaxToStyle(_p0._0));
		case 'Javascript':
			return _elm_lang$core$Tuple$second(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$syntaxToStyle(_p0._0));
		case 'Css':
			return _elm_lang$core$Tuple$second(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$syntaxToStyle(_p0._0));
		default:
			return _elm_lang$core$Tuple$second(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$syntaxToStyle(_p0._0));
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$syntaxesToSelectors = function (syntaxes) {
	return _elm_lang$core$String$concat(
		A2(
			_elm_lang$core$List$intersperse,
			', ',
			A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$Basics_ops['++'], x, y);
					})('.elmsh-'),
				A2(_elm_lang$core$List$map, _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$syntaxToSelector, syntaxes))));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$toCss = function (_p1) {
	var _p2 = _p1;
	var _p3 = _p2.requiredStyles;
	return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$toCss(
		A2(
			_elm_lang$core$Basics_ops['++'],
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: '.elmsh', _1: _p3.$default},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: '.elmsh-hl', _1: _p3.highlight},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: '.elmsh-add', _1: _p3.addition},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: '.elmsh-del', _1: _p3.deletion},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: '.elmsh-comm', _1: _p3.comment},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: '.elmsh1', _1: _p3.style1},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: '.elmsh2', _1: _p3.style2},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: '.elmsh3', _1: _p3.style3},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: '.elmsh4', _1: _p3.style4},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: '.elmsh5', _1: _p3.style5},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: '.elmsh6', _1: _p3.style6},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: '.elmsh7', _1: _p3.style7},
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$mapFirst(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$syntaxesToSelectors),
				_p2.customStyles)));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$Theme = F2(
	function (a, b) {
		return {requiredStyles: a, customStyles: b};
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$Python = function (a) {
	return {ctor: 'Python', _0: a};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$Css = function (a) {
	return {ctor: 'Css', _0: a};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$Javascript = function (a) {
	return {ctor: 'Javascript', _0: a};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$Xml = function (a) {
	return {ctor: 'Xml', _0: a};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$Elm = function (a) {
	return {ctor: 'Elm', _0: a};
};

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Monokai$requiredStyles = {
	$default: A2(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$noEmphasis,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#f8f8f2'),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#23241f')),
	highlight: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$backgroundColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#343434')),
	addition: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$backgroundColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#003800')),
	deletion: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$backgroundColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#380000')),
	comment: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#75715e')),
	style1: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#ae81ff')),
	style2: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#e6db74')),
	style3: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#f92672')),
	style4: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#66d9ef')),
	style5: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#a6e22e')),
	style6: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#ae81ff')),
	style7: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#fd971f'))
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Monokai$theme = {
	requiredStyles: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Monokai$requiredStyles,
	customStyles: {
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: {
				ctor: '::',
				_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$Elm(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$TypeSignature),
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$Javascript(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$DeclarationKeyword),
					_1: {
						ctor: '::',
						_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$Css(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Property),
						_1: {ctor: '[]'}
					}
				}
			},
			_1: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$italic(
				_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#66d9ef')))
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: {
					ctor: '::',
					_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$Javascript(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$ClassExtends),
					_1: {ctor: '[]'}
				},
				_1: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$italic(
					_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#a6e22e')))
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: {
						ctor: '::',
						_0: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$Css(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$AtRule(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$Identifier)),
						_1: {ctor: '[]'}
					},
					_1: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$bold(
						_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
							_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#f92672')))
				},
				_1: {ctor: '[]'}
			}
		}
	}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Monokai$css = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$toCss(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Monokai$theme);

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_GitHub$requiredStyles = {
	$default: A2(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$noEmphasis,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#24292e'),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#ffffff')),
	highlight: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$backgroundColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#fffbdd')),
	addition: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$backgroundColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#eaffea')),
	deletion: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$backgroundColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#ffecec')),
	comment: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#969896')),
	style1: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#005cc5')),
	style2: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#df5000')),
	style3: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#d73a49')),
	style4: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#0086b3')),
	style5: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#63a35c')),
	style6: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#005cc5')),
	style7: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#795da3'))
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_GitHub$theme = {
	requiredStyles: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_GitHub$requiredStyles,
	customStyles: {ctor: '[]'}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_GitHub$css = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$toCss(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_GitHub$theme);

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_OneDark$requiredStyles = {
	$default: A2(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$noEmphasis,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#abb2bf'),
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#282c34')),
	highlight: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$backgroundColor(
		A4(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Rgba, 229, 231, 235, 0.1)),
	addition: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$backgroundColor(
		A4(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Rgba, 40, 124, 82, 0.4)),
	deletion: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$backgroundColor(
		A4(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Rgba, 136, 64, 67, 0.4)),
	comment: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$italic(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
			_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#5c6370'))),
	style1: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#d19a66')),
	style2: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#98c379')),
	style3: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#c678dd')),
	style4: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#c678dd')),
	style5: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#61aeee')),
	style6: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#d19a66')),
	style7: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$textColor(
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Style$Hex('#abb2bf'))
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_OneDark$theme = {
	requiredStyles: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_OneDark$requiredStyles,
	customStyles: {ctor: '[]'}
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_OneDark$css = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Type$toCss(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_OneDark$theme);

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme$oneDark = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_OneDark$css;
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme$gitHub = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_GitHub$css;
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme$monokai = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme_Monokai$css;
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme$all = {
	ctor: '::',
	_0: {ctor: '_Tuple2', _0: 'Monokai', _1: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme$monokai},
	_1: {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'GitHub', _1: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme$gitHub},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'One Dark', _1: _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme$oneDark},
			_1: {ctor: '[]'}
		}
	}
};

var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$useTheme = function (_p0) {
	var _p1 = _p0;
	return A3(
		_elm_lang$html$Html$node,
		'style',
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(_p1._0),
			_1: {ctor: '[]'}
		});
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toConsole = F2(
	function (options, _p2) {
		var _p3 = _p2;
		return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toConsole, options, _p3._0);
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toStaticInlineHtml = function (_p4) {
	var _p5 = _p4;
	return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toStaticInlineHtml(_p5._0);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toStaticBlockHtml = F2(
	function (maybeStart, _p6) {
		var _p7 = _p6;
		return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toStaticBlockHtml, maybeStart, _p7._0);
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toInlineHtml = function (_p8) {
	var _p9 = _p8;
	return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toInlineHtml(_p9._0);
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toBlockHtml = F2(
	function (maybeStart, _p10) {
		var _p11 = _p10;
		return A2(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_View$toBlockHtml, maybeStart, _p11._0);
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$ConsoleOptions = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return {$default: a, highlight: b, addition: c, deletion: d, comment: e, style1: f, style2: g, style3: h, style4: i, style5: j, style6: k, style7: l};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode = function (a) {
	return {ctor: 'HCode', _0: a};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$elm = function (_p12) {
	return A2(
		_elm_lang$core$Result$map,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Elm$toLines(_p12));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$xml = function (_p13) {
	return A2(
		_elm_lang$core$Result$map,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Xml$toLines(_p13));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$javascript = function (_p14) {
	return A2(
		_elm_lang$core$Result$map,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Javascript$toLines(_p14));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$css = function (_p15) {
	return A2(
		_elm_lang$core$Result$map,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Css$toLines(_p15));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$python = function (_p16) {
	return A2(
		_elm_lang$core$Result$map,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode,
		_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Language_Python$toLines(_p16));
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$highlightLines = F4(
	function (maybeHighlight, start, end, _p17) {
		var _p18 = _p17;
		var maybeHighlight_ = function () {
			var _p19 = maybeHighlight;
			if (_p19.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				switch (_p19._0.ctor) {
					case 'Highlight':
						return _elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Normal);
					case 'Add':
						return _elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Add);
					default:
						return _elm_lang$core$Maybe$Just(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$Del);
				}
			}
		}();
		return _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$HCode(
			A4(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Line$highlightLines, maybeHighlight_, start, end, _p18._0));
	});
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme = function (a) {
	return {ctor: 'Theme', _0: a};
};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$monokai = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme$monokai);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$gitHub = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme$gitHub);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$oneDark = _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Theme(_pablohirafuji$elm_syntax_highlight$SyntaxHighlight_Theme$oneDark);
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Del = {ctor: 'Del'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Add = {ctor: 'Add'};
var _pablohirafuji$elm_syntax_highlight$SyntaxHighlight$Highlight = {ctor: 'Highlight'};

var _danielnarey$elm_modular_ui$View_Layout$alertModal = function (model) {
	return _danielnarey$elm_modular_ui$Component_Modal$container(
		{
			content: A2(
				_danielnarey$elm_modular_ui$Ui_Modifier$addList,
				{
					ctor: '::',
					_0: 'is-size-1',
					_1: {
						ctor: '::',
						_0: 'has-text-danger',
						_1: {
							ctor: '::',
							_0: 'has-text-centered',
							_1: {ctor: '[]'}
						}
					}
				},
				A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'p', model.alertText)),
			close: _elm_lang$core$Maybe$Just(_danielnarey$elm_modular_ui$Msg$DismissAlert)
		});
};
var _danielnarey$elm_modular_ui$View_Layout$example = F2(
	function (label, _p0) {
		var _p1 = _p0;
		var _p2 = _p1._0;
		var snippet = A2(
			_danielnarey$elm_modular_ui$Ui_Modifier$add,
			'box',
			A2(
				_danielnarey$elm_modular_ui$Component_Grid$equalColumns,
				'is-half',
				{
					ctor: '::',
					_0: A2(
						_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
						A2(
							_elm_lang$core$Result$withDefault,
							_danielnarey$elm_modular_ui$Ui$render(
								A2(
									_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
									A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'code', _p2),
									_danielnarey$elm_modular_ui$Ui$container('pre'))),
							A2(
								_elm_lang$core$Result$map,
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight$toBlockHtml(_elm_lang$core$Maybe$Nothing),
								_pablohirafuji$elm_syntax_highlight$SyntaxHighlight$elm(_p2))),
						_danielnarey$elm_semantic_dom$Dom_Element$wrapNodes('div')),
					_1: {
						ctor: '::',
						_0: A2(
							_danielnarey$elm_modular_ui$Ui_Modifier$add,
							'has-text-centered',
							A2(
								_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
								_p1._1,
								_danielnarey$elm_modular_ui$Ui$container('div'))),
						_1: {ctor: '[]'}
					}
				}));
		var heading = A2(
			_danielnarey$elm_modular_ui$Ui_Modifier$addList,
			{
				ctor: '::',
				_0: 'is-4',
				_1: {
					ctor: '::',
					_0: 'has-text-dark',
					_1: {ctor: '[]'}
				}
			},
			A2(_danielnarey$elm_modular_ui$Ui_Heading$subtitle, 'h3', label));
		return A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			{
				ctor: '::',
				_0: heading,
				_1: {
					ctor: '::',
					_0: snippet,
					_1: {
						ctor: '::',
						_0: _danielnarey$elm_modular_ui$Ui$leaf('hr'),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _danielnarey$elm_modular_ui$View_Layout$pageHeader = function (model) {
	return _danielnarey$elm_modular_ui$Component_Hero$container(
		{
			title: _danielnarey$elm_modular_ui$Page$title(model.currentPage),
			subtitle: '',
			head: _elm_lang$core$Maybe$Nothing,
			foot: _elm_lang$core$Maybe$Nothing
		});
};

var _danielnarey$elm_semantic_dom$Dom_Node$container = _elm_lang$virtual_dom$VirtualDom$node;
var _danielnarey$elm_semantic_dom$Dom_Node$textWrapper = F3(
	function (htmlTag, attributeList, someText) {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			htmlTag,
			attributeList,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom$text(someText),
				_1: {ctor: '[]'}
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Node$leaf = F2(
	function (htmlTag, attributeList) {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			htmlTag,
			attributeList,
			{ctor: '[]'});
	});

var _danielnarey$elm_semantic_dom$Dom_Text$node = _elm_lang$virtual_dom$VirtualDom$text;

var _danielnarey$elm_modular_ui$Ui_Input$colorPicker = F2(
	function (token, args) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'color-picker',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'color', 'type'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.value, 'value'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Event$capture, token, 'input'),
								_1: {ctor: '[]'}
							}
						}
					},
					_danielnarey$elm_semantic_dom$Dom_Element$leaf('input'))));
	});
var _danielnarey$elm_modular_ui$Ui_Input$floatSlider = F2(
	function (token, args) {
		var failOnErr = function (result) {
			var _p0 = result;
			if (_p0.ctor === 'Ok') {
				return _elm_lang$core$Json_Decode$succeed(
					token(_p0._0));
			} else {
				return _elm_lang$core$Json_Decode$fail('not a Float');
			}
		};
		var captureString = A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'target',
				_1: {
					ctor: '::',
					_0: 'value',
					_1: {ctor: '[]'}
				}
			},
			_elm_lang$core$Json_Decode$string);
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'slider',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'range', 'type'),
						_1: {
							ctor: '::',
							_0: A2(
								_danielnarey$elm_semantic_dom$Dom_Property$string,
								_elm_lang$core$Basics$toString(args.value),
								'value'),
							_1: {
								ctor: '::',
								_0: A2(
									_danielnarey$elm_semantic_dom$Dom_Property$float,
									function (_p1) {
										var _p2 = _p1;
										return _p2._0;
									}(args.minMaxStep),
									'min'),
								_1: {
									ctor: '::',
									_0: A2(
										_danielnarey$elm_semantic_dom$Dom_Property$float,
										function (_p3) {
											var _p4 = _p3;
											return _p4._1;
										}(args.minMaxStep),
										'max'),
									_1: {
										ctor: '::',
										_0: A2(
											_danielnarey$elm_semantic_dom$Dom_Property$float,
											function (_p5) {
												var _p6 = _p5;
												return _p6._2;
											}(args.minMaxStep),
											'step'),
										_1: {
											ctor: '::',
											_0: A2(
												_danielnarey$elm_semantic_dom$Dom_Event$custom,
												A2(
													_elm_lang$core$Json_Decode$andThen,
													function (_p7) {
														return failOnErr(
															_elm_lang$core$String$toFloat(_p7));
													},
													captureString),
												'input'),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					},
					_danielnarey$elm_semantic_dom$Dom_Element$leaf('input'))));
	});
var _danielnarey$elm_modular_ui$Ui_Input$intSlider = F2(
	function (token, args) {
		var failOnErr = function (result) {
			var _p8 = result;
			if (_p8.ctor === 'Ok') {
				return _elm_lang$core$Json_Decode$succeed(
					token(_p8._0));
			} else {
				return _elm_lang$core$Json_Decode$fail('not an Int');
			}
		};
		var captureString = A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'target',
				_1: {
					ctor: '::',
					_0: 'value',
					_1: {ctor: '[]'}
				}
			},
			_elm_lang$core$Json_Decode$string);
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'slider',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'range', 'type'),
						_1: {
							ctor: '::',
							_0: A2(
								_danielnarey$elm_semantic_dom$Dom_Property$string,
								_elm_lang$core$Basics$toString(args.value),
								'value'),
							_1: {
								ctor: '::',
								_0: A2(
									_danielnarey$elm_semantic_dom$Dom_Property$int,
									function (_p9) {
										var _p10 = _p9;
										return _p10._0;
									}(args.minMaxStep),
									'min'),
								_1: {
									ctor: '::',
									_0: A2(
										_danielnarey$elm_semantic_dom$Dom_Property$int,
										function (_p11) {
											var _p12 = _p11;
											return _p12._1;
										}(args.minMaxStep),
										'max'),
									_1: {
										ctor: '::',
										_0: A2(
											_danielnarey$elm_semantic_dom$Dom_Property$int,
											function (_p13) {
												var _p14 = _p13;
												return _p14._2;
											}(args.minMaxStep),
											'step'),
										_1: {
											ctor: '::',
											_0: A2(
												_danielnarey$elm_semantic_dom$Dom_Event$custom,
												A2(
													_elm_lang$core$Json_Decode$andThen,
													function (_p15) {
														return failOnErr(
															_elm_lang$core$String$toInt(_p15));
													},
													captureString),
												'input'),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					},
					_danielnarey$elm_semantic_dom$Dom_Element$leaf('input'))));
	});
var _danielnarey$elm_modular_ui$Ui_Input$custom = F2(
	function (token, args) {
		var nothingOnErr = function (_p16) {
			return _elm_lang$core$Json_Decode$succeed(
				token(
					_elm_lang$core$Result$toMaybe(_p16)));
		};
		var failOnErr = function (result) {
			var _p17 = result;
			if (_p17.ctor === 'Ok') {
				return _elm_lang$core$Json_Decode$succeed(
					token(
						_elm_lang$core$Maybe$Just(_p17._0)));
			} else {
				return _elm_lang$core$Json_Decode$fail('not vaild input');
			}
		};
		var captureString = A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'target',
				_1: {
					ctor: '::',
					_0: 'value',
					_1: {ctor: '[]'}
				}
			},
			_elm_lang$core$Json_Decode$string);
		var displayedValue = A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$andThen,
				function (_p18) {
					return _elm_lang$core$Result$toMaybe(
						args.decoder(_p18));
				},
				args.value));
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'input',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'text', 'type'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, displayedValue, 'value'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.placeholder, 'placeholder'),
								_1: {
									ctor: '::',
									_0: A2(
										_danielnarey$elm_semantic_dom$Dom_Event$custom,
										A2(
											_elm_lang$core$Json_Decode$andThen,
											function (_p19) {
												return failOnErr(
													args.encoder(_p19));
											},
											captureString),
										'input'),
									_1: {
										ctor: '::',
										_0: A2(
											_danielnarey$elm_semantic_dom$Dom_Event$custom,
											A2(
												_elm_lang$core$Json_Decode$andThen,
												function (_p20) {
													return nothingOnErr(
														args.encoder(_p20));
												},
												captureString),
											'change'),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					},
					_danielnarey$elm_semantic_dom$Dom_Element$leaf('input'))));
	});
var _danielnarey$elm_modular_ui$Ui_Input$float = F2(
	function (token, args) {
		var nothingOnErr = function (_p21) {
			return _elm_lang$core$Json_Decode$succeed(
				token(
					_elm_lang$core$Result$toMaybe(_p21)));
		};
		var failOnIncompleteOrInvalid = function (input) {
			var _p22 = _elm_lang$core$Native_Utils.eq(input, '0.');
			if (_p22 === true) {
				return _elm_lang$core$Json_Decode$fail('ends with decimal point');
			} else {
				return function (result) {
					var _p23 = result;
					if (_p23.ctor === 'Ok') {
						return _elm_lang$core$Json_Decode$succeed(
							token(
								_elm_lang$core$Maybe$Just(_p23._0)));
					} else {
						return _elm_lang$core$Json_Decode$fail('not a Float');
					}
				}(
					_elm_lang$core$String$toFloat(input));
			}
		};
		var captureString = A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'target',
				_1: {
					ctor: '::',
					_0: 'value',
					_1: {ctor: '[]'}
				}
			},
			_elm_lang$core$Json_Decode$string);
		var displayedValue = A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(_elm_lang$core$Maybe$map, _elm_lang$core$Basics$toString, args.value));
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'input',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'number', 'type'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, displayedValue, 'value'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.placeholder, 'placeholder'),
								_1: {
									ctor: '::',
									_0: A2(
										_danielnarey$elm_semantic_dom$Dom_Property$float,
										function (_p24) {
											var _p25 = _p24;
											return _p25._0;
										}(args.minMaxStep),
										'min'),
									_1: {
										ctor: '::',
										_0: A2(
											_danielnarey$elm_semantic_dom$Dom_Property$float,
											function (_p26) {
												var _p27 = _p26;
												return _p27._1;
											}(args.minMaxStep),
											'max'),
										_1: {
											ctor: '::',
											_0: A2(
												_danielnarey$elm_semantic_dom$Dom_Property$float,
												function (_p28) {
													var _p29 = _p28;
													return _p29._2;
												}(args.minMaxStep),
												'step'),
											_1: {
												ctor: '::',
												_0: A2(
													_danielnarey$elm_semantic_dom$Dom_Event$custom,
													A2(_elm_lang$core$Json_Decode$andThen, failOnIncompleteOrInvalid, captureString),
													'input'),
												_1: {
													ctor: '::',
													_0: A2(
														_danielnarey$elm_semantic_dom$Dom_Event$custom,
														A2(
															_elm_lang$core$Json_Decode$andThen,
															function (_p30) {
																return nothingOnErr(
																	_elm_lang$core$String$toFloat(_p30));
															},
															captureString),
														'change'),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					},
					_danielnarey$elm_semantic_dom$Dom_Element$leaf('input'))));
	});
var _danielnarey$elm_modular_ui$Ui_Input$int = F2(
	function (token, args) {
		var nothingOnErr = function (_p31) {
			return _elm_lang$core$Json_Decode$succeed(
				token(
					_elm_lang$core$Result$toMaybe(_p31)));
		};
		var failOnErr = function (result) {
			var _p32 = result;
			if (_p32.ctor === 'Ok') {
				return _elm_lang$core$Json_Decode$succeed(
					token(
						_elm_lang$core$Maybe$Just(_p32._0)));
			} else {
				return _elm_lang$core$Json_Decode$fail('not an Int');
			}
		};
		var captureString = A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'target',
				_1: {
					ctor: '::',
					_0: 'value',
					_1: {ctor: '[]'}
				}
			},
			_elm_lang$core$Json_Decode$string);
		var displayedValue = A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(_elm_lang$core$Maybe$map, _elm_lang$core$Basics$toString, args.value));
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'input',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'number', 'type'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, displayedValue, 'value'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.placeholder, 'placeholder'),
								_1: {
									ctor: '::',
									_0: A2(
										_danielnarey$elm_semantic_dom$Dom_Property$int,
										function (_p33) {
											var _p34 = _p33;
											return _p34._0;
										}(args.minMaxStep),
										'min'),
									_1: {
										ctor: '::',
										_0: A2(
											_danielnarey$elm_semantic_dom$Dom_Property$int,
											function (_p35) {
												var _p36 = _p35;
												return _p36._1;
											}(args.minMaxStep),
											'max'),
										_1: {
											ctor: '::',
											_0: A2(
												_danielnarey$elm_semantic_dom$Dom_Property$int,
												function (_p37) {
													var _p38 = _p37;
													return _p38._2;
												}(args.minMaxStep),
												'step'),
											_1: {
												ctor: '::',
												_0: A2(
													_danielnarey$elm_semantic_dom$Dom_Event$custom,
													A2(
														_elm_lang$core$Json_Decode$andThen,
														function (_p39) {
															return failOnErr(
																_elm_lang$core$String$toInt(_p39));
														},
														captureString),
													'input'),
												_1: {
													ctor: '::',
													_0: A2(
														_danielnarey$elm_semantic_dom$Dom_Event$custom,
														A2(
															_elm_lang$core$Json_Decode$andThen,
															function (_p40) {
																return nothingOnErr(
																	_elm_lang$core$String$toInt(_p40));
															},
															captureString),
														'change'),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					},
					_danielnarey$elm_semantic_dom$Dom_Element$leaf('input'))));
	});
var _danielnarey$elm_modular_ui$Ui_Input$labelFor = function (id) {
	return function (_p41) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
			{
				ctor: '::',
				_0: 'label',
				_1: {ctor: '[]'}
			},
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
				{
					ctor: '::',
					_0: A2(
						_danielnarey$elm_semantic_dom$Dom_Attribute$string,
						A2(
							_elm_lang$core$String$append,
							'input-',
							_elm_lang$core$Basics$toString(id)),
						'for'),
					_1: {ctor: '[]'}
				},
				A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, 'label', _p41)));
	};
};
var _danielnarey$elm_modular_ui$Ui_Input$textArea = F2(
	function (token, args) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'textarea',
					_1: {ctor: '[]'}
				},
				function () {
					var _p42 = args.rows;
					if (_p42.ctor === 'Just') {
						return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
							A2(_danielnarey$elm_semantic_dom$Dom_Property$int, _p42._0, 'rows'));
					} else {
						return _elm_lang$core$Basics$identity;
					}
				}()(
					A2(
						_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
						{
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.placeholder, 'placeholder'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.value, 'value'),
								_1: {
									ctor: '::',
									_0: A2(_danielnarey$elm_semantic_dom$Dom_Event$capture, token, 'input'),
									_1: {ctor: '[]'}
								}
							}
						},
						_danielnarey$elm_semantic_dom$Dom_Element$leaf('textarea')))));
	});
var _danielnarey$elm_modular_ui$Ui_Input$string = F2(
	function (token, args) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'input',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'text', 'type'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.placeholder, 'placeholder'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.value, 'value'),
								_1: {
									ctor: '::',
									_0: A2(_danielnarey$elm_semantic_dom$Dom_Event$capture, token, 'input'),
									_1: {ctor: '[]'}
								}
							}
						}
					},
					_danielnarey$elm_semantic_dom$Dom_Element$leaf('input'))));
	});

var _danielnarey$elm_modular_ui$Ui_Selector$dropdown = F2(
	function (token, args) {
		var getNth = F2(
			function (list, n) {
				var _p0 = _elm_lang$core$Native_Utils.cmp(n, 1) < 0;
				if (_p0 === true) {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					return _elm_lang$core$List$head(
						A2(_elm_lang$core$List$drop, n - 1, list));
				}
			});
		var identifiers = A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$second, args.options);
		var selectedDecoder = A2(
			_elm_lang$core$Json_Decode$map,
			function (_p1) {
				return token(
					A2(getNth, identifiers, _p1));
			},
			A2(
				_elm_lang$core$Json_Decode$at,
				{
					ctor: '::',
					_0: 'target',
					_1: {
						ctor: '::',
						_0: 'selectedIndex',
						_1: {ctor: '[]'}
					}
				},
				_elm_lang$core$Json_Decode$int));
		var toOption = function (_p2) {
			var _p3 = _p2;
			return A3(
				_danielnarey$elm_semantic_dom$Dom_Node$textWrapper,
				'option',
				{
					ctor: '::',
					_0: A2(
						_danielnarey$elm_semantic_dom$Dom_Property$bool,
						_elm_lang$core$Native_Utils.eq(
							args.selected,
							_elm_lang$core$Maybe$Just(_p3._1)),
						'selected'),
					_1: {ctor: '[]'}
				},
				_p3._0);
		};
		var placeholder = A3(
			_danielnarey$elm_semantic_dom$Dom_Node$textWrapper,
			'option',
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$bool, true, 'disabled'),
				_1: {
					ctor: '::',
					_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$bool, true, 'selected'),
					_1: {ctor: '[]'}
				}
			},
			args.placeholder);
		var inputId = A2(
			_elm_lang$core$String$append,
			'input-',
			_elm_lang$core$Basics$toString(args.id));
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(_elm_lang$core$String$append, 'label-', inputId),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'select',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$wrapNodes,
					'div',
					{
						ctor: '::',
						_0: A3(
							_danielnarey$elm_semantic_dom$Dom_Node$container,
							'select',
							{
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Event$custom, selectedDecoder, 'change'),
								_1: {
									ctor: '::',
									_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, inputId, 'id'),
									_1: {ctor: '[]'}
								}
							},
							A2(
								F2(
									function (x, y) {
										return {ctor: '::', _0: x, _1: y};
									}),
								placeholder,
								A2(_elm_lang$core$List$map, toOption, args.options))),
						_1: {ctor: '[]'}
					})));
	});
var _danielnarey$elm_modular_ui$Ui_Selector$radioButtons = F2(
	function (token, args) {
		var groupId = A2(
			_elm_lang$core$String$append,
			'input-',
			A3(
				_elm_lang$core$Basics$flip,
				_elm_lang$core$String$append,
				'-',
				_elm_lang$core$Basics$toString(args.id)));
		var toButton = F2(
			function (index, _p4) {
				var _p5 = _p4;
				var _p6 = _p5._1;
				return A2(
					_danielnarey$elm_semantic_dom$Dom_Element$setId,
					A2(
						_elm_lang$core$String$append,
						'label-',
						A2(
							_elm_lang$core$String$append,
							groupId,
							_elm_lang$core$Basics$toString(index))),
					A2(
						_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
						{
							ctor: '::',
							_0: 'radio',
							_1: {ctor: '[]'}
						},
						A2(
							_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
							{
								ctor: '::',
								_0: A2(
									_danielnarey$elm_semantic_dom$Dom_Property$string,
									A2(
										_elm_lang$core$String$append,
										groupId,
										_elm_lang$core$Basics$toString(index)),
									'for'),
								_1: {ctor: '[]'}
							},
							A2(
								_danielnarey$elm_semantic_dom$Dom_Element$wrapNodes,
								'label',
								{
									ctor: '::',
									_0: A2(
										_danielnarey$elm_semantic_dom$Dom_Node$leaf,
										'input',
										{
											ctor: '::',
											_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'radio', 'type'),
											_1: {
												ctor: '::',
												_0: A2(
													_danielnarey$elm_semantic_dom$Dom_Property$bool,
													_elm_lang$core$Native_Utils.eq(args.selected, _p6),
													'checked'),
												_1: {
													ctor: '::',
													_0: A2(
														_danielnarey$elm_semantic_dom$Dom_Event$action,
														token(_p6),
														'click'),
													_1: {
														ctor: '::',
														_0: A2(
															_danielnarey$elm_semantic_dom$Dom_Property$string,
															A2(
																_elm_lang$core$String$append,
																groupId,
																_elm_lang$core$Basics$toString(index)),
															'id'),
														_1: {ctor: '[]'}
													}
												}
											}
										}),
									_1: {
										ctor: '::',
										_0: _danielnarey$elm_semantic_dom$Dom_Text$node(
											A2(_elm_lang$core$String$append, ' ', _p5._0)),
										_1: {ctor: '[]'}
									}
								}))));
			});
		return A2(_elm_lang$core$List$indexedMap, toButton, args.options);
	});
var _danielnarey$elm_modular_ui$Ui_Selector$checkbox = F2(
	function (msg, args) {
		var inputId = A2(
			_elm_lang$core$String$append,
			'input-',
			_elm_lang$core$Basics$toString(args.id));
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(_elm_lang$core$String$append, 'label-', inputId),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'checkbox',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, inputId, 'for'),
						_1: {ctor: '[]'}
					},
					A2(
						_danielnarey$elm_semantic_dom$Dom_Element$wrapNodes,
						'label',
						{
							ctor: '::',
							_0: A2(
								_danielnarey$elm_semantic_dom$Dom_Node$leaf,
								'input',
								{
									ctor: '::',
									_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'checkbox', 'type'),
									_1: {
										ctor: '::',
										_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$bool, args.checked, 'checked'),
										_1: {
											ctor: '::',
											_0: A2(_danielnarey$elm_semantic_dom$Dom_Event$action, msg, 'click'),
											_1: {
												ctor: '::',
												_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, inputId, 'id'),
												_1: {ctor: '[]'}
											}
										}
									}
								}),
							_1: {
								ctor: '::',
								_0: _danielnarey$elm_semantic_dom$Dom_Text$node(
									A2(_elm_lang$core$String$append, ' ', args.label)),
								_1: {ctor: '[]'}
							}
						}))));
	});

var _danielnarey$elm_modular_ui$Ui_Indicator$withDelete = F2(
	function (msg, indicator) {
		var internalText = _danielnarey$elm_semantic_dom$Dom_Text$node(indicator.text);
		var label = A2(_danielnarey$elm_semantic_dom$Dom_Element$hasClass, 'tag', indicator) ? 'Remove tag' : (A2(_danielnarey$elm_semantic_dom$Dom_Element$hasClass, 'notification', indicator) ? 'Dismiss notification' : 'Delete');
		var deleteButton = _danielnarey$elm_semantic_dom$Dom_Element$toNode(
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$addAttribute,
				A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, label, 'aria-label'),
				_danielnarey$elm_modular_ui$Ui_Button$delete(msg)));
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withChildNodes,
			{
				ctor: '::',
				_0: deleteButton,
				_1: {ctor: '::', _0: internalText, _1: indicator.children}
			},
			A2(_danielnarey$elm_semantic_dom$Dom_Element$withText, '', indicator));
	});
var _danielnarey$elm_modular_ui$Ui_Indicator$progress = function (currentValue) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
		{
			ctor: '::',
			_0: A2(
				_danielnarey$elm_semantic_dom$Dom_Property$int,
				A3(_elm_lang$core$Basics$clamp, 0, 100, currentValue),
				'value'),
			_1: {
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$int, 100, 'max'),
				_1: {ctor: '[]'}
			}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
			{
				ctor: '::',
				_0: 'progress',
				_1: {ctor: '[]'}
			},
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$textWrapper,
				'progress',
				A3(
					_elm_lang$core$Basics$flip,
					_elm_lang$core$String$append,
					'%',
					_elm_lang$core$Basics$toString(currentValue)))));
};
var _danielnarey$elm_modular_ui$Ui_Indicator$notification = function (_p0) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'notification',
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'alert', 'role'),
				_1: {ctor: '[]'}
			},
			A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, 'div', _p0)));
};
var _danielnarey$elm_modular_ui$Ui_Indicator$tag = function (_p1) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'tag',
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'note', 'role'),
				_1: {ctor: '[]'}
			},
			A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, 'span', _p1)));
};

var _danielnarey$elm_modular_ui$View_Interactive$indicators = function (model) {
	var progressElement = A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		A2(
			_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
			_danielnarey$elm_modular_ui$Ui_Indicator$progress(65),
			_danielnarey$elm_modular_ui$Ui$container('div')),
		_danielnarey$elm_modular_ui$Component_Grid$equalColumns('is-7'));
	var progressCode = '65\n  |> Ui.Indicator.progress';
	var notificationElement = A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		A2(
			_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
			A2(
				_danielnarey$elm_modular_ui$Ui_Modifier$conditional,
				{ctor: '_Tuple2', _0: 'is-invisible', _1: model.notificationIsHidden},
				A2(
					_danielnarey$elm_modular_ui$Ui_Indicator$withDelete,
					_danielnarey$elm_modular_ui$Msg$HideNotification,
					_danielnarey$elm_modular_ui$Ui_Indicator$notification('You are awesome.'))),
			_danielnarey$elm_modular_ui$Ui$container('div')),
		_danielnarey$elm_modular_ui$Component_Grid$equalColumns('is-7'));
	var notificationCode = '\"You are awesome.\"\n  |> Ui.Indicator.notification\n  |> Ui.Indicator.withDelete Msg.HideNotification';
	var tagElement = _danielnarey$elm_modular_ui$Ui_Indicator$tag('2.7.1');
	var tagCode = '\"2.7.1\"\n  |> Ui.Indicator.tag';
	return A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		_danielnarey$elm_modular_ui$Component_Layout$container(
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$View_Layout$example,
					'Tag',
					{ctor: '_Tuple2', _0: tagCode, _1: tagElement}),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$View_Layout$example,
						'Notification',
						{ctor: '_Tuple2', _0: notificationCode, _1: notificationElement}),
					_1: {
						ctor: '::',
						_0: A2(
							_danielnarey$elm_modular_ui$View_Layout$example,
							'Progress Bar',
							{ctor: '_Tuple2', _0: progressCode, _1: progressElement}),
						_1: {ctor: '[]'}
					}
				}
			}),
		_danielnarey$elm_modular_ui$Component_Layout$section);
};
var _danielnarey$elm_modular_ui$View_Interactive$selectors = function (model) {
	var dropdownElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-multiline',
		A2(
			_danielnarey$elm_modular_ui$Component_Grid$equalColumns,
			'is-7',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
					A2(
						_danielnarey$elm_modular_ui$Ui_Selector$dropdown,
						_danielnarey$elm_modular_ui$Msg$UpdateShippingDestination,
						{
							id: 11,
							placeholder: 'Select shipping destination',
							options: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'United States', _1: _danielnarey$elm_modular_ui$Option$UnitedStates},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'Canada', _1: _danielnarey$elm_modular_ui$Option$Canada},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'Global', _1: _danielnarey$elm_modular_ui$Option$Global},
										_1: {ctor: '[]'}
									}
								}
							},
							selected: model.shippingDestination
						}),
					_danielnarey$elm_modular_ui$Ui$container('div')),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
						A2(
							_danielnarey$elm_modular_ui$Ui$textWrapper,
							'code',
							_elm_lang$core$Basics$toString(model.shippingDestination)),
						_danielnarey$elm_modular_ui$Ui$container('div')),
					_1: {ctor: '[]'}
				}
			}));
	var dropdownCode = '{ id = 11\n, placeholder = \"Select shipping destination\"\n, options =\n  [ (\"United States\", Option.UnitedStates)\n  , (\"Canada\", Option.Canada)\n  , (\"Global\", Option.Global)\n  ]\n\n, selected = model.shippingDestination\n}\n  |> Ui.Selector.dropdown Msg.UpdateShippingDestination';
	var radioButtonsElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-multiline',
		A2(
			_danielnarey$elm_modular_ui$Component_Grid$equalColumns,
			'is-12',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui$container,
					'div',
					A2(
						_danielnarey$elm_modular_ui$Ui_Selector$radioButtons,
						_danielnarey$elm_modular_ui$Msg$UpdateEmailFrequency,
						{
							id: 10,
							options: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'Every day', _1: _danielnarey$elm_modular_ui$Option$Daily},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'Every week', _1: _danielnarey$elm_modular_ui$Option$Weekly},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'Every month', _1: _danielnarey$elm_modular_ui$Option$Monthly},
										_1: {ctor: '[]'}
									}
								}
							},
							selected: model.emailFrequency
						})),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
						A2(
							_danielnarey$elm_modular_ui$Ui$textWrapper,
							'code',
							_elm_lang$core$Basics$toString(model.emailFrequency)),
						_danielnarey$elm_modular_ui$Ui$container('div')),
					_1: {ctor: '[]'}
				}
			}));
	var radioButtonsCode = '{ id = 10\n, options =\n  [ (\"Every day\", Option.Daily)\n  , (\"Every week\", Option.Weekly)\n  , (\"Every month\", Option.Monthly)\n  ]\n\n, selected = model.emailFrequency\n}\n  |> Ui.Selector.radioButtons Msg.UpdateEmailFrequency';
	var checkboxElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-multiline',
		A2(
			_danielnarey$elm_modular_ui$Component_Grid$equalColumns,
			'is-7',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui_Selector$checkbox,
					_danielnarey$elm_modular_ui$Msg$ToggleUserAgrees,
					{id: 9, label: 'I agree to the terms and conditions', checked: model.userAgrees}),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
						A2(
							_danielnarey$elm_modular_ui$Ui$textWrapper,
							'code',
							_elm_lang$core$Basics$toString(model.userAgrees)),
						_danielnarey$elm_modular_ui$Ui$container('div')),
					_1: {ctor: '[]'}
				}
			}));
	var checkboxCode = '{ id = 9\n, label = \"I agree to the terms and conditions\"\n, checked = model.userAgrees\n}\n  |> Ui.Selector.checkbox Msg.ToggleUserAgrees';
	return A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		_danielnarey$elm_modular_ui$Component_Layout$container(
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$View_Layout$example,
					'Checkbox',
					{ctor: '_Tuple2', _0: checkboxCode, _1: checkboxElement}),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$View_Layout$example,
						'Radio Buttons',
						{ctor: '_Tuple2', _0: radioButtonsCode, _1: radioButtonsElement}),
					_1: {
						ctor: '::',
						_0: A2(
							_danielnarey$elm_modular_ui$View_Layout$example,
							'Select Dropdown',
							{ctor: '_Tuple2', _0: dropdownCode, _1: dropdownElement}),
						_1: {ctor: '[]'}
					}
				}
			}),
		_danielnarey$elm_modular_ui$Component_Layout$section);
};
var _danielnarey$elm_modular_ui$View_Interactive$input = function (model) {
	var colorPickerElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-multiline',
		A2(
			_danielnarey$elm_modular_ui$Component_Grid$equalColumns,
			'is-7',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
					A2(
						_danielnarey$elm_modular_ui$Ui_Input$colorPicker,
						_danielnarey$elm_modular_ui$Msg$UpdateTextColor,
						{id: 8, value: model.textColor}),
					_danielnarey$elm_modular_ui$Ui$container('div')),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
						A2(
							_danielnarey$elm_modular_ui$Ui$textWrapper,
							'code',
							_elm_lang$core$Basics$toString(model.textColor)),
						_danielnarey$elm_modular_ui$Ui$container('div')),
					_1: {ctor: '[]'}
				}
			}));
	var colorPickerCode = '{ id = 8\n, value = model.textColor\n}\n  |> Ui.Input.colorPicker Msg.UpdateTextColor';
	var floatSliderElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-multiline',
		A2(
			_danielnarey$elm_modular_ui$Component_Grid$equalColumns,
			'is-7',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
					A2(
						_danielnarey$elm_modular_ui$Ui_Input$floatSlider,
						_danielnarey$elm_modular_ui$Msg$AdjustBrightness,
						{
							id: 7,
							value: model.brightness,
							minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 1, _2: 1.0e-2}
						}),
					_danielnarey$elm_modular_ui$Ui$container('div')),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
						A2(
							_danielnarey$elm_modular_ui$Ui$textWrapper,
							'code',
							_elm_lang$core$Basics$toString(model.brightness)),
						_danielnarey$elm_modular_ui$Ui$container('div')),
					_1: {ctor: '[]'}
				}
			}));
	var floatSliderCode = '{ id = 7\n, value = model.brightness\n, minMaxStep = (0, 1, 0.01)\n}\n  |> Ui.Input.floatSlider Msg.AdjustBrightness';
	var intSliderElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-multiline',
		A2(
			_danielnarey$elm_modular_ui$Component_Grid$equalColumns,
			'is-7',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
					A2(
						_danielnarey$elm_modular_ui$Ui_Input$intSlider,
						_danielnarey$elm_modular_ui$Msg$UpdateStarRating,
						{
							id: 6,
							value: model.starRating,
							minMaxStep: {ctor: '_Tuple3', _0: 1, _1: 5, _2: 1}
						}),
					_danielnarey$elm_modular_ui$Ui$container('div')),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
						A2(
							_danielnarey$elm_modular_ui$Ui$textWrapper,
							'code',
							_elm_lang$core$Basics$toString(model.starRating)),
						_danielnarey$elm_modular_ui$Ui$container('div')),
					_1: {ctor: '[]'}
				}
			}));
	var intSliderCode = '{ id = 6\n, value = model.starRating\n, minMaxStep = (1, 5, 1)\n}\n  |> Ui.Input.intSlider Msg.UpdateStarRating';
	var customElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-multiline',
		A2(
			_danielnarey$elm_modular_ui$Component_Grid$equalColumns,
			'is-7',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
					A2(
						_danielnarey$elm_modular_ui$Ui_Input$custom,
						_danielnarey$elm_modular_ui$Msg$UpdateBackgroundColor,
						{
							id: 5,
							placeholder: '#FFFFFF',
							value: model.backgroundColor,
							encoder: _danielnarey$elm_color_math$ColorMath_Hex$toColor,
							decoder: function (_p0) {
								return _elm_lang$core$Result$Ok(
									_danielnarey$elm_color_math$ColorMath_Hex$fromColor(_p0));
							}
						}),
					_danielnarey$elm_modular_ui$Ui$container('div')),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
						A2(
							_danielnarey$elm_modular_ui$Ui$textWrapper,
							'code',
							_elm_lang$core$Basics$toString(model.backgroundColor)),
						_danielnarey$elm_modular_ui$Ui$container('div')),
					_1: {ctor: '[]'}
				}
			}));
	var customCode = '{ id = 5\n, placeholder = \"#FFFFFF\"\n, value = model.backgroundColor\n, encoder = ColorMath.Hex.toColor\n, decoder = ColorMath.Hex.fromColor >> Ok\n}\n  |> Ui.Input.custom Msg.UpdateBackgroundColor';
	var floatElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-multiline',
		A2(
			_danielnarey$elm_modular_ui$Component_Grid$equalColumns,
			'is-7',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
					A2(
						_danielnarey$elm_modular_ui$Ui_Input$float,
						_danielnarey$elm_modular_ui$Msg$UpdatePackageWeight,
						{
							id: 4,
							placeholder: '',
							value: model.packageWeight,
							minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 25, _2: 0.1}
						}),
					_danielnarey$elm_modular_ui$Ui$container('div')),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
						A2(
							_danielnarey$elm_modular_ui$Ui$textWrapper,
							'code',
							_elm_lang$core$Basics$toString(model.packageWeight)),
						_danielnarey$elm_modular_ui$Ui$container('div')),
					_1: {ctor: '[]'}
				}
			}));
	var floatCode = '{ id = 4\n, placeholder = \"\"\n, value = model.packageWeight\n, minMaxStep = (0, 25, 0.01)\n}\n  |> Ui.Input.float Msg.UpdatePackageWeight';
	var intElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-multiline',
		A2(
			_danielnarey$elm_modular_ui$Component_Grid$equalColumns,
			'is-7',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
					A2(
						_danielnarey$elm_modular_ui$Ui_Input$int,
						_danielnarey$elm_modular_ui$Msg$UpdateUserAge,
						{
							id: 3,
							placeholder: '35',
							value: model.userAge,
							minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 117, _2: 1}
						}),
					_danielnarey$elm_modular_ui$Ui$container('div')),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
						A2(
							_danielnarey$elm_modular_ui$Ui$textWrapper,
							'code',
							_elm_lang$core$Basics$toString(model.userAge)),
						_danielnarey$elm_modular_ui$Ui$container('div')),
					_1: {ctor: '[]'}
				}
			}));
	var intCode = '{ id = 3\n, placeholder = \"35\"\n, value = model.userAge\n, minMaxStep = (0, 117, 1)\n}\n  |> Ui.Input.int Msg.UpdateUserAge';
	var textAreaElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-multiline',
		A2(
			_danielnarey$elm_modular_ui$Component_Grid$equalColumns,
			'is-7',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
					A2(
						_danielnarey$elm_modular_ui$Ui_Input$textArea,
						_danielnarey$elm_modular_ui$Msg$UpdateUserBio,
						{
							id: 2,
							placeholder: 'Tell us about yourself.',
							value: model.userBio,
							rows: _elm_lang$core$Maybe$Just(10)
						}),
					_danielnarey$elm_modular_ui$Ui$container('div')),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
						A2(
							_danielnarey$elm_modular_ui$Ui$textWrapper,
							'code',
							_elm_lang$core$Basics$toString(model.userBio)),
						_danielnarey$elm_modular_ui$Ui$container('div')),
					_1: {ctor: '[]'}
				}
			}));
	var textAreaCode = '{ id = 2\n, placeholder = \"Tell us about yourself.\"\n, value = model.userBio\n, rows = Just 10\n}\n  |> Ui.Input.textArea Msg.UpdateUserBio';
	var stringElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-multiline',
		A2(
			_danielnarey$elm_modular_ui$Component_Grid$equalColumns,
			'is-7',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
					A2(
						_danielnarey$elm_modular_ui$Ui_Input$string,
						_danielnarey$elm_modular_ui$Msg$UpdateUserName,
						{id: 1, placeholder: 'first last', value: model.userName}),
					_danielnarey$elm_modular_ui$Ui$container('div')),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
						A2(
							_danielnarey$elm_modular_ui$Ui$textWrapper,
							'code',
							_elm_lang$core$Basics$toString(model.userName)),
						_danielnarey$elm_modular_ui$Ui$container('div')),
					_1: {ctor: '[]'}
				}
			}));
	var stringCode = '{ id = 1\n, placeholder = \"first last\"\n, value = model.userName\n}\n  |> Ui.Input.string Msg.UpdateUserName';
	return A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		_danielnarey$elm_modular_ui$Component_Layout$container(
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$View_Layout$example,
					'String Input',
					{ctor: '_Tuple2', _0: stringCode, _1: stringElement}),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$View_Layout$example,
						'Text Area',
						{ctor: '_Tuple2', _0: textAreaCode, _1: textAreaElement}),
					_1: {
						ctor: '::',
						_0: A2(
							_danielnarey$elm_modular_ui$View_Layout$example,
							'Int Input',
							{ctor: '_Tuple2', _0: intCode, _1: intElement}),
						_1: {
							ctor: '::',
							_0: A2(
								_danielnarey$elm_modular_ui$View_Layout$example,
								'Float Input',
								{ctor: '_Tuple2', _0: floatCode, _1: floatElement}),
							_1: {
								ctor: '::',
								_0: A2(
									_danielnarey$elm_modular_ui$View_Layout$example,
									'Custom Input',
									{ctor: '_Tuple2', _0: customCode, _1: customElement}),
								_1: {
									ctor: '::',
									_0: A2(
										_danielnarey$elm_modular_ui$View_Layout$example,
										'Int Slider',
										{ctor: '_Tuple2', _0: intSliderCode, _1: intSliderElement}),
									_1: {
										ctor: '::',
										_0: A2(
											_danielnarey$elm_modular_ui$View_Layout$example,
											'Float Slider',
											{ctor: '_Tuple2', _0: floatSliderCode, _1: floatSliderElement}),
										_1: {
											ctor: '::',
											_0: A2(
												_danielnarey$elm_modular_ui$View_Layout$example,
												'Color Picker',
												{ctor: '_Tuple2', _0: colorPickerCode, _1: colorPickerElement}),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			}),
		_danielnarey$elm_modular_ui$Component_Layout$section);
};
var _danielnarey$elm_modular_ui$View_Interactive$buttons = function (model) {
	var deleteElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$conditional,
		{ctor: '_Tuple2', _0: 'is-invisible', _1: model.deleteIsHidden},
		_danielnarey$elm_modular_ui$Ui_Button$delete(_danielnarey$elm_modular_ui$Msg$Disappear));
	var deleteCode = 'Ui.Button.delete Msg.Disappear';
	var navigationElement = A2(
		_danielnarey$elm_modular_ui$Ui_Button$navigation,
		_danielnarey$elm_modular_ui$Msg$LoadUrl('http://elm-lang.org'),
		'Elm Website');
	var navigationCode = '\"Elm Website\"\n  |> Ui.Button.navigation\n    ( Msg.LoadUrl \"http://elm-lang.org\" )';
	var actionElement = A2(
		_danielnarey$elm_modular_ui$Ui_Button$action,
		_danielnarey$elm_modular_ui$Msg$Alert('You Clicked!'),
		'Click Here');
	var actionCode = '\"Click Here\"\n  |> Ui.Button.action\n    ( Msg.Alert \"You Clicked!\" )';
	return A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		_danielnarey$elm_modular_ui$Component_Layout$container(
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$View_Layout$example,
					'Action Button',
					{ctor: '_Tuple2', _0: actionCode, _1: actionElement}),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$View_Layout$example,
						'Navigation Button',
						{ctor: '_Tuple2', _0: navigationCode, _1: navigationElement}),
					_1: {
						ctor: '::',
						_0: A2(
							_danielnarey$elm_modular_ui$View_Layout$example,
							'Delete Button',
							{ctor: '_Tuple2', _0: deleteCode, _1: deleteElement}),
						_1: {ctor: '[]'}
					}
				}
			}),
		_danielnarey$elm_modular_ui$Component_Layout$section);
};

var _danielnarey$elm_modular_ui$Ui_Icon$openIconic = function (args) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'icon',
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'img', 'role'),
				_1: {
					ctor: '::',
					_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, args.altText, 'aria-label'),
					_1: {ctor: '[]'}
				}
			},
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$wrapNodes,
				'span',
				{
					ctor: '::',
					_0: A2(
						_danielnarey$elm_semantic_dom$Dom_Node$leaf,
						'span',
						{
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'oi', 'className'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, args.name, 'data-glyph'),
								_1: {
									ctor: '::',
									_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'true', 'aria-hidden'),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				})));
};
var _danielnarey$elm_modular_ui$Ui_Icon$ionicons = function (args) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'icon',
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'img', 'role'),
				_1: {
					ctor: '::',
					_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, args.altText, 'aria-label'),
					_1: {ctor: '[]'}
				}
			},
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$wrapNodes,
				'span',
				{
					ctor: '::',
					_0: A2(
						_danielnarey$elm_semantic_dom$Dom_Node$leaf,
						'i',
						{
							ctor: '::',
							_0: A2(
								_danielnarey$elm_semantic_dom$Dom_Property$string,
								A2(_elm_lang$core$Basics_ops['++'], 'ion-', args.name),
								'className'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'true', 'aria-hidden'),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				})));
};
var _danielnarey$elm_modular_ui$Ui_Icon$material = function (args) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'icon',
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'img', 'role'),
				_1: {
					ctor: '::',
					_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, args.altText, 'aria-label'),
					_1: {ctor: '[]'}
				}
			},
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$wrapNodes,
				'span',
				{
					ctor: '::',
					_0: A3(
						_danielnarey$elm_semantic_dom$Dom_Node$textWrapper,
						'i',
						{
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'material-icons', 'className'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'true', 'aria-hidden'),
								_1: {ctor: '[]'}
							}
						},
						args.name),
					_1: {ctor: '[]'}
				})));
};
var _danielnarey$elm_modular_ui$Ui_Icon$fontAwesome4 = function (args) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'icon',
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'img', 'role'),
				_1: {
					ctor: '::',
					_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, args.altText, 'aria-label'),
					_1: {ctor: '[]'}
				}
			},
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$wrapNodes,
				'span',
				{
					ctor: '::',
					_0: A2(
						_danielnarey$elm_semantic_dom$Dom_Node$leaf,
						'i',
						{
							ctor: '::',
							_0: A2(
								_danielnarey$elm_semantic_dom$Dom_Property$string,
								A2(_elm_lang$core$Basics_ops['++'], 'fa fa-', args.name),
								'className'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'true', 'aria-hidden'),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				})));
};
var _danielnarey$elm_modular_ui$Ui_Icon$svg = function (args) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'icon',
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'img', 'role'),
				_1: {
					ctor: '::',
					_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, args.altText, 'aria-label'),
					_1: {ctor: '[]'}
				}
			},
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$wrapNodes,
				'span',
				{
					ctor: '::',
					_0: A2(
						_danielnarey$elm_semantic_dom$Dom_Node$leaf,
						'img',
						{
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.path, 'src'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'true', 'aria-hidden'),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				})));
};

var _danielnarey$elm_modular_ui$Ui_Media$withCaption = F2(
	function (args, figureElement) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$addAttribute,
			A2(
				_danielnarey$elm_semantic_dom$Dom_Attribute$string,
				A2(
					_elm_lang$core$String$append,
					'caption-',
					_elm_lang$core$Basics$toString(args.id)),
				'aria-labelledby'),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$appendChild,
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(
							_danielnarey$elm_semantic_dom$Dom_Property$string,
							A2(
								_elm_lang$core$String$append,
								'caption-',
								_elm_lang$core$Basics$toString(args.id)),
							'id'),
						_1: {ctor: '[]'}
					},
					A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, 'figcaption', args.text)),
				figureElement));
	});
var _danielnarey$elm_modular_ui$Ui_Media$audio = function (args) {
	var toErrorMessage = function (_p0) {
		var _p1 = _p0;
		return A3(
			_danielnarey$elm_semantic_dom$Dom_Node$textWrapper,
			'p',
			{ctor: '[]'},
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Audio file \'',
					_1: {
						ctor: '::',
						_0: _p1._0,
						_1: {
							ctor: '::',
							_0: '\' cannot be loaded. ',
							_1: {
								ctor: '::',
								_0: 'Verify that your browser is up to date and can play \'',
								_1: {
									ctor: '::',
									_0: _p1._1,
									_1: {
										ctor: '::',
										_0: '\' files.',
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}));
	};
	var toSourceNode = function (_p2) {
		var _p3 = _p2;
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Node$leaf,
			'source',
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, _p3._0, 'src'),
				_1: {
					ctor: '::',
					_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, _p3._1, 'type'),
					_1: {ctor: '[]'}
				}
			});
	};
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'audio',
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$wrapNodes,
			'figure',
			{
				ctor: '::',
				_0: A3(
					_danielnarey$elm_semantic_dom$Dom_Node$container,
					'audio',
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$bool, args.hasControls, 'controls'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'application', 'role'),
							_1: {ctor: '[]'}
						}
					},
					_elm_lang$core$List$concat(
						{
							ctor: '::',
							_0: A2(_elm_lang$core$List$map, toSourceNode, args.sourceList),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$core$List$map, toErrorMessage, args.sourceList),
								_1: {ctor: '[]'}
							}
						})),
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_modular_ui$Ui_Media$video = function (args) {
	var toErrorMessage = function (_p4) {
		var _p5 = _p4;
		return A3(
			_danielnarey$elm_semantic_dom$Dom_Node$textWrapper,
			'p',
			{ctor: '[]'},
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Video file \'',
					_1: {
						ctor: '::',
						_0: _p5._0,
						_1: {
							ctor: '::',
							_0: '\' cannot be loaded. ',
							_1: {
								ctor: '::',
								_0: 'Verify that your browser is up to date and can play \'',
								_1: {
									ctor: '::',
									_0: _p5._1,
									_1: {
										ctor: '::',
										_0: '\' files.',
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}));
	};
	var toSourceNode = function (_p6) {
		var _p7 = _p6;
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Node$leaf,
			'source',
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, _p7._0, 'src'),
				_1: {
					ctor: '::',
					_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, _p7._1, 'type'),
					_1: {ctor: '[]'}
				}
			});
	};
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'video',
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$wrapNodes,
			'figure',
			{
				ctor: '::',
				_0: A3(
					_danielnarey$elm_semantic_dom$Dom_Node$container,
					'video',
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$bool, args.hasControls, 'controls'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'application', 'role'),
							_1: {ctor: '[]'}
						}
					},
					_elm_lang$core$List$concat(
						{
							ctor: '::',
							_0: A2(_elm_lang$core$List$map, toSourceNode, args.sourceList),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$core$List$map, toErrorMessage, args.sourceList),
								_1: {ctor: '[]'}
							}
						})),
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_modular_ui$Ui_Media$svg = function (args) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'svg-object',
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$wrapNodes,
			'figure',
			{
				ctor: '::',
				_0: A3(
					_danielnarey$elm_semantic_dom$Dom_Node$container,
					'object',
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.path, 'data'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'image/svg+xml', 'type'),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: A2(
							_danielnarey$elm_semantic_dom$Dom_Node$leaf,
							'img',
							{
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.fallback, 'src'),
								_1: {
									ctor: '::',
									_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.altText, 'alt'),
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_modular_ui$Ui_Media$image = function (args) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'image',
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$wrapNodes,
			'figure',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_semantic_dom$Dom_Node$leaf,
					'img',
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.path, 'src'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.altText, 'alt'),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			}));
};

var _danielnarey$elm_modular_ui$Ui_Source$embed = function (_p0) {
	var _p1 = _p0;
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'source',
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, _p1._0, 'src'),
				_1: {
					ctor: '::',
					_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, _p1._1, 'type'),
					_1: {
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'application', 'role'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, _p1._2, 'aria-label'),
							_1: {ctor: '[]'}
						}
					}
				}
			},
			_danielnarey$elm_semantic_dom$Dom_Element$leaf('embed')));
};
var _danielnarey$elm_modular_ui$Ui_Source$iframe = function (args) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'source',
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.path, 'src'),
				_1: {
					ctor: '::',
					_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'document', 'role'),
					_1: {
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, args.altText, 'aria-label'),
						_1: {ctor: '[]'}
					}
				}
			},
			_danielnarey$elm_semantic_dom$Dom_Element$leaf('iframe')));
};
var _danielnarey$elm_modular_ui$Ui_Source$object = function (args) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
		{
			ctor: '::',
			_0: 'source',
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.path, 'data'),
				_1: {
					ctor: '::',
					_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.mediaType, 'type'),
					_1: {
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'document', 'role'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, args.altText, 'aria-label'),
							_1: {ctor: '[]'}
						}
					}
				}
			},
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$wrapNodes,
				'object',
				{
					ctor: '::',
					_0: A3(
						_danielnarey$elm_semantic_dom$Dom_Node$container,
						'p',
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _danielnarey$elm_semantic_dom$Dom_Text$node('Click to load in a new window:'),
							_1: {
								ctor: '::',
								_0: A3(
									_danielnarey$elm_semantic_dom$Dom_Node$textWrapper,
									'a',
									{
										ctor: '::',
										_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.path, 'href'),
										_1: {
											ctor: '::',
											_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, '_blank', 'target'),
											_1: {ctor: '[]'}
										}
									},
									args.path),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				})));
};

var _danielnarey$elm_modular_ui$View_Content$source = function () {
	var iframeElement = A2(
		_danielnarey$elm_modular_ui$Ui_Attribute$addList,
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'width',
				_1: _danielnarey$elm_semantic_dom$Dom_Property$string('350')
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'height',
					_1: _danielnarey$elm_semantic_dom$Dom_Property$string('550')
				},
				_1: {ctor: '[]'}
			}
		},
		_danielnarey$elm_modular_ui$Ui_Source$iframe(
			{path: 'http://elm-lang.org', altText: 'The Elm language home page'}));
	var iframeCode = '{ path = \"http://elm-lang.org\"\n, altText = \"The Elm language home page\"\n}\n  |> Ui.Source.iframe';
	var objectElement = A2(
		_danielnarey$elm_modular_ui$Ui_Attribute$addList,
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'width',
				_1: _danielnarey$elm_semantic_dom$Dom_Property$string('350')
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'height',
					_1: _danielnarey$elm_semantic_dom$Dom_Property$string('550')
				},
				_1: {ctor: '[]'}
			}
		},
		_danielnarey$elm_modular_ui$Ui_Source$object(
			{path: 'media/abc-book.pdf', mediaType: 'application/pdf', altText: 'PDF of an antique children\'s ABC book'}));
	var objectCode = '{ path = \"media/abc-book.pdf\"\n, mediaType = \"application/pdf\"\n, altText = \"PDF of an antique children\'s ABC book\"\n}\n  |> Ui.Source.object';
	return A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		_danielnarey$elm_modular_ui$Component_Layout$container(
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$View_Layout$example,
					'Object',
					{ctor: '_Tuple2', _0: objectCode, _1: objectElement}),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$View_Layout$example,
						'iframe',
						{ctor: '_Tuple2', _0: iframeCode, _1: iframeElement}),
					_1: {ctor: '[]'}
				}
			}),
		_danielnarey$elm_modular_ui$Component_Layout$section);
}();
var _danielnarey$elm_modular_ui$View_Content$media = function () {
	var audioElement = _danielnarey$elm_modular_ui$Ui_Media$audio(
		{
			sourceList: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'media/stack-o-lee.mp3', _1: 'audio/mpeg'},
				_1: {ctor: '[]'}
			},
			hasControls: true
		});
	var audioCode = '{ sourceList =\n  [ (\"media/stack-o-lee.mp3\", \"audio/mpeg\") ]\n\n, hasControls = True\n}\n  |> Ui.Media.audio';
	var videoElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-mobile',
		A2(
			_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
			A2(
				_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
				_danielnarey$elm_modular_ui$Ui_Media$video(
					{
						sourceList: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'media/train.mp4', _1: 'video/mp4'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'media/train.ogv', _1: 'video/ogg'},
								_1: {ctor: '[]'}
							}
						},
						hasControls: true
					}),
				_danielnarey$elm_modular_ui$Ui$container('div')),
			_danielnarey$elm_modular_ui$Component_Grid$equalColumns('is-half')));
	var videoCode = '{ sourceList =\n  [ (\"media/train.mp4\", \"video/mp4\")\n  , (\"media/train.ogv\", \"video/ogg\")\n  ]\n\n, hasControls = True\n}\n  |> Ui.Media.video';
	var svgElement = _danielnarey$elm_modular_ui$Ui_Media$svg(
		{path: 'media/cc-by-nc-nd.svg', fallback: 'media/cc-by-nc-nd.png', altText: 'Icon for Creative Commons BY-NC-ND license'});
	var svgCode = '{ path = \"media/cc-by-nc-nd.svg.svg\"\n, fallback = \"media/cc-by-nc-nd.png\"\n, altText = \"Icon for Creative Commons BY-NC-ND license\"\n}\n  |> Ui.Media.svg';
	var imageElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-mobile',
		A2(
			_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
			A2(
				_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
				A2(
					_danielnarey$elm_modular_ui$Ui_Modifier$add,
					'is-3by2',
					_danielnarey$elm_modular_ui$Ui_Media$image(
						{path: 'media/denali.jpg', altText: 'Photo of Denali (a.k.a. Mt. McKinley)'})),
				_danielnarey$elm_modular_ui$Ui$container('div')),
			_danielnarey$elm_modular_ui$Component_Grid$equalColumns('is-half')));
	var imageCode = '{ path = \"media/denali.jpg\"\n, altText = \"Photo of Denali (a.k.a. Mt. McKinley)\"\n}\n  |> Ui.Media.image';
	return A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		_danielnarey$elm_modular_ui$Component_Layout$container(
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$View_Layout$example,
					'Image',
					{ctor: '_Tuple2', _0: imageCode, _1: imageElement}),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$View_Layout$example,
						'SVG',
						{ctor: '_Tuple2', _0: svgCode, _1: svgElement}),
					_1: {
						ctor: '::',
						_0: A2(
							_danielnarey$elm_modular_ui$View_Layout$example,
							'Video',
							{ctor: '_Tuple2', _0: videoCode, _1: videoElement}),
						_1: {
							ctor: '::',
							_0: A2(
								_danielnarey$elm_modular_ui$View_Layout$example,
								'Audio',
								{ctor: '_Tuple2', _0: audioCode, _1: audioElement}),
							_1: {ctor: '[]'}
						}
					}
				}
			}),
		_danielnarey$elm_modular_ui$Component_Layout$section);
}();
var _danielnarey$elm_modular_ui$View_Content$icon = function () {
	var iconicElement = _danielnarey$elm_modular_ui$Ui_Icon$openIconic(
		{name: 'map-marker', altText: 'Your current location'});
	var iconicCode = '{ name = \"map-marker\"\n, altText = \"Your current location\"\n}\n  |> Ui.Icon.openIconic';
	var ionElement = _danielnarey$elm_modular_ui$Ui_Icon$ionicons(
		{name: 'android-bicycle', altText: 'Bicycle route to destination'});
	var ionCode = '{ name = \"android-bicycle\"\n, altText = \"Bicycle route to destination\"\n}\n  |> Ui.Icon.ionicons';
	var materialElement = _danielnarey$elm_modular_ui$Ui_Icon$material(
		{name: 'directions_bike', altText: 'Bicycle route to destination'});
	var materialCode = '{ name = \"directions_bike\"\n, altText = \"Bicycle route to destination\"\n}\n  |> Ui.Icon.material';
	var faElement = _danielnarey$elm_modular_ui$Ui_Icon$fontAwesome4(
		{name: 'bicycle', altText: 'Bicycle route to destination'});
	var faCode = '{ name = \"bicycle\"\n, altText = \"Bicycle route to destination\"\n}\n  |> Ui.Icon.fontAwesome4';
	var svgElement = _danielnarey$elm_modular_ui$Ui_Icon$svg(
		{path: 'icons/bicycle.svg', altText: 'Bicycle route to destination'});
	var svgCode = '{ path = \"icons/bicycle.svg\"\n, altText = \"Bicycle route to destination\"\n}\n  |> Ui.Icon.svg';
	return A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		_danielnarey$elm_modular_ui$Component_Layout$container(
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$View_Layout$example,
					'SVG Icon',
					{ctor: '_Tuple2', _0: svgCode, _1: svgElement}),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$View_Layout$example,
						'Font Awesome 4 Icon',
						{ctor: '_Tuple2', _0: faCode, _1: faElement}),
					_1: {
						ctor: '::',
						_0: A2(
							_danielnarey$elm_modular_ui$View_Layout$example,
							'Material Design Icon',
							{ctor: '_Tuple2', _0: materialCode, _1: materialElement}),
						_1: {
							ctor: '::',
							_0: A2(
								_danielnarey$elm_modular_ui$View_Layout$example,
								'Ionicons Icon',
								{ctor: '_Tuple2', _0: ionCode, _1: ionElement}),
							_1: {
								ctor: '::',
								_0: A2(
									_danielnarey$elm_modular_ui$View_Layout$example,
									'Open Iconic Icon',
									{ctor: '_Tuple2', _0: iconicCode, _1: iconicElement}),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}),
		_danielnarey$elm_modular_ui$Component_Layout$section);
}();
var _danielnarey$elm_modular_ui$View_Content$heading = function () {
	var subtitleElement = A2(_danielnarey$elm_modular_ui$Ui_Heading$subtitle, 'h2', 'A History of the World, 1914–1991');
	var subtitleCode = '\"A History of the World, 1914–1991\"\n  |> Ui.Heading.subtitle \"h2\"';
	var titleElement = A2(_danielnarey$elm_modular_ui$Ui_Heading$title, 'h1', 'The Age of Extremes');
	var titleCode = '\"The Age of Extremes\"\n  |> Ui.Heading.title \"h1\"';
	return A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		_danielnarey$elm_modular_ui$Component_Layout$container(
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$View_Layout$example,
					'Title',
					{ctor: '_Tuple2', _0: titleCode, _1: titleElement}),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$View_Layout$example,
						'Subtitle',
						{ctor: '_Tuple2', _0: subtitleCode, _1: subtitleElement}),
					_1: {ctor: '[]'}
				}
			}),
		_danielnarey$elm_modular_ui$Component_Layout$section);
}();
var _danielnarey$elm_modular_ui$View_Content$text = function () {
	var typographyElement = A2(
		_danielnarey$elm_modular_ui$Ui$container,
		'p',
		{
			ctor: '::',
			_0: _danielnarey$elm_modular_ui$Ui_Text$plain('Helpers to display text as '),
			_1: {
				ctor: '::',
				_0: _danielnarey$elm_modular_ui$Ui_Text$italic('italic, '),
				_1: {
					ctor: '::',
					_0: _danielnarey$elm_modular_ui$Ui_Text$bold('bold, '),
					_1: {
						ctor: '::',
						_0: _danielnarey$elm_modular_ui$Ui_Text$semibold('semibold, '),
						_1: {
							ctor: '::',
							_0: _danielnarey$elm_modular_ui$Ui_Text$light('or light.'),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
	var typographyCode = '[ \"Helpers to display text as \"\n  |> Ui.Text.plain\n\n, \"italic, \"\n  |> Ui.Text.italic\n\n, \"bold, \"\n  |> Ui.Text.bold\n\n, \"semibold, \"\n  |> Ui.Text.semibold\n\n, \"or light.\"\n  |> Ui.Text.light\n\n]\n  |> Ui.container \"p\"';
	var linkElement = A2(
		_danielnarey$elm_modular_ui$Ui_Text$link,
		{ctor: '_Tuple2', _0: 'http://bulma.io', _1: true},
		'Bulma docs');
	var linkCode = '\"Bulma docs\"\n  |> Ui.Text.link (\"http://bulma.io\", True)';
	var plainElement = _danielnarey$elm_modular_ui$Ui_Text$plain('Time to make the donuts!');
	var plainCode = '\"Time to make the donuts!\"\n  |> Ui.Text.plain';
	return A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		_danielnarey$elm_modular_ui$Component_Layout$container(
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$View_Layout$example,
					'Plain Text',
					{ctor: '_Tuple2', _0: plainCode, _1: plainElement}),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$View_Layout$example,
						'Linked Text',
						{ctor: '_Tuple2', _0: linkCode, _1: linkElement}),
					_1: {
						ctor: '::',
						_0: A2(
							_danielnarey$elm_modular_ui$View_Layout$example,
							'Typography Helpers',
							{ctor: '_Tuple2', _0: typographyCode, _1: typographyElement}),
						_1: {ctor: '[]'}
					}
				}
			}),
		_danielnarey$elm_modular_ui$Component_Layout$section);
}();

var _danielnarey$elm_semantic_dom$Dom_Style$toProperty = _elm_lang$virtual_dom$VirtualDom$style;

var _danielnarey$elm_modular_ui$Ui_Style$toRgbaString = function (colorValue) {
	var roundTo2 = function (number) {
		return A3(
			_elm_lang$core$Basics$flip,
			F2(
				function (x, y) {
					return x / y;
				}),
			100,
			_elm_lang$core$Basics$toFloat(
				_elm_lang$core$Basics$round(number * 100)));
	};
	var rgba = _elm_lang$core$Color$toRgb(colorValue);
	return _elm_lang$core$String$concat(
		{
			ctor: '::',
			_0: 'rgba(',
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Basics$toString(rgba.red),
				_1: {
					ctor: '::',
					_0: ',',
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Basics$toString(rgba.green),
						_1: {
							ctor: '::',
							_0: ',',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(rgba.blue),
								_1: {
									ctor: '::',
									_0: ',',
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Basics$toString(
											roundTo2(rgba.alpha)),
										_1: {
											ctor: '::',
											_0: ')',
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			}
		});
};
var _danielnarey$elm_modular_ui$Ui_Style$boxShadow = function (args) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_danielnarey$elm_semantic_dom$Dom_Style$toProperty(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'box-shadow',
					_1: function () {
						var _p0 = args.inset;
						if (_p0 === true) {
							return A2(_elm_lang$core$Basics$flip, _elm_lang$core$String$append, ' inset');
						} else {
							return _elm_lang$core$Basics$identity;
						}
					}()(
						_elm_lang$core$String$concat(
							{
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(
									_elm_lang$core$Tuple$first(args.offset)),
								_1: {
									ctor: '::',
									_0: 'px ',
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Basics$toString(
											_elm_lang$core$Tuple$second(args.offset)),
										_1: {
											ctor: '::',
											_0: 'px ',
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Basics$toString(args.blur),
												_1: {
													ctor: '::',
													_0: 'px ',
													_1: {
														ctor: '::',
														_0: _elm_lang$core$Basics$toString(args.spread),
														_1: {
															ctor: '::',
															_0: 'px ',
															_1: {
																ctor: '::',
																_0: _danielnarey$elm_modular_ui$Ui_Style$toRgbaString(args.color),
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								}
							}))
				},
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_modular_ui$Ui_Style$borderRadius = function (value) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_danielnarey$elm_semantic_dom$Dom_Style$toProperty(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'border-radius',
					_1: A3(
						_elm_lang$core$Basics$flip,
						_elm_lang$core$String$append,
						'px',
						_elm_lang$core$Basics$toString(value))
				},
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_modular_ui$Ui_Style$border = function (_p1) {
	var _p2 = _p1;
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_danielnarey$elm_semantic_dom$Dom_Style$toProperty(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'border',
					_1: _elm_lang$core$String$concat(
						{
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(_p2._0),
							_1: {
								ctor: '::',
								_0: 'px ',
								_1: {
									ctor: '::',
									_0: _p2._1,
									_1: {
										ctor: '::',
										_0: ' ',
										_1: {
											ctor: '::',
											_0: _danielnarey$elm_modular_ui$Ui_Style$toRgbaString(_p2._2),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						})
				},
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_modular_ui$Ui_Style$backgroundColor = function (colorValue) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_danielnarey$elm_semantic_dom$Dom_Style$toProperty(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'background-color',
					_1: _danielnarey$elm_modular_ui$Ui_Style$toRgbaString(colorValue)
				},
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_modular_ui$Ui_Style$color = function (colorValue) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_danielnarey$elm_semantic_dom$Dom_Style$toProperty(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'color',
					_1: _danielnarey$elm_modular_ui$Ui_Style$toRgbaString(colorValue)
				},
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_modular_ui$Ui_Style$addList = function (keyValueList) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_danielnarey$elm_semantic_dom$Dom_Style$toProperty(keyValueList));
};
var _danielnarey$elm_modular_ui$Ui_Style$add = function (keyValue) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_danielnarey$elm_semantic_dom$Dom_Style$toProperty(
			{
				ctor: '::',
				_0: keyValue,
				_1: {ctor: '[]'}
			}));
};

var _danielnarey$elm_modular_ui$View_Customize$style = function () {
	var addListElement = A2(
		_danielnarey$elm_modular_ui$Ui_Style$addList,
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'border', _1: '1px solid #FF3860'},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'box-shadow', _1: '0 0 2px #FF3860'},
				_1: {ctor: '[]'}
			}
		},
		_danielnarey$elm_modular_ui$Ui_Indicator$tag('I\'m stylish too'));
	var addListCode = '\"I\'m stylish too\"\n  |> Ui.Indicator.tag\n  |> Ui.Style.addList\n    [ (\"border\", \"1px solid #FF3860\")\n    , (\"box-shadow\", \"0 0 2px #FF3860\")\n    ]';
	var addElement = A2(
		_danielnarey$elm_modular_ui$Ui_Style$add,
		{ctor: '_Tuple2', _0: 'border', _1: '1px solid #FF3860'},
		_danielnarey$elm_modular_ui$Ui_Indicator$tag('I\'m stylish'));
	var addCode = '\"I\'m stylish\"\n  |> Ui.Indicator.tag\n  |> Ui.Style.add (\"border\", \"1px solid #FF3860\")';
	return A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		_danielnarey$elm_modular_ui$Component_Layout$container(
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$View_Layout$example,
					'Add a Style Declaration',
					{ctor: '_Tuple2', _0: addCode, _1: addElement}),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$View_Layout$example,
						'Add a List of Style Declarations',
						{ctor: '_Tuple2', _0: addListCode, _1: addListElement}),
					_1: {ctor: '[]'}
				}
			}),
		_danielnarey$elm_modular_ui$Component_Layout$section);
}();
var _danielnarey$elm_modular_ui$View_Customize$action = function (model) {
	var addListElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-unselectable',
		A2(
			_danielnarey$elm_modular_ui$Ui_Modifier$conditional,
			{ctor: '_Tuple2', _0: 'is-primary', _1: model.tagIsHovered},
			A2(
				_danielnarey$elm_modular_ui$Ui_Action$addList,
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'mouseover',
						_1: _danielnarey$elm_modular_ui$Msg$Hover(true)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'mouseout',
							_1: _danielnarey$elm_modular_ui$Msg$Hover(false)
						},
						_1: {ctor: '[]'}
					}
				},
				_danielnarey$elm_modular_ui$Ui_Indicator$tag('I\'m interactive too'))));
	var addListCode = '\"I\'m interactive too\"\n  |> Ui.Indicator.tag\n  |> Ui.Action.addList\n    [ ( \"mouseover\", Msg.Hover True)\n    , ( \"mouseout\", Msg.Hover False)\n    ]\n\n  |> Ui.Modifier.conditional\n    ( \"is-primary\", model.tagIsHovered )';
	var addElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-unselectable',
		A2(
			_danielnarey$elm_modular_ui$Ui_Modifier$conditional,
			{ctor: '_Tuple2', _0: 'is-danger', _1: model.tagIsActive},
			A2(
				_danielnarey$elm_modular_ui$Ui_Action$add,
				{ctor: '_Tuple2', _0: 'click', _1: _danielnarey$elm_modular_ui$Msg$ToggleTag},
				_danielnarey$elm_modular_ui$Ui_Indicator$tag('I\'m interactive'))));
	var addCode = '\"I\'m interactive\"\n  |> Ui.Indicator.tag\n  |> Ui.Action.add\n    ( \"click\", Msg.ToggleTag )\n  |> Ui.Modifier.conditional\n    ( \"is-danger\", model.tagIsActive )';
	return A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		_danielnarey$elm_modular_ui$Component_Layout$container(
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$View_Layout$example,
					'Add a User-Action Handler',
					{ctor: '_Tuple2', _0: addCode, _1: addElement}),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$View_Layout$example,
						'Add a List of User-Action Handlers',
						{ctor: '_Tuple2', _0: addListCode, _1: addListElement}),
					_1: {ctor: '[]'}
				}
			}),
		_danielnarey$elm_modular_ui$Component_Layout$section);
};
var _danielnarey$elm_modular_ui$View_Customize$attribute = function () {
	var addListElement = A2(
		_danielnarey$elm_modular_ui$Ui_Attribute$addList,
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'width',
				_1: _danielnarey$elm_semantic_dom$Dom_Property$string('350')
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'height',
					_1: _danielnarey$elm_semantic_dom$Dom_Property$string('250')
				},
				_1: {ctor: '[]'}
			}
		},
		_danielnarey$elm_modular_ui$Ui_Source$iframe(
			{path: 'http://elm-lang.org', altText: 'The Elm language home page'}));
	var addListCode = '{ path = \"http://elm-lang.org\"\n, altText = \"The Elm language home page\"\n}\n  |> Ui.Source.iframe\n  |> Ui.Attribute.addList\n    [ (\"width\", Dom.Property.string \"350\")\n    , (\"height\", Dom.Property.string \"250\")\n    ]';
	var addElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-mobile',
		A2(
			_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
			A2(
				_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
				A2(
					_danielnarey$elm_modular_ui$Ui_Modifier$add,
					'is-3by2',
					A2(
						_danielnarey$elm_modular_ui$Ui_Attribute$add,
						{
							ctor: '_Tuple2',
							_0: 'title',
							_1: _danielnarey$elm_semantic_dom$Dom_Property$string('Denali (a.k.a. Mt. McKinley)')
						},
						_danielnarey$elm_modular_ui$Ui_Media$image(
							{path: 'media/denali.jpg', altText: 'Photo of Denali (a.k.a. Mt. McKinley)'}))),
				_danielnarey$elm_modular_ui$Ui$container('div')),
			_danielnarey$elm_modular_ui$Component_Grid$equalColumns('is-half')));
	var addCode = '{ path = \"media/denali.jpg\"\n, altText = \"Photo of Denali (a.k.a. Mt. McKinley)\"\n}\n  |> Ui.Media.image\n  |> Ui.Attribute.add\n    ( \"title\"\n    , Dom.Property.string \"Denali (a.k.a. Mt. McKinley)\"\n    )';
	return A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		_danielnarey$elm_modular_ui$Component_Layout$container(
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$View_Layout$example,
					'Add an HTML Attribute',
					{ctor: '_Tuple2', _0: addCode, _1: addElement}),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$View_Layout$example,
						'Add a List of HTML Attributes',
						{ctor: '_Tuple2', _0: addListCode, _1: addListElement}),
					_1: {ctor: '[]'}
				}
			}),
		_danielnarey$elm_modular_ui$Component_Layout$section);
}();
var _danielnarey$elm_modular_ui$View_Customize$modifier = function (model) {
	var conditionalElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$conditional,
		{ctor: '_Tuple2', _0: 'is-invisible', _1: model.deleteIsHidden},
		_danielnarey$elm_modular_ui$Ui_Button$delete(_danielnarey$elm_modular_ui$Msg$Disappear));
	var conditionalCode = 'Ui.Button.delete Msg.Disappear\n  |> Ui.Modifier.conditional\n    ( \"is-invisible\", model.deleteIsHidden )';
	var addListElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$addList,
		{
			ctor: '::',
			_0: 'is-link',
			_1: {
				ctor: '::',
				_0: 'is-small',
				_1: {ctor: '[]'}
			}
		},
		A2(
			_danielnarey$elm_modular_ui$Ui_Button$navigation,
			_danielnarey$elm_modular_ui$Msg$LoadUrl('http://elm-lang.org'),
			'Elm Website'));
	var addListCode = '\"Elm Website\"\n  |> Ui.Button.navigation\n    ( Msg.LoadUrl \"http://elm-lang.org\" )\n  |> Ui.Modifier.addList\n    [ \"is-link\"\n    , \"is-small\"\n    ]';
	var addElement = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-danger',
		A2(
			_danielnarey$elm_modular_ui$Ui_Button$action,
			_danielnarey$elm_modular_ui$Msg$Alert('You Clicked!'),
			'Click Here'));
	var addCode = '\"Click Here\"\n  |> Ui.Button.action\n    ( Msg.Alert \"You Clicked!\" )\n  |> Ui.Modifier.add \"is-danger\"';
	return A2(
		_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
		_danielnarey$elm_modular_ui$Component_Layout$container(
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$View_Layout$example,
					'Add a Modifier Class',
					{ctor: '_Tuple2', _0: addCode, _1: addElement}),
				_1: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$View_Layout$example,
						'Add a List of Modifier Classes',
						{ctor: '_Tuple2', _0: addListCode, _1: addListElement}),
					_1: {
						ctor: '::',
						_0: A2(
							_danielnarey$elm_modular_ui$View_Layout$example,
							'Conditionally Add a Modifier',
							{ctor: '_Tuple2', _0: conditionalCode, _1: conditionalElement}),
						_1: {ctor: '[]'}
					}
				}
			}),
		_danielnarey$elm_modular_ui$Component_Layout$section);
};

var _danielnarey$elm_modular_ui$View_Navigation$secondaryTabs = function (model) {
	var options = function () {
		var _p0 = model.currentTab;
		switch (_p0.ctor) {
			case 'Interactive':
				return A2(
					_elm_lang$core$List$map,
					_danielnarey$elm_toolkit$Toolkit_Function$apply2(
						{ctor: '_Tuple2', _0: _danielnarey$elm_modular_ui$Page_Interactive$title, _1: _danielnarey$elm_modular_ui$Page$Interactive}),
					{
						ctor: '::',
						_0: _danielnarey$elm_modular_ui$Page_Interactive$Buttons,
						_1: {
							ctor: '::',
							_0: _danielnarey$elm_modular_ui$Page_Interactive$Input,
							_1: {
								ctor: '::',
								_0: _danielnarey$elm_modular_ui$Page_Interactive$Selectors,
								_1: {
									ctor: '::',
									_0: _danielnarey$elm_modular_ui$Page_Interactive$Indicators,
									_1: {ctor: '[]'}
								}
							}
						}
					});
			case 'Content':
				return A2(
					_elm_lang$core$List$map,
					_danielnarey$elm_toolkit$Toolkit_Function$apply2(
						{ctor: '_Tuple2', _0: _danielnarey$elm_modular_ui$Page_Content$title, _1: _danielnarey$elm_modular_ui$Page$Content}),
					{
						ctor: '::',
						_0: _danielnarey$elm_modular_ui$Page_Content$Text,
						_1: {
							ctor: '::',
							_0: _danielnarey$elm_modular_ui$Page_Content$Heading,
							_1: {
								ctor: '::',
								_0: _danielnarey$elm_modular_ui$Page_Content$Icon,
								_1: {
									ctor: '::',
									_0: _danielnarey$elm_modular_ui$Page_Content$Media,
									_1: {
										ctor: '::',
										_0: _danielnarey$elm_modular_ui$Page_Content$Source,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					});
			default:
				return A2(
					_elm_lang$core$List$map,
					_danielnarey$elm_toolkit$Toolkit_Function$apply2(
						{ctor: '_Tuple2', _0: _danielnarey$elm_modular_ui$Page_Customize$title, _1: _danielnarey$elm_modular_ui$Page$Customize}),
					{
						ctor: '::',
						_0: _danielnarey$elm_modular_ui$Page_Customize$Modifier,
						_1: {
							ctor: '::',
							_0: _danielnarey$elm_modular_ui$Page_Customize$Attribute,
							_1: {
								ctor: '::',
								_0: _danielnarey$elm_modular_ui$Page_Customize$Action,
								_1: {
									ctor: '::',
									_0: _danielnarey$elm_modular_ui$Page_Customize$Style,
									_1: {ctor: '[]'}
								}
							}
						}
					});
		}
	}();
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'container',
		A2(
			_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
			A2(
				_danielnarey$elm_modular_ui$Ui_Modifier$add,
				'is-medium',
				_danielnarey$elm_modular_ui$Component_Tabs$container(
					{options: options, selected: model.currentPage, $switch: _danielnarey$elm_modular_ui$Msg$Load})),
			_danielnarey$elm_modular_ui$Ui$container('div')));
};
var _danielnarey$elm_modular_ui$View_Navigation$headerWithTabs = function (model) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-danger',
		_danielnarey$elm_modular_ui$Component_Hero$container(
			{
				title: 'Elm Modular UI',
				subtitle: 'A friendly UI development framework based on Bulma CSS',
				head: _elm_lang$core$Maybe$Nothing,
				foot: _elm_lang$core$Maybe$Just(
					A2(
						_danielnarey$elm_modular_ui$Ui_Modifier$add,
						'container',
						A2(
							_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
							A2(
								_danielnarey$elm_modular_ui$Ui_Modifier$addList,
								{
									ctor: '::',
									_0: 'is-boxed',
									_1: {
										ctor: '::',
										_0: 'is-medium',
										_1: {ctor: '[]'}
									}
								},
								_danielnarey$elm_modular_ui$Component_Tabs$container(
									{
										options: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'Interactive Elements', _1: _danielnarey$elm_modular_ui$Tab$Interactive},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'Content Elements', _1: _danielnarey$elm_modular_ui$Tab$Content},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'Customization', _1: _danielnarey$elm_modular_ui$Tab$Customize},
													_1: {ctor: '[]'}
												}
											}
										},
										selected: model.currentTab,
										$switch: _danielnarey$elm_modular_ui$Msg$SelectTab
									})),
							_danielnarey$elm_modular_ui$Ui$container('div'))))
			}));
};

var _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops = _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['||>'] = F2(
	function (a, f) {
		return f(a);
	});
var _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops = _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['#'] = F2(
	function (f, b) {
		return A2(_elm_lang$core$Basics$flip, f, b);
	});
var _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops = _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['@@|>'] = F2(
	function (params, f) {
		return A2(_elm_lang$core$Basics$uncurry, f, params);
	});
var _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops = _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['|>.'] = F2(
	function (data, fList) {
		var _p0 = fList;
		if (_p0.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p0._0(data),
				_1: A2(_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['|>.'], data, _p0._1)
			};
		}
	});

var _danielnarey$elm_modular_ui$View$view = function (model) {
	var pageContent = function () {
		var _p0 = model.currentPage;
		switch (_p0.ctor) {
			case 'Home':
				return _elm_lang$core$Basics$always(_danielnarey$elm_modular_ui$View_Home$overview);
			case 'Interactive':
				switch (_p0._0.ctor) {
					case 'Buttons':
						return _danielnarey$elm_modular_ui$View_Interactive$buttons;
					case 'Input':
						return _danielnarey$elm_modular_ui$View_Interactive$input;
					case 'Selectors':
						return _danielnarey$elm_modular_ui$View_Interactive$selectors;
					default:
						return _danielnarey$elm_modular_ui$View_Interactive$indicators;
				}
			case 'Content':
				switch (_p0._0.ctor) {
					case 'Text':
						return _elm_lang$core$Basics$always(_danielnarey$elm_modular_ui$View_Content$text);
					case 'Heading':
						return _elm_lang$core$Basics$always(_danielnarey$elm_modular_ui$View_Content$heading);
					case 'Icon':
						return _elm_lang$core$Basics$always(_danielnarey$elm_modular_ui$View_Content$icon);
					case 'Media':
						return _elm_lang$core$Basics$always(_danielnarey$elm_modular_ui$View_Content$media);
					default:
						return _elm_lang$core$Basics$always(_danielnarey$elm_modular_ui$View_Content$source);
				}
			default:
				switch (_p0._0.ctor) {
					case 'Modifier':
						return _danielnarey$elm_modular_ui$View_Customize$modifier;
					case 'Attribute':
						return _elm_lang$core$Basics$always(_danielnarey$elm_modular_ui$View_Customize$attribute);
					case 'Action':
						return _danielnarey$elm_modular_ui$View_Customize$action;
					default:
						return _elm_lang$core$Basics$always(_danielnarey$elm_modular_ui$View_Customize$style);
				}
		}
	}();
	return _danielnarey$elm_modular_ui$Ui$render(
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			A2(
				_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['|>.'],
				model,
				{
					ctor: '::',
					_0: _danielnarey$elm_modular_ui$View_Navigation$headerWithTabs,
					_1: {
						ctor: '::',
						_0: _danielnarey$elm_modular_ui$View_Navigation$secondaryTabs,
						_1: {
							ctor: '::',
							_0: _danielnarey$elm_modular_ui$View_Layout$pageHeader,
							_1: {
								ctor: '::',
								_0: function (_p1) {
									return function () {
										var _p2 = model.currentPage;
										if (_p2.ctor === 'Home') {
											return _elm_lang$core$Basics$identity;
										} else {
											return _danielnarey$elm_modular_ui$Ui_Style$add(
												{ctor: '_Tuple2', _0: 'background-color', _1: '#dbdbdb'});
										}
									}()(
										pageContent(_p1));
								},
								_1: {
									ctor: '::',
									_0: function (_p3) {
										return A2(
											_danielnarey$elm_modular_ui$Ui_Modifier$conditional,
											{ctor: '_Tuple2', _0: 'is-active', _1: model.alertIsVisible},
											_danielnarey$elm_modular_ui$View_Layout$alertModal(_p3));
									},
									_1: {ctor: '[]'}
								}
							}
						}
					}
				})));
};

var _danielnarey$elm_semantic_dom$Dom_Program$customWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _danielnarey$elm_semantic_dom$Dom_Program$runWithFlags = F2(
	function (initializer, programSetup) {
		var _p0 = programSetup.init;
		var initialModel = _p0._0;
		var loadCmd = _p0._1;
		return _elm_lang$virtual_dom$VirtualDom$programWithFlags(
			{
				init: function (_p1) {
					return A3(
						_elm_lang$core$Basics$flip,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							}),
						loadCmd,
						A2(
							_elm_lang$core$Maybe$withDefault,
							initialModel,
							initializer(_p1)));
				},
				update: programSetup.update,
				subscriptions: programSetup.subscriptions,
				view: programSetup.view
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Program$subscribeWithParams = F2(
	function (subFunction, programSetup) {
		return _elm_lang$core$Native_Utils.update(
			programSetup,
			{subscriptions: subFunction});
	});
var _danielnarey$elm_semantic_dom$Dom_Program$subscribe = F2(
	function (subs, programSetup) {
		return _elm_lang$core$Native_Utils.update(
			programSetup,
			{
				subscriptions: _elm_lang$core$Basics$always(
					_elm_lang$core$Platform_Sub$batch(subs))
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Program$updateWithCmds = F2(
	function (updateFunction, programSetup) {
		return _elm_lang$core$Native_Utils.update(
			programSetup,
			{update: updateFunction});
	});
var _danielnarey$elm_semantic_dom$Dom_Program$onLoad = F2(
	function (cmds, programSetup) {
		return _elm_lang$core$Native_Utils.update(
			programSetup,
			{
				init: A3(
					_elm_lang$core$Basics$flip,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_elm_lang$core$Platform_Cmd$batch(cmds),
					_elm_lang$core$Tuple$first(programSetup.init))
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Program$run = _elm_lang$virtual_dom$VirtualDom$program;
var _danielnarey$elm_semantic_dom$Dom_Program$update = F2(
	function (updateFunction, programSetup) {
		return _elm_lang$core$Native_Utils.update(
			programSetup,
			{
				update: F2(
					function (msg, model) {
						return A3(
							_elm_lang$core$Basics$flip,
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							_elm_lang$core$Platform_Cmd$none,
							A2(updateFunction, msg, model));
					})
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Program$setup = F2(
	function (viewFunction, initialModel) {
		return {
			init: {ctor: '_Tuple2', _0: initialModel, _1: _elm_lang$core$Platform_Cmd$none},
			update: _elm_lang$core$Basics$always(
				A2(
					_elm_lang$core$Basics$flip,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_elm_lang$core$Platform_Cmd$none)),
			subscriptions: _elm_lang$core$Basics$always(_elm_lang$core$Platform_Sub$none),
			view: viewFunction
		};
	});
var _danielnarey$elm_semantic_dom$Dom_Program$Setup = F4(
	function (a, b, c, d) {
		return {init: a, update: b, subscriptions: c, view: d};
	});

var _danielnarey$elm_modular_ui$Main$main = A2(
	_danielnarey$elm_semantic_effects$Effect_Routing$run,
	{ctor: '_Tuple2', _0: _danielnarey$elm_modular_ui$Model$fromLocation, _1: _danielnarey$elm_modular_ui$Msg$Route},
	A2(
		_danielnarey$elm_semantic_dom$Dom_Program$updateWithCmds,
		_danielnarey$elm_modular_ui$Update$update,
		A2(_danielnarey$elm_semantic_dom$Dom_Program$setup, _danielnarey$elm_modular_ui$View$view, _danielnarey$elm_modular_ui$Model$initial)))();

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _danielnarey$elm_modular_ui$Main$main !== 'undefined') {
    _danielnarey$elm_modular_ui$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

