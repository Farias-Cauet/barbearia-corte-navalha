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

// Mostra se a barbearia está aberta agora, com base no horário: Ter a Sáb, 9h às 19h
function atualizarStatusAberto() {
    const elemento = document.getElementById('status-aberto');
    if (!elemento) return;

    const agora = new Date();
    const dia = agora.getDay(); // 0 = domingo ... 6 = sábado
    const horaDecimal = agora.getHours() + agora.getMinutes() / 60;

    const dentroDoDia = dia >= 2 && dia <= 6; // terça (2) a sábado (6)
    const dentroDoHorario = horaDecimal >= 9 && horaDecimal < 19;
    const aberto = dentroDoDia && dentroDoHorario;

    elemento.textContent = aberto ? '● Aberto agora' : '● Fechado no momento';
    elemento.classList.toggle('status--aberto', aberto);
    elemento.classList.toggle('status--fechado', !aberto);
}

atualizarStatusAberto();