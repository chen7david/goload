const { autoload } = require('confyg')
const p = require('path')
const fs = require('fs')

const loader = (alt = null) => {

    const path = p.resolve(process.cwd(), alt || 'src')
    const items = fs.readdirSync(path)
    const loaded = {}

    for(let item of items){
        const managed = autoload || []
        const folder = p.join(path, item)
        const stat = fs.statSync(folder)
        if(stat.isFile() || !managed.includes(item)) continue
        loaded[item] = {}
        const files = fs.readdirSync(folder)
        for(let file of files){
            const [name, ext] = file.split('.')
            if(ext != 'js' || name == 'index') continue
            const filepath = p.join(folder, file)
            loaded[item][name] = require(filepath)
        }
    }
    return loaded
}

module.exports = loader