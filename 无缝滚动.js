window.onload=function(){
	// 获取文档中的div1块元素
	var oDiv=document.getElementById('div1');
	// 获取div1块元素中的无序列表元素
	var oUl=oDiv.getElementsByTagName('ul')[0];
	// 获取无序列表中所有的列表项节点
	var aLi=oUl.getElementsByTagName('li');
	// 把无序列表中的HTML文件再增加一份
	oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
	// 让无序列表的长度等于列表中所有的列表项的长度
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	var timer=null;
	var speed=2;
	function move(){
		// 如果无序列表已经向左边移动一半以上的距离时,使他向右移动本身一般的距离
		if(oUl.offsetLeft<-oUl.offsetWidth/2)
		oUl.style.left='0';
		// 如果无序列表向右开始移动,那么立刻使之向左移动本身一般的距离
		if(oUl.offsetLeft>0)
		oUl.style.left=-oUl.offsetWidth/2+'px';
		// 改变无序列表在父元素中的位置
		oUl.style.left=oUl.offsetLeft+speed+'px';
	}
	// 定义一个计时器,每30毫秒执行一次
	// 计时器将会使无序列表每30毫秒移动speed个距离
	timer=setInterval(move,30);
	// 鼠标移入div时清除计时器
	oDiv.onmouseover=function(){
		clearInterval(timer);
	};
	// 鼠标移出块元素之后开启计时器
	oDiv.onmouseout=function(){
		timer=setInterval(move,30);
	};
	// 点击按钮,无序列表向左移动
	document.getElementsByTagName('input')[0].onclick=function(){
		speed=-2;
	};
	// 点击按钮,无序列表向右移动
	document.getElementsByTagName('input')[1].onclick=function(){
		speed=2;
	};
	
	
};