// Destaca o link do menu correspondente à seção visível na tela
const secoes = document.querySelectorAll('section[id]');
const linksNav = document.querySelectorAll('.nav__links a');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            const id = entrada.target.getAttribute('id');
            linksNav.forEach((link) => {
                link.style.color = link.getAttribute('href') === `#${id}`
                    ? 'var(--dourado)'
                    : '';
            });
        }
    });
}, { threshold: 0.5 });

secoes.forEach((secao) => observador.observe(secao));

// Envia o formulário de depoimento via fetch (evita recarregar a página)
// e mostra uma mensagem de agradecimento no lugar do form.
const formDepoimento = document.getElementById('form-depoimento');

if (formDepoimento) {
    formDepoimento.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const dados = new FormData(formDepoimento);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(dados).toString(),
        })
            .then(() => {
                formDepoimento.style.display = 'none';

                const feedback = document.createElement('p');
                feedback.className = 'depoimento-form__feedback depoimento-form__feedback--visivel';
                feedback.textContent = 'Obrigado! Seu depoimento foi enviado e será revisado em breve.';
                formDepoimento.parentElement.appendChild(feedback);
            })
            .catch(() => {
                alert('Não foi possível enviar agora. Tente novamente em instantes.');
            });
    });
}