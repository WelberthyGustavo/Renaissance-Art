// Seleciona o checkbox e o body
const toggleSwitch = document.getElementById('toggleSwitch');
const body = document.body;

// Função para alternar o dark mode e salvar no LocalStorage
function switchMode(isDarkMode) {
    if (isDarkMode) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');  // Salva o estado no LocalStorage
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled'); // Salva o estado no LocalStorage
    }
}

// Verifica o estado do dark mode ao carregar a página
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    toggleSwitch.checked = true;  // Mantém o checkbox marcado
    switchMode(true);  // Ativa o modo escuro
}

// Adiciona o event listener no checkbox para detectar mudanças
toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked) {
        switchMode(true);  // Ativa o dark mode
    } else {
        switchMode(false);  // Desativa o dark mode
    }
});

