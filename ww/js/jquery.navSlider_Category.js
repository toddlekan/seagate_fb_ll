/**
 * Created by JetBrains PhpStorm.
 * User: balaban
 * Date: 08.07.11
 * Time: 9:09
 * To change this template use File | Settings | File Templates.
 */

jQuery.fn.navSlider_Category = function(method)
{ 
    var _options =
    {
        'sliderLine'    	: '.slider',
        'sliderButton'  	: '#sliderButton',
        'navigate'      	: true,
        'automove'      	: true,
        'moveArea'      	: null,
		'moveAreaCaption'	: null,
		'moveAreaIndex' 	: null,
        'sliderWidth'   	: null
    };

    var _progress = false;
    var _this = $(this);
    var _li_width = 0;
    var _mousedowned = false;
    var _curr_mouse_position = 0;
    var _curr_slider_position = 0;
    var _curr_move_area_postion = 0;
    var _num_positions = 0;
    var _length = 0;
    var _null_position = 0;
	var _max_position = 0;
	var _margin_type = "margin-left";
    var _move_area_null_position = 0;
    var _move_ratio = 1;
	var isArEm = rcLocaleJS=="ar-em"; 		
    var methods = {
        init : function(custom_options)
        {
            $.extend(_options, custom_options);

            // Save plugin variables --------------------------------- //
            _this.data('options', _options);
            _this.data('progress', _progress);
            _num_positions = _this.find('li').length;
            _this.data('num_positions', _num_positions);
			if (isArEm)
			{
				_margin_type = "margin-right";
			}
			
            resize();
            if(typeof $(_options.sliderButton).css('left')!= "undefined")
            {
            	_null_position = parseInt($(_options.sliderButton).css('left').replace('px', ''));
            }
			
			if(isArEm)
			{
				_max_position = _null_position + (_num_positions - 1) * (_li_width);
				$(_options.sliderButton).css('left', _max_position + 'px');
			}
			
            _this.data('null_position', _null_position); 
            if (_options.moveArea != null && typeof $(_options.moveArea).css(_margin_type)!= "undefined")
            {
                _move_area_null_position = parseInt($(_options.moveArea).css(_margin_type).replace('px', ''));
                //console.log(_move_area_null_position);
                _this.data('move_area_null_position', _move_area_null_position);
            }
            assignMouseEvents();
        }
    }

    if ( methods[method] )
    {
        return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method )
    {
        return methods.init.apply( this, arguments );
    } else
    {
        $.error( 'Method ' +  method + ' does not exist on jQuery.navSlider' );
    }


    function resize()
    {				
        var ul_width = _this.find('ul').width() / _num_positions;
        _li_width = _this.find('li').eq(0).width();
        _this.find('li').each(function(i) {
            if ($(this).width() > _li_width) _li_width = $(this).width();
        });
        if (_li_width < ul_width) _li_width = ul_width;
        _this.find('li').width(_li_width);
        _this.data('li_width', _li_width);

        _length = _num_positions * _li_width;
        _this.data('length', _length);

        $(_options.sliderLine).width(_length);
        if (_options.sliderWidth == null)
            $(_options.sliderButton).width(_li_width - 8);
        else
            $(_options.sliderButton).width(_options.sliderWidth);

        if (_options.moveArea != null)
        {
            _move_ratio = (($(_options.moveArea).children('table').eq(_options.moveAreaIndex).innerWidth()-227) - Math.abs(_move_area_null_position) - $('.tableProduct').width()) / (_null_position + _length  - $(_options.sliderButton).width());
            _this.data('move_ratio', _move_ratio);
        }		
		$(_options.sliderButton).css('left', '0px');		
		$(_options.moveArea).css(_margin_type, '-227px');
		$(_options.moveAreaCaption).css(_margin_type, '-227px');
		$(_options.moveAreaCaption).css('padding-left', '15px');
    }

    function assignMouseEvents()
    {
		
        _this.find('ul').mousedown(function(event) {
            event.preventDefault();
            event.stopPropagation();
            _progress = _this.data('progress');
            if (!_progress)
            {
                _mousedowned = true;
                _this.data('mousedowned', _mousedowned);
                _curr_mouse_position = event.pageX;
                _this.data('curr_mouse_position', _curr_mouse_position);
                _curr_slider_position =  parseInt($(_options.sliderButton).css('left').replace('px', ''));
                _this.data('curr_slider_position', _curr_slider_position);
            }
        });

        $('body').mousemove(function(event) {
            _progress = _this.data('progress');
            _mousedowned = _this.data('mousedowned');
            if (_mousedowned && !_progress)
            {
                _curr_mouse_position = _this.data('curr_mouse_position');
                _curr_slider_position = _this.data('curr_slider_position');
                _li_width = _this.data('li_width');
				_length = _this.data('length');
                _null_position = _this.data('null_position');
				
				 var movement = event.pageX - _curr_mouse_position;
				if (_options.moveAreaIndex==1 ){
				}
                if (_curr_slider_position  + movement <= (_null_position + _length - _li_width) && (_curr_slider_position + movement) >= _null_position)
                {
                    $(_options.sliderButton).css('left', _curr_slider_position + movement);
                }
                else if (_curr_slider_position  + movement > (_null_position + _length  - _li_width))
                {
                    $(_options.sliderButton).css('left', _null_position + _length  - _li_width);
                }
                else if ((_curr_slider_position + movement) < _null_position)
                {
                    $(_options.sliderButton).css('left', _null_position);
                }

                if (_options.moveArea != null)
                {
					if(isArEm)
					{
						$(_options.moveArea).css(_margin_type, _move_area_null_position - (_max_position - $(_options.sliderButton).css('left').replace('px', '')) * _move_ratio);
						$(_options.moveAreaCaption).css(_margin_type, _move_area_null_position - (_max_position - $(_options.sliderButton).css('left').replace('px', '')) * _move_ratio);
					}
					else{
						$(_options.moveArea).css(_margin_type, _move_area_null_position - ($(_options.sliderButton).css('left').replace('px', '') - _null_position) * _move_ratio);
						$(_options.moveAreaCaption).css(_margin_type, _move_area_null_position - ($(_options.sliderButton).css('left').replace('px', '') - _null_position) * _move_ratio);
					}
                }
            }
        });

        $('body').mouseup(function(event) {
            _progress = _this.data('progress');
            _mousedowned = _this.data('mousedowned');
            if (_mousedowned && !_progress)
            {
                event.preventDefault();
                event.stopPropagation();
                _mousedowned = false;
                _this.data('mousedowned', _mousedowned);
                _curr_mouse_position = _this.data('curr_mouse_position');
                _curr_slider_position = _this.data('curr_slider_position');
                _num_positions = _this.data('num_positions');
                _li_width = _this.data('li_width');
                _length = _this.data('length');
                _null_position = _this.data('null_position');
                _options = _this.data('options');

                var movement = event.pageX - _curr_mouse_position;

                if (_options.automove)
                {
                    var slider_middle_position = _curr_slider_position + movement + ($(_options.sliderButton).width() / 2);
                    var sector_length = Math.round((_null_position + _length) / _num_positions);
                    var sector_index = Math.floor(slider_middle_position / sector_length);
                    if (sector_index >= _num_positions) sector_index = _num_positions-1;
                    if (sector_index < 0) sector_index = 0;
                    if(isArEm)
					{
						sector_index = _num_positions - 1 - sector_index;
					}
					animateToIndex(sector_index);
                }
            }
        });
		_this.find('li').unbind('click');
        _this.find('li').click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            var index = _this.find('li').index(this);
            animateToIndex(index);
        });
		_this.find('.btnBack').unbind('click');
        _this.find('.btnBack').click(function(event) {
            event.preventDefault(); event.stopPropagation();
            _curr_slider_position =  parseInt($(_options.sliderButton).css('left').replace('px', ''));
            var slider_middle_position = _curr_slider_position + ($(_options.sliderButton).width() / 2);
            var sector_length = Math.round((_null_position + _length) / _num_positions);
            var sector_index = Math.floor(slider_middle_position / sector_length);
            if (sector_index > 0) sector_index--;
			if(isArEm)
			{
				sector_index = _num_positions - 1 - sector_index;
			}
			animateToIndex(sector_index);
        });
		_this.find('.btnNext').unbind('click');
        _this.find('.btnNext').click(function(event) {
            event.preventDefault(); event.stopPropagation();
            _curr_slider_position =  parseInt($(_options.sliderButton).css('left').replace('px', ''));
            var slider_middle_position = _curr_slider_position + ($(_options.sliderButton).width() / 2);
            var sector_length = Math.round((_null_position + _length) / _num_positions);
            var sector_index = Math.floor(slider_middle_position / sector_length); 
            if (sector_index < _num_positions-1) sector_index++;
			if(isArEm)
			{
				sector_index = _num_positions - 1 - sector_index;
			}
			animateToIndex(sector_index);
        });
    }
    function animateToIndex(index)
    {
        _null_position = _this.data('null_position');
        _options = _this.data('options');
		var animate_pos = _null_position + index * (_li_width);
		if(isArEm)
		{
			animate_pos = _max_position - index * (_li_width);
		}

        _progress = true;
        _this.data('progress', _progress);
        $(_options.sliderButton).animate(
            {
                'left' : animate_pos
            },
            500,
            function()
            {
                _progress = false;
                _this.data('progress', _progress);
                if (_options.navigate) navigate(index);
            }
        );
        if (_options.moveArea != null)
        {
			var position = _move_area_null_position - (animate_pos - _null_position) * _move_ratio
			if (isArEm)
			{
				position = _move_area_null_position - (_max_position - animate_pos) * _move_ratio;
	            $(_options.moveArea).animate(
	                {
	                    'margin-right' : position
	                },
	                500
	            );
				$(_options.moveAreaCaption).animate(
	                {
	                    'margin-right' : position
	                },
	                500
	            );
			}
			else{
	            $(_options.moveArea).animate(
	                {
	                    'margin-left' : position
	                },
	                500
	            );
				$(_options.moveAreaCaption).animate(
	                {
	                    'margin-left' : position
	                },
	                500
	            );
			}
        }
    }
    function navigate(index)
    {
        window.location = _this.find('li').eq(index).find('a').attr('href').toString();
    }
}