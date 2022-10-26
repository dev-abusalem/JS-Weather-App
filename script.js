let result = document.getElementById('result');
let button = document.getElementById('findBtn');
let city = document.getElementById('city');

button.addEventListener('click', weathers);

function weathers(e){
		e.preventDefault();
	
	let ctvl = city.value;

	if(ctvl === ''){
		result.innerHTML = 
				`
					<div style="border-radius:5px; padding:10px 5px" class="bg-danger text-light">
						<strong>Blank</strong> value is not a valid city
					</div>

				`
	}else{


		async function getWeather(){
			
			try {
				let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ctvl}&units=metric&APPID=6f90bfbe5dbdad2ae90ae34fc67c91e2`
		);
			let data = await request.json();

					
			const locName = data.name;
			const feels_like = data.main.feels_like;
			const humidity = data.main.humidity;
			const weathName = data.weather[0].main;
			const weathdesc = data.weather[0].description;
			const temp_max = data.main.temp_max;
			const temp_min = data.main.temp_min;
			const temp = data.main.temp;
			const country = data.sys.country;
			
			

			result.innerHTML = 

			`

			<h2>${locName}, <strong>${country}</strong></h2>
			<h1 style="font-weight:900">${temp} <sup><small>o</small></sup>C</h1>
              <p>Weather : <strong>${weathName}</strong></p>
              <small>${weathdesc}</small>

              <div class='p-2 m-2' style="background:darkred; color:#fff">

                
                  Max tmp. <strong >${temp_max}</strong>
                
               |
                   Min tmp. <strong >${temp_min}</strong>
                

              </div>

              <div class='p-2 m-2' style="background:#000; color:#fff">

                
                  Feels Like <strong >${feels_like}</strong>
                |
                
                  Humidity <strong >${humidity}</strong>
               

              </div>

			`

			} catch(err) {
				result.innerHTML = 
				`
					<div style="border-radius:5px; padding:10px 5px" class="bg-danger text-light">
						<strong> ${ctvl}</strong> is not a valid city
					</div>

				`
				
			}

			

		}
			getWeather()
	}

	
	




}




