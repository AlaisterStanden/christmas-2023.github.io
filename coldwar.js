document.addEventListener('DOMContentLoaded', (event) => {
  var mainContent = document.getElementById('mainContent'); // Adjust this ID to your main content's ID
  var popup = document.getElementById('imagePopup');

  // Assuming 'map' is the ID of your map element
  document.getElementById('map').addEventListener('click', function() {
      // Display the image popup and blur the background
      popup.style.display = "block";
      mainContent.classList.add('blur-background');
  });

  document.getElementById('phone').addEventListener('click', function() {
    document.getElementById('phoneOverlay').style.display = 'block';
});

    var numberDisplay = document.getElementById('numberDisplay');
    var numButtons = document.getElementsByClassName('num-button');

    for (var i = 0; i < numButtons.length; i++) {
        numButtons[i].addEventListener('click', function() {
            numberDisplay.textContent += this.textContent;
        });
    }
  document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('numberDisplay').textContent = '';
  });
  
  document.getElementById('callButton').addEventListener('click', function() {
    var enteredNumber = document.getElementById('numberDisplay').textContent;
    if (enteredNumber === '111251883') { 
        document.getElementById('videoOverlay').style.display = 'block';
        document.getElementById('secretVideo').play();
    } else {
        alert('Incorrect number!');
    }
});

// Close the video player
document.getElementById('closeVideo').addEventListener('click', function() {
  document.getElementById('videoOverlay').style.display = 'none';
  document.getElementById('secretVideo').pause(); // Pause the video
});

// Close the phone popup
document.getElementById('closePhone').addEventListener('click', function() {
  document.getElementById('phoneOverlay').style.display = 'none';
});


document.getElementById('drawers').addEventListener('click', function() {
  var detailImage = document.getElementById('detailImage');
  detailImage.src = 'pictures/russian-letter.png'; // Path to the drawer image
  document.getElementById('detailImageContainer').style.display = 'block';
  document.getElementById('mainContent').classList.add('blur-background'); // Apply blur to background
});


document.getElementById('closeDetailImage').addEventListener('click', function() {
  document.getElementById('detailImageContainer').style.display = 'none';
  document.getElementById('mainContent').classList.remove('blur-background');
});


  
  document.getElementById('poi1').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click from bubbling up
    displayPhoto('pictures/news.jpg');
  });

  document.getElementById('poi2').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click from bubbling up
    displayPhoto('pictures/one-note.jpg');

  });
  document.getElementById('poi3').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click from bubbling up
    displayPhoto('pictures/medals.png');
  });

  document.getElementById('poi4').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click from bubbling up
    displayPhoto('pictures/graveyard.png');
  });
  function displayPhoto(photoUrl) {
    var detailImage = document.getElementById('detailImage');
    detailImage.src = photoUrl;
    document.getElementById('detailImageContainer').style.display = 'block';
}

});

window.onclick = function(event) {
  var popup = document.getElementById('imagePopup');
  if (event.target == popup) {
      // Hide the image popup and remove the blur from the background
      popup.style.display = "none";
      mainContent.classList.remove('blur-background');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var closeButton = document.getElementById('closeDetailImage');
  closeButton.addEventListener('click', function() {
      document.getElementById('detailImageContainer').style.display = 'none';
  });

  // ... Your existing event handlers ...
});


