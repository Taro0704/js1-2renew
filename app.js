var name = true;
while(name){
if(name=(prompt(`日本の首都は？`)!== `東京`)){
alert(`不正解です！`);
continue;
}
alert(`正解です`);
}