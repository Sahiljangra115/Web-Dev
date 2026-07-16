const fs = require('fs')
const filePath = "./tasks.json"

const loadTask = () => {
    try {
        const dataBuffer = fs.readFileSync(filepath)    // Data buffer is a object that needs to be converted into string 
        const dataJSON = dataBuffer.toString()          // data json is different from regular json
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}
const saveTasks = (tasks) => {
    const JSONdata = JSON.stringify(tasks)
    fs.writeFileSync(filePath, JSONdata)
}
const addTask = (task) => {
    const tasks = loadTask()
    tasks.push({task})
    saveTasks(tasks)
}

const command = process.argv[2]
const argument = process.argv[3]



if(command === 'add'){
    addTask(argument)
}else if(command === 'list'){
    listTask()
}
else if(command === 'remove'){
removeTask(parseInt(argument))                       // the input we get from browser is always in int format not in string
}else{
    console.log("Command not found!")
}
