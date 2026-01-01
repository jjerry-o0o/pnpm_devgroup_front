import axiosApi from '@/api/axiosInstans.ts'
import type {
    CategoryInfo,
    RepositoryDetailInfo,
    RepositoryInfoDto,
    searchRequestDto,
    supportInfoDto,
    TagInfo
} from '@/types/info.ts';

export const getLimitRepositoryList = (count: number) => {
    return axiosApi.get<RepositoryInfoDto>(`/info/limit/${count}`);
}

export const getRepositoryInfo = (id: string) => {
    return axiosApi.get<RepositoryDetailInfo>(`/info/${id}`);
}

export const postLikeRepository = (id: number) => {
    return axiosApi.post<boolean>(`/info/like/${id}`);
}

export const getUseCategories = () => {
    return axiosApi.get<CategoryInfo[]>(`/category`);
}

export const getTop10Tags = () => {
    return axiosApi.get<TagInfo[]>(`/tag/topTags`);
}

export const getSearchInfo = () => {
    const request : searchRequestDto = {
        keyword: '',
        categoryName: '',
        pageRequest: {page: 1, size: 9},
        searchType: 'title',
        orderType: 'star',
    }
    return axiosApi.post<supportInfoDto>(`/search/info`, request);
}