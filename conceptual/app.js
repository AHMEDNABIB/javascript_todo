// const allButton =document.getElementsByClassName("button-test")

// for (const button of allButton) {
//     button.addEventListener('click', function (e) {
//         console.log(e.parentNode)
//         title = document.getElementById('title')

//         if (e.target.id == "prime") {
// 			title.style.color = "red";
// 		} else {
// 			title.style.color = "green";
// 		}
//     })
     
    
// }


let count = 0;

document.getElementById('add').addEventListener('click',function (e) {
    count++
    // document.getElementById("count").innerText = count
    control('count')
})

document.getElementById("minus").addEventListener("click", function (e) {
    count--;
    
    if (count < 0) {
         document.getElementById("count").innerText = 0;
        // control('count')
        count = 0
        
    } else {
        // document.getElementById("count").innerText = count;

        control('count')
    }
	
});

function control(id) {
    document.getElementById(id).innerText = count;
}