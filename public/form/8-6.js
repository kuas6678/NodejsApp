$(function() {
    $("#btnSub").click(function() {
        var frmData = $("#form1").serialize();
        $.ajax({
            type: "POST",
            url: "android_connect_db.aspx",
            cache: false,
            data: frmData,
            success: function(data) {
                alert(data);
                if (data == "True") {
                    $("#divTip").html("動作提示，登入成功！");
                }
                else {
                    $("#divTip").html("使用者名稱或密碼錯誤！");
                }
            }
        })
        return false;
    })
})