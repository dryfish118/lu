// var product_list = $('.product-list');
// for (var i = 0; i < product_list.length; i++) {
//     console.log('product list');
// }

//window.location.host = "www.lu.com";

var LuProduct = {
    createProduct: function() {
        var product = {};
        product.name = "";
        product.link = "";
        product.rate = 0;
        product.amount = 0;
        return product;
    }
};

$('.product-list').each(function() {
    var product = LuProduct.createProduct();
    $(this).find('.product-name').each(function() {
        var a = $(this).find('a');
        product.name = a.text();
        product.link = a.attr('href');
        return false;
    });
    $(this).find('.interest-rate .num-style').each(function() {
        product.rate = $(this).text();
        return false;
    });
    $(this).find('.product-amount .num-style').each(function() {
        product.amount = $(this).text();
        return false;
    });

    console.log('Product');
    console.log('    name:\t%s', product.name);
    console.log('    link:\t%s', product.link);
    console.log('    rate:\t%f%%', parseFloat(product.rate));
    console.log('    amount:\t%f', parseFloat(product.amount));

    return false;
});


// $('.product-list').each(function() {
//     console.log('product list');
//     $(this).find('.product-name').each(function() {
//         console.log('  product-name');
//         var a = $(this).find('a');
//         //console.log('    %s %s', a.attr('href').val(), a.text());
//         console.log('    %s', a.text());
//         console.log('    %s', a.attr('href'));
//     });
//     $(this).find('.interest-rate .num-style').each(function() {
//         console.log('    rate: %s', $(this).text());
//     });
//     $(this).find('.product-amount .num-style').each(function() {
//         console.log('    amount: %s', $(this).text());
//     });
// });

console.log('user id: %s', $('#userId').val());
$('.user-name').each(function() {
    console.log('user name: %s', $(this).text());
});

var lnk = "https://user.lu.com/user/service/user/current-user-info-for-homepage";
$.ajax({
    url: lnk,
    dataType: "json",
    success: function(data) {
        console.log('user id: %s', data.uid);
        console.log('user name: %s', data.userName);
    },
    error: function() {
        console.log("failed to get user name");
    }
});