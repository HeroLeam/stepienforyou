window.onscroll = function () {
    let button = document.getElementById("topButton");
    if (document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");
}

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        let menu = document.querySelector(".menu");
        menu.classList.remove("show");
    });
});

// --- Copiar chave BTC ao clicar no bloco .copy-btc ---
(function setupCopyBTC() {
    function attach(el) {
        const addr = el.dataset.copy;
        const label = el.querySelector('p');
        const original = label ? label.textContent : '';

        function giveFeedback() {
            if (!label) return;
            label.textContent = 'Chave copiada!';
            setTimeout(() => (label.textContent = original), 2000);
        }

        async function doCopy() {
            if (!addr) return;
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(addr);
                } else {
                    // Fallback
                    const ta = document.createElement('textarea');
                    ta.value = addr;
                    ta.style.position = 'fixed';
                    ta.style.opacity = '0';
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand('copy');
                    document.body.removeChild(ta);
                }
                giveFeedback();
            } catch (e) {
                console.error('Falha ao copiar a chave BTC:', e);
            }
        }

        el.addEventListener('click', doCopy);
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                doCopy();
            }
        });
    }

    document.querySelectorAll('.copy-btc').forEach(attach);
})();