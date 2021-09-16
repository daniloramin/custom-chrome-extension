function handleClick(event) {

    function handleDocument(event) {
        
        console.log(event);
    }

    document.addEventListener('click', handleDocument);

  
};

window.addEventListener('click', handleClick);