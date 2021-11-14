//가로 300cm 세로 200cm 창문의 가격
//1ft에 $3.5
//가로(300) x $3.5 + 세로(200) x $3.5
//300 cm= 9.84252 feet 200cm= 6.56168feet
//vp = 가로 가격 / hp= 세로 가격 tp = 토탈가격
const vp = 9.84252 * 3.5;
const hp = 6.56168 * 3.5;
const tp = vp + hp;
console.log("$" + tp.toFixed(2));
