/**
 * UX Rocket
 * Placeholder for IE8 and lower versions
 * @author Bilal Cinarli
 */
;(function($){
	var ux, // local shorthand

		defaults = {};

	// constructor method
	var Placeholder = function(el, selector){
		var opts = $.extend({}, {'selector': selector}),
			$el = $(el);
			
		$el.data('uxPlaceholder', opts);

        setLayout($el);

        bindUIActions($el);
	};

    var setLayout = function($el){
    	var columns = '',
			_opts = $el.data('uxPlaceholder');

    	columns = ' ' + $el.context.className.replace('uxitd-placeholder-ready', '');
	
    	if(_opts.selector.charAt(0) == '.') {
        	columns = columns.replace(' ' + _opts.selector.substr(1), '');
    	}
			
	    if($el.parent().is('.uxitd-plugin-wrap')){
	        $el.parent().addClass('uxitd-placeholder-wrap' + columns);
	    }
	    else {
	        $el.wrap('<span class="uxitd-plugin-wrap uxitd-placeholder-wrap' + columns + '"></span>');
	    }

        $el.before('<span class="uxitd-placeholder-text">' + placeholder + '</span>');
    };

    var bindUIActions = function($el){
        var $placeholder = $el.siblings('.uxitd-placeholder-text');

        if($el.val() !== ''){
            $placeholder.hide();
        }

        $el.on('keypress', function(){
            $placeholder.hide();
        });

        $el.on('blur', function(){
            if($el.val() === ''){
                $placeholder.show();
            }
        });

        $el.on('change',function(){
            if($el.val() !== ''){
                $placeholder.hide();
            }
        });
    };

	// jquery bindings
    ux = $.fn.placeholder = $.uxplaceholder = function(){
        var selector = this.selector;

        // Check placeholder support.
        jQuery.support.placeholder = false;

        var domElement = document.createElement('input');
        if('placeholder' in domElement) {
            jQuery.support.placeholder = true;
        }

        // Return if browser has placeholder support.
        if(jQuery.support.placeholder) {
            return;
        }

        return this.each(function(){
			var $el = $(this),
				uxrocket = $el.data('uxRocket') || {},
				placeholder;
				
	        if(!$el.attr('placeholder')){
	            return;
	        }

			if($el.hasClass('uxitd-placeholder-ready')){
				return;
			}

			$el.addClass('uxitd-placeholder-ready');
			
            uxrocket['uxPlaceholder'] = {'hasWrapper': true, 'ready': 'uxitd-placeholder-ready', 'selector': selector, 'options': options};

            $el.data('uxRocket', uxrocket);

			placeholder = new Placeholder(this, selector);
        });
    };

    // Version
    ux.version = "0.4.0a";

	// settings
	ux.settings = defaults;
})(jQuery);