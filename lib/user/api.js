/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.1.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */
/** Loads a bungienet user by membership id. */
export async function getBungieNetUserById(http, params) {
    return http({
        method: 'GET',
        url: `https://www.bungie.net/Platform/User/GetBungieNetUserById/${params.id}/`
    });
}
/** Loads aliases of a bungienet membership id. */
export async function getUserAliases(http, params) {
    return http({
        method: 'GET',
        url: `https://www.bungie.net/Platform/User/GetUserAliases/${params.id}/`
    });
}
/** Returns a list of possible users based on the search string */
export async function searchUsers(http, params) {
    return http({
        method: 'GET',
        url: 'https://www.bungie.net/Platform/User/SearchUsers/',
        params: {
            q: params.q
        }
    });
}
/** Returns a list of all available user themes. */
export async function getAvailableThemes(http) {
    return http({
        method: 'GET',
        url: 'https://www.bungie.net/Platform/User/GetAvailableThemes/'
    });
}
/**
 * Returns a list of accounts associated with the supplied membership ID and
 * membership type. This will include all linked accounts (even when hidden) if
 * supplied credentials permit it.
 */
export async function getMembershipDataById(http, params) {
    return http({
        method: 'GET',
        url: `https://www.bungie.net/Platform/User/GetMembershipsById/${params.membershipId}/${params.membershipType}/`
    });
}
/**
 * Returns a list of accounts associated with signed in user. This is useful for
 * OAuth implementations that do not give you access to the token response.
 */
export async function getMembershipDataForCurrentUser(http) {
    return http({
        method: 'GET',
        url: 'https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/'
    });
}
/** Returns a user's linked Partnerships. */
export async function getPartnerships(http, params) {
    return http({
        method: 'GET',
        url: `https://www.bungie.net/Platform/User/${params.membershipId}/Partnerships/`
    });
}
//# sourceMappingURL=api.js.map