let calculate = function(expression){

  var regNumber = /\d+/;
  var regString = /[a-zA-Z]+/;

  if(regString.test(expression) || !regNumber.test(expression.substring(0,1))
  || !regNumber.test(expression.charAt(expression.length-1))){
    return "SyntaxError";
  }





  expression = expression.replace(/\s/g,'');

  while(expression.indexOf('**')>-1){
    arr1 = expression.split(/[+]|[-]|[*]|[/]/);
    for(var i=0;i<arr1.length;i++){
      if(arr1[i]===""){
        val1 = arr1[i-1];
        val2 = arr1[i+1];
      }
    }
    val3 = val1+"**"+val2;
    val4 = val1**val2;
    expression = expression.replace(val3,val4);
  }

  while(expression.indexOf('*')>-1){
    arr1 = expression.split(/[+]|[-]|[/]/);
    for(var i=0;i<arr1.length;i++){
      if(arr1[i].indexOf('*')>-1){
        arr2 = arr1[i].split("*");
        val1 = arr2[0];
        val2 = arr2[1];
        val3 = val1+"*"+val2;
        val4 = val1*val2;
        expression = expression.replace(val3,val4);
        break;
      }
    }
  }

  while(expression.indexOf('/')>-1){
    arr1 = expression.split(/[+]|[-]/);
    for(var i=0;i<arr1.length;i++){
      if(arr1[i].indexOf('/')>-1){
        arr2 = arr1[i].split('/');
        val1 = arr2[0];
        val2 = arr2[1];
        val3 = val1+"/"+val2;
        val4 = val1/val2;
        expression = expression.replace(val3,val4);
        break;
      }
    }
  }


  while(expression.indexOf('+')>-1){
    arr1 = expression.split("-");
    for(var i =0;i<arr1.length;i++){
      if(arr1[i].indexOf('+')>-1){
        arr2 = arr1[i].split('+');
        val1 = arr2[0];
        val2 = arr2[1];
        val3 = val1+'+'+val2;
        val4 = Number(val1)+Number(val2);
        expression = expression.replace(val3,val4);
        break;
      }
    }
  }


  arr1 = expression.split('-');
  var result = Number(arr1[0]);
  for(var i = 1; i<arr1.length;i++){
    result = result - Number(arr1[i]);
  }

  return result;

}

module.exports = {calculate};
