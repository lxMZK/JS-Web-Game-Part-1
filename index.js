let item = 11

function newImage(src, left, bottom) {
    let img = document.createElement('img')
    img.src = 'assets/' + src
    img.style.position = 'fixed'
    img.style.left = left
    img.style.bottom = bottom
    document.body.append(img)
}

function newItem(src, left, bottom) {
    let img = document.createElement('img')
    img.src = 'assets/' + src
    img.style.position = 'fixed'
    img.style.left = left
    img.style.bottom = bottom
    document.body.append(img)

    img.addEventListener('dblclick', function () {
        img.style.left = item + 'px'
        img.style.top = '11px'
        item += 65
    })
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
newImage('green-character.gif', '100px', '100px')
newImage('pine-tree.png', '450px', '200px')
newImage('tree.png', '200px', '300px')
newImage('pillar.png', '350px', '100px')
newImage('crate.png', '150px', '200px')
newImage('well.png', '500px', '425px')

// Creates interactables
newItem('sword.png', '500px', '405px')
// ***Notice: Asset is misspelled***
newItem('sheild.png', '165px', '185px')
newItem('staff.png', '600px', '100px')