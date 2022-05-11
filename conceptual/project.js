let count = 0;

document.getElementById("add-btn").addEventListener("click", function (e) {
	count++;

	const inputValue = document.getElementById("input-value");

	if (inputValue == "") {
		alert("Please enter a value");
	} else {
		const mainContainer = document.getElementById("content-container");
		const tableContent = document.createElement("tr");
		tableContent.innerHTML = `<th scope="row">${count}</th>
							<td>${inputValue.value}</td>
							<td><button class='btn btn-danger delete-btn'>Delete</button>
                            <button class="btn btn-success done-btn">Done</button></td>`;

		mainContainer.appendChild(tableContent);
        

        
        document.getElementById("input-value").value = "";
        
        // if (e.target.value == "") {
        //     document.getElementById("add-btn").setAttribute("disabled", true);
			
		// } else {
		// 	document.getElementById("add-btn").removeAttribute("disabled");
		// }

		const deleteButton = document.getElementsByClassName("delete-btn");
		const doneButton = document.getElementsByClassName("done-btn");

		
		for (const button of deleteButton) {
			button.addEventListener("click", function (e) {
				e.target.parentNode.parentNode.style.display = "none";
			
            });
            

          

            for (const button of doneButton) {
				button.addEventListener("click", function (e) {
					e.target.parentNode.parentNode.style.textDecoration =
						"line-through";
                   
				});
			}
                
		}
	}
});
