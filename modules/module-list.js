(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wimr";
    //-------------------------------------------------------------------------------------
    m[p+"sites"]             ={url:H+"/business/sites/page.html",form_module:'jsonv',prefix:p};
    m[p+"site-content-list"] ={url:H+"/business/site-content-list/page.html",form_module:'jsonv',prefix:p};
    m[p+"item-list"]         ={url:H+"/business/item-list/page.html",form_module:'jsonv',prefix:p};
    m[p+"incident-reports"]  ={url:H+"/business/incident-reports/page.html",form_module:'jsonv',prefix:p};
    m[p+"communal-order"]    ={url:H+"/business/communal-order/page.html",form_module:'jsonv',prefix:p};
    

    
})();
