// var user = {
//     login: function (name, password) {
//         $.post('http://192.168.172.44:8000/admin/login', {
//             'user_name': name,
//             'password': password
//         }).then(function (res) {
//             if (res.code === 200) {
//                 //alert("登录成功");
//                 window.location.href = "./index.html";
//             }
//             else {
//                 alert(res.msg);
//             }
//         })
//         console.log(name, password)

//     }
// }


var user = {
   // login: function (name, password) {
   //     $.post(APILIST.user_login, {
   //         'user_name': name,
   //         'password': password
   //     }).then(function (res) {
   //         if (res.code === 200) {
   //             //alert("登录成功");
   //             window.location.href = "./index.html";
   //         }
   //         else {
   //             alert(res.msg);
   //         }
   //     })
   //     console.log(name, password)

   // },
   login: function (name, password) {
      return $.post(APILIST.user_login, {
         'user_name': name,
         'password': password
      })

   },
   //用户退出
   // logout: function () {
   //     $.post(APILIST.user_logout).then(function (res) {
   //         if (res.code === 200) {
   //             alert("成功退出");
   //             window.location.href = "./login.html";
   //         }
   //         else {
   //             alert(res.msg);
   //         }

   //     })
   // },
   logout: function () {
      return $.post(APILIST.user_logout)
   },
   //获取信息
   getInfo: function () {
      return $.get(APILIST.user_getInfo)
   }
   // getInfo: function () {
   //     $.get(APILIST.user_getInfo).then(function (res) {
   //         console.log(res);
   //         if (res.code === 200) {
   //             $('#userName').text(res.data.nickname);
   //             $('.userImg').attr('src', res.data.user_pic)
   //         }

   //     });
   // }
}