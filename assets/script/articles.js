$(function () {
    function CKupdateArticleEdition(){
        for ( instance in CKEDITOR.instances )
            CKEDITOR.instances['articleContentEdition'].updateElement();
    }function CKupdateCommentary(){
        for ( instance in CKEDITOR.instances )
            CKEDITOR.instances['contentCommentary'].updateElement();
    }
    var commentaryEdition = $('.commentaryEdition');
    var commentary_content =$('.commentary_content');
///////////////////////////////////
    // Get the modal
    var modal = document.getElementById('myModal');



// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
       commentaryEdition.click(function(){
           for(var i=0 ; i<)
        CKEDITOR.instances['contentCommentaryEdition'].setData(commentary_content.html());
        modal.style.display = "block";
    });

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };


    var articlesFormEdition = $('#articlesFormEdition');
    var commentaryForm = $('#commentaryForm');
    var errorCommentary = $('#errorCommentary');
    var imgEditionArticle= $('#imgEditionArticle');
    var fullContentCommentary = $('#fullContentCommentary');
    var formEdition = $('#formEdition');
    var resultEdition = $('#resultEdition');
    var titleContent = $('#titleContent');
    var descriptionContent = $('#descriptionContent');
    var articleContent = $('#articleContent');
    var articleContentEdition = $('#articleContentEdition');
    var titleEdition = $('#titleEdition');
    var descriptionEdition = $('#descriptionEdition');




    formEdition.css('display','none');
    imgEditionArticle.click('slideToggle',function(){
        fullContentCommentary.css('display','none');
        formEdition.css('display','block');
        titleEdition.val(titleContent.html());

        console.log(titleContent.html());
        console.log(descriptionContent.html());

        descriptionEdition.val(descriptionContent.html());
        CKEDITOR.instances['articleContentEdition'].setData(articleContent.html());
    });

    articlesFormEdition.submit(function(){
        CKupdateArticleEdition();
        var formValid = true;
        var  $this = $(this);
        var $titleEdition = $('#titleEdition').val();
        var $descriptionEdition = $('#descriptionEdition').val();

        var $articleContentEdition = CKEDITOR.instances['articleContentEdition'].getData();

        if(formValid){

            $.ajax({
                url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
                type: $this.attr('method'), // La méthode indiquée dans le formulaire (get ou post)
                data: {titleEditing :$titleEdition,descriptionEditing:$descriptionEdition,contentEditing : $articleContentEdition},
                dataType: 'json', // JSON,

                success: function(data)
                {
                    console.log('yo');

                    if(data.success === true){
                        resultEdition.html('L\'article à bien été modifié');
                        // titleContent.html($titleEdition);
                        // descriptionContent.html($descriptionEdition);
                        // articleContent.html($articleContentEdition);


                    }else{
                        resultEdition.html(data.errors['field']);
                        resultEdition.html(data.errors['content']);
                    }

                },
                error: function(response,statut,error){
                    console.log(response,statut,error);
                }
            });
        }


        return false;
    });


    commentaryForm.submit(function(){
        CKupdateCommentary();
        var formValid = true;
       var  $this = $(this);
       var divCommentary = $('#commentary');
       // var $contentCommentary = $('#contentCommentary').val();
       // var $contentCommentaryInput = $('#contentCommentary');
    /*    if($contentCommentary === ''){
            formValid = '';
            errorCommentary.html('Field missing');
        }*/
    var $content = CKEDITOR.instances['contentCommentary'].getData();
    console.log($content);
        if(formValid){

            $.ajax({
                url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
                type: $this.attr('method'), // La méthode indiquée dans le formulaire (get ou post)
                data: {content : $content},
                dataType: 'json', // JSON,

                success: function(data)
                {
                    console.log('yo');

                     if(data.success === true){


                     }
                }
            });
        }


        return false;
    });


});