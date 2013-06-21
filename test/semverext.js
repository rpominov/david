(function() {
	
	"use strict";
	
	var semverext = process.env.DAVID_COV ? require('../lib-cov/semverext') : require('../lib/semverext');
	
	// Many of these version numbers lifted from versions numbers used in semver range tests
	// Thank you https://github.com/isaacs/node-semver/blob/master/test.js
	module.exports = {
		'gtr tests': function(test) {
			
			var data = [
			    ["~1.2.2", "1.3.0"]
			  , ['~0.6.1-1', '0.7.1-1']
			  , ["1.0.0 - 2.0.0", "2.0.1"]
			  , ["1.0.0", "1.0.1-beta1"]
			  , ["1.0.0", "2.0.0"]
			  , ["<=2.0.0", "2.1.1"]
			  , ["<=2.0.0", "3.2.9"]
			  , ["<2.0.0", "2.0.0"]
			  , ["0.1.20 || 1.2.4", "1.2.5"]
			  , ["2.x.x", "3.0.0"]
			  , ["1.2.x", "1.3.0"]
			  , ["1.2.x || 2.x", "3.0.0"]
			  , ["2.*.*", "5.0.1"]
			  , ["1.2.*", "1.3.3"]
			  , ["1.2.* || 2.*", "4.0.0"]
			  , ["2", "3.0.0"]
			  , ["2.3", "2.4.2"]
			  , ["~2.4", "2.5.0"] // >=2.4.0 <2.5.0
			  , ["~2.4", "2.5.5"]
			  , ["~>3.2.1", "3.3.0"] // >=3.2.1 <3.3.0
			  , ["~1", "2.2.3"] // >=1.0.0 <2.0.0
			  , ["~>1", "2.2.4"]
			  , ["~> 1", "3.2.3"]
			  , ["~1.0", "1.1.2"] // >=1.0.0 <1.1.0
			  , ["~ 1.0", "1.1.0"]
			  , ["<1.2", "1.2.0"]
			  , ["< 1.2", "1.2.1"]
			  , ["1", "2.0.0beta"]
			  , ["~v0.5.4-pre", "0.6.0"]
			  , ["~v0.5.4-pre", "0.6.1-pre"]
			  , ["=0.7.x", "0.8.0"]
			  , ["=0.7.x", "0.8.0-asdf"]
			  , ["<=0.7.x", "0.7.0"]
			  , ["~1.2.2", "1.3.0"]
			  , ["1.0.0 - 2.0.0", "2.2.3"]
			  , ["1.0.0", "1.0.1"]
			  , ["<=2.0.0", "3.0.0"]
			  , ["<=2.0.0", "2.9999.9999"]
			  , ["<=2.0.0", "2.2.9"]
			  , ["<2.0.0", "2.9999.9999"]
			  , ["<2.0.0", "2.2.9"]
			  , ["2.x.x", "3.1.3"]
			  , ["1.2.x", "1.3.3"]
			  , ["1.2.x || 2.x", "3.1.3"]
			  , ["2.*.*", "3.1.3"]
			  , ["1.2.*", "1.3.3"]
			  , ["1.2.* || 2.*", "3.1.3"]
			  , ["2", "3.1.2"]
			  , ["2.3", "2.4.1"]
			  , ["~2.4", "2.5.0"] // >=2.4.0 <2.5.0
			  , ["~>3.2.1", "3.3.2"] // >=3.2.1 <3.3.0
			  , ["~1", "2.2.3"] // >=1.0.0 <2.0.0
			  , ["~>1", "2.2.3"]
			  , ["~1.0", "1.1.0"] // >=1.0.0 <1.1.0
			  , ["<1", "1.0.0"]
			  , ["1", "2.0.0beta"]
			  , ["<1", "1.0.0beta"]
			  , ["< 1", "1.0.0beta"]
			  , ["=0.7.x", "0.8.2"]
			  , ["<=0.7.x", "0.7.2"]
			];
			
			test.expect(data.length);
			
			data.forEach(function(tuple) {
				//console.log('Is', tuple[1], 'greater than', tuple[0], '?');
				
				var result = semverext.gtr(tuple[1], tuple[0]);
				
				//console.log(result ? 'Yes' : 'No', result ?  '(Expected)' : '<--- UNEXPECTED');
				
				test.strictEqual(true, result);
			});
			
			test.done();
		},
		'Negative gtr tests': function(test) {
			
			var data = [ 
				['~0.6.1-1', '0.6.1-1']
			  , ["1.0.0 - 2.0.0", "1.2.3"]
			  , ["1.0.0 - 2.0.0", "0.9.9"]
			  , ["1.0.0", "1.0.0"]
			  , [">=*", "0.2.4"]
			  , ["", "1.0.0"]
			  , ["*", "1.2.3"]
			  , ["*", "v1.2.3-foo"]
			  , [">=1.0.0", "1.0.0"]
			  , [">=1.0.0", "1.0.1"]
			  , [">=1.0.0", "1.1.0"]
			  , [">1.0.0", "1.0.1"]
			  , [">1.0.0", "1.1.0"]
			  , ["<=2.0.0", "2.0.0"]
			  , ["<=2.0.0", "1.9999.9999"]
			  , ["<=2.0.0", "0.2.9"]
			  , ["<2.0.0", "1.9999.9999"]
			  , ["<2.0.0", "0.2.9"]
			  , [">= 1.0.0", "1.0.0"]
			  , [">=  1.0.0", "1.0.1"]
			  , [">=   1.0.0", "1.1.0"]
			  , ["> 1.0.0", "1.0.1"]
			  , [">  1.0.0", "1.1.0"]
			  , ["<=   2.0.0", "2.0.0"]
			  , ["<= 2.0.0", "1.9999.9999"]
			  , ["<=  2.0.0", "0.2.9"]
			  , ["<    2.0.0", "1.9999.9999"]
			  , ["<\t2.0.0", "0.2.9"]
			  , [">=0.1.97", "v0.1.97"]
			  , [">=0.1.97", "0.1.97"]
			  , ["0.1.20 || 1.2.4", "1.2.4"]
			  , ["0.1.20 || 1.2.4", "1.2.3"]
			  , ["0.1.20 || 1.2.4", "0.1.20"]
			  , [">=0.2.3 || <0.0.1", "0.0.0"]
			  , [">=0.2.3 || <0.0.1", "0.2.3"]
			  , [">=0.2.3 || <0.0.1", "0.2.4"]
			  , ["||", "1.3.4"]
			  , ["2.x.x", "2.1.3"]
			  , ["1.2.x", "1.2.3"]
			  , ["1.2.x || 2.x", "2.1.3"]
			  , ["1.2.x || 2.x", "1.2.3"]
			  , ["x", "1.2.3"]
			  , ["2.*.*", "2.1.3"]
			  , ["1.2.*", "1.2.3"]
			  , ["1.2.* || 2.*", "2.1.3"]
			  , ["1.2.* || 2.*", "1.2.3"]
			  , ["*", "1.2.3"]
			  , ["2", "2.1.2"]
			  , ["2.3", "2.3.1"]
			  , ["~2.4", "2.4.0"] // >=2.4.0 <2.5.0
			  , ["~2.4", "2.4.5"]
			  , ["~>3.2.1", "3.2.2"] // >=3.2.1 <3.3.0
			  , ["~1", "1.2.3"] // >=1.0.0 <2.0.0
			  , ["~>1", "1.2.3"]
			  , ["~> 1", "1.2.3"]
			  , ["~1.0", "1.0.2"] // >=1.0.0 <1.1.0
			  , ["~ 1.0", "1.0.2"]
			  , [">=1", "1.0.0"]
			  , [">= 1", "1.0.0"]
			  , ["<1.2", "1.1.1"]
			  , ["< 1.2", "1.1.1"]
			  , ["1", "1.0.0beta"]
			  , ["~v0.5.4-pre", "0.5.5"]
			  , ["~v0.5.4-pre", "0.5.4"]
			  , ["=0.7.x", "0.7.2"]
			  , [">=0.7.x", "0.7.2"]
			  , ["=0.7.x", "0.7.0-asdf"]
			  , [">=0.7.x", "0.7.0-asdf"]
			  , ["<=0.7.x", "0.6.2"]
			];
			
			test.expect(data.length);
			
			data.forEach(function(tuple) {
				//console.log('Is', tuple[1], 'greater than', tuple[0], '?');
				
				var result = semverext.gtr(tuple[1], tuple[0]);
				
				//console.log(result ? 'Yes' : 'No', result ? '<--- UNEXPECTED' : '(Expected)');
				
				test.strictEqual(false, result);
			});
			
			test.done();
		}
	};
})();