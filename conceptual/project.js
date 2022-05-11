let count =0

document.getElementById("add-btn").addEventListener("click", function (e) {
     count++

	const inputValue = document.getElementById("input-value");

	if (inputValue == "") {
		alert("Please enter a value");
	} else {
		const mainContainer = document.getElementById("content-container");
		const tableContent = document.createElement("tr");
		tableContent.innerHTML = `<th scope="row">${count}</th>
							<td>${inputValue.value}</td>
							<td>Otto</td>`;
        
        mainContainer.appendChild(tableContent);

        document.getElementById("input-value").value ='';

	}
});
