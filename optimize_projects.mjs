import { execSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';
import fs from 'fs';

try {
  console.log('Optimizing video1...');
  execSync(`"${ffmpegPath}" -y -i d:/pluto/public/video1.mp4 -c copy -movflags +faststart d:/pluto/public/video1_opt.mp4`, { stdio: 'inherit' });
  console.log('Optimizing video2...');
  execSync(`"${ffmpegPath}" -y -i d:/pluto/public/video2.mp4 -c copy -movflags +faststart d:/pluto/public/video2_opt.mp4`, { stdio: 'inherit' });
  
  fs.renameSync('d:/pluto/public/video1_opt.mp4', 'd:/pluto/public/video1.mp4');
  fs.renameSync('d:/pluto/public/video2_opt.mp4', 'd:/pluto/public/video2.mp4');
  console.log('Projects videos optimized successfully!');
} catch (e) {
  console.error(e);
}
