let category = {
    // get: function () {
    //     return $.get(APILIST.category_get)
    // },
    // add: function (name, slug) {
    //     return $.post(APILIST.category_add, { 'name': name, 'slug': slug })
    // },
    // del: function (id) {
    //     return $.post(APILIST.category_del, { 'id': id });
    // },
    // edit: function (id, name, slug) {
    //     return $.post(APILIST.category_edit, { 'id': id, 'name': name, 'slug': slug })
    // }
    get: () => $.get(APILIST.category_get),
    add: (name, slug) => $.post(APILIST.category_add, { name, slug }),
    del: id => $.post(APILIST.category_del, { 'id': id }),
    edit: (id, name, slug) => $.post(APILIST.category_edit, { 'id': id, 'name': name, 'slug': slug })
}