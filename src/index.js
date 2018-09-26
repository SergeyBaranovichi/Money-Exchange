// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
	var o = {};
	if (currency <= 0) {return o; 
		}
	else if (currency > 10000) {
	o.error='You are rich, my friend! We don\'t have so much coins for exchange';
		return o;
		}
	else {
		var c=currency;
		var r=Math.floor(c/50);
			c=c%50;
			if (r!=0) o.H=r;
				r=Math.floor(c/25);
				c=c%25;
				if (r!=0) o.Q=r;
					r=Math.floor(c/10);
					c=c%10;
					if (r!=0) o.D=r;
						r=Math.floor(c/5);
						c=c%5;
						if (r!=0) o.N=r;
							if (c!=0) o.P=c;
							return o;
		}
	}