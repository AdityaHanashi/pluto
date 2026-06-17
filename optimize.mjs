import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import ffmpeg from 'fluent-ffmpeg'
import ffmpegStatic from 'ffmpeg-static'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, 'public')

ffmpeg.setFfmpegPath(ffmpegStatic)

async function optimizeImages() {
  const files = fs.readdirSync(publicDir)
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const filePath = path.join(publicDir, file)
      const parsed = path.parse(file)
      const newPath = path.join(publicDir, `${parsed.name}.webp`)
      
      console.log(`Optimizing ${file}...`)
      await sharp(filePath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(newPath)
        
      const stats = fs.statSync(newPath)
      console.log(`-> ${parsed.name}.webp: ${(stats.size / 1024).toFixed(2)} KB`)
      
      // We don't delete original yet, we'll delete it manually or let the script just create webp
    }
  }
}

async function compressAudio() {
  const inputAudio = path.join(publicDir, 'founder-voice.aac')
  const outputAudio = path.join(publicDir, 'founder-voice.mp3')
  
  if (fs.existsSync(inputAudio)) {
    console.log(`Compressing ${inputAudio}...`)
    return new Promise((resolve, reject) => {
      ffmpeg(inputAudio)
        .audioBitrate('48k') // Low bitrate to stay under 100kb
        .audioChannels(1) // Mono
        .audioFrequency(22050)
        .on('end', () => {
          const stats = fs.statSync(outputAudio)
          console.log(`-> Compressed audio: ${(stats.size / 1024).toFixed(2)} KB`)
          resolve()
        })
        .on('error', (err) => {
          console.error('Error compressing audio:', err)
          reject(err)
        })
        .save(outputAudio)
    })
  } else {
    console.log('No founder-voice.aac found to compress.')
  }
}

async function run() {
  await optimizeImages()
  await compressAudio()
  console.log('Optimization complete.')
}

run()
