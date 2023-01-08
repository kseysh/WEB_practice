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

// var을 사용하지 않은 지역변수는 전역변수가 된다.
// 전역변수는 사용하지 않는 것이 좋으며 변수를 선언할 때는 꼭 var을 붙이는 것을 습관화 한다.
//익명함수를 사용하여 전역변수가 전혀 없는 코딩이 가능
// 익명함수는 자바스크립트에서 로직을 모듈화하는 일반적인 방법이다.
