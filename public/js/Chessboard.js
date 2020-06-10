// matrice che rappresenta la situazione della scacchiera mossa dopo mossa
var Chessboard = [
    [ // prima riga
        { name: 'Black Rook 1', color: true, firstMove: true },
        { name: 'Black Knight 1', color: true, firstMove: true },
        { name: 'Black Bishop 1', color: true, firstMove: true },
        { name: 'Black King', color: true, firstMove: true },
        { name: 'Black Queen', color: true, firstMove: true},
        { name: 'Black Bishop 2', color: true, firstMove: true },
        { name: 'Black Knight 2', color: true, firstMove: true },
        { name: 'Black Rook 2', color: true, firstMove: true }
    ], [ // seconda riga
        { name: 'Black Pawn 8', color: true, firstMove: true }, 
        { name: 'Black Pawn 7', color: true, firstMove: true },  
        { name: 'Black Pawn 6', color: true, firstMove: true }, 
        { name: 'Black Pawn 5', color: true, firstMove: true },
        { name: 'Black Pawn 4', color: true, firstMove: true },
        { name: 'Black Pawn 3', color: true, firstMove: true },
        { name: 'Black Pawn 2', color: true, firstMove: true },
        { name: 'Black Pawn 1', color: true, firstMove: true }
    ], [ // terza riga
        { name: null }, 
        { name: null },  
        { name: null }, 
        { name: null }, 
        { name: null }, 
        { name: null }, 
        { name: null }, 
        { name: null }, 
    ], [ // quarta riga
        { name: null }, 
        { name: null },  
        { name: null }, 
        { name: null }, 
        { name: null }, 
        { name: null }, 
        { name: null }, 
        { name: null }, 
    ], [ // quinta riga
        { name: null }, 
        { name: null },  
        { name: null }, 
        { name: null }, 
        { name: null }, 
        { name: null }, 
        { name: null }, 
        { name: null }, 
    ], [ // sesta riga
        { name: null }, 
        { name: null },  
        { name: null }, 
        { name: null }, 
        { name: null }, 
        { name: null }, 
        { name: null }, 
        { name: null }, 
    ], [ // settimana riga
        { name: 'White Pawn 8', color: false, firstMove: true },  
        { name: 'White Pawn 7', color: false, firstMove: true }, 
        { name: 'White Pawn 6', color: false, firstMove: true }, 
        { name: 'White Pawn 5', color: false, firstMove: true }, 
        { name: 'White Pawn 4', color: false, firstMove: true }, 
        { name: 'White Pawn 3', color: false, firstMove: true }, 
        { name: 'White Pawn 2', color: false, firstMove: true }, 
        { name: 'White Pawn 1', color: false, firstMove: true }
    ], [ // ottava riga
        { name: 'White Rook 1', color: false, firstMove: true },
        { name: 'White Knight 1', color: false, firstMove: true },
        { name: 'White Bishop 1', color: false, firstMove: true },
        { name: 'White King', color: false, firstMove: true },
        { name: 'White Queen', color: false, firstMove: true },
        { name: 'White Bishop 2', color: false, firstMove: true },
        { name: 'White Knight 2', color: false, firstMove: true },
        { name: 'White Rook 2', color: false, firstMove: true }
    ]
];