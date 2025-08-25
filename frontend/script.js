// show message

(function loadFont() {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
})();

function showMessage(msg, good = true, time = 3) {
    const messageBox = document.createElement('div');

    messageBox.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #ffffffcd;
        border-radius: 10px;
        border: 3.5px solid ${good ? 'rgb(33, 150, 83)' : 'rgb(220, 53, 69)'};
        padding: 15px 20px;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        min-width: 250px;
        max-width: 400px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 9999;
    `;


    // Added icon + bounce
    messageBox.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:center; gap:8px; margin-bottom:6px;
            color:${good ? 'rgb(33, 150, 83)' : 'rgb(220, 53, 69)'};">
            <img src="${good ? '/media/icons/right.svg' : '/media/icons/wrong.svg'}" 
                 style="width:20px; height:20px; animation: bounceIn 0.6s ease;" />
            <span style="font-weight:600;">${good ? 'SUCCESS' : 'ERROR'}</span>
        </div>
        <div style="color:#333;">${msg}</div>
    `;

    document.body.appendChild(messageBox);

    // Fade in
    requestAnimationFrame(() => {
        messageBox.style.opacity = "1";
        messageBox.style.transform = "translateX(-50%) translateY(0)";
    });

    // Remove after `time` seconds
    setTimeout(() => {
        messageBox.style.opacity = "0";
        messageBox.style.transform = "translateX(-50%) translateY(-20px)";
        setTimeout(() => {
            document.body.removeChild(messageBox);
        }, 300);
    }, time * 1000);

    // Inject bounce animation once
    if (!document.getElementById("toast-animations")) {
        const style = document.createElement("style");
        style.id = "toast-animations";
        style.innerHTML = `
            @keyframes bounceIn {
                0% { transform: scale(0.3); opacity: 0; }
                50% { transform: scale(1.1); opacity: 1; }
                70% { transform: scale(0.9); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}


// saved
function Saved() {
    const miniPopUptime = 1.0;

    if (document.getElementById('saved-popup')) return;

    const popup = document.createElement('div');
    popup.id = 'saved-popup';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.background = '#222'; // Dark mode
    popup.style.color = '#fff';
    popup.style.padding = '15px';
    popup.style.borderRadius = '12px';
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';
    popup.style.width = '100px';
    popup.style.height = '100px';
    popup.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
    popup.style.fontFamily = 'sans-serif';
    popup.style.fontSize = '14px';
    popup.style.zIndex = '9999';
    popup.style.opacity = '0';
    popup.style.transition = 'opacity 0.3s ease';

    // Circle container for tick image
    const circle = document.createElement('div');
    circle.style.width = '40px';
    circle.style.height = '40px';
    circle.style.borderRadius = '50%';
    circle.style.background = '#fff';
    circle.style.display = 'flex';
    circle.style.alignItems = 'center';
    circle.style.justifyContent = 'center';
    circle.style.marginBottom = '10px';

    // Tick image
    const img = document.createElement('img');
    img.src = '/media/icons/tick.svg'; // Make sure path is correct
    img.alt = 'tick';
    img.style.width = '20px';
    img.style.height = '20px';

    // Text
    const text = document.createElement('span');
    text.textContent = 'Saved';

    // Build the popup
    circle.appendChild(img);
    popup.appendChild(circle);
    popup.appendChild(text);
    document.body.appendChild(popup);

    // Animate in
    setTimeout(() => {
        popup.style.opacity = '1';
    }, 10);

    // Animate out and remove
    setTimeout(() => {
        popup.style.opacity = '0';
        setTimeout(() => popup.remove(), 300);
    }, (miniPopUptime * 1000));
}

