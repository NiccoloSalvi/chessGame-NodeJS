// creazione cubo, che indica una mossa possibile per il pezzo
function createCube(objPos, a) {
    var geometry = new THREE.BoxGeometry(5, 0.3, 5);
    var material = new THREE.MeshBasicMaterial({color: 0xffff00}); // colore giallo
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(objPos.x, objPos.y, objPos.z); // posizione passata come parametro
    cube.name = "possiblePosition" + a; // nome del cubo

    possiblePosition.add(cube); // cubo aggiunto al gruppo delle mosse possibili
}

// classe che forma l'unità base nel vettore mosseTemp
class OBJmosseTemp {
   constructor(v, pz, n) {
        this.__vector = v; // vector3d 
        this.__pezzoNemico = pz; // se c'è un pezzo che piò essere mangiato
        this.__name = n; // nome del pezzo, se esiste, altrimenti null
    }

    get pezzoNemico() {
        return this.__pezzoNemico
    }
    get vector() {
        return this.__vector;
    }
    get name() {
        return this.__name;
    }
}

// dalla posizione della scacchiera alla rispettiva posizione nella matrice
function boradTOmatrix(pos) {
    switch(pos) {
        case 21:
            return 0;
        case 15:
            return 1;
        case 9:
            return 2;
        case 3:
            return 3;
        case -3:
            return 4;
        case -9:
            return 5;
        case -15:
            return 6;
        case -21:
            return 7;
    }
}

// dalla posizione in matrice alla rispettiva posizione in scacchiera
function matrixTOboard(pos) {
    switch(pos) {
        case 0:
            return 21;
        case 1:
            return 15;
        case 2:
            return 9;
        case 3:
            return 3;
        case 4:
            return -3;
        case 5:
            return -9;
        case 6:
            return -15;
        case 7:
            return -21;
    }
}

function updateVettore3(vett) {
    // per ogni elemento del vettore, vengono trasformati i vari valori da matrice a scacchiera
    vett.forEach(element => {
        element.vector.x = matrixTOboard(element.vector.x);
        element.vector.z = matrixTOboard(element.vector.z);
    });

    return vett;
}

function moveObj(name, pos) {
    colonna = boradTOmatrix(pos.x); // colonna del pezzo cliccato
    riga = boradTOmatrix(pos.z); // riga del pezzo cliccato

    if (name.includes("Pawn")) {
        return updateVettore3(mossePedone(colonna, riga)); // mosse del pedone
    } else if (name.includes("Rook")) {
        return updateVettore3(mosseTorre(colonna, riga)); // mosse della torre
    } else if (name.includes("Queen")) {
        return updateVettore3(mosseRegina(colonna, riga)); // mosse della regina
    } else if (name.includes("Knight")) {
        return updateVettore3(mosseCavallo(colonna, riga)); // nosse del cavallo
    } else if (name.includes("Bishop")) {
        return updateVettore3(mosseAlfiere(colonna, riga)); // mosse dell'alfiere
    } else if (name.includes("King")) {
        return updateVettore3(mosseRe(colonna, riga)); // mosse del re
    }
}

function degreeToRad(deg) {
    return deg * (Math.PI / 180);
}

function onDocumentMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function updateMatrix(oldPos, newPos, name, isBlack) {
    colonna = boradTOmatrix(newPos.x); // colonna della nuova posizione dell'oggetto cliccato
    riga = boradTOmatrix(newPos.z); // riga della nuova posizione dell'oggetto cliccato

    // set info pezzo nella nuova posizione in matrice
    Chessboard[riga][colonna].name = name;
    Chessboard[riga][colonna].color = isBlack;
    Chessboard[riga][colonna].firstMove = false;

    oldColonna = boradTOmatrix(oldPos.x); // colonna della vecchia posizione del pezzo
    oldRiga = boradTOmatrix(oldPos.z); // riga  della vecchia posizione del pezzo

    // annullata la vecchia posizone in matrice
    Chessboard[oldRiga][oldColonna].name = null;
    Chessboard[oldRiga][oldColonna].color = null;
    Chessboard[oldRiga][oldColonna].firstMove = false;
}