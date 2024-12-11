const avatar = document.querySelector('.avatar');
const audioPlayer = document.getElementById('audioPlayer');
const messageContainer = document.getElementById('messageContainer');
const cImage = document.getElementById('cImage');
const lagScreen = document.getElementById('lagScreen');
const loadingSpinner = document.getElementById('loadingSpinner');
const messageBackground = document.getElementById('messageBackground');

let messageInterval;

avatar.addEventListener('click', () => {
    audioPlayer.play();
    loadingSpinner.style.display = 'block';

    setTimeout(() => {
        loadingSpinner.style.display = 'none';
        lagScreen.style.display = 'block';

        setTimeout(() => {
            lagScreen.style.display = 'none';
            messageBackground.style.display = 'block';

            let count = 0;
            messageInterval = setInterval(() => {
                const newMessage = document.createElement('div');
                newMessage.classList.add('message');
                newMessage.innerHTML = 'Nhớ nhớ nhớ em';
                newMessage.style.left = `${Math.random() * 100}%`;
                newMessage.style.top = `${Math.random() * 100}%`;

                messageContainer.appendChild(newMessage);
                count++;

                if (count >= 500) {
                    clearInterval(messageInterval);
                    setTimeout(() => {
                        cImage.style.display = 'block';
                    }, 100);
                }
            }, 300);
        }, 5000);
    }, 3000);
});

cImage.addEventListener('click', () => {
    window.location.href = "https://youtu.be/qRuSS93m_N29o88k";
});
