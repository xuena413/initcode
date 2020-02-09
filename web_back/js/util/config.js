//配置文件
//把项目用到的接口全用在这里

var BASEURL = 'http://localhost:8000'
//var BASEURL = 'http://192.168.0.107:8000'
var APILIST = {
    user_login: BASEURL + '/admin/login',
    user_logout: BASEURL + '/admin/logout',
    user_getInfo: BASEURL + '/admin/getuser',

    //获取文章分类
    category_get: BASEURL + '/admin/category_search',
    //添加文章分类
    category_add: BASEURL + '/admin/category_add',
    category_del: BASEURL + '/admin/category_delete',
    category_edit: BASEURL + '/admin/category_edit',
}
