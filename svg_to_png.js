function svgToPng(width, height) {
  'use strict';
  let svg = document.getElementsByTagName('svg')[0];
  let xml = new XMLSerializer();
  let canvas = document.createElement('canvas');
  let img = document.createElement('img');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  xml = xml.serializeToString(svg);
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  img.src = 'data:image/svg+xml;base64,' + btoa(xml);
  img.onload = function () {
    let ctx = canvas.getContext('2d');
    let a = document.createElement('a');
    ctx.drawImage(img, 0, 0);
    a.download = height + '.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  };
}

svgToPng(16, 16);
svgToPng(48, 48);
svgToPng(128, 128);
