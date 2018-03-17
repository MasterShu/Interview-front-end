/*
 * 请用 javascript 实现一个函数 parseUrl(url)， 将一段 url 字符串解析为 Object。
 * 例如： parseUrl("http://www.xiyanghui.com/product/list?id=123456&sort=discount#title");
 * 思路:
 *      1. 这是一个字符串的操作类型
 *      2. 可能用的方法, 截取字符串, 正则匹配, 
*/
const parseUrl = (url) => {
    const result = new Object
    const protocolIndex = url.indexOf('://')
    result.protocol = url.substring(0, protocolIndex)
    url = url.substring(protocolIndex + 3)

    const hostIndex = url.indexOf('/')
    result.host = url.substring(0, hostIndex)
    url = url.substring(hostIndex)

    const pathIndex = url.indexOf('?')
    result.path = url.substring(0, pathIndex)
    url = url.substring(pathIndex + 1)

    const queryIndex = url.indexOf('#')
    queryList = url.substring(0, queryIndex).split('&')
    const query = new Object
    queryList.forEach((e) => {
        let eIndex = e.indexOf('=')
        query[e.substring(0, eIndex)] = e.substring(eIndex + 1)
    });
    result.query = query

    result.hash = url.substring(queryIndex + 1)

    return result
}

/**
 * 结题总结, 果然没用到正则, 结题的关键也是对 url 的熟悉, 首先它不会有乱七八糟的符号啊之类的, 所以正则是不用了
 * 所有需要获取的信息, 也是位置比较特殊, 当然, 服务器/浏览器的处理也是依靠这些的, 所以以这些为边界就开干吧
 */


/* 
请用 javascript 实现一个函数 verify(text), 检查字串里面的括号是否有正确嵌套
例如:

verify("---(++++)----") -> 1
verify("") -> 1
verify("before ( middle []) after ") -> 1
verify(") (") -> 0
verify("} {") -> 1 //no, this is not a mistake.
verify("<(   >)") -> 0
verify("(  [  <>  ()  ]  <>  )") -> 1
verify("   (      [)") -> 0 

思路:
    1. 看到第一眼, 是不是很熟悉, 不错, 学习数据结构时就用过类似的例子
    2. 用 栈 这种数据结构就可以完美解决
*/

const verify = (str) => {
    let tempStack = new String
    const leftBracket = ['<', '(', '{', '[']
    const rightBracket = ['>', ')', '}', ']']
    while (str) {
        for (let index = 0; index < leftBracket.length; index++) {
            if (str[0] === leftBracket[index]) {
                tempStack = str[0] + tempStack
            } else if (str[0] === rightBracket[index]) {
                if (leftBracket[index] !== tempStack[0]) {
                    return 0
                } else {
                    tempStack = tempStack.substring(1)
                }
            }
        }
        str = str.substring(1)
    }
    if (tempStack.length > 0) {
        return 0
    }
    return 1
}

/**
 * 开始总结:
 *      1. 不错, 还是用栈这种方式来解决棒棒哒
 *      2. 这下该知道数据结构和算法多重要了吧, 只需要把所有的 左括号进栈, 然后碰到合适的就出栈, 如果两个不匹配, 恭喜你, 括号嵌套出错 ^_^
 */

/**
 *  用js写一个简单的交通灯功能，10秒绿灯倒数，3秒黄灯倒数，5秒红灯倒数，如何让三个灯不断交替重复？ 
 * 思路
 *      1. 看到的第一眼我是懵逼的, 这不就是我上学那会做 PLC 设计时, 刚开时做的习题嘛, 还没有这种编程语言实现过, 那么开始吧
 * 
 */