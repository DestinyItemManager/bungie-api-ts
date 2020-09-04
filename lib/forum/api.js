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

export function getTopicsPaged(http, _ref) {
  let { categoryFilter, group, page, pageSize, quickDate, sort } = _ref,
    params = _objectWithoutProperties(_ref, [
      'categoryFilter',
      'group',
      'page',
      'pageSize',
      'quickDate',
      'sort',
    ]);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetTopicsPaged/${page}/${pageSize}/${group}/${sort}/${quickDate}/${categoryFilter}/`,
    params,
  });
}
export function getCoreTopicsPaged(http, _ref2) {
  let { categoryFilter, page, quickDate, sort } = _ref2,
    params = _objectWithoutProperties(_ref2, ['categoryFilter', 'page', 'quickDate', 'sort']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetCoreTopicsPaged/${page}/${sort}/${quickDate}/${categoryFilter}/`,
    params,
  });
}
export function getPostsThreadedPaged(http, _ref3) {
  let { getParentPost, page, pageSize, parentPostId, replySize, rootThreadMode, sortMode } = _ref3,
    params = _objectWithoutProperties(_ref3, [
      'getParentPost',
      'page',
      'pageSize',
      'parentPostId',
      'replySize',
      'rootThreadMode',
      'sortMode',
    ]);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostsThreadedPaged/${parentPostId}/${page}/${pageSize}/${replySize}/${getParentPost}/${rootThreadMode}/${sortMode}/`,
    params,
  });
}
export function getPostsThreadedPagedFromChild(http, _ref4) {
  let { childPostId, page, pageSize, replySize, rootThreadMode, sortMode } = _ref4,
    params = _objectWithoutProperties(_ref4, [
      'childPostId',
      'page',
      'pageSize',
      'replySize',
      'rootThreadMode',
      'sortMode',
    ]);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostsThreadedPagedFromChild/${childPostId}/${page}/${pageSize}/${replySize}/${rootThreadMode}/${sortMode}/`,
    params,
  });
}
export function getPostAndParent(http, _ref5) {
  let { childPostId } = _ref5,
    params = _objectWithoutProperties(_ref5, ['childPostId']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostAndParent/${childPostId}/`,
    params,
  });
}
export function getPostAndParentAwaitingApproval(http, _ref6) {
  let { childPostId } = _ref6,
    params = _objectWithoutProperties(_ref6, ['childPostId']);

  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetPostAndParentAwaitingApproval/${childPostId}/`,
    params,
  });
}
export function getTopicForContent(http, { contentId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/GetTopicForContent/${contentId}/`,
  });
}
export function getForumTagSuggestions(http, _ref7) {
  let params = _extends({}, _ref7);

  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/Forum/GetForumTagSuggestions/',
    params,
  });
}
export function getPoll(http, { topicId }) {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/Forum/Poll/${topicId}/`,
  });
}
export function getRecruitmentThreadSummaries(http, body) {
  return http({
    method: 'POST',
    url: 'https://www.bungie.net/Platform/Forum/Recruit/Summaries/',
    body,
  });
}
