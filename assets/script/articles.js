$(function () {

    var commentaryForm = $('#commentaryForm');
    var errorCommentary = $('#errorCommentary');
    commentaryForm.submit(function(){
        var formValid = true;
       var  $this = $(this);
       var $divCommentary = $('.commentary');
        var $contentCommentary = $('#contentCommentary').val();
        var $contentCommentaryInput = $('#contentCommentary');
        if($contentCommentary === ''){
            formValid = '';
            errorCommentary.html('Field missing');
        }
        if(formValid){
            $.ajax({
                url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
                type: $this.attr('method'), // La méthode indiquée dans le formulaire (get ou post)
                data: $this.serialize(),
                dataType: 'json', // JSON,

                success: function(data)
                {
                    console.log('yo');

                     if(data.success === true){
                         console.log('c ok');

                        var div = $divCommentary.length -1;
                        console.log(div);
                        div.text($contentCommentary);
                         $contentCommentaryInput.html('');
                     }
                }
            });
        }


        return false;
    });


});