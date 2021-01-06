$("#our-team-button").click(function(){ 
    scrollToAnchor('team-members-gallery');
})

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}
