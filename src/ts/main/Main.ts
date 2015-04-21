/// <reference path='../../../lib/illa/_module.ts'/>
/// <reference path='../../../lib/illa/Arrkup.ts'/>
/// <reference path='../../../lib/illa/Log.ts'/>

/// <reference path='../../../lib/jQuery.d.ts'/>

/// <reference path='../lodash.d.ts'/>

module main {
	export class Main {

		private static instance = new Main();

		constructor() {
			jQuery(illa.bind(this.onDomLoaded, this));
		}

		onDomLoaded(): void {
			illa.Log.info('DOM loaded.');
			
			illa.Log.info('Testing jQuery...');

			jQuery('body').prepend(illa.Arrkup.createString([
				['h1', 'Awesome!']
			]));
			
			illa.Log.info('Testing lodash...');

			var users = [
				{ user: 'barney', active: true, credits: 500 },
				{ user: 'fred', active: false, credits: 750 }
			];

			var clone = _.cloneDeep(users);
			
			illa.Log.info('Original:', users);
			illa.Log.info('Clone:', clone);
			illa.Log.info('The clone[0] is NOT the same as the original[0]:', clone[0] !== users[0]);
			illa.Log.info('_.isEqual:', _.isEqual(clone, users));
			
			illa.Log.info('Done.');
		}
	}
}