const GIST_ID = '4364029d04d0b321926da53ed2985765';
const GIST_FILENAME = 'data.json';

/*
 * Reads the JSON file inside of the gist
 *   the data being fetched is only the ChoiceCards data
 */
async function getData() {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`);
  const gist = await req.json();
  const result = JSON.parse(gist.files[GIST_FILENAME].content);
  return result;
}

export default getData;
