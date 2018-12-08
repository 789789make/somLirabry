function getPosition(eve){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop
			var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft
			return {x:eve.clientX+scrollLeft,y:eve.clientY+scrollTop}
		}