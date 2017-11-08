function WaniService() {

    var bcwGetter = '//bcw-getter.herokuapp.com/?url='
    var waniUrl = 'https://www.wanikani.com/api/user/f029b4a6271c5ffe5b3d791d605cee27/kanji/'
    var waniData

    this.getWani = function getWani() {
        console.log("service/getWani started")
        //GET REQUEST AJAX

        //PROMISE
        $.get(waniUrl)
            .then(function (res) {
                // debugger
                //save data to local variable to work with
                waniData = res
                console.log(waniData)
                // debugger
            })
            .fail(function (res) {
                // debugger
                console.log("The API hates you, try something else!")
            })
    }

    this.returnKanji = function returnKanji(){
        return JSON.parse(JSON.stringify(waniData))
    }
}