const users = []


const getRoomsList = () => {
    const roomsObject = []
    const roomsArray = []
    users.forEach(user => {
        if (!roomsArray.includes(user.room)) {
            roomsObject.push({
                roomId: user.room
            })

            roomsArray.push(user.room)
        }
    })
    return roomsObject
}

const addUser = ({id, username, room}) => {
    // clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    // Check for existing user
    const existingUser = users.find(user => user.room === room && user.username === username)

    // Validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id)
    
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => users.find(user => user.id === id)

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter(user => user.room === room)
}

module.exports = {
    getRoomsList, addUser, removeUser, getUser, getUsersInRoom
}