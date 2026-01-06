import { useQuery } from '@tanstack/react-query';

import { axiosApi } from '@/api/axiosInstans';

import type {
  CategoryInfo,
  RepositoryDetailInfo,
  RepositoryInfoDto,
  searchRequestDto,
  supportInfoDto,
  TagInfo,
} from '@/types/info';

export const useLimitRepositoryList = (count: number) =>
  useQuery({
    queryKey: ['/info/limit', count],
    queryFn: async () => {
      const res = await axiosApi.get<RepositoryInfoDto>(`/info/limit/${count}`);
      return res.data;
    },
  });

export const useRepositoryInfo = (id: string) =>
  useQuery({
    queryKey: ['/info', id],
    queryFn: async () => {
      const res = await axiosApi.get<RepositoryDetailInfo>(`/info/${id}`);
      return res.data;
    },
  });

export const useAvailableCategories = () =>
  useQuery({
    queryKey: ['/categoties'],
    queryFn: async () => {
      const res = await axiosApi.get<CategoryInfo[]>(`/category`);
      return res.data;
    },
  });

export const useTopTags = () =>
  useQuery({
    queryKey: ['/tag/topTags'],
    queryFn: async () => {
      const res = await axiosApi.get<TagInfo[]>(`/tag/topTags`);
      const TAG_COLORS = ['badge-primary', 'badge-success', 'badge-info', 'badge-warning', 'badge-secondary'];
      return res.data.map((tagInfo, index) => ({
        ...tagInfo,
        color: TAG_COLORS[index % TAG_COLORS.length],
      }));
    },
  });

export const useSearchInfo = (request: searchRequestDto) =>
  useQuery({
    queryKey: ['/search', request],
    queryFn: async () => {
      const res = await axiosApi.post<supportInfoDto>(`/search/info`, request);
      return res.data;
    },
  });
