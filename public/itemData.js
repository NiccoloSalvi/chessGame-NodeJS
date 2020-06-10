// rappresenta tutti gli ogetti che devono essere caricati in scena
var items = [
    {
        'name': 'Black King', // nome dell'oggetto
        'model': 'json/King.json', // modello json dell'oggetto
        'black': true, // se bianco o nero
        'position': { x: -3, y: 0, z: 21 }, // posizione nella scacchiera
        'rotation': { x: 0, y: 0, z: 0 }, // rotazione
        'board': false // rappresenta o meno la scacchiera. usato nel ciclo foreach
    }, {
        'name': 'Black Queen',
        'model': 'json/Queen.json',
        'black': true,
        'position': { x: 3, y: 0, z: 21 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'Black Bishop 1',
        'model': 'json/Bishop.json',
        'black': true,
        'position': { x: 9, y: 0, z: 21 },
        'rotation': { x: 0, y: 90, z: 0 },
        'board': false
    }, {
        'name': 'Black Bishop 2',
        'model': 'json/Bishop.json',
        'black': true,
        'position': { x: -9, y: 0, z: 21 },
        'rotation': { x: 0, y: 90, z: 0 },
        'board': false
    },  {
        'name': 'Black Knight 1',
        'model': 'json/Knight.json',
        'black': true,
        'position': { x: 15, y: 0, z: 21 },
        'rotation': { x: 0, y: -90, z: 0 },
        'board': false
    }, {
        'name': 'Black Knight 2',
        'model': 'json/Knight.json',
        'black': true,
        'position': { x: -15, y: 0, z: 21 },
        'rotation': { x: 0, y: -90, z: 0 },
        'board': false
    }, {
        'name': 'Black Rook 1',
        'model': 'json/Rook.json',
        'black': true,
        'position': { x: 21, y: 0, z: 21 },
        'rotation': { x: 0, y: -90, z: 0 },
        'board': false
    }, {
        'name': 'Black Rook 2',
        'model': 'json/Rook.json',
        'black': true,
        'position': { x: -21, y: 0, z: 21 },
        'rotation': { x: 0, y: -90, z: 0 },
        'board': false
    }, {
        'name': 'Black Pawn 1',
        'model': 'json/Pawn.json',
        'black': true,
        'position': { x: -21, y: 0, z: 15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'Black Pawn 2',
        'model': 'json/Pawn.json',
        'black': true,
        'position': { x: -15, y: 0, z: 15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'Black Pawn 3',
        'model': 'json/Pawn.json',
        'black': true,
        'position': { x: -9, y: 0, z: 15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'Black Pawn 4',
        'model': 'json/Pawn.json',
        'black': true,
        'position': { x: -3, y: 0, z: 15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'Black Pawn 5',
        'model': 'json/Pawn.json',
        'black': true,
        'position': { x: 3, y: 0, z: 15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'Black Pawn 6',
        'model': 'json/Pawn.json',
        'black': true,
        'position': { x: 9, y: 0, z: 15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'Black Pawn 7',
        'model': 'json/Pawn.json',
        'black': true,
        'position': { x: 15, y: 0, z: 15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'Black Pawn 8',
        'model': 'json/Pawn.json',
        'black': true,
        'position': { x: 21, y: 0, z: 15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'White King',
        'model': 'json/King.json',
        'black': false,
        'position': { x: 3, y: 0, z: -21 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'White Queen',
        'model': 'json/Queen.json',
        'black': false,
        'position': { x: -3, y: 0, z: -21 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'White Bishop 1',
        'model': 'json/Bishop.json',
        'black': false,
        'position': { x: 9, y: 0, z: -21 },
        'rotation': { x: 0, y: -90, z: 0 },
        'board': false
    }, {
        'name': 'White Bishop 2',
        'model': 'json/Bishop.json',
        'black': false,
        'position': { x: -9, y: 0, z: -21 },
        'rotation': { x: 0, y: -90, z: 0 },
        'board': false
    }, {
        'name': 'White Knight 1',
        'model': 'json/Knight.json',
        'black': false,
        'position': { x: 15, y: 0, z: -21 },
        'rotation': { x: 0, y: 90, z: 0 },
        'board': false
    }, {
        'name': 'White Knight 2',
        'model': 'json/Knight.json',
        'black': false,
        'position': { x: -15, y: 0, z: -21 },
        'rotation': { x: 0, y: 90, z: 0 },
        'board': false
    }, {
        'name': 'White Rook 1',
        'model': 'json/Rook.json',
        'black': false,
        'position': { x: 21, y: 0, z: -21 },
        'rotation': { x: 0, y: -90, z: 0 },
        'board': false
    }, {
        'name': 'White Rook 2',
        'model': 'json/Rook.json',
        'black': false,
        'position': { x: -21, y: 0, z: -21 },
        'rotation': { x: 0, y: -90, z: 0 },
        'board': false
    }, {
        'name': 'White Pawn 1',
        'model': 'json/Pawn.json',
        'black': false,
        'position': { x: -21, y: 0, z: -15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'White Pawn 2',
        'model': 'json/Pawn.json',
        'black': false,
        'position': { x: -15, y: 0, z: -15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'White Pawn 3',
        'model': 'json/Pawn.json',
        'black': false,
        'position': { x: -9, y: 0, z: -15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'White Pawn 4',
        'model': 'json/Pawn.json',
        'black': false,
        'position': { x: -3, y: 0, z: -15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'White Pawn 5',
        'model': 'json/Pawn.json',
        'black': false,
        'position': { x: 3, y: 0, z: -15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'White Pawn 6',
        'model': 'json/Pawn.json',
        'black': false,
        'position': { x: 9, y: 0, z: -15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'White Pawn 7',
        'model': 'json/Pawn.json',
        'black': false,
        'position': { x: 15, y: 0, z: -15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    }, {
        'name': 'White Pawn 8',
        'model': 'json/Pawn.json',
        'black': false,
        'position': { x: 21, y: 0, z: -15 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': false
    },  {
        'name': 'Board',
        'model': 'json/Board.json',
        'black': true,
        'position': { x: 0, y: 0, z: 0 },
        'rotation': { x: 0, y: 0, z: 0 },
        'board': true
    }
];  