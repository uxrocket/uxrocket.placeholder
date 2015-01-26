/**
 * UX Rocket
 * Placeholder for IE8 and lower versions
 * @author Bilal Cinarli
 */
;(function($){
    var ux, // local shorthand

        defaults = {},
        events = {
            keypress: 'keypress.uxPlaceholder',
            paste   : 'paste.uxPlaceholder',
            input   : 'input.uxPlaceholder',
            blur    : 'blur.uxPlaceholder',
            change  : 'change.uxPlaceholder'
        },
		ns = {
			rocket 	  : 'uxRocket',
			data   	  : 'uxPlaceholder',
			ready	  : 'uxitd-placeholder-ready',
			rocketWrap: 'uxitd-plugin-wrap',
			wrap	  : 'uxitd-placeholder-wrap',
			text	  : 'uxitd-placeholder-text'
		};

    // constructor method
    var Placeholder = function(el, selector){
        var opts = $.extend({}, {'selector': selector}),
            $el = $(el);

        $el.data(ns.data, opts);

        setLayout($el);

        bindUIActions($el);
    };

    var setLayout = function($el){
        var columns = '',
            _opts = $el.data(ns.data);

        columns = ' ' + $el.context.className.replace(ns.ready, '');

        if(_opts.selector.charAt(0) == '.') {
            columns = columns.replace(' ' + _opts.selector.substr(1), '');
        }

        if($el.parent().is('.' + ns.rocketWrap)){
            $el.parent().addClass(ns.wrap + columns);
        }
        else {
            $el.wrap('<span class="' ns.rocketWrap + ' ' + ns.wrap + columns + '"></span>');
        }

        $el.before('<span class="' + ns.text + '">' + $el.attr('placeholder') + '</span>');
    };

    var bindUIActions = function($el){
        var $placeholder = $el.siblings('.' + ns.text);

        if($el.val() !== ''){
            $placeholder.hide();
        }

        $el.on(events.keypress + ' ' + events.input + ' ' + events.paste, function(){
            $placeholder.hide();
        });

        $el.on(events.blur, function(){
            if($el.val() === ''){
                $placeholder.show();
            }
        });

        $el.on(events.change,function(){
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
                uxrocket = $el.data(ns.rocket) || {},
                placeholder;

            if(!$el.attr('placeholder')){
                return;
            }

            if($el.hasClass(ns.ready)){
                return;
            }

            $el.addClass(ns.ready);

            uxrocket[ns.data] = {'hasWrapper': true, 'wrapper': ns.wrap, 'ready': ns.ready, 'selector': selector, 'options': null};

            $el.data(ns.rocket, uxrocket);

            placeholder = new Placeholder(this, selector);
        });
    };

    // Version
    ux.version = "0.4.1";

    // settings
    ux.settings = defaults;
})(jQuery);