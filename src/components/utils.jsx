
function processJSONData(rawArr) {
  return rawArr.map(
    (element) => {
      const { id, download_url } = element;
      return {id, download_url };
    }
  )
}

//bug with response from fetching coming as a promise instead of an array. 
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

export { fetchData, processJSONData };
