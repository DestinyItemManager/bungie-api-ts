function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

export function getContentType(http, { type }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/GetContentType/${type}/`,
  });
}
export function getContentById(http, _ref) {
  let { id, locale } = _ref,
    params = _objectWithoutProperties(_ref, ['id', 'locale']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/GetContentById/${id}/${locale}/`,
    params,
  });
}
export function getContentByTagAndType(http, _ref2) {
  let { locale, tag, type } = _ref2,
    params = _objectWithoutProperties(_ref2, ['locale', 'tag', 'type']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/GetContentByTagAndType/${tag}/${type}/${locale}/`,
    params,
  });
}
export function searchContentWithText(http, _ref3) {
  let { locale } = _ref3,
    params = _objectWithoutProperties(_ref3, ['locale']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/Search/${locale}/`,
    params,
  });
}
export function searchContentByTagAndType(http, _ref4) {
  let { locale, tag, type } = _ref4,
    params = _objectWithoutProperties(_ref4, ['locale', 'tag', 'type']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/SearchContentByTagAndType/${tag}/${type}/${locale}/`,
    params,
  });
}
export function searchHelpArticles(http, { searchtext, size }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Content/SearchHelpArticles/${searchtext}/${size}/`,
  });
}
