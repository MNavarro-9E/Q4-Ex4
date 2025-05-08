function levelInfo() {
    var levEntry = Number(document.getElementById('l-value').value);

    switch (levEntry) {
        case 1:
            document.getElementById('displayDifficulty').innerHTML=
            "Difficulty: Easy";
            break;

        case 2:
            document.getElementById('displayDifficulty').innerHTML=
            "Difficulty: Normal";
            break;
        case 3:
            document.getElementById('displayDifficulty').innerHTML=
            "Difficulty: Hard";
            break;
        
        default:
            alert('Invalid number')
    }
}