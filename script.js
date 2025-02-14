function selectionOption(option) {
    if (option == 'yes') {
        flashColors(function(){
            document.getElementById('question').style.display = 'none';
            displaySamhi();
        });
    } else if (option == 'no') {
        document.getElementById('no-button').innerText = 'THINK AGAIN';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option');
    }
}

function flashColors(callback) {
    var colors = ['#000080', '#808080'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
        showSlayyyy();  // Show SLAYYYY text after colors finish flashing
    }, 2000);
}

function showSlayyyy() {
    var slayText = document.createElement('div');
    slayText.innerText = "SLAYYYY";
    slayText.style.fontSize = "30px";  
    slayText.style.fontWeight = "bold";  
    slayText.style.color = "pink";  
    slayText.style.textAlign = "center";  
    slayText.style.marginTop = "20px";  
    document.body.appendChild(slayText);  
}

function displayHamster() {
    var imageContainer = document.getElementById('image-container');
    var hamsterImage = new Image();
    hamsterImage.src = 'hamster..jpg';  // Kept the filename with double periods
    hamsterImage.alt = 'hamster';
    hamsterImage.onload = function() {
        imageContainer.appendChild(hamsterImage);
    };
}

function displaySamhi() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var samhiImage = new Image();  // Renamed the variable to avoid confusion with the function name
    samhiImage.src = 'dhanbi.gif';  // Check the correct path to your dhanbi image
    samhiImage.alt = 'dhanbi';
    samhiImage.onload = function() {
        imageContainer.appendChild(samhiImage);
        document.getElementById('options').style.display = 'none';
    };
}

displayHamster();  // Display hamster when the page loads
