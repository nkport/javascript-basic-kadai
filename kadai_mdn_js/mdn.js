// 日付データの取得（Dateクラス）
const date = new Date();

// 指定の表記にするためデータを取り出し
const today = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate()
};

// コンソールで「年月日」表記にするための関数
const sayDate = () => {
    console.log(today.year + '年' + today.month + '月' + today.day + '日');
}

// コンソール出力
sayDate();
