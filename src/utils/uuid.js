export function getUUID(){
    var len=32;//32长度
    var radix=16;//16进制
    var chars='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid=[],i;
    radix=radix||chars.length;
    for(i=0;i<len;i++){
        uuid[i]=chars[0|Math.random()*radix];
    }
    return 'uuid'+uuid.join('');
}