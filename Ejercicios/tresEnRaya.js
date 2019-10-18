class tresEnRalla{
    constructor(){
        this.establecerTablero();
    }

    tablero = Array(3);
    turno = 0;
    jugadas = 0;

    establecerTablero(){
        this.tablero = Array(3);

        for (let i=0; i<3; i++)
            this.tablero[i] = Array(3)

        for (let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                this.tablero[i][j] = 0;
            }
        }
        this.turno = 1;
    }

    jugador(x,y){
        
        switch (this.turno) {
            case 1:
                // Comprobamos si la casilla introducida esta ya seleccionada y si no se selecciona
                if (this.tablero[x][y]) {
                    console.log("La casilla ya ha sido cogida.");
                } else{
                    this.tablero[x][y] = 1; 
                    this.mostrarTablero();
                    // Cambio de Turno.
                    this.turno = 2;
                    console.log("Turno del jugador 2: ");
                }
                break;
            case 2:
                // Comprobamos si la casilla introducida esta ya seleccionada y si no se selecciona
                if (this.tablero[x][y]) {
                    console.log("La casilla ya ha sido cogida.");
                } else{
                    this.tablero[x][y] = 2;
                    this.mostrarTablero();
                    this.turno = 1;
                    console.log("Turno del jugador 1: ");
                }
                break;
        }

        // Comprobamos si ha ganado el jugador 1 o el jugador 2.
        if (this.ganar()==1){
            switch (this.turno) {
                case 1:
                    console.log("El jugador 2 ha ganado.");
                    break;
                case 2: 
                    console.log("El jugador 1 ha ganado.");
                    break;
            }
            this.establecerTablero();
        }
        
    }

    /**  Muestra el tablero con "X" si el jugador 1 lo ha seleccionado esa casilla, "O" si ha sido el jugador 2 
     *  y "-" si esta vacio.
    */
    mostrarTablero(){
        var aux = "";
        for (let i=0; i<3; i++){
            aux = "";
            for (let j=0; j<3; j++){
                switch (this.tablero[i][j]) {
                    case 1:
                        aux += "X";
                        break;
                    case 2:
                        aux += "O";
                        break;
                    default:
                        aux += "-";
                        break;
                }
                aux += " ";
            }
            console.log(aux);
        }
    }

    ganar(){
        // Caso 1: diagonal 1.
        if ((this.tablero[0][0]==1 && this.tablero[1][1]==1 && this.tablero[2][2]==1) || (this.tablero[0][0]==2 && this.tablero[1][1]==2 && this.tablero[2][2]==2)){
            return 1;
        }
        
        // Caso 2: diagonal 2.
        if ((this.tablero[0][2]==1 && this.tablero[1][1]==1 && this.tablero[2][0]==1) || (this.tablero[0][2]==2 && this.tablero[1][1]==2 && this.tablero[2][0]==2)){
            return 1;
        }

        // Casos 3,4,5: Horizontales.
        // Casos 6,7,8: Verticales.
        for (let i=0; i<3; i++){
            if ((this.tablero[i][0]==1 && this.tablero[i][1]==1 && this.tablero[i][2]==1) || (this.tablero[i][0]==2 && this.tablero[i][1]==2 && this.tablero[i][2]==2)){
                return 1;
            }
            if ((this.tablero[0][i]==1 && this.tablero[1][i]==1 && this.tablero[2][i]==1) || (this.tablero[0][i]==2 && this.tablero[1][i]==2 && this.tablero[2][i]==2)){
                return 1;
            }
        }

        // this.jugadas++;
        // // Caso Empate: Ningun Ganador.
        // if (this.jugadas >= 18){
        //     return 2;
        // }
    }
    
}

Juego = new tresEnRalla();
Juego.establecerTablero();
console.log("Comienza el juego:");
console.log("Turno del jugador 1");