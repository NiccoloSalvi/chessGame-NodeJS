// mosse del pedone
function mossePedone(col, riga) {
    var mosseTemp = new Array();

    i = 1;
    f = 2;

    if (!Chessboard[riga][col].color) {
        i = -1;
        f = -2;
    }
    
    if (riga + i < 8 && riga + i >= 0) {
        if (Chessboard[riga + i][col].name == null) {
            mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(col, 0, riga + i), false, null));
            if (Chessboard[riga][col].firstMove && Chessboard[riga + f][col].name == null) 
                mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(col, 0, riga + f), false, null));
        }
        // mangia il pezzo
        if (col - i >= 0 && col - i < 8 && Chessboard[riga + i][col - i].name != null && Chessboard[riga + i][col - i].color != Chessboard[riga][col].color)
            mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(col - i, 0, riga + i), true, Chessboard[riga + i][col - i].name));
        // mangia il pezzo
        if (col + i >= 0  && col + i < 8  && Chessboard[riga + i][col + i].name != null && Chessboard[riga + i][col + i].color != Chessboard[riga][col].color)
            mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(col + i, 0, riga + i), true, Chessboard[riga + i][col + i].name));
    }

    return mosseTemp;
}

// mosse della torre
function mosseTorre(c, r) {
    var mosseTemp = new Array();
    
    i = 1;
    while (r + i < 8 && r + i >= 0 && Chessboard[r + i][c].name == null) {
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c, 0, r + i), false, null));
        i++;
    }
    // mangia il pezzo
    if (r + i < 8 && r + i >= 0 && Chessboard[r + i][c].color != Chessboard[r][c].color)
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c, 0, r + i), true, Chessboard[r + i][c].name));
                
    i = 1;
    while (r - i >= 0 && r - i < 8 && Chessboard[r - i][c].name == null) {
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c, 0, r - i), false, null));
        i++;
    }
    // mangia il pezzo
    if (r - i >= 0 && r - i < 8 && Chessboard[r - i][c].color != Chessboard[r][c].color)
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c, 0, r - i), true, Chessboard[r - i][c].name));

    i = 1;
    while (c + i < 8 && Chessboard[r][c + i].name == null) {
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c + i, 0, r), false, null));
        i++;
    }
    // mangia il pezzo
    if (c + i < 8 && Chessboard[r][c + i].color != Chessboard[r][c].color)
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c + i, 0, r), true, Chessboard[r][c + i].name));
            
    i = 1;
    while (c - i >= 0 && Chessboard[r][c - i].name == null) {
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c - i, 0, r), false, null));
        i++;
    }
    // mangia il pezzo
    if (c - i >= 0 && Chessboard[r][c - i].color != Chessboard[r][c].color)
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c - i, 0, r), true, Chessboard[r][c - i].name));
                
    return mosseTemp;
}

// mosse del cavallo
function mosseCavallo(c, r) {
    var mosseTemp = new Array();

    k = 2;
    i = 1;
    
    for (f = 0; f < 2; f++) {
        if (r + k < 8) {
            if (c + i < 8) {
                if (Chessboard[r + k][c + i].name == null) {
                    mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c + i, 0, r + k), false, null));
                } else if (Chessboard[r + k][c + i].color != Chessboard[r][c].color) {
                    mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c + i, 0, r + k), true, Chessboard[r + k][c + i].name));
                }
            }

            if (c - i >= 0) {
                if (Chessboard[r + k][c - i].name == null) {
                    mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c - i, 0, r + k), false, null));
                } else if (Chessboard[r + k][c - i].color != Chessboard[r][c].color) {
                    mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c - i, 0, r + k), true, Chessboard[r + k][c - i].name));
                }
            }
        }

        if (r - k >= 0) {
            if (c + i < 8) {
                if (Chessboard[r - k][c + i].color == null) {
                    mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c + i, 0, r - k), false, null));
                } else if (Chessboard[r - k][c + i].color != Chessboard[r][c].color) {
                    mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c + i, 0, r - k), true, Chessboard[r - k][c + i].name));
                }
            }

            if (c - i >= 0)
            {
                if (Chessboard[r - k][c - i].name == null) {
                    mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c - i, 0, r - k), false, null));
                } else if (Chessboard[r - k][c - i].color != Chessboard[r][c].color)
                {
                    mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c - i, 0, r - k), true, Chessboard[r - k][c - i].name));
                }
            }
        }

        k = 1;
        i = 2;
    }

    return mosseTemp;
}

// mosse alfiere
function mosseAlfiere(c, r) {
    var mosseTemp = new Array();

    i = 1;

    while (r + i < 8 && c + i < 8 && Chessboard[r + i][c + i].name == null) {
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c + i, 0, r + i), false, null));
        i++;
    }
    // mangia il pezzo
    if (r + i < 8 && c + i < 8 && Chessboard[r + i][c + i].color != Chessboard[r][c].color) {
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c + i, 0, r + i), true, Chessboard[r + i][c + i].name));
    }

    i = 1;
    while (r - i >= 0 && c - i >= 0 && Chessboard[r - i][c - i].name == null) {
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c - i, 0, r - i), false, null));
        i++;
    }
    // mangia il pezzo
    if (r - i >= 0 && c - i >= 0 &&  Chessboard[r - i][c - i].color != Chessboard[r][c].color) {
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c - i, 0, r - i), true, Chessboard[r - i][c - i].name));
    }

    i = 1;
    while (c + i < 8 && r - i >= 0 && Chessboard[r - i][c + i].name == null) {
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c + i, 0, r - i), false, null));
        i++;
    }

    // mangia il pezzo
    if (c + i < 8 && r - i >= 0 && Chessboard[r - i][c + i].color != Chessboard[r][c].color) {
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c + i, 0, r - i), true, Chessboard[r - i][c + i].name));
    }

    i = 1;
    while (c - i >= 0 && r + i < 8 && Chessboard[r + i][c - i].name == null) {
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c - i, 0, r + i), false, null));
        i++;
    }
    // mangia il pezzo
    if (c - i >= 0 && r + i < 8 && Chessboard[r + i][c - i].color != Chessboard[r][c].color) {
        mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c - i, 0, r + i), true, Chessboard[r + i][c - i].name));
    }

    return mosseTemp;
}

// mosse del re
function mosseRe(c, r) {
    var mosseTemp = new Array();

    i = 1, k = 0;
    v = [1, 0, -1];

    for (f = 0; f < 3; f++) {
        k = v[f];

        if (r + k < 8 && r + k >= 0) {
            if (k != 0) {
                if (Chessboard[r + k][c].name == null) {
                    mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c, 0, r + k), false, null));
                } else if (Chessboard[r + k][c].color != Chessboard[r][c].color) {
                    mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c, 0, r + k), true, Chessboard[r + k][c].name));
                }
            }

            if (c - i >= 0 && c - i < 8) {
                if (Chessboard[r + k][c - i].name == null) {
                    mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c - i, 0, r + k), false, null));
                } else if (Chessboard[r + k][c - i].color != Chessboard[r][c].color) {
                    mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c - i, 0, r + k), true, Chessboard[r + k][c - i].name));
                }
            }

            if (c + i < 8 && c + i >= 0) {
                if (Chessboard[r + k][c + i].name == null) {
                    mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c + i, 0, r + k), false, null));
                } else if (Chessboard[r + k][c + i].color != Chessboard[r][c].color) {
                    mosseTemp.push(new OBJmosseTemp(new THREE.Vector3(c + i, 0, r + k), true, Chessboard[r + k][c + i].name));
                }
            }
        }
    }

    return mosseTemp;
}

function mosseRegina(c, r) {
    var mosseTemp = new Array();
    mosseTemp = mosseTorre(c, r).concat(mosseAlfiere(c, r)); // unione dei vettori delle mosse di una torre e di un alfiere

    return mosseTemp;
}