/**
 * UX Rocket
 * Placeholder for IE8 and lower versions
 * @author Bilal Cinarli
 */
;(function($){
	var ux, // local shorthand

		defaults = {};

	// constructor method
	var Placeholder = function(el){
		var $el = $(el);

        setLayout($el);

        bindUIActions($el);
	};

    var setLayout = function($el){
        var columns = '',
            placeholder = $el.attr('placeholder');
			
			columns = ' ' + $el.context.className;
			
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
				placeholder;

			if($el.hasClass('uxitd-placeholder-ready') || $el.hasClass('uxitd-plugin-wrap')){
				return;
			}

			$el.addClass('uxitd-placeholder-ready');

            if(!$el.attr('placeholder')){
                return;
            }

			placeholder = new Placeholder(this);
        });
    };

    // Version
    ux.version = "0.3.2";

	// settings
	ux.settings = defaults;
})(jQuery);