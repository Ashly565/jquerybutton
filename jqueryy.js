
 $(document).ready(function(){
 $("#btn").click(function(){
    alert("done")
 })
    $("#box").click(function(){
       $(this).hide(4000)
    })

    $("#btn").mouseenter(function(){
        $(this).css({"background":"yellow" ,"font-size":"25px","color":"blue"})


            $("#btn").mouseleave(function(){
            $(this).css({"background":"orange","font-size":"18px","color":"maroon"})
        })
    })
 })