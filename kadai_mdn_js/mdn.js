// 現在の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1; // getMonth() は 0-indexed なので 1 を加える
const day = today.getDate();

// yyyy/mm/dd 形式で文字列を作成
const formattedDate = `${year}/${month}/${day}`;

// コンソールに出力
console.log(formattedDate);