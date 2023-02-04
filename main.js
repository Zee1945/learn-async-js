// // const methodMahasiswa = {
// //     makan : function(porsi){
// //         this.energi += porsi;
// //     },
// //     main : function(jam){
// //         this.energi -= jam;
// //     },
// //     tidur : function(jam){
// //         this.energi += jam*2
// //     }
// // };

// // function Mahasiswa(nama, energi){
// //     let mahasiswa = Object.create(methodMahasiswa);
// //     this.nama = nama;
// //     this.energi = energi;
// //     return mahasiswa;
// // }





// // function Mahasiswa(nama, energi){
 
// //     this.nama = nama;
// //     this.energi = energi;
 
// // }

// // Mahasiswa.prototype.makan = function(porsi){
// //     this.energi += porsi;
// //     return `halo ${this.nama}, energimu nambah ${this.energi}`;
// // }

// // let zul = new Mahasiswa('zul', 30);

// function Start(user, email, callBack){
// 	console.log(`
// 		username : ${user} \n
// 		email : ${email}
// 	`)

// 	callBack()
// }

// function getCallback() {
// 	console.log('Memanggil method callback')
// }



// const data = {
// 	user: "amel2",
// 	email: "amel_@mail.com",
// 	method: getCallback
    
// }

// function contoh(){
//     return Start(data.user,data.email,data.method);
// }


// function halo(nama){
// 	alert(`Halo pak ${nama}`);
// }

// function tampilnama(callback){
// 	const nama = prompt('Masukkan nama : ');
// 	callback(nama);
// }

// tampilnama(halo);


// const mhs = [



// ];
// alert(`mulai`);
// mhs.forEach(m => alert(m.nim));
// alert(`selesai`);


// function getDataMahasiswa(url, success, error){
// 	let xhr = new XMLHttpRequest();

// 	xhr.onreadystatechange = function () {
// 		if(xhr.readyState === 4){
// 			if (xhr.status === 200) {
// 				success(xhr.response);
// 			}else if(xhr.status === 404){
// 				error();
// 			}
// 		}
// 	}

// 	xhr.open('get',url);
// 	xhr.send();
// }

// // function success(){
// // 	console.log(results);
// // }
// // function error(){

// // }
// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
// 	const mhs = JSON.parse(results);
// 	mhs.forEach(m => console.log(m.nama));
// }, ()=>{});
// console.log('selesai');


// // Jquery
// $('#button-search').on('click',function(){

// 	$.ajax({
// 		url : 'http://www.omdbapi.com/?apikey=dca61bcc&s='+$('.input-keyword').val(),
// 		success : hasil =>{
// 		const movies = hasil.Search;
// 		let cards = '';
// 		movies.forEach(m => {
// 			cards += showCard(m);
// 		});
	
// 		$('.tempat-film').html(cards);
		
// 		$('.modal-detail-button').on('click', function(){
// 			// console.log($(this).data('imdbid'));
// 			$.ajax({
// 				url:'http://www.omdbapi.com/?apikey=dca61bcc&i='+$(this).data('imdbid'),
// 				success: m => {
// 					const detailMov = showDetail(m);
// 					$('#content-detail').html(detailMov);
// 				},
// 				error : (e)=>{
// 					console.log(e.responseText)
// 				}
				
// 			});
			
			
// 		})
			
// 		},
// 		error : (e)=>{
// 			console.log(e.responseText)
// 		}
// 	})
// })

// console.log('mulai');

function showCards(m){
	return `
	<div class="col-md-4 my-5">
	<div class="card" style="width: 18rem;">
		<img src="${m.Poster}" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">${m.Title}</h5>
			<p class="card-text text-muted">${m.Year}</p>
			<p class="card-text">Some quick example text to build on the card title and make up the bulk of
				the card's content.</p>
			<a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieButton" data-imdbid="${m.imdbID}">Detail Movie</a>
		</div>
	</div>
</div>`
}

function showDetails(m){
	return `
	
	<div class="row">
	<div class="col-md-3">
		<img src="${m.Poster}" class="img-fluid">
	  </div>
	  <div class="col-md">
		   <ul class="list-group">
			   <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4> </li>
			   <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
			   <li class="list-group-item"><strong>Actor :  </strong>${m.Actors}</li>
			   <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
			   <li class="list-group-item"><strong>Plot :</strong><br> ${m.Plot}</li>
			   
		   </ul>
		   
	</div>
	</div>
	`
}

// Promise 


	// const xhr = new XMLHttpRequest();

	// xhr.onreadystatechange = function () {
	// 	if(xhr.readyState === 4){
	// 		if (xhr.status === 200) {
	// 			console.log(JSON.parse(xhr.response));
	// 		}else if(xhr.status === 404){
	// 			console.log(xhr.responseText);
	// 		}
	// 	}
	// }

	// xhr.open('get','http://www.omdbapi.com/?apikey=dca61bcc&s=avengers');
	// xhr.send();

// let ditepati = false;
// const janji1 = new Promise((resolve,reject)=>{
// 	if (ditepati) {
// 		resolve('janji ditepati !');
// 	}else{
// 		reject('ingkar janji');
// 	}
// });

// janji1.then((response) => console.log('OK! '+response)).then(response=>console.log('Percaya aku '+response)).catch(response=>console.log('NOT OK '+response));


// const janji2 = new Promise((resolve,reject)=>{
// 	if (ditepati) {
// 		setTimeout(()=>{
// 			resolve('Mantap janji sesuai 2x')
// 		},2000)
// 	}else{
// 		setTimeout(()=>{
// 			reject('ingkar janji 2x')
// 		},2000)
// 	}
// });

// let ditepati = false;
// console.log('mulai')
// // console.log(janji2.then(()=> console.log(janji2)));
// janji2
// 	.finally(()=> console.log('selesai menunggu'))
// 	.then((response) => console.log('OK! '+response))
// 	.catch(response=>console.log('NOT OK '+response));
// console.log('Selesai')


// const film = new Promise(resolve =>{
// 	setTimeout(()=>{
// 		resolve([{
// 			judul: 'Avenger',
// 			sutradara : 'James Holic',
// 			pemeran : 'mamang sudrajat'
// 		}]);
// 	},2000);

// });


// const cuaca = new Promise(resolve =>{
// 	setTimeout(()=>{
// 		resolve([{
// 			kota: 'Malang',
// 			temp : 26,
// 			kondisi : 'Cerah kek masa depan'
// 		}]);
// 	},500);

// });


// Promise.all([film,cuaca])
// 	// .then(response=>console.log(response))
// 	.then(response=>{
// 		const [film,cuaca] = response;
// 		console.log (film)
// 		console.log (cuaca)
// 	})


// ------------------Fetch ----------------- 
// const searchButton = document.querySelector('.button-search');
// searchButton.addEventListener('click', function(){

// 	const inputKeyword = document.querySelector('.input-keyword');
// 	fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + inputKeyword.value)
// 		.then(response => response.json())
// 		.then(response =>{
// 			const movies = response.Search;
// 			let cards = '';
// 			movies.forEach(m => { cards += showCards(m);
// 			const movieContainer = document.querySelector('.tempat-film');
// 			movieContainer.innerHTML = cards;
			
// 			const modalDetailButton = document.querySelectorAll('.modal-detail-button');
// 			modalDetailButton.forEach(btn => {
// 				btn.addEventListener('click',function(){
					
// 					const imdbid = this.dataset.imdbid;
				
// 					fetch('http://www.omdbapi.com/?apikey=dca61bcc&i='+ imdbid)
// 						.then(response => response.json())
// 						.then(m => {
// 							const movieDetail = showDetails(m);
// 							const modalBody = document.querySelector('#content-detail')
// 							modalBody.innerHTML = movieDetail;
// 						}).catch(e => console.log(e))
// 				});
// 		});
// 		});
// 		});

		
// })

// ----------- End Fetch-----------------


//-------------------- Fetch Async Await-------------- 
const searchButton = document.querySelector('.button-search');
searchButton.addEventListener('click',async function(){
	try {
		const inputKeyword = document.querySelector('.input-keyword');
		const movies = await getMovies(inputKeyword.value);
	
		updateUI(movies);
		
	} catch (error) {
		alert(error);
	}
	
});

// event binding 
document.addEventListener('click',async function(e){
	if(e.target.classList.contains('modal-detail-button')){
		const imdbid = e.target.dataset.imdbid;
		const movieDetail = await getMovieDetail(imdbid)
		updateDetailUI(movieDetail);
	}
	
});

function getMovieDetail(imdbid){
	return fetch('http://www.omdbapi.com/?apikey=dca61bcc&i='+imdbid)
		.then(response => response.json())
		.then(m => m);
}

function updateDetailUI(m){
	const movieDetail = showDetails(m);
	const modalBody = document.querySelector('.modal-body')
	modalBody.innerHTML = movieDetail;
}



function getMovies(keyword){
	return fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + keyword)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}

				return response.json()
			
		})
		.then(response => {
			if (response.Response === 'False') {
				throw new Error(response.Error)
			}
			console.log(response);
			return response.Search;
		});
}

function updateUI(movies) {
		let cards = '';
		movies.forEach(m => { cards += showCards(m);
		const movieContainer = document.querySelector('.tempat-film');
		movieContainer.innerHTML = cards;});
}

//-------------------- End Fetch Async Await-------------- 





// -------------------------Async Await Part Lanjutan ----------------
// const coba = new Promise(resolve => {
// 	setTimeout(() => {
// 		resolve('selesai')
// 	}, 2000);

// });

// function cobaPromise(){
// 	return new Promise((resolve,reject) => {
// 		const waktu = 8000;
// 		if(waktu < 5000){
// 			setTimeout(() => {
// 				resolve('selesai')
// 			}, waktu);

// 		}else{
// 			reject('kelamaan')
// 		}
// 	});
// }

// const coba = cobaPromise();
// coba
// 	.then(()=>console.log(coba))
// 	.catch(()=>console.log(coba));


// async function cobaAsync(){
// 	try {
// 		const coba = await cobaPromise();
// 		console.log(coba);
		
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// cobaAsync();




// -------------------------End  Async Await Part Lanjutan ----------------
