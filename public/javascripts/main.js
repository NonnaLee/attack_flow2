// Pop-up window
function fileUploadOpen() {
    document.getElementById("fileUploadOverlay").style.display = "block";
}

// Close the file upload pop-up if the user clicks outside its window
const popupContainer = document.querySelector('#fileUploadOverlay');
popupContainer.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
        popupContainer.style.display = "none";
    }
});

const submitButton = document.getElementById("fileSubmit");
submitButton.addEventListener('click', (event) => {
    if (document.getElementById("fileUpload").files.length == 0) {
        event.preventDefault();
    }
});
// End of pop-up close script