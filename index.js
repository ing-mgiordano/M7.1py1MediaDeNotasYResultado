function calculateAverage() {
	const note1 = parseInt(document.getElementById('input-note1').value);
	const note2 = parseInt(document.getElementById('input-note2').value);
	const note3 = parseInt(document.getElementById('input-note3').value);
    const NOTE_QUANTITY = 3

    if (note1 < 1 || note1 > 10 ||
        note2 < 1 || note2 > 10 ||
        note3 < 1 || note3 > 10) {
        alert('Ingrese un numero del 1 al 10')
        return
    }

    averageNote = parseInt((note1 + note2 + note3)/NOTE_QUANTITY)
    
    console.log(averageNote)
    let result
    if(averageNote < 5) {
        result = 'No has superado el curso. Tienes que recuperar'
    }
    if(averageNote >= 5 && averageNote <= 7) {
        result = '¡Enhorabuena! Has aprobado pero deberías seguir practicando'
    }
    if(averageNote > 7) {
        result = '¡Enhorabuena! ¡Has superado el curso! ¡Pasa ya al siguiente nivel!'
    }

    document.getElementById('resultMed').innerHTML = `Promedio = ${averageNote} || ${result}`

}
