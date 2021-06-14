
function fun_Goto_ItemDetail(inputId) {
    window.location.href = "/Description/" + inputId;
}
function fun_Goto_Category(inputId) {
    window.location.href = "/Category/" + inputId;
}

function fun_Goto_Category2(inputId, itemName) {
    window.location.href = "/category/" + inputId + "/" + itemName;
}
function fun_Goto_ItemDetail2(inputId, itemName) {
    window.location.href = "/description/" + inputId + "/" + itemName;
}

function fun_Goto_ItemDetail3(urlLink) {
    window.location.href = urlLink;
}

function filter_text(t) {
    var res = t.toLowerCase();
    res = res.replace('+', '-')
    res = res.replace('$', '')
    res = res.replace('&', '-')
    return res;
}

function Goto_iOS() {
    //window.location.href = "https://apps.apple.com/kw/app/icards-kuwait/id533084002";
    odmp_KV('app', 'ios')
    window.open('https://apps.apple.com/kw/app/icards-kuwait/id533084002', '_blank');
}

function Goto_Android() {
    //window.location.href = "https://play.google.com/store/apps/details?id=com.conceptkw.icards&hl=en&gl=US";
    odmp_KV('app', 'android')
    window.open('https://play.google.com/store/apps/details?id=com.conceptkw.icards&hl=en&gl=US', '_blank');
}



function goto_apple_store() {
    window.open('https://apps.apple.com/kw/app/icards-kuwait/id533084002', '_blank');
}
function goto_play_store() {
    window.open('https://play.google.com/store/apps/details?id=com.conceptkw.icards&hl=en&gl=US', '_blank');    
}

function show_country_list() {    

    var uid = document.getElementById("ctl00_hdn_user_id").value;
    
    if (uid != 0) {
        return;
    }
    var st = document.getElementById('country_list_container').classList.contains('hedden');

    if (st == true) {
        document.getElementById('country_list_container').classList.remove('hedden');
    } else {
        document.getElementById('country_list_container').classList.add('hedden');
    }
        
} 
function hide_country_list() {
    if (document.getElementById('country_list_container').classList.contains('hedden')==true) document.getElementById('country_list_container').classList.add('hedden');
} 