import fs from 'fs'
import path from 'path'

const dir = './src/components'
const files = fs.readdirSync(dir)

for (const file of files) {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(dir, file)
    let content = fs.readFileSync(filePath, 'utf-8')
    let original = content

    // Add loading="lazy" to imgs without it
    content = content.replace(/<img(?![^>]*loading=)([^>]+)>/g, '<img loading="lazy"$1>')
    
    // Add preload="none" to video and audio
    content = content.replace(/<video(?![^>]*preload=)([^>]+)>/g, '<video preload="none"$1>')
    // Handle cases where preload="metadata" or "auto" is used
    content = content.replace(/preload="metadata"/g, 'preload="none"')
    content = content.replace(/preload="auto"/g, 'preload="none"')

    if (file === 'LoadingScreen.jsx') {
      content = content.replace(/<h1/g, '<div')
      content = content.replace(/<\/h1>/g, '</div>')
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8')
      console.log('Updated ' + file)
    }
  }
}
