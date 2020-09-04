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

export function getApplicationApiUsage(http, _ref) {
  let { applicationId } = _ref,
    params = _objectWithoutProperties(_ref, ['applicationId']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/App/ApiUsage/${applicationId}/`,
    params,
  });
}
export function getBungieApplications(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/App/FirstParty/',
  });
}
