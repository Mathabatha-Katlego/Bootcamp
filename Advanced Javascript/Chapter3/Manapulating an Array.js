theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

theList.shift();
theList.pop();


theList.unshift('FIRST');


theList[2] = 'MIDDLE';


theList[3] = 'hello World';


theList.push('LAST');


console.log(theList);
