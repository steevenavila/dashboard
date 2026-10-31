/**
 * AQUA NOTEPAD ENGINE (Arrastável & Redimensionável)
 */

let arquivoHandle = null;

const windowEl = document.getElementById('notepadWindow');
const headerEl = document.getElementById('windowHeader');
const resizerEl = document.getElementById('windowResizer');
const textareaEl = document.getElementById('notepadCore');
const titleEl = document.getElementById('windowTitle');

// Atribuição das ações de arquivo às gemas superiores
document.getElementById('btnNew').addEventListener('click', novoArquivo);
document.getElementById('btnOpen').addEventListener('click', abrirArquivoLocal);
document.getElementById('btnSave').addEventListener('click', salvarArquivoLocal);

// Inicializa o texto padrão
textareaEl.value = "This is a text editor test.";
textareaEl.focus();

/* --- 1. GERENCIADOR DE ARRASTE (MOVE) --- */
let dragX = 0, dragY = 0;
headerEl.onmousedown = (e) => {
    if (e.target.classList.contains('btn-gema')) return;
    e.preventDefault();
    dragX = e.clientX;
    dragY = e.clientY;
    document.onmouseup = stopDragAndResize;
    document.onmousemove = elementDrag;
};

function elementDrag(e) {
    e.preventDefault();
    const currentX = dragX - e.clientX;
    const currentY = dragY - e.clientY;
    dragX = e.clientX;
    dragY = e.clientY;
    windowEl.style.top = Math.max(0, windowEl.offsetTop - currentY) + "px";
    windowEl.style.left = Math.max(0, windowEl.offsetLeft - currentX) + "px";
}

/* --- 2. GERENCIADOR DE REDIMENSIONAMENTO (RESIZE) --- */
let resizeWidth = 0, resizeHeight = 0;
resizerEl.onmousedown = (e) => {
    e.preventDefault();
    resizeWidth = e.clientX;
    resizeHeight = e.clientY;
    document.onmouseup = stopDragAndResize;
    document.onmousemove = elementResize;
};

function elementResize(e) {
    e.preventDefault();
    const currentWidth = windowEl.offsetWidth + (e.clientX - resizeWidth);
    const currentHeight = windowEl.offsetHeight + (e.clientY - resizeHeight);
    
    // Respeita as dimensões mínimas configuradas no CSS
    if (currentWidth >= 250) {
        windowEl.style.width = currentWidth + "px";
        resizeWidth = e.clientX;
    }
    if (currentHeight >= 200) {
        windowEl.style.height = currentHeight + "px";
        resizeHeight = e.clientY;
    }
}

function stopDragAndResize() {
    document.onmouseup = null;
    document.onmousemove = null;
}

/* --- 3. SISTEMA DE ARQUIVOS LOCAL (FILE SYSTEM ACCESS API) --- */
function novoArquivo() {
    if (textareaEl.value.trim() !== "" && textareaEl.value !== "This is a text editor test.") {
        if (!confirm("Deseja criar um novo documento e descartar as alterações atuais?")) return;
    }
    arquivoHandle = null;
    textareaEl.value = "";
    titleEl.innerText = "Untitled";
    textareaEl.focus();
}

async function abrirArquivoLocal() {
    try {
        [arquivoHandle] = await window.showOpenFilePicker({
            types: [{ description: 'Arquivos de Texto', accept: { 'text/plain': ['.txt', '.md', '.json'] } }],
        });
        const file = await arquivoHandle.getFile();
        const texto = await file.text();
        
        textareaEl.value = texto;
        titleEl.innerText = file.name;
        textareaEl.focus();
    } catch (err) {
        console.warn("Abertura cancelada ou bloqueada no ambiente.");
    }
}

async function salvarArquivoLocal() {
    try {
        if (!arquivoHandle) {
            arquivoHandle = await window.showSaveFilePicker({
                suggestedName: 'notes.txt',
                types: [{ description: 'Arquivos de Texto', accept: { 'text/plain': ['.txt'] } }],
            });
        }
        const writable = await arquivoHandle.createWritable();
        await writable.write(textareaEl.value);
        await writable.close();
        
        const file = await arquivoHandle.getFile();
        titleEl.innerText = file.name;
    } catch (err) {
        console.warn("Escrita de arquivo cancelada ou rejeitada.");
    }
}
