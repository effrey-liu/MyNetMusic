import request from './request';

export function getSearchSongData(keywords: any, offset: any, limit = 30) {
  return request({
    url: '/search',
    params: {
      keywords,
      offset,
      limit
    },
  });
}
