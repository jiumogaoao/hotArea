var autoHotArea=function(){
	var container,stage,width=100,height=100,conA= new createjs.Container(),conB= new createjs.Container(),img= new Image()
	function init(){
		var canvas = document.getElementById(container);
    	stage = new createjs.Stage(canvas);
    	canvas.width = width;
    	canvas.height = height;
    	stage.addChild(conA);
    	stage.addChild(conB)
    	img.onload=function(){
				bg=new createjs.Bitmap(img);
				conA.addChild(bg); 	
    		}
    		
    	createjs.Ticker.on("tick",tick);
		function tick(event){
			var l = conB.getNumChildren();

			for (var i=0; i<l; i++) {
				var child = conB.getChildAt(i);
				child.alpha = 0;
				var pt = child.globalToLocal(stage.mouseX, stage.mouseY);
				if (stage.mouseInBounds && child.hitTest(pt.x, pt.y)) { child.alpha = 0.5; }
				stage.update();
			}
		}
	}
	function reload(){
		img.src = "plan.jpg";
	}
}