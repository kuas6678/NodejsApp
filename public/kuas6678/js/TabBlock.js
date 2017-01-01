$(function(){
    var _showTabInd = 0;
    //透過each方法，規範每個物件皆須綁定的動作
	$(".myTab").each(function(index, element) {
        var $tab = $(this);
	    //綁定物件的click事件
        $("ul.tab-ul li", $tab).click(function () {
            //建立$this變數，並將觸發事件的物件使用$this變數儲存
            var $this = $(this),
                //取得物件的target屬性
			    _clickTab = $this.data('target');
            //於物件上新增class屬性，同時尋找其他擁有active的class屬性的物件
            //將該物件class屬性的active值移除
            $this.addClass("active").siblings(".active").removeClass("active");
            //將子區塊的內容以淡入的方式顯示，同時尋找其他的子區塊，並將該區塊隱藏
			$(_clickTab).stop().fadeIn().siblings().hide();
		});
	    //呼叫物件的hide方法，隱藏物件
        $('.tab_content', $tab).hide();
	    //呼叫物件中_showTabInd的click事件
		$("ul.tab-ul li",$tab).eq(_showTabInd).click();
		
    });
});