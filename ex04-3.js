const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scoring(score) {
    
    if (score >= 100) {
        return ('秀')
    } else if (score >= 60) {
        return ('良')
    } else if (score >= 13) {
        return ('不可')
    }  
  // ここに課題04-2の回答をコピーする
}
// ここにscoresの各要素をループして、それぞれのscoringの結果を表示するプログラムを書く
for (let i = 0; i < scores.length; i++) {
    console.log( scoring(scores[i]) );
}
