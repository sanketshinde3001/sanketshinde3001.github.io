let lines = document.getElementById("menub");
let leftmenu = document.getElementById("mobilenav");

lines.addEventListener('click',()=>{
    leftmenu.classList.toggle('-translate-x-full')
})


function scrollToFooter() {
    const footer = document.querySelector('#contacts');
    if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
        console.log('Smooth scroll triggered successfully.');
    } else {
        console.error('Footer element not found.');
    }
}


function showCard(ip) {
    const card = document.getElementById('infoCard');
    if (card) {
        card.style.display = 'block';
        document.addEventListener('mousemove', updateCardPosition);
        document.getElementById("info").innerText = ip;
    }
}

function hideCard() {
    const card = document.getElementById('infoCard');
    if (card) {
        card.style.display = 'none';
        document.removeEventListener('mousemove', updateCardPosition);
    }
}

function updateCardPosition(event) {
    const card = document.getElementById('infoCard');
    if (card) {
        const offsetX = 15; // adjust as needed
        const offsetY = 15; // adjust as needed
        card.style.left = event.clientX + offsetX + 'px';
        card.style.top = event.clientY + offsetY + 'px';
    }
}

function submitb(event) {
    event.preventDefault();
}