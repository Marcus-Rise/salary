const PRICE_STRING_DIVIDER = 3;
const PRICE_STRING_TAIL_SIZE = 2;

/**
 * @param price {number}
 * @return string
 */
const priceToString = (price) => {
  const [head, tail] = price.toFixed(PRICE_STRING_TAIL_SIZE).toString().split(".");

  if (head.length > PRICE_STRING_DIVIDER) {
    let buf = "";
    let i = head.length - PRICE_STRING_DIVIDER

    for (; i >= 0; i = i - PRICE_STRING_DIVIDER) {
      buf = head.substr(i, PRICE_STRING_DIVIDER) + " " + buf;
    }

    if (i < 0) {
      buf = head.substr(0, i + PRICE_STRING_DIVIDER) + " " + buf;
    }

    buf = buf.trim();

    if (Number(tail) === 0) {
      return buf;
    }

    return `${buf}.${tail}`;
  }

  if (Number(tail) === 0) {
    return String(price);
  } else {
    return `${price}.${tail}`;
  }
};

export {priceToString}
