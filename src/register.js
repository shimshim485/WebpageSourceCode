/*등록할까요 라고 물어보는 창*/
function register(){
	var ret= confirm("등록할까요"); 
	if(ret == true) {/*확인 누르면 등록되었다는 창이 뜸*/
		alert('등록되었습니다.')
	}
}
function time(){
	var today = new Date();/*새로운 Date객체에 현재시간을 호출*/
	alert("현재 시간 : "+ today.toLocaleString());
}
function changeBodyBg(color){/*color색으로 배경이 바뀜*/
    document.body.style.background = color;
}

