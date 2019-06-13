window.addEventListener('load', async () => {
  /* https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests */

  const id = Math.round(Math.random() * 1000);

  // See if range headers are supported: Accept-Ranges in headers?
  const headResponse = await fetch(`https://picsum.photos/id/${id}/100/100`, { method: 'HEAD' });
  console.log(headResponse.headers.forEach(console.log));

  const getResponse = await fetch(`https://picsum.photos/id/${id}/100/100`, { method: 'GET', headers: { Range: "bytes=0-255" } });
  const arrayBuffer = await getResponse.arrayBuffer();
  console.log(arrayBuffer.byteLength);

  const githubPagesUrl = 'https://tomashubelbauer.github.io/fetch-range-request/index.html';

  const githubPagesHeadResponse = await fetch(githubPagesUrl, { method: 'HEAD' });
  console.log(githubPagesHeadResponse.headers.forEach(console.log));

  const githubPagesGetResponse = await fetch(githubPagesUrl, { method: 'GET', headers: { Range: "bytes=0-255" } });
  const githubPagesArrayBuffer = await githubPagesGetResponse.arrayBuffer();
  console.log(githubPagesArrayBuffer.byteLength);
});
