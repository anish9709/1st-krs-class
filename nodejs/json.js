var obj={
    prop1:"val1",
    prop:"val2",
    arr :["1","2","3"]
}
var s=JSON.stringify(obj)
var r=JSON.parse(s)//r is the object here bcz parse is used parse converts string to object
console.log(r.arr[1])
//API saare requests saath mae ek jagah
//REST API POST=create something GET=get something DELETE=delete something representational state transfer
//fetch() it's a js function used to send or recieve request
//fetch() works on promises it promises that it will return data
//.then()convert to json object
//fetch() is a asynchronus function