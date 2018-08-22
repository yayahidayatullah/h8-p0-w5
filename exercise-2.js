function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var hasil = [];
    for(var i = 0;i < arrPenumpang.length;i++){
        var tampung = {};
        tampung.penumpang = arrPenumpang[i][0];
        tampung.naikDari = arrPenumpang[i][1];
        tampung.tujuan = arrPenumpang[i][2];
        var jarak = [];
        for(var j = rute.length-1;j >= 0;j--){
            if(arrPenumpang[i][2] === rute[j]){
                jarak.push(j);
            }else if(arrPenumpang[i][1] === rute[j]){
                jarak.push(j);
            }
        }   
        tampung.bayar = 2000*(jarak[0]-jarak[1])
        hasil.push(tampung);
    }
    return hasil
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
  
  