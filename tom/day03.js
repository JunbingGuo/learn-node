/**
 *深入理解JavaScript系列（3）：全面解析Module模式 
 */

// var Calculator = function(eq) {
//     var eqCtl = document.getElementById(eq);
//     return {
//         add: function(x, y) {
//             var val = x + y;
//             eqCtl.innerHTML = val;
//         }
//     }
// }

// var cal = new Calculator('app');
// cal.add(2,3);

// 全局变量
var global = 'global';
var obj = {
    name: '2222',
};

// var blogModule = (function(params) {
//     var my = {}, privateName = '名字';
//     function privateTopic(data) {
//         console.log(data);
//     }

//     my.Name = privateName;
//     my.AddTopic = function(data) {
//         privateTopic(data);
//         console.log(params.name);
//     }

//     return my;
// })(obj);

// blogModule.AddTopic(global);
// console.log(blogModule.Name);
// 扩展

// var blogModule = (function(my) {
//     my.print = function(data) {
//         console.log(data);
//     }
//     return my;
// })(blogModule);

// blogModule.print('ssssss');
// // blogModule.AddTopic(global);
// console.log(blogModule.Name);

/**
 * 松耦合扩展，不需要加载顺序
 */
var blogModule = (function(my) {
    my.Name = '松耦合';
    my.log = function(data) {
        console.log(data);
    }
    my.add = function(data) {
        return my.Name + data;
    }
    return my;
}(blogModule || {}));
blogModule.log('test');
blogModule.log(blogModule.Name);
blogModule.log(blogModule.add('123'));

/**
 * 紧耦合扩展，重载方法
 */

 var blogModule = (function(my) {
    var oldAdd = my.add;
    my.add = function(data) {
        return my.Name + ':' + data;
    }
    my.oldAdd = oldAdd;
    return my;
 }(blogModule));
blogModule.log(blogModule.add('123'));
blogModule.log(blogModule.oldAdd('123'));
/**
 * 克隆与继承
 */
var blogModule = (function(old) {
    var my = {}, key;

    for (key in old) {
        if (old.hasOwnProperty(key)) {
            my[key] = old[key];
        }
    }

    var oldAdd = old.add;
    my.add = function(data) {
        return my.Name + '----' + data;
    }
    my.oldAdd = oldAdd;

    return my;
}(blogModule));
console.log('=========================');
blogModule.log(blogModule.add('123'));
blogModule.log(blogModule.oldAdd('123'));

/**
 * 跨文件共享私有对象
 */

 var blogModule = (function(my) {
    var _private = my._private = my._private || {},
        _seal = my._seal = my._seal || function() {
            delete my._private;
            // delete my._seal;
            // delete my._unseal;
        },
        _unseal = my._unseal = my._unseal || function() {
            my._private = _private;
            // my._seal = _seal;
            // my._unseal = _unseal;
        };
    my.get = function(data) {
        return my[data] || 'undefined or private';
    }
    my.set = function(data) {
        _private[data] = data;
    }
    return my;
 }(blogModule || {}));
 console.log('==========================');
 blogModule.set('dd');
 blogModule._seal();
//  console.log(blogModule.get('_private'));
console.log(blogModule._private);
 blogModule._unseal();
//  console.log(blogModule.get('_private'));
console.log(blogModule._private);


