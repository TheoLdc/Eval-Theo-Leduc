
function openPopupIfValid() {
    const nomInput = document.getElementById('nom');
    const prenomInput = document.getElementById('prenom');
    const emailInput = document.getElementById('mail');

    let infos = /^[a-zA-Z]+$/;
    if (!infos.test(nomInput.value) || !infos.test(prenomInput.value)) {
        alert("Seuls les lettres sont prises en compte pour le nom et le prénom.");
        return false;
    }

    if (emailInput.value !== "") {
        let mailInfos = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!mailInfos.test(emailInput.value)) {
            alert("L'adresse mail n'est pas correcte.");
            return false;
        }
    }

    if (nomInput.checkValidity() && prenomInput.checkValidity() && emailInput.checkValidity()) {
        const windowFeatures = 'width=800,height=600,scrollbars=yes,resizable=yes';
        window.open('./Messageenvoye.html', '', windowFeatures);
        return false;
    } else {
        nomInput.reportValidity();
        prenomInput.reportValidity();
        emailInput.reportValidity();
        return false;
    }
}



function toggleMenu() {
    const menu = document.querySelector('.menuburger');
    menu.classList.toggle('menu');
}







const logos = document.querySelectorAll('.logo');
const texts = document.querySelectorAll('.text');


logos.forEach(logo => {
    logo.addEventListener('click', function() {
        const targetId = logo.getAttribute('data-target');
        const targetText = document.getElementById(targetId);
        if (targetText.style.display === 'none') {
            targetText.style.display = 'block';
        } else {
            targetText.style.display = 'none';
        }
    });
});

