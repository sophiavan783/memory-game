window.addEventListener('DOMContentLoaded', () => {
    const gamebox = document.querySelector('.grid')
    const width = 8
    var patterns = [
        "url('images/bluey.png')",
        "url('images/bandit.png')",
        "url('images/chilli.png')",
        "url('images/lucky.png')",
        "url('images/muffin.png')",
        "url('images/rusty.png')",
        "url('images/jack.png')",
        "url('images/bingo.png')"
    ] 
    var allPatterns = []
    for (let i=0; i< width; i++) {
        allPatterns.push.apply(allPatterns, patterns)
    }
    console.log(allPatterns)
    function createPatterns() {
        var allCount = width*width-1
        for (let i=0; i< width*width; i++) {
            const square = document.createElement('div')
            square.setAttribute('id', i+1)
            square.setAttribute('class','square')
            random_no = Math.floor(Math.random() * allCount)
            square.style.backgroundImage = allPatterns[random_no]
            const cover = document.createElement('div')
            cover.setAttribute('class','cover')
            cover.setAttribute('id',i+1)
            square.appendChild(cover)
            gamebox.appendChild(square)
            allPatterns.splice(random_no, 1)
            allCount--
        }
    }
    createPatterns()

    var allRevealed = []
    const allcover = document.querySelectorAll('.cover')
    allcover.forEach(function(coverclicked) {
        coverclicked.addEventListener('click', function(e) {
            e.target.classList.add('remove')
            allRevealed.push(e.target)
            if (allRevealed.length === 2) {
                checkMatching()
            }
        })
    })
    function checkMatching() {
        var firstId = allRevealed[0].id
        var secondId = allRevealed[1].id
        var squareOne = document.getElementById(firstId)
        var squareTwo = document.getElementById(secondId)
        if (squareOne.style.backgroundImage !== squareTwo.style.backgroundImage) {
            var clear = setTimeout(coverBack, 600)
        } else {
            allRevealed = []
        }
    }
    function coverBack() {
        allRevealed.forEach(function(opencover) {
            opencover.classList.remove('remove')
            allRevealed = []
        })
        
    }
    
})