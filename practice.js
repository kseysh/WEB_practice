var grade={}; // {} 대신 new Object() 가능
grade['안녕']=10;
grade['k18']='문자';

grade['안녕'] // => 10
grade.k18 //=> '문자'
grade['k1'+'8'] //=> 문자

for(key in object){
    console.log(key)
}//배열도 사용가능

var g={'list':{'im':10},
    'show':function(){alert(this.list.im);}}
g['show']();//=g.show();

//-수정
