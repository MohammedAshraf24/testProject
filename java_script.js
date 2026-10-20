
const people = [
    { name: "Ahmed Hassan", age: 24, city: "Cairo" },
    { name: "Mariam Ali", age: 21, city: "Alexandria" },
    { name: "Omar Khaled", age: 28, city: "Giza" },
    { name: "Sara Mohamed", age: 22, city: "Cairo" },
    { name: "Youssef Ibrahim", age: 26, city: "Luxor" }
];


let displayedData = [...people];

const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');
const sortNameBtn = document.getElementById('sortNameBtn');
const sortAgeBtn = document.getElementById('sortAgeBtn');


function renderTable(data) {
    tableBody.innerHTML = '';

    if (data.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="3" style="text-align:center;">No matching results found</td></tr>';
        return;
    }

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.city}</td>
        `;
        tableBody.appendChild(row);
    });
}


searchInput.addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase().trim();

    displayedData = people.filter(person => {
        return (
            person.name.toLowerCase().includes(query) ||
            person.age.toString().includes(query) ||
            person.city.toLowerCase().includes(query)
        );
    });

    renderTable(displayedData);
});


sortNameBtn.addEventListener('click', function () {
    displayedData.sort((a, b) => a.name.localeCompare(b.name));
    renderTable(displayedData);
});


sortAgeBtn.addEventListener('click', function () {
    displayedData.sort((a, b) => a.age - b.age);
    renderTable(displayedData);
});

// Initial Render
renderTable(displayedData);