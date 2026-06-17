import { execSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';

try {
  execSync(`"${ffmpegPath}" -y -i d:/pluto/public/founder.mp4 -vframes 1 -f image2 -c:v webp d:/pluto/public/founder-poster.webp`, { stdio: 'inherit' });
  console.log("Poster generated!");
} catch (e) {
  console.error(e);
}
