let icons = document.querySelectorAll('.icon')
let contents = document.querySelectorAll('.content')

icons.forEach(icon => {
    icon.addEventListener('mouseover', function(){
        contents.forEach(content => {
            content.className = 'content'
        })
        
        document.getElementById(this.dataset.id).className = 'content active'

        icons.forEach(icon => {
            icon.className = 'icon'
        })

        this.className = 'icon active'
        
    })
})


