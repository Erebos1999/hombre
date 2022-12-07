function generar() {
    var n = parseInt(document.getElementById("filas").value) - 1;
    var matrizfila = new Array();
    let text = ""
    for (let i = 0; i <= n; i++) {
        matrizfila[i] = new Array();
        text += "<p>"
        for (let j = 0; j <= n; j++) {
            matrizfila[i][j] = i + "" + j
            text += ' ' + '<input type="number" id="' + matrizfila[i][j] + '" style="width : 100px">' + ' '
        }
        text += "</p>";
    }
    document.getElementById("demo").innerHTML = text

}

function reconocer() {
    var n = parseInt(document.getElementById("filas").value) - 1;
    var matrizfila = new Array();
    var fila = new Array();
    var columna = new Array();
    var colizq = 0
    var colder = 0
    for (let i = 0; i <= n; i++) {
        matrizfila[i] = new Array();
        var sumacol = 0
        var sumafila = 0
        for (let j = 0; j <= n; j++) {
            var id = i + "" + j
            var col = j + "" + i
            sumafila = sumafila + parseInt(document.getElementById(id).value)
            sumacol = sumacol + parseInt(document.getElementById(col).value)
        }
        colizq += parseInt(document.getElementById(i + "" + i).value)
        colder += parseInt(document.getElementById(i + "" + (n - i)).value)
        fila[i] = sumafila
        columna[i] = sumacol
    }
    document.getElementById("demo2").innerHTML = "las sumas de las filas son : " + fila + " la de las columnas son " + columna + " y la de las diagonales: " + colizq + " " + colder
}

function monedas() {
    var exactas = new Array();
    var cont = 0
    for (let i = 200; i <= 300; i++) { //cargamos los numeros en un array
        exactas[cont] = i
        cont = cont + 1
    }
    while (exactas.length != 1) { //filtramos todos los resultados que al ser restados -1 y divididos entre 3 den resultados exactos
        var cont = 0
        var copy = exactas
            // window.alert(exactas)
        var exactas = new Array();
        for (const element of copy) {
            if ((element - 1) % 3 == 0) { //verificamos que es divisible entre 3
                exactas[cont] = element - 1 - ((element - 1) / 3) //damos el valor como nuevo elemento del array
                cont = cont + 1
            }
        }
    }
    // una vez tengamos filtrado el numero que pudo dividirse 4 veces usando la misma formula revertimos el ejercicio para hallar el numero que se uso inicialmente siendo este el valor que queremos
    var final = exactas[0]
    while (final <= 200) {

        final = 3 * (final + 1 - (1 / 3)) / 2
        document.getElementById("numbers").innerHTML = "el numero de monedas inicial es : " + final
    }
}

function division() {
    var m1 = ((241 - 1) / 3) + 23
    var m2 = ((160 - 1) / 3) + 23
    var m3 = ((106 - 1) / 3) + 23
    document.getElementById("numbers2").innerHTML = '<p> el primer Marinero recibio: ' + m1 + ' el segundo Marinero recibio: ' + m2 + ' el tercer Marinero recibio: ' + m3 + '</p>'
}