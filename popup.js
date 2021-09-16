const launcher = document.querySelector('.launch-btn');

const handleLauncher = (event) => {
    event.preventDefault();
    console.log('Launching TagChat!');
}

launcher.addEventListener('click', handleLauncher);