// import { axiosApi } from '@/api/axiosInstans';
//
// import type {
//   CategoryInfo,
//   RepositoryDetailInfo,
//   RepositoryInfoDto,
//   searchRequestDto,
//   supportInfoDto,
//   TagInfo,
// } from '@/types/info';
//
// export const getLimitRepositoryList = (count: number) => axiosApi.get<RepositoryInfoDto>(`/info/limit/${count}`);
//
// export const getRepositoryInfo = (id: string) => axiosApi.get<RepositoryDetailInfo>(`/info/${id}`);
//
// export const getUseCategories = () => axiosApi.get<CategoryInfo[]>(`/category`);
//
// export const getTop10Tags = () => axiosApi.get<TagInfo[]>(`/tag/topTags`);
//
// export const getSearchInfo = () => {
//   const request: searchRequestDto = {
//     keyword: '',
//     categoryName: '',
//     pageRequest: { page: 1, size: 9 },
//     searchType: 'title',
//     orderType: 'star',
//   };
//   return axiosApi.post<supportInfoDto>(`/search/info`, request);
// };
