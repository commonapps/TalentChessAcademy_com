$(document).ready(function () {
 
});


/*Concept Combined Code*/

function odmp_onair(type) {
    var _id = getParameterByName("Id");
    if (_id == '') {
        _id = getParameterByName("id");
    }

    if (_id != '') {
        var onair_tag = ''
        if (type == 'cat') {
            onair_tag = '<img src="https://tags.bluekai.com/site/89350?ret=js&limit=4&phint=catid%3D' + _id + '" width="1" height="1" alt=""/>'
        }
        if (type == 'item') {
            onair_tag = '<img src="https://tags.bluekai.com/site/89350?ret=js&limit=4&phint=item%3D' + _id + '" width="1" height="1" alt=""/>'
        }

        if (onair_tag != '') {
            document.getElementById('odmp_container').innerHTML = onair_tag;
        }

    }
}


function odmp(obj) {
    var _itemid = obj.itemid;
    var _qty = obj.qty;
    var _price = obj.price;

    var pricerng_value = price_range(_price)
    var qtyrng_value = qty_range(_qty);

    //alert('price' + pricerng_value);
    //alert('Qty' + qtyrng_value);

    var url = 'https://tags.bluekai.com/site/89350?ret=js&limit=4&phint=itemid%3D' + _itemid + '&phint=pricerng%3D' + pricerng_value + '&phint=qtyrng%3D' + qtyrng_value

    var onair_tag = ''
    onair_tag = '<img src="' + url + '" width="1" height="1" alt=""/>'

    if (onair_tag != '') {
        document.getElementById('odmp_container').innerHTML = onair_tag;
    }

}

function odmp_KV(_key, _value) {
    var url = 'https://tags.bluekai.com/site/89350?ret=js&limit=4&phint=' + _key + '%3D' + _value
    var onair_tag = '<img src="' + url + '" width="1" height="1" alt=""/>'
    document.getElementById('odmp_container').innerHTML = onair_tag;
}




/*Support Functions*/


//Get querystring value
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function qty_range(qty) {
    var return_value = '';
    if (qty == 1) {
        return_value = '1';
    } else if (qty >= 2 && qty <= 5) {
        return_value = '2_5';
    } else if (qty >= 6 && qty <= 10) {
        return_value = '6_10';
    } else if (qty >= 11) {
        return_value = '10_1000';
    }
    return return_value;
}

function price_range(price) {
    var return_value = '';
    if (price >= 1 && price <= 5) {
        return_value = '1_5';
    } else if (price >= 6 && price <= 10) {
        return_value = '6_10';
    } else if (price >= 11 && price <= 20) {
        return_value = '11_20';
    } else if (price >= 21 && price <= 30) {
        return_value = '21_30';
    } else if (price >= 31 && price <= 40) {
        return_value = '31_40';
    } else if (price >= 41 && price <= 50) {
        return_value = '41_50';
    } else if (price >= 51) {
        return_value = '50_1000';
    }
    return return_value;
}
