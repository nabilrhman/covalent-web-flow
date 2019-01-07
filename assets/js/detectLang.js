// Usage
$(document).ready(function() {
    // get the API result via jQuery.ajax
    $.ajax({
        url: 'findUserLanguage.php',   
        dataType: 'html',
        success: function(languageData) {
            
            if(languageData == 'zh')
            {
                $('.us').hide();
                $('.zh').show();
            }
            else
            {
                $('.zh').hide();
            }
            
        }
    });
});


