
function processJSONData(rawArr) {
  return rawArr.map(
    (element) => {
      const { id, download_url } = element;
      return {id, download_url };
    }
  )
}

function processCardData() {
  //extract the download link of the json
  //add to the array with the id # and the url
  // return the array
}

async function fetchData(url) {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const json = await response.json();
    return json;
  } catch (err) {
    console.error((err));
  }
}

export { fetchData, processCardData, processJSONData };
