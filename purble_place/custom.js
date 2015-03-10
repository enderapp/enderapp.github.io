function rand(){
	return parseInt(((Math.random()/4)+'').substr(2, 1))+1;;
}
function get_focus(posX, posY){
	
}
function ok_btn_1(){
	$('.div_ok a').attr('style', 'background: url(\'ok_2.png\')');
	setTimeout(function(){
		ok_btn_2();
	}, 500);
}
function ok_btn_2(){
	$('.div_ok a').attr('style', 'background: url(\'ok.png\')');
	setTimeout(function(){
		ok_btn_1()
	}, 10000);
}
function add_console_text(title, text, color){
	$('.info_panel').prepend('<b style="color: '+color+'">'+title+'</b><br />'+text+'<hr />');
}
$(function(){
	$('.body .eye').attr('data-answer', rand());
	$('.body .nose').attr('data-answer', rand());
	$('.body .mouth').attr('data-answer', rand());
	
	$('.sideboard .eye-1').click(function(){
		$('.body .eye').attr('style', 'background: url(\'body-eye-1.png\'); background-size: 100% auto;');
		$('.body .eye').attr('data-id', 1);
	});
	$('.sideboard .eye-2').click(function(){
		$('.body .eye').attr('style', 'background: url(\'body-eye-2.png\'); background-size: 100% auto;');
		$('.body .eye').attr('data-id', 2);
	});
	$('.sideboard .eye-3').click(function(){
		$('.body .eye').attr('style', 'background: url(\'body-eye-3.png\'); background-size: 100% auto;');
		$('.body .eye').attr('data-id', 3);
	});
	
	$('.sideboard .nose-1').click(function(){
		$('.body .nose').attr('style', 'background: url(\'nose-1.png\'); background-size: 100% auto;');
		$('.body .nose').attr('data-id', 1);
	});
	$('.sideboard .nose-2').click(function(){
		$('.body .nose').attr('style', 'background: url(\'nose-2.png\'); background-size: 100% auto;');
		$('.body .nose').attr('data-id', 2);
	});
	$('.sideboard .nose-3').click(function(){
		$('.body .nose').attr('style', 'background: url(\'nose-3.png\'); background-size: 100% auto;');
		$('.body .nose').attr('data-id', 3);
	});
	
	$('.sideboard .mouth-1').click(function(){
		$('.body .mouth').attr('style', 'background: url(\'mouth-1.png\'); background-size: 100% auto;');
		$('.body .mouth').attr('data-id', 1);
	});
	$('.sideboard .mouth-2').click(function(){
		$('.body .mouth').attr('style', 'background: url(\'mouth-2.png\'); background-size: 100% auto;');
		$('.body .mouth').attr('data-id', 2);
	});
	$('.sideboard .mouth-3').click(function(){
		$('.body .mouth').attr('style', 'background: url(\'mouth-3.png\'); background-size: 100% auto;');
		$('.body .mouth').attr('data-id', 3);
	});
	
	$('.div_ok a').click(function(){
		var eye = $('.body .eye').attr('data-id');
		var nose = $('.body .nose').attr('data-id');
		var mouth = $('.body .mouth').attr('data-id');
		
		var answer_eye = $('.body .eye').attr('data-answer');
		var answer_nose = $('.body .nose').attr('data-answer');
		var answer_mouth = $('.body .mouth').attr('data-answer');
		
		var text = '';
		var count = 0;
		
		if(eye==answer_eye){
			text = text+'глаза, ';
			count = count+7;
		}
		if(nose==answer_nose){
			text = text+'нос, ';
			count = count+5;
		}
		if(mouth==answer_mouth){
			text = text+'рот, ';
			count = count+5;
		}
		
		if(text!=''){
			if(count==17){
				VK.api('wall.post', {message: "Я выиграл в Purble Place! Сможешь ли так же? Присоединяйся к нам: https://vk.com/app3727575", attachments:'photo174641510_356590796,https://vk.com/app3727575'}, function(data){
					location.reload();
				});
			}else{
				text = text.substr(0, (count-2));
				add_console_text('Вы что-то угадали!', 'Вы угадали: '+text, 'green');
			}
		}else{
			add_console_text('Вы ничего не угадали :(', '', 'red');
		}
	});
	
	setTimeout(function(){
		ok_btn_1()
	}, 10000);
	
	setTimeout(function(){
		$('.undefined .shtora-1').animate({width: '65px'}, 700);
		$('.undefined .shtora-2').animate({width: '65px'}, 700);
	}, 3000);
});