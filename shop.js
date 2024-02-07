function showPopup(popupId, fadedBgId) {
    var popup = document.getElementById(popupId);
    var fadedBg = document.getElementById(fadedBgId);
    popup.style.display = 'block';
    fadedBg.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePopup(popupId, fadedBgId) {
    var popup = document.getElementById(popupId);
    var fadedBg = document.getElementById(fadedBgId);
    popup.style.display = 'none';
    fadedBg.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.getElementById('faded-bg').addEventListener('click', function() {
    closePopup('popup1', 'faded-bg');
});

document.getElementById('faded-bg2').addEventListener('click', function() {
    closePopup('popup2', 'faded-bg2');
});

document.getElementById('faded-bg3').addEventListener('click', function() {
    closePopup('popup3', 'faded-bg3');
});

document.getElementById('faded-bg4').addEventListener('click', function() {
    closePopup('popup4', 'faded-bg4');
});