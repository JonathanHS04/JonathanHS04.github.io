countries = [];
fetch('travel_recommendation_api.json', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
        countries = data.countries;
    })
    .catch(error => console.error('Error fetching travel recommendations:', error));


function handleSearchClick(){
    const destination = document.getElementById('destinationInput').value;
    searchValue = destination.toLowerCase();
    dropdown = document.getElementById('dropdown');
    dropdown.innerHTML = '';
    dropdown.disabled = false;
    const recommendations = countries.filter(country => country.name.toLowerCase().includes(searchValue));
    recommendations.forEach(recommendation => {
        const option = document.createElement('option');
        option.innerText = recommendation.name;
        dropdown.appendChild(option);
    });
    dropdown.size = Math.min(recommendations.length, 5);
}

function clearDropdown(){
    const dropdown = document.getElementById('dropdown');
    dropdown.innerHTML = '';
    dropdown.disabled = true;
    dropdown.size = 1;
}

document.getElementById('searchButton').addEventListener('click', handleSearchClick);
document.getElementById('clearButton').addEventListener('click', clearDropdown);
