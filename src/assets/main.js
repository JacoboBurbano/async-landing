const API = 'https://youtube-v3-alternative.p.rapidapi.com/channel?id=UCr-C1JFhARK4AMKOFTd40Hg';

const content = document.getElementById('content');
const imageChannel = document.getElementById('image-channel');
const infoChannel = document.getElementById('info-channel');
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com',
    'X-RapidAPI-Key': '492860d8femsh4a3c0866517ec05p1559a6jsnd70bf685a280'
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    imageChannel.src =  videos.meta.thumbnail[0].url
    let viewChannel = `<h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
    <span class="block xl:inline">${videos.meta.title}</span>
    <span class="block text-indigo-600 xl:inline">@improther6943</span>
    </h1>`
    let viewVideos = `
    ${videos.data.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.thumbnail[0].url}" alt="${video.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.title}
          </h3>
        </div>
      </div>
    `).slice(0, 4).join('')}
    `;
    content.innerHTML = viewVideos;
    infoChannel.innerHTML = viewChannel;
  } catch (error) {
    console.log(error);
  }
})();