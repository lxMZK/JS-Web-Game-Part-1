let item = 11
let speed = 10

// Character Movement
document.onkeydown = keyDown
document.onkeyup = keyUp
function keyDown(e) {
    switch (e.keyCode) {
        case 37:
        case 65:
            // Move Left
            greenCharacter.src = 'assets/green-character/west.gif'
            if (parseInt(greenCharacter.style.left) - speed > 0) {
                greenCharacter.style.left = (parseInt(greenCharacter.style.left) - speed) + 'px'
            }
            break;
            case 38:
                case 87:
                    // Move Up
            greenCharacter.src = 'assets/green-character/north.gif'
            if (parseInt(greenCharacter.style.bottom) + speed < 500) {
                greenCharacter.style.bottom = (parseInt(greenCharacter.style.bottom) + speed) + 'px'
            }
            break;
        case 39:
        case 68:
            // Move Right
            greenCharacter.src = 'assets/green-character/east.gif'
            if (parseInt(greenCharacter.style.left) + speed < (window.innerWidth - greenCharacter.width)) {
                greenCharacter.style.left = (parseInt(greenCharacter.style.left) + speed) + 'px'
            }
            break;
            case 40:
                case 83:
                    // Move Down
            greenCharacter.src = 'assets/green-character/south.gif'
            if (parseInt(greenCharacter.style.bottom) - speed > 0) {
                greenCharacter.style.bottom = (parseInt(greenCharacter.style.bottom) - speed) + 'px'
            }
            break;
        case 16:
            // Shift Key
            speed = 20
            break;
            case 32:
            // Space Key
            dialog.style.opacity = '0'
            break;
            default:
            console.log(e.keyCode)
            break;
        }
}

function keyUp(e) {
    if (e.keyCode == 16) {
        speed = 10
    }
}

function newImage(src, left, bottom) {
    let img = document.createElement('img')
    img.src = 'assets/' + src
    img.style.position = 'fixed'
    img.style.left = left
    img.style.bottom = bottom
    img.style.transition = '.1s'
    document.body.append(img)
    return img
}

function newItem(id, left, bottom) {
    let img = document.createElement('img')
    img.src = 'assets/' + id + '.png'
    img.style.position = 'fixed'
    img.style.left = left
    img.style.bottom = bottom
    img.style.cursor = 'pointer'
    document.body.append(img)

    // Functionality for inventory
    img.addEventListener('dblclick', function () {
        if (img.style.top != '11px') {
            img.style.left = item + 'px'
            img.style.top = '11px'
            item += 65
            
            dialog.remove()
            dialog = newTxtbox('You picked up a ' + id + '!')
        }
    })
}

// Renders dialog box
function newTxtbox(s) {
    let container = document.createElement('div')
    let txt = document.createElement('h2')
    let flag = document.createElement('h3')
    txt.append(s)
    container.style.display = 'flex'
    container.style.justifyContent = 'space-between'
    container.style.alignContent = 'center'
    container.style.width = '568px'
    container.style.color = 'lightgray'
    container.style.backgroundColor = "#3d3f23"
    container.style.transform = 'translate(0, 70px)'
    container.style.transition = '1s'
    container.style.fontStyle = 'italic'
    container.style.border = "groove #939393 7px"
    flag.append('<space>')
    container.append(txt)
    container.append(flag)
    document.body.append(container)
    return container
}

// Renders grass up to well
for (let y = 0; y <= 400; y += 100) {
    for (let x = 0; x < (window.innerWidth); x += 100) {
        newImage('grass.png', x + 'px', y + 'px')
    }
}

// Renders sky above grass
for (let y = 500; y <= window.innerHeight; y += 100) {
    for (let x = 0; x < (window.innerWidth); x += 100) {
        newImage('sky.png', x + 'px', y + 'px')
    }
}

// Renders images
newImage('inv.png')
let greenCharacter = newImage('green-character.gif', '100px', '100px')
newImage('pine-tree.png', '450px', '200px')
newImage('tree.png', '200px', '300px')
newImage('pillar.png', '350px', '100px')
newImage('crate.png', '150px', '200px')
newImage('well.png', '500px', '425px')

// Creates interactables
newItem('sword', '500px', '405px')
newItem('shield', '165px', '185px')
newItem('staff', '600px', '100px')

// Creates dialog box
let dialog = newTxtbox('Use Arrow Keys to Move and Shift to Speed Up!')