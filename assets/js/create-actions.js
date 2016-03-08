var CreateActions = CreateActions || {};
CreateActions = (function () {
	'use strict';

	return{
		bindUIActions: function() {
			for (var i = 0; i < document.querySelectorAll('h1').length; i++) {
				console.log(document.querySelectorAll('h1')[i]);
			}
		},
		init: function() {
			this.bindUIActions();
		}

	};

})();