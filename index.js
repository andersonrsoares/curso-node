var admin = require("firebase-admin");
const request = require('request-promise');
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://app55-9aaab.firebaseio.com"
});

// admin.initializeApp({
//   credential: admin.credential.cert({
//     projectId: "app55-9aaab",
//     clientEmail: "firebase-adminsdk-c4g6y@app55-9aaab.iam.gserviceaccount.com",
//     privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDYxDM3236NRPI7\njKG67p7Iftxql6O/oSjmzuoGBHy04R05VPKNm777eHHsbjuei4ryHY+VF4zXusHS\nLviye3eqNlzhkVPTe0bZE2obbTEAFyUNNV2MvfmP3WGCFtfVv3czvw60eo7v9aO+\nQUYIgVmUZpGmvBKC202KXAOLCbzvW/w0xn4hhWvb2IMX5V+IwP49sMoVDQQ5H8a6\noY2ObAoB+RnEKdXa0x3RV8Iz0je3x6xi96igY3t6LstcewVdPbPLUUEpsE03U85S\nAVM7zIA4tlAn02YCT1n4tUqDyCaXoIYQ8Y85PtUuqdfAyatj3HsY9qkBo8oIRt11\nWyze8I79AgMBAAECggEADLf2XrX88Ze0tCnG6OD3ZWw2zUpNzACjaxIuSQwaWm1F\npFzc89IfnUGumDYflBM7+S4i2UH4fEVI+hF80NF4bqmh6YT4Fis1jPxxTWAAGrFA\n9fVw98EYfjMkdYLsRxkPism7DdE4cdFH5PHk2hA84VLjWOp6wOgn3zu8OXw+Hw0l\np9e5oAruCWdJuDDlhqM1LzfAVPIbIkm6Lr2lCJ0r4RsJgrekv4octkZtU6oJgXVf\nxeFCaezSPFju6jiBUlwbcti09QaGoK5WSIgYL0OwhGxH2N9UcKuG8hGfaX9kY03o\nYdsJ+mFJWL2oB9HXQDn5K8F8Eu7bhJh6xE24dCc7QQKBgQDx6/ytv39K5Zcr0HjR\njrToBRs3/fEswnFQcH8bsfxDsMmuLSKqWKuCswJgkltg0+b9ozlbu2LzAPK3VRV1\nvUlupOoOCj1DsAGCfo42ZLaPOFMkSx2bdcocHLtDIuq3mIP7Ex1cE2uNfqgoV9Gd\nlIfUgt2t9xrVeXBju4NTwx+86wKBgQDlYXZGz8pARiUVRabv09RD3NO8kAXSjiWk\nmBUOYcsU5o+lQnJBwROd7ua3mBjvsHfbcqBHLdc/E0xfF5c2IsnO+9/Bp2JImt/b\nhidvyjkbbIofF4caFTjAU8W8bhT2zlCrUWVXtqamLTuCTr9OSyp7mPBWWmgJob66\nj7xefMTJtwKBgQDsbdZ/M8TCvMjV8CLzooVYsAze1tZKCSnXFGqU9Yh12yPvjnrv\ngkL0M+Bh4wddBRsdzNR0uxjEJqwO0h9r9vb6JD/+QrGHIk8HaomvzRPBuqk+sg6Y\nbTB98vJsdYZwsaRiz1aFMxGMsjjDXLgmSg/Jd7AQoYvfD5TwU0TQqsSsywKBgQDB\nNwuOMlHHOk7aUEWCFwjh8Q1Z9GczKRGER6bU6oNKI7w0FHhx8tU3X5lwZOn8XMVZ\nUIC59F8vfm4CW7i/nSYo9/lPAlPDnNGb9LEbdVgNRaxC7GqdCes39ljFlGSMUNWa\nuYGIFQ7jQ46xAOwcYyxx2C36T0T7eAdU1uZxIOASmQKBgQCfTMafelY00e4OIbwD\nanCLxKkMHUpHVHz8XQ3aV+ry+++XAUslb9+/C/Z2khxhO/bZxefWhpEbiUTfttY5\n5+RtqDlrIBXuTmuGycFK+lF1ZKtkRjqzDZT9HaQatUMrK+7WR/KG/4/Xh+fZ4CnC\nEhpGz9DsbCovLOjj83sRsY/E4A==\n-----END PRIVATE KEY-----\n"
//   }),
// 	databaseURL: "https://app55-9aaab.firebaseio.com"
// });


//console.log('admin',admin);

var db = admin.database();
//console.log('database',db);

console.log('inicializado');

// db.ref('/data/produtos/2/motoristas').once('child_added',function(snapshot){ 
// 	console.log('once ',snapshot);
// });


// var str_origin = "origin=-25.470737,-49.277534"
// var str_dest = "destination=-25.470737,-49.277534";
// var sensor = "sensor=false";
// var parameters = str_origin+"&"+str_dest+"&"+sensor;
// console.log('https://maps.googleapis.com/maps/api/directions/json?' + parameters)
// var promise = request('https://maps.googleapis.com/maps/api/directions/json?' + parameters)
// .then(response => {
// 	console.log('response ' + response.statusCode);
// 	console.log('body  :', response.body);
//      if (response.statusCode === 200) {
//      	 console.log('body 200 :', response.body.status);
//          return response.body;
//      }
// })

/*var options = {
    uri: 'https://maps.googleapis.com/maps/api/directions/json?' + parameters,
    json: true
};

request(options)
    .then(function (body) {
    	console.log('response body  :', body.status);
    	console.log('response body  :', body);
        // Request succeeded but might as well be a 404
        // Usually combined with resolveWithFullResponse = true to check response.statusCode
    })
    .catch(function (err) {
        // Request failed due to technical reasons...
        console.log('response error :', err);
    });*/

const raioProcura = 5000
const tempoProcura = 800

// var res = db.ref('/data/corridas/2').limitToFirst(1);
// console.log("corridas :" ,res.val());

db.ref('/data/corridas/2').limitToLast(1).on("value", function(snapshot) {
	console.log("corridas :" ,snapshot.val());
	snapshot.forEach(function(childSnapshot) {
		 db.ref('/data/corridadisponivel/'+ childSnapshot.val().id)
			 .set(childSnapshot.val()).then(snapshot => {
				  console.log('salvo em corridadisponivel'); 	
			  });
	});
})

db.ref('/data/corridadisponivel').on("value", function(snapshot) {
	//console.log("corridadisponivel :" ,snapshot.val());
	snapshot.forEach(function(childSnapshot) {
		db.ref('/data/corridasaguardando')
			.orderByChild("id").equalTo(childSnapshot.val().id)
			.once("value").then(function(snapshotDisponivel) {
				console.log("corrida aguardando motorista :" ,snapshotDisponivel.val());
				if(snapshotDisponivel.val()==null){
					console.log("buscando motoristas :" ,childSnapshot.key);
					getMotoristas(childSnapshot.val())
				}else{
					console.log("corrida aguardando motorista :" ,snapshotDisponivel.key);
				}	
		})
	});
})

db.ref('/data/corridasaguardando').on("child_added", function(snapshot) {
	var value = snapshot.val()
	console.log("corridaaguardando :" ,snapshot.key);
	//console.log("corridaaguardando :" ,snapshot.val());
	if(snapshot.val() != null){
		setTimeout(function(){ 
				db.ref('/data/corridasaguardando/'+ snapshot.key)
					.once('value').then(function(childSnapshot) {
					    if(childSnapshot.val() == null){
					    	db.ref('/data/corridas').child(value.produto_id).child(value.id)
					    		.once("value").then(function(snapshotCorrida) {
								if(snapshotCorrida.val() != null){
									console.log("motorista aceitou a corrida :" ,snapshotCorrida.key);
								}else{
									excuirMotoristaCorrida(snapshot.key,value);
									console.log("motorista não aceitou : " ,snapshot.key);
								}
							})	
					    }else{
					    	excuirMotoristaCorrida(snapshot.key,value);
							console.log("motorista não aceitou :" ,value.id);
					    }
				   });
			}, 20000);
	}else{
		db.ref('/data/corridadisponivel').child(value.id).remove();
	}
})


function excuirMotoristaCorrida(id,corrida){
	db.ref('/data/corridasaguardando').child(id).remove();
	if(corrida.excluidos == undefined )
		corrida.excluidos = []
	corrida.excluidos.push(id)
	//console.log('corrida.excluidos', corrida);
	db.ref('/data/corridadisponivel').child(corrida.id).set(corrida);
	console.log("exclusao de motoristas aptos a receber corrida :" + id + " | " + corrida.id);
}

function getMotoristas(corrida){
	console.log('corrida buscando motorista:' ,corrida);
	db.ref('/data/produtos/'+corrida.produto_id+'/motoristas').on("value", function(snapshot) {
	 	//console.log("motoristas aguardando ",snapshot);
	 	let motoristas = [];
		snapshot.forEach(function(childSnapshot) {
				var key = childSnapshot.key; 
		      //	console.log("motorista aguardando :" ,childSnapshot.val());
				var currentValue = childSnapshot.val();
				var dis = getDistanceFromLatLon(-25.470737,-49.277534,
							currentValue.latitude,currentValue.longitude)
				
				console.log('distancia :' ,dis);
				var contens = false;
				if(corrida.excluidos != undefined){
					for (let ex of corrida.excluidos) {
						if(ex == currentValue.id)
							contens = true	
					}	
				}

				if(!contens){
					if(dis < raioProcura){
						motoristas.push(currentValue);
					}
				}
				
		})

		if(motoristas.length  == 0){
			console.log('motorista nao enconrado');
			return;
		}

	  	var strorigin = "origins=-25.470737,-49.277534"
		var strdest = "destinations=";
	 
		motoristas.forEach(function(childSnapshot) {
			var key = childSnapshot.key; 
			var currentValue = childSnapshot;
		    strdest = strdest + currentValue.latitude+","+currentValue.longitude+"|";
		});

		var parameters = strorigin+"&"+strdest + "&language=pt-BR&mode=driving&key=AIzaSyAZAvr9ioMKW6Adr3Er_CvReBAiUY84-sw";
		console.log('directions api','https://maps.googleapis.com/maps/api/distancematrix/json?' + parameters)

		var options = {
			uri: 'https://maps.googleapis.com/maps/api/distancematrix/json?' + parameters,
			json: true
		};

	     var promise = request(options)
		.then(body => {
			if(body.status == 'OK'){
				for (i = 0; i < motoristas.length; i++) { 

	 				//console.log('distance matrix',body.rows[0].elements[i])
			   		motoristas[i].distance = body.rows[0].elements[i].distance
			   		motoristas[i].duration = body.rows[0].elements[i].duration

			   		 console.log('distance:'+ motoristas[i].distance.text + 
			 			 			 ' duration:' + motoristas[i].duration.text)

	 				 console.log('distance:'+ motoristas[i].distance.value + 
			 			 		' duration:' + motoristas[i].duration.value)
			   }

			   var values = motoristas.filter(function(item) {
			    	return item.duration.value < tempoProcura
				});


				values.sort(function(a, b) {
			    	if(a.duration.value > b.duration.value)
			    		return 1
			    	else
			    	if(a.duration.value == b.duration.value)
			    		return 0
			    	else
			    		return -1 
				});
				//console.log('sort values',values);	
				if(values.length > 0){
					executeAguardando(values,corrida);
			 	}else{
					console.log('motorista nao enconrado')
			 	}	
			}
	 	 }).catch(function (err) {
	        // Request failed due to technical reasons...
	        console.log('response distance error :', err);
	     });
},function (errorObject) {
   console.log("The read failed: " + errorObject.code);
});

}

async function executeAguardando(values,corrida) {
  for (let value of values) {
  	  console.log('motoriasta id',value.id);
	  var quote = await motoriasAguardando(value.id);
	  //console.log('motoriasta aguardando',quote.val());
	  if(quote.val() == null){
	      console.log('motoriasta encontrado',value.id);
	       db.ref('/data/corridasaguardando/'+ value.id)
				 .set(corrida).then(snapshot => {
					  console.log('salvo em corridasaguardando'); 	
				  });
	  	  // var x = await saveMotoriasAguardando(corrida,value.id)
	  	   //console.log('salvo em corridasaguardando',x.val());
		 break;
		 return;
	  }
  }
  console.log('end');
}


function motoriasAguardando (id) {
  return admin.database().ref('/data/corridasaguardando/'+ id)
			.once('value').then(function(snapshot) {
			       return snapshot;
		});
}

function motoriasAguardando (id) {
  return admin.database().ref('/data/corridasaguardando/'+ id)
			.once('value').then(function(snapshot) {
			       return snapshot;
		});
}


//exemplo de async
/*
function getQuote() {
  var quote;
 
  return new Promise(function(resolve, reject) {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
      quote = body;
 
      resolve(quote);
    });
  });
}
 
async function main() {
  var quote = await getQuote();
  console.log(quote);
}*/




function getDistanceFromLatLon(lat1,lon1,lat2,lon2) {
	   var R = 6371; // km (change this constant to get miles)
		var dLat = (lat2-lat1) * Math.PI / 180;
		var dLon = (lon2-lon1) * Math.PI / 180;
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
			Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
			Math.sin(dLon/2) * Math.sin(dLon/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		var d = R * c;
		//if (d>1) 
		//	return Math.round(d)+"km";
		//else if 
		//	(d<=1) 
			return Math.round(d*1000);
		//return d;
}


 /*
 	executando request com promisses
	let userDataList = [];
	motoristas.forEach(function(childSnapshot) {
			var key = childSnapshot.key; 
	      	console.log("motorista aguardando :" ,childSnapshot.val());

		  	var currentValue = childSnapshot.val();
		  	var str_origin = "origins="+currentValue.latitude+","+currentValue.longitude;
			//var str_dest = "destination="+data.latitude_partida+","+data.longitude_partida;
			var str_dest = "destinations=-25.470737,-49.277534";
	        var sensor = "sensor=false";
			var parameters = str_origin+"&"+str_dest+"&"+sensor + "&key=AIzaSyAZAvr9ioMKW6Adr3Er_CvReBAiUY84-sw";
			console.log('https://maps.googleapis.com/maps/api/distancematrix/json?' + parameters)
			var options = {
			    uri: 'https://maps.googleapis.com/maps/api/distancematrix/json?' + parameters,
			    json: true
			};
			 var promise = request(options)
			.then(body => {
				console.log('body distance :', body.status);
				currentValue.distance = body
			    return currentValue;
		 	 }).catch(function (err) {
		        // Request failed due to technical reasons...
		        console.log('response distance error :', err);
		     });
			//reads.push(promise);
			console.log('promise body:', promise);
			//return promise;
			userDataList.push(promise);
			//return true;
	});


	console.log('end interator');
	Promise.all(userDataList).then(values =>{
		 	console.log('finish promise',values);

			var removetimes = []
		 	values.forEach(function(item) {
				if(item.distance.status == 'OK'){
		 			 console.log(' distance:'+ item.distance..distance.text + 
		 			 			 ' duration:' + item.distance.rows[0].elements[0].duration.text)

 					console.log(' distance:'+ item.distance.rows[0].elements[0].distance.value + 
		 			 			 ' duration:' + item.distance.rows[0].elements[0].duration.value)

		 			 // if(item.directions.routes[0].legs[0].duration.value > tempoProcura)
		 			 // 	removetimes.push(item)
		 		}else{
		 			 console.log(item.distance.status)
		 			 //removetimes.push(item)
		 		}
		 	})
		 	//console.log('fora do tempo limite',removetimes);
			// for (let value of removetimes) {
			//  	values.remove(value);
		 //    }

		    values = values.filter(function(item) {
		    	if(item.distance.status == 'OK'){
		    		return item.distance.rows[0].elements[0].duration.value < tempoProcura
		    	}else{
		    		return false
		    	}
				
			});
			console.log('filter values',values);

		 	values.sort(function(a, b) {
	 			if(a.distance.status == 'OK' && b.distance.status == 'OK')
			    	if(a.distance.rows[0].elements[0].distance.value > 
			    		b.distance.rows[0].elements[0].duration.value)
			    		return 1
			    	else
			    	if(a.distance.rows[0].elements[0].distance.value == 
			    	   b.distance.rows[0].elements[0].duration.value)
			    		return 0
			    	else
			    		return -1 
				else
					return 0 
			});
			
			console.log('sort',values)
		 		
		 	if(values.length > 0){
					executeAguardando(values,corrida);
					
					// db.ref('/data/corridadisponivel/'+ values[0].id)
					// 	.once('value').then(function(snapshot) {
					// 	       console.log('teste :' ,snapshot.val());
					// })

			 	// 	  db.ref('/data/corridadisponivel/'+ values[0].id)
					//  .set(corrida).then(snapshot => {
					// 	  console.log('salvo em corridasaguardando'); 	
					//   });
		 	}	
		 	//main();
			//console.log('Ron once said,');
			 // values[0]
			 // db.database().ref('/data/corridasaguardando/'+ data.cliente_id)
				//  .set(data).then(snapshot => {
				// 	  console.log('salvo em corridasaguardando'); 	
				//   });

		 }).catch(reason => { 
			console.log('error promise',reason)
	 	 });
	 	 */

/*db.ref('/data/produtos/2').once('value',function(snapshot){ //on('child_added', function(snapshot) {
				console.log("motoristas aguardando ",snapshot);
				//console.log("motoristas aguardando " + snapshot.key);
				//var reads = [];

				// for (var childSnapshot of snapshot) {
				//     var key = childSnapshot.key; 
		 	//       	console.log("motorista aguardando :" + key);
		 	// 	  	console.log(childSnapshot.val());

		 	// 	  	var currentValue = childSnapshot.val();
		 	// 	  	var str_origin = "origin="+currentValue.latitude+","+currentValue.longitude;
		 	// 	    var str_dest = "destination="+data.latitude_partida+","+data.longitude_partida;
			 //        var sensor = "sensor=false";
				// 	var parameters = str_origin+"&"+str_dest+"&"+sensor;
				// 	console.log('https://maps.googleapis.com/maps/api/directions/json?' + parameters)
				// 	var promise = request('https://maps.googleapis.com/maps/api/directions/json?' + parameters)
				// 		.then(response => {
				// 		    // if (response.statusCode === 200) {
				// 		    //   return response.body;
				// 		    // }
				// 	     	//console.log('body:', response.body);
				// 	    	throw response.body;
				// 	 	 })
				// 	//reads.push(promise);
				// 	console.log('promise body:', promise);
				// }
 				let userDataList = [];
				snapshot.forEach(function(childSnapshot) {
					var key = childSnapshot.key; 
		 	      	console.log("motorista aguardando :" + key);
		 		  	console.log(childSnapshot.val());

		 		  	var currentValue = childSnapshot.val();
		 		  	var str_origin = "origin="+currentValue.latitude+","+currentValue.longitude;
		 		    var str_dest = "destination="+data.latitude_partida+","+data.longitude_partida;
			        var sensor = "sensor=false";
					var parameters = str_origin+"&"+str_dest+"&"+sensor;
					console.log('https://maps.googleapis.com/maps/api/directions/json?' + parameters)
					var promise = request('https://maps.googleapis.com/maps/api/directions/json?' + parameters)
						.then(response => {
						     if (response.statusCode === 200) {
						     	 console.log('error:', response.body);
						       return response.body;
						     }
						     console.log('error body:', response);
					    	throw response.body;
					 	 })
					//reads.push(promise);
					console.log('promise body:', promise);
					//return promise;
					userDataList.push(promise);
					//return true;
				});

				// for (var i = 0, len = snapshot.length; i < len; i++) {
				// 	  var childSnapshot = snapshot[i];
				//     console.log("motorista aguardando :" + key);
		 	// 	  	console.log(childSnapshot.val());

		 	// 	  	var currentValue = childSnapshot.val();
		 	// 	  	var str_origin = "origin="+currentValue.latitude+","+currentValue.longitude;
		 	// 	    var str_dest = "destination="+data.latitude_partida+","+data.longitude_partida;
			 //        var sensor = "sensor=false";
				// 	var parameters = str_origin+"&"+str_dest+"&"+sensor;
				// 	console.log('https://maps.googleapis.com/maps/api/directions/json?' + parameters)
				// 	var promise = request('https://maps.googleapis.com/maps/api/directions/json?' + parameters)
				// 		.then(response => {
				// 		    // if (response.statusCode === 200) {
				// 		    //   return response.body;
				// 		    // }
				// 	     	console.log('body:', response.body);
				// 	    	throw response.body;
				// 	 	 })
				// 	//reads.push(promise);
				// 	console.log('promise body:', promise);
				// 	//return promise;
				// 	userDataList.push(promise);
				// }
				//if(finish){
				//	console.log('finish',x);
   			 console.log('end interator',userDataList);
			//	}
   			 Promise.all(userDataList).then(values =>{
   			 	console.log('finish',values);
   			 }).catch(reason => { 
				console.log('error promise',reason)
			 });
				//console.log('finish',x);
				//.then(function(values) { 
				 // 	console.log('finish'); // [snap, snap, snap] 
					//.console.log(values);
			    //});

       		 	//return Promise.all(userDataList);
})*/
 		 //    .then(function(values) { 
			 //  	console.log('finish'); // [snap, snap, snap] 
			 //  	console.log(values);
			 // });