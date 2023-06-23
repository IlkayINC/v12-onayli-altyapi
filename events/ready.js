module.exports = (client) => {

    var oynuyorkısımları = [
    "Sahiplerim : civitkopke#9999 | İlkays_#7811",
    "Kirtan | Yeni! Buton Rol! | k!yardım ",
    
    ]
    
    
    setInterval(function() {
    
    var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
    client.user.setActivity(oynuyorkısımları[random], { type: 'LISTENING' });
    }, 2 * 3000);
    
    console.log("Bot başarı ile giriş yaptı.")
    }