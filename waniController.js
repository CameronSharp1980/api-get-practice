function WaniController() {
    var waniService = new WaniService()

    this.getWani = function getWani() {
        console.log("Controller/getWani started")
        waniService.getWani()
    }

    this.drawWani = function drawWani() {
        var kanjis = waniService.returnKanji()
        console.log(kanjis)
        var kanjiElem = document.getElementById('wani-content')
        var template = ''

        for (var i = 0; i < kanjis.requested_information.length; i++) {
            var kanji = kanjis.requested_information[i];
            // console.log("Kanji: ", kanji.character)
            template += `
            <span>${kanji.character}</span>
            
            `
        }
        kanjiElem.innerHTML = template
    }
}