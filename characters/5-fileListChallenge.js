/**
 * Challenge: How many.mp3 files has in the file list.
 */

const text = "MP3 File list: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3";

/**
 * Response
 */

const mp3FinderRegEx = /\.mp3/g;
const mp3FilesQuantity = text.match(mp3FinderRegEx).length;
console.log(`The file list have ${mp3FilesQuantity} mp3 files`);
