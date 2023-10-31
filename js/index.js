

$(".project").on("click", function(){
    console.log(this);
    $("#highlightedWork").slideDown(200)
    if ($(this).hasClass("gifts-for-seniors") ) {
        console.log("has Class gifts-for-seniors")
        $("#gifts").css("postition", "relative");
        $("#gifts").css("opacity", "1");
        
        $("#usda").css("postition", "absolute");
        $("#usda").css("opacity", "0");

        $("#gifts").css("display", "flex");
        $("#usda").css("display", "none");
    } else {
        console.log("else")
        $("#usda").css("opacity", "1");
        $("#gifts").css("opacity", "0");
        $("#gifts").css("postition", "absolute");
        $("#usda").css("postition", "relative");
        $("#gifts").css("display", "none");
        $("#usda").css("display", "flex");
        
    }
    $("#highlightedWork").css("position", "relative");
    $("#highlightedWork").css("opacity", "1");
});
