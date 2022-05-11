const allButton =document.getElementsByClassName("button-test")

for (const button of allButton) {
    button.addEventListener('click', function (e) {
        console.log(e.classList)
        title = document.getElementById('title')

        if (e.target.id == "prime") {
			title.style.color = "red";
		} else {
			title.style.color = "green";
		}
    })
     
    
}