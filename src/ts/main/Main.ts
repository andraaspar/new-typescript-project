/// <reference path='../../../lib/illa/_module.ts'/>
/// <reference path='../../../lib/illa/Arrkup.ts'/>
/// <reference path='../../../lib/illa/Log.ts'/>

/// <reference path='../../../lib/jQuery.d.ts'/>

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
			
			illa.Log.info('Done.');
		}
	}
}