$(window).on('load', function() {
  var website = $("input[name=level]:checked").val();
  var copypages = parseFloat($("input[name=copypages]").val());
  var noncopypages = parseFloat($("input[name=noncopypages]").val());
  var delivery = parseFloat($("input[name=delivery]:checked").val());
  
  $("#website-type span").html(website);
  $("#copywriting-num span").html(copypages);
  $("#non-copywriting-num span").html(noncopypages);
  $("#delivery span").html(noncopypages);
  $("#add-ons span").html(delivery);
  
  switch (website) { 
    case 'Branded': 
      var WebPrice = 2500;
      var PricePerPage_copy = 150;
      var PricePerPage_noncopy = 75;
      break;
    case 'Personalized': 
      var WebPrice = 3500;
      var PricePerPage_copy = 250;
      var PricePerPage_noncopy = 100;
      break;
    case 'Ultimate': 
      var WebPrice = 6000;
      var PricePerPage_copy = 300;
      var PricePerPage_noncopy = 150;
      break;
    default:
      var WebPrice = 2500;
  }
  var total = WebPrice + (copypages * PricePerPage_copy) + (noncopypages * PricePerPage_noncopy);
  $("#amount").html("$"+(total).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
});
$(document).on('input change', 'form.pricing-calculator :input', function() {
  var website = $("input[name=level]:checked").val();
  var copypages = parseFloat($("input[name=copypages]").val());
  var noncopypages = parseFloat($("input[name=noncopypages]").val());
  var delivery = $("input[name=delivery]:checked").val();
  var ssl = $("input[name=ssl]:checked").val();
  var ecommerce = $("input[name=ecommerce]:checked").val();
  
  switch (ssl) { 
    case 'SSL': 
      var ssladdon = 100;
      var sslchosen = "Yes";
      break;
    default:
      var ssladdon = 0;
      var sslchosen = "No";
  }
  switch (ecommerce) { 
    case 'Ecommerce': 
      var ecommerceaddon = 3000;
      var ecommercechosen = "Yes";
      break;
    default:
      var ecommerceaddon = 0;
      var ecommercechosen = "No";
  }
  
  $("#website-type span").html(website);
  $("#copywriting-num span").html(copypages);
  $("label[for=copypages] span").html(copypages);
  $("#non-copywriting-num span").html(noncopypages);
  $("label[for=noncopypages] span").html(noncopypages);
  $("#delivery span").html(delivery);
  $("#add-ons span").html(ssl);
  
  switch (website) { 
    case 'Branded': 
      var WebPrice = 2500;
      var PricePerPage_copy = 150;
      var PricePerPage_noncopy = 75;
      break;
    case 'Personalized': 
      var WebPrice = 3500;
      var PricePerPage_copy = 250;
      var PricePerPage_noncopy = 100;
      break;
    case 'Ultimate': 
      var WebPrice = 6000;
      var PricePerPage_copy = 300;
      var PricePerPage_noncopy = 150;
      break;
    default:
      var WebPrice = 2500;
  }
  switch (delivery) { 
    case 'Basic': 
      var DeliveryCost = 1;
      break;
    case 'Fast': 
      var DeliveryCost = 1.10;
      break;
    case 'Express': 
      var DeliveryCost = 1.25;
      break;
    default:
      var DeliveryCost = 1;
  }
  
  var total = (WebPrice + (copypages * PricePerPage_copy) + (noncopypages * PricePerPage_noncopy) + ssladdon + ecommerceaddon) * DeliveryCost;
  $("#amount").html("$"+(total).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

});