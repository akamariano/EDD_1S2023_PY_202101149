let transmitter = '';
let receiver = '';
let basicGraphvizCode = '';
let extraInfoGraphvizCode = '';


const SHA256 = (message) => {
    return CryptoJS.SHA256(message).toString();
};

const encryptAES = (message, key) => {
    return CryptoJS.AES.encrypt(message, key).toString();
};

const decryptAES = (ciphertext, key) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    return bytes.toString(CryptoJS.enc.Utf8);
};
class Block {
    constructor(index, timestamp, transmitter, receiver, message, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.transmitter = transmitter;
        this.receiver = receiver;
        this.message = message;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.timestamp + this.transmitter + this.receiver + this.message + this.previousHash);
    }
}
class Blockchain {
    constructor() {
        this.chain = [];
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        if (this.chain.length === 0) {
            newBlock.index = 0;
            newBlock.previousHash = '0000';
        } else {
            newBlock.index = this.getLatestBlock().index + 1;
            newBlock.previousHash = this.getLatestBlock().hash;
        }
        newBlock.timestamp = new Date().toLocaleString();
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }

    saveToLocalStorage() {
        localStorage.setItem('blockchain', JSON.stringify(this.chain));
    }

    loadFromLocalStorage() {
        const loadedChain = JSON.parse(localStorage.getItem('blockchain'));
        if (loadedChain) {
            this.chain = loadedChain;
        }
    }
}
const myBlockchain = new Blockchain();
myBlockchain.loadFromLocalStorage();

const newChatButton = document.getElementById('loadFileBtn');
const messageInput = document.querySelector('.chat-window__footer input');
const sendMessageButton = document.querySelector('.chat-window__footer button');
const chatWindowMessages = document.querySelector('.chat-window__messages');

function loadMessages() {
    chatWindowMessages.innerHTML = '';

    const secretKey = 'una_clave_secreta';

    myBlockchain.chain.forEach((block) => {
        if ((block.transmitter === transmitter && block.receiver === receiver) || (block.transmitter === receiver && block.receiver === transmitter)) {
            const decryptedMessage = decryptAES(block.message, secretKey);
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.classList.add(block.transmitter === transmitter ? 'sent' : 'received');
            
            // Adding transmitter, receiver, and timestamp information to each message
            const messageInfo = document.createElement('p');
            messageInfo.classList.add('message-info');
            if (block.transmitter === transmitter) {
                messageInfo.innerHTML = `Enviado a: ${block.receiver} | Fecha y Hora: ${block.timestamp}`;
            } else {
                messageInfo.innerHTML = `Recibido de: ${block.transmitter} | Fecha y Hora: ${block.timestamp}`;
            }
            messageDiv.appendChild(messageInfo);
            
            const messageContent = document.createElement('p');
            messageContent.classList.add('message-content');
            messageContent.textContent = decryptedMessage;
            messageDiv.appendChild(messageContent);

            chatWindowMessages.appendChild(messageDiv);
        }
    });
}
const sidebarChats = document.querySelector('.sidebar__chats');
function loadChats(transmitterId) {
    const contacts = new Set();

    myBlockchain.chain.forEach((block) => {
        if (block.transmitter === transmitterId) {
            contacts.add(block.receiver);
        } else if (block.receiver === transmitterId) {
            contacts.add(block.transmitter);
        }
    });

    sidebarChats.innerHTML = '';

    contacts.forEach((contact) => {
        addNewContact(contact);
    });
}


newChatButton.addEventListener('click', () => {
    const newTransmitter = getcurrentuserid2();
    const newReceiver = prompt('Ingrese el carnet del receptor:');
    const hashedCarnets = getHashedCarnets();

    // Verifica si el carnet existe en la tabla hash
    let carnetExists = false;
    for (let i = 0; i < hashedCarnets.length; i++) {
        if (hashedCarnets[i] && hashedCarnets[i].carnet === parseInt(newReceiver)) {
            carnetExists = true;
            break;
        }
    }

    if (!carnetExists) {
        alert('El carnet ingresado no existe.');
        return;
    }

    if (newTransmitter && newReceiver) {
        transmitter = newTransmitter;
        receiver = newReceiver;
        addNewContact(newReceiver);
    }
});

sendMessageButton.addEventListener('click', () => {
    const message = messageInput.value;
    const secretKey = 'una_clave_secreta';

    if (message) {
        const encryptedMessage = encryptAES(message, secretKey);
        const newBlock = new Block(Date.now(), new Date().toLocaleString(), transmitter, receiver, encryptedMessage);
        myBlockchain.addBlock(newBlock);
        myBlockchain.saveToLocalStorage();

        messageInput.value = '';
        loadMessages();
    }
    generateGraphvizCodeWithExtraInfo(myBlockchain);
    generateGraphvizCode(myBlockchain);
});
function getHashedCarnets() {
    return JSON.parse(localStorage.getItem('tablaHash'));
  }
// // Carga los mensajes iniciales si ya existe un chat entre el transmisor y el receptor
loadMessages();

document.addEventListener('DOMContentLoaded', () => {
    transmitter = getcurrentuserid2();
    loadChats(transmitter);
});
function addNewContact(contactId) {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    contactDiv.textContent = `Usuario: ${contactId}`;
    contactDiv.addEventListener('click', () => {
        receiver = contactId;
        loadMessages();

        // Muestra el carnet del contacto seleccionado en el elemento <h2>
        const selectedContactCarnet = document.getElementById('selectedContactCarnet');
        selectedContactCarnet.textContent = `Carnet del contacto: ${contactId}`;
    });
    sidebarChats.appendChild(contactDiv);
}
function loadBlockchainFromLocalStorage() {
    const loadedChain = JSON.parse(localStorage.getItem('blockchain'));
    if (loadedChain) {
        myBlockchain.chain = loadedChain;
    }
}
function generateGraphvizCode(blockchain) {
    let graphCode = "digraph Blockchain {\n";
    graphCode += "rankdir=TB;\n";
    graphCode += "node [shape=record];\n";

    for (let i = 0; i < blockchain.chain.length; i++) {
        const block = blockchain.chain[i];
        const label = `Timestamp: ${block.timestamp}|Emisor: ${block.transmitter}|Receptor: ${block.receiver}|Prev: ${block.previousHash.substring(0, 8)}...`;
        graphCode += `block${i} [label="{${label}}"];\n`;

        if (i > 0) {
            graphCode += `block${i - 1} -> block${i};\n`;
        }
    }

    graphCode += "}\n";
    basicGraphvizCode = graphCode;
    return graphCode;
}

function generateQuickChartUrl(graphvizCode) {
    const encodedGraphvizCode = encodeURIComponent(graphvizCode);
    return `https://quickchart.io/graphviz?graph=${encodedGraphvizCode}`;
}

function displayBlockchainGraphInNewWindow() {
    loadBlockchainFromLocalStorage(); // Carga la cadena de bloques desde localStorage
    const graphvizCode = generateGraphvizCode(myBlockchain);
    const imageUrl = generateQuickChartUrl(graphvizCode);

    const newWindow = window.open('', '_blank');
    newWindow.document.write('<html><head><title>Blockchain Graph</title></head><body>');
    newWindow.document.write(`<img src="${imageUrl}" alt="Blockchain Graph">`);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
}
function displayBlockchainGraphWithExtraInfo() {
    const graphCode = generateGraphvizCodeWithExtraInfo(myBlockchain);
    const graphUrl = "https://quickchart.io/graphviz?graph=" + encodeURIComponent(graphCode);
    window.open(graphUrl, '_blank');
}

function generateGraphvizCodeWithExtraInfo(blockchain) {
    let graphCode = "digraph Blockchain {\n";
    graphCode += "rankdir=TB;\n";
    graphCode += "node [shape=record];\n";

    for (let i = 0; i < blockchain.chain.length; i++) {
        const block = blockchain.chain[i];
        const label = `Index: ${block.index}|Timestamp: ${block.timestamp}|Emisor: ${block.transmitter}|Receptor: ${block.receiver}|Mensaje codificado: ${block.message}|Prev Hash: ${block.previousHash.substring(0, 8)}...|Hash: ${block.hash.substring(0, 8)}...`;
        graphCode += `block${i} [label="{${label}}"];\n`;

        if (i > 0) {
            graphCode += `block${i - 1} -> block${i};\n`;
        }
    }

    graphCode += "}\n";
    extraInfoGraphvizCode = graphCode;
    return graphCode;
}
function getBasicGraphvizCode() {
    return basicGraphvizCode;
}

function getExtraInfoGraphvizCode() {
    return extraInfoGraphvizCode;
}
// Carga el gráfico de la cadena de bloques cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    generateGraphvizCodeWithExtraInfo(myBlockchain)
    generateGraphvizCode(myBlockchain);
    getcurrentusern();
    localStorage.setItem('basicGraphvizCode', basicGraphvizCode);
localStorage.setItem('extraInfoGraphvizCode', extraInfoGraphvizCode);
});
function getcurrentusern(){
const usuariocur = JSON.parse(localStorage.getItem("currentuser"));
// cargarArbolNADesdeLocalStorage(); 
console.log(usuariocur.nario)
return usuariocur.nario
}