const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menubar = document.getElementsByClassName('menu-bar')[0]

toggleButton.addEventListener('click', () => {menubar.classlist.toggle('active')
    })