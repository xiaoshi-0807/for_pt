!(async () => {
  const url = new URL(document.querySelector(' [src*="tracking.js"]').src)
  let cookie = getCookie('_itr_track_vendor_session_id');
  let product = url.searchParams.get('product');
  let href = url.searchParams.get('href');
  let e = url.searchParams.get('e');
  var uri = new URL(url.searchParams.get('url'))

  const src = `${uri.origin}/web_api/tracking/trac_your_prospects`
        + '?itr_track_vendor_session_id=' + cookie
        + '&product=' + product
        + '&custom_id=' + e
        + '&url=' + href

  await (async () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    document.body.appendChild(script);
  })()
}).call(this);

const callback = (jsonData) => {
  if (jsonData.name) {
    const cookie = `${jsonData.name}=${jsonData.value};max-age=${60 * 60 * 24 * 30};Secure`; // 1か月のみ保持
    document.cookie = cookie;
  }
}

async function appendScriptTag (src) {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  document.body.appendChild(script);
}

function getCookie (name) {
  let val = '';
  const cookies = document.cookie;
  const cookiesArray = cookies.split(';');

  cookiesArray.forEach((c) => {
    const cArr = c.split('=');
    if (cArr[0].trim() === name) {
      val = cArr[1]; // eslint-disable-line prefer-destructuring
    }
  });
  return val;
}
