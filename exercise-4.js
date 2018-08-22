function graduates (students) {
    var hasilArray =[];
    var hasil = {};
    for(var i = 0 ;i < students.length;i++){
        var pengulangan = 0;
        for(var j = 0;j < students.length;j++){
            if(students[i].class === students[j].class && students[i].name !== students[j].name && students[i].score > 75){
                hasilArray.push(students[i]);
            }
            if(students[i].class === students[j].class){
                pengulangan++
            }
            if(j === students.length-1 && pengulangan === 1 && students[i].name){
                hasilArray.push(students[i]);
            }
        }
        
    }
    var kelasSama = [];
    for(var k = 0;k < hasilArray.length;k++){
        
        for(var l = 0;l < hasilArray.length;l++){
            if(hasilArray[k].class === hasilArray[l].class){
                kelasSama.push({name: hasilArray[l].name,score: hasilArray[l].score})
            }
        }
        hasil[hasilArray[k].class]=kelasSama
        kelasSama = []
    }
    return hasil
  }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}