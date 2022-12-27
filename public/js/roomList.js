const socket = io()

const handleNoRooms = () => {
    
}

const handleSelectChange = () => {
    const selectBox = document.querySelector('#room-name-select')
    const selectedValue = selectBox.options[selectBox.selectedIndex].value
    if (selectedValue) {
        document.querySelector('#room-name-input').setAttribute('disabled', 'disabled')
    } else {
        document.querySelector('#room-name-input').removeAttribute('disabled')
    }
}

const handleInputchange = () => {
    if (!document.querySelector('#room-name-select')) {
        return
    }

    if (document.querySelector('#room-name-input').value) {
        document.querySelector('#room-name-select').setAttribute('disabled', 'disabled')
    } else {
        document.querySelector('#room-name-select').removeAttribute('disabled')
    }
}

// Templates
const roomsListTemplate = document.querySelector('#rooms-list-template').innerHTML

socket.on('roomsList', (roomsList) => {
    if (!roomsList.length) {
        document.querySelector('#dropdown-rooms-list').innerHTML = ''
        console.log('fdsfd')
        return
    }
    const html = Mustache.render(roomsListTemplate, {
        roomsList
    })
    
    document.querySelector('#room-name-select').innerHTML = html
})