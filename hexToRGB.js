function hexStringToRGB(hexString) {
  let newHexString = hexString.slice(1);

  let rHex = newHexString.slice(0, 2);
  let gHex = newHexString.slice(2, 4);
  let bHex = newHexString.slice(4, 6);

  let r = parseInt(rHex, 16);
  let g = parseInt(gHex, 16);
  let b = parseInt(bHex, 16);

  let rgbObject = {
    r: r,
    g: g,
    b: b,
  };

  return rgbObject;
}

function hexStringToRGB(h) {
  return {
    r: parseInt(h.slice(1, 3), 16),
    g: parseInt(h.slice(3, 5), 16),
    b: parseInt(h.slice(5, 7), 16),
  };
}
