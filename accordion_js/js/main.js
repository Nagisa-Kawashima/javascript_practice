'use strict';
{
    const dts = document.querySelectorAll('dt');

    dts.forEach(dt => {
        dt.addEventListener('click', () => {
            dt.parentNode.classList.toggle('appear');
        });
        dts.forEach(el => {
            if (dt !== el) {
                el.parentNode.classList.remove('appear')
            }
        });
    });
}

// classListとは
// 特定の要素のクラス名を追加したり、削除したり、参照したりすることが出来る便利なプロパティです！
// classListの後にメソッドを定義することにより、追加削除などの機能を指定することができます！

// add	クラスを追加する
// remove	クラスを削除する
// contains	クラスが含まれているか確認する
// toggle	クラスが含まれていれば削除、
// 含まれていなければ追加する

//  el に入ってくるのはそれぞれの dt 要素ですが、こちらの dt と区別するために、変数名を el としていると理解してください。