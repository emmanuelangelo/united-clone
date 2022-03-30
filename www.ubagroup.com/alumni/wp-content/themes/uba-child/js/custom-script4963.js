jQuery(function ($) {

//netcore
  $('form').submit(function(e){
       
    var value = document.querySelector('input[type=email]').value;
        smartech('contact', '78', {
        'pk^email': { value }
    });
    
    });
    

/* Reomving country link from current country flag */
    
$('.subsidiary_dropdown a.current-site').attr('href','javascript:;');
    

/* prepaid cards */

$('#prepaidcard-tool input[type="submit"]').click(function(){
    
    var mastercard = ['539586', '528829', '522613', '525988', '528503', '530332', '543607', '543776', '548926', '543232', '543317', '543352', '543411', '543423', '543561', '559107', '531986', '535025', '529147', '529820']
    var visa = ['484842', '445493, 403525', '414564', '457277', '457278', '457276', '457793', '406173', '428692', '457279', '444583', '484133', '457280', '418761', '471443', '471422', '418762', '457281', '445493', '403880']

    var ID = document.getElementById('prepaid-input').value;
    var i = mastercard.indexOf(ID);
    var j = visa.indexOf(ID);

    if (i > -1) {
        var url = "https://mybankcardportal.unifiedpaymentsnigeria.com:1070/?restoreParams";
        window.open(url, '_blank');
    }
    else if (j > -1) {
        var url = "https://www.gtpsecurecard.com/UBA/Login.aspx";
        window.open(url, '_blank');
    }
    else {
        document.getElementById('pre-message').innerHTML = 'Please enter a valid PAN';
        //document.getElementById("myDiv").style.borderColor = "red";
    }
    
});
    
/* Search */
$( "#dsh-menu-search-btn" ).click(function(){
    $( "form.search" ).css({
         'display': 'flex'
     });
});

function closeSearch(){
  $( "form.search" ).fadeOut( "fast", function() {});
  $( "input.search-input" ).val('');
}

$( ".close-search" ).click(function(){
    closeSearch();
});

$(document).on('keyup',function(r) {
    if(($( "form.search" ).css('display') !== 'none') && (r.keyCode == 27)) {
        closeSearch();
    }
});
    

function format2(n) {
    return "₦" + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

    /* Savings Calculator */
    $('#savings-amount, #savings-time, #savings-years, #savings-balance').on("keyup change", function () {
    	$('.savings-jumbotron .text-center').empty();
    	var amount = parseInt($('#savings-amount').val());
    	var balance = parseInt($('#savings-balance').val());
    	var time = parseInt($('#savings-time').val());
    	var years = $('#savings-years').val();
    	var save_amount = parseFloat((amount - balance) / (savings_duration(years) * time));
    	
    	if(isNaN(save_amount)){
    		var result = "<div class = 'text-center'>\
    		<p>You need to save</p>\
    		<h2>&#8358 0 per" + years +"</h2>\
    		<p>to reach your goal of &#8358 0 in 0" + years+"</p>\
    		</div>";
    
    		$('.savings-jumbotron').append(result);
    
    	}
    	else{
    		var result = "<div class = 'text-center'>\
    		<p>You need to save</p>\
    		<h2>&#8358 " + save_amount.toFixed(2) +  " per " + savings_duration_text(years) + "</h2>\
    		<p>to reach your goal of &#8358 " + amount + " in " +time+ " " + years +"</p>\
    		</div>";
    		$('.savings-jumbotron').append(result);
    	}
    });
    function savings_duration(years){
    	switch(years){
    		case "Years":return 12;
    		case "Month":return 28;
    		default:return 0;
    	}
    }
    function savings_duration_text(years){
    	switch(years){
    		case "Years":return "month";
    		case "Month":return "day";
    		default:return 0;
    	}
    }
    
    //end of savings
    
    
    //loan calculator
    /* new loan calculator page */
    $('#loan-amount, #loan-interestrate, #loan-duration').on("keyup change", function () {
      var loan_amount = $('#loan-amount').val();
      if (loan_amount == '') {} else {
        var loan_amount = parseFloat(loan_amount.replace(/[^0-9 | ^.]/g, ''));
        var months = $('#loan-duration').val();
    
        if (months == 0) { months = 1; }
    
        var interest_rate = $('#loan-interestrate').val();
        var interest_total = loan_amount * interest_rate / 100;
        var amount_and_interest = loan_amount + interest_total;
        var monthly_pay = amount_and_interest / months;
        $('#loan-totalpayment').val(format2(monthly_pay));
        $('#loan-monthlypayment').val(format2(monthly_pay * months));
        }
    });
   var xx_cognideck = window.location.href;
if ( xx_cognideck.match("ubany.com") == null ) {
    $('#uba-mobile-menu > a').click(function(e) {
        e.preventDefault();

            $('body.header-transparency').removeClass("mobile-search-only mobile-menu-open login-sub");
            
            $('body.header-transparency').toggleClass("mobile-menu-open login-sub");
            var h = $('header#dsh-header').height() + 7 + "px";
            $('.dsh-mobile-menu-scroll').css('margin-top', h );
            $('#dsh-uba-login-top, #dsh-page-overlay').toggleClass('show');
    })
}
    
    $('#dsh-mobile-search-btn').click(function(e) {
        e.preventDefault();

            $('body.header-transparency').removeClass("mobile-search-only mobile-menu-open login-sub");
            
            $('body.header-transparency').toggleClass("mobile-menu-open mobile-search-only");
            $('.dsh-mobile-menu-scroll').css('margin-top', "70px" );
            $('#dsh-page-overlay').toggleClass('show');
    });
    
    $('#dsh-mobile-menu-button').click(function() {
        
        if ( $('body.header-transparency').hasClass("mobile-menu-open") == true ) {
                $('body.header-transparency').removeClass( "mobile-search-only login-sub" )
                $('#dsh-page-overlay').removeClass('show');
            }
    });
    
    
    // compare card feature
    $(function(){
        var options = [];
        var value;
        $(".compare-cardtbl tr td").hide();
        $('select.compare-card').change(function(){
            for(var y in options){
                 console.log(y);
                value = Number(options[y])+1;
                $('.compare-cardtbl tr td:nth-child('+value+')').hide();
            }
            if(options.indexOf($(this).val()) <= -1){
                options[$(this).attr('id')] = $(this).val();
            }
            $('select.compare-card').children().removeAttr('disabled');
            for(var x in options){
                value = Number(options[x])+1;
                $('select.compare-card option:nth-child('+value+')').attr("disabled", "true");
                $(".select.compare-card option[value='0']").removeAttr('disabled');
                $('.compare-cardtbl tr td:nth-child(1)').show();
                $('.compare-cardtbl tr td:nth-child('+value+')').show();
                
            }
            
            
              

        });
        
        
        
    
    });
    
    $( document ).ready(function() {
        // $( "select#gtranslate_selector" ).val($("select#gtranslate_selector option:first").val());
        $( "select#gtranslate_selector" ).val("");
    });
    
});

