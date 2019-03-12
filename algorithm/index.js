// 数组是廉价的数据结构
let enc_qq=[6,3,1,7,5,8,9,2,4];
let qq=[];                      //真正的QQ号
head=0;                         //队首指针，要移除的元素位置
tail=enc_qq.length;             //队尾指针，要加入的元素位置
// 第一个数移除
while(head<tail){
    qq.push(enc_qq[head]);
    head++;
    enc_qq[tail]=enc_qq[head];
    tail++;
    head++;
}
console.log(qq);
// console.log(enc_qq);
console.log(typeof qq);
// enc_qq.shift();
// enc_qq.unshift(0);
// enc_qq.pop();
// enc_qq.push(0);
// console.log(enc_qq);
// console.log(enc_qq.length,enc_qq[0]);