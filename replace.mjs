import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const componentsDir = path.join(__dirname, 'src', 'components')

function replaceInDir(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      replaceInDir(filePath)
    } else if (filePath.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf-8')
      let originalContent = content
      
      content = content.replace(/\.png/g, '.webp')
      content = content.replace(/founder-voice\.aac/g, 'founder-voice.mp3')
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8')
        console.log(`Updated ${file}`)
      }
    }
  }
}

replaceInDir(componentsDir)
console.log('Replacement complete.')
