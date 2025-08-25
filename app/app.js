const caixa = document.getElementById('caixa-dinamica');
const btn = document.getElementById('btn-acao');

function formatarHora(d = new Date()) {
  const pad = n => String(n).padStart(2, '0');
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

btn.addEventListener('click', () => {
  caixa.textContent = `🎉 Clique registrado às ${formatarHora()}!`;
  caixa.classList.add('card--flash');
  setTimeout(() => caixa.classList.remove('card--flash'), 400);
});

const style = document.createElement('style');
style.textContent = `
  .card--flash { outline: 3px solid #7c3aed; box-shadow: 0 0 0 6px rgba(124,58,237,.2); }
`;
document.head.appendChild(style);
