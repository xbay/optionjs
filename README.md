optionjs
------
Implement option type for javascript.

Load module
------

```javascript
var _option = require("optionjs");
```

Create an option object
------
Create an option object from value.

```javascript
var option = _option(value);
```

Create an option object from function.

```javascript
var obj = undefined;
var option = _option(function(){ return obj.a.b.c; });
```

Use it Functional
------
You can map it to an new option.
```javascript
var new_option = option.map(function(val){ return val + 1 ; })
//Note: map function was called only when option's val is not null.
```
And you can do match/case in funcional way.
```javascript
var new_option = option.match(function(val){
  return val + 5;
}, function(){
  return 5;
});
//This two funcion params are case_some and case_none, you know.
```

Get the value
------
```javascript
var val = option.get(); //may throw an "None.get" exeption
var val = option.getOrElse(5);
var val = option.getOrUndefined();
```

Have fun!
