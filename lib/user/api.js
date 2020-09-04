function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

export function getBungieNetUserById(http, { id }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetBungieNetUserById/${id}/`,
  });
}
export function searchUsers(http, _ref) {
  let params = _extends({}, _ref);

  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/SearchUsers/',
    params,
  });
}
export function getAvailableThemes(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/GetAvailableThemes/',
  });
}
export function getMembershipDataById(http, { membershipId, membershipType }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetMembershipsById/${membershipId}/${membershipType}/`,
  });
}
export function getMembershipDataForCurrentUser(http) {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/',
  });
}
export function getMembershipFromHardLinkedCredential(http, { credential, crType }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetMembershipFromHardLinkedCredential/${crType}/${credential}/`,
  });
}
