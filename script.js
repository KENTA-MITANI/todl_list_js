'use strict';
console.log('ok');

// todoを追加する関数
function addTodo() {
    // let todo_list = document.getElementsByClassName('li_parent');
    
    // テキストボックスの入力値取得
    let inputVal = document.getElementById('input').value;

    // リストの親要素取得
    let listParent = document.getElementById('li_parent');

    // 追加するli要素を作成
    let addList = document.createElement('li');
    
    // 作成したli要素に対して入力値をセット
    addList.innerText = inputVal;

    //  追加するtodoを子要素として親要素に追加
    listParent.appendChild(addList);
}