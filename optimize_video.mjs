import { execSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';
import fs from 'fs';

try {
  console.log("Optimizing video for faststart...");
  execSync(`"${ffmpegPath}" -y -i d:/pluto/public/founder.mp4 -c copy -movflags +faststart d:/pluto/public/founder_optimized.mp4`, { stdio: 'inherit' });
  
  // Replace the old video with the optimized one
  fs.renameSync('d:/pluto/public/founder_optimized.mp4', 'd:/pluto/public/founder.mp4');
  console.log("Video optimized for instant streaming!");
} catch (e) {
  console.error(e);
}
