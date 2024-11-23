const textArea = document.querySelector(".text-area");
const textAreaWrapper = document.querySelector(".text-area-wrapper");
const characterCountSpan = document.querySelector(".character-count");
function trackTextAreaContent(){
    characterCountSpan.innerHTML = `${textArea.value.length}/250`;
    if(textArea.value.length >= 250){
        textAreaWrapper.classList.add("no-allowed");
        characterCountSpan.classList.add("text-limit");
        textArea.classList.add("text-limit");
    }else{
        textAreaWrapper.classList.remove("no-allowed");
        characterCountSpan.classList.remove("text-limit");
        textArea.classList.remove("text-limit");
    }
}
trackTextAreaContent();

textArea.addEventListener("keyup",trackTextAreaContent);