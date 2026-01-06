import { GiPlasticDuck, FiWind } from '@/assets/icons';

export const repositoryList = [
  {
    id: 1,
    title: 'duckdns',
    isPublic: true,
    introduction: 'free dynamic DNS hosted on AWS',
    thumbnailPath: '',
    thumbnailWebLink: '',
    thumbnailIcon: GiPlasticDuck,
    likeCount: 99,
    clickCount: 9999,
    updatedAt: '2025-11-17T16:21:20',
    categoryEnName: 'Etc',
  },
  {
    id: 2,
    title: 'tailwindcss',
    isPublic: true,
    introduction: 'Rapidly build modern websites without ever leaving your HTML',
    thumbnailPath: '',
    thumbnailWebLink: '',
    thumbnailIcon: FiWind,
    likeCount: 7,
    clickCount: 25,
    updatedAt: '2025-11-17T16:21:20',
    categoryEnName: 'Web',
  },
];

/*
        var id: Long,
        var title: String,
        var isPublic: Boolean,
        var introduction: String?,
        var thumbnailPath: String?,
        var thumbnailWebLink: String?,
        var likeCount: Int,
        var clickCount: Int,
        var updatedAt: String,

        // category
        var categoryEnName: String
*/

export const linkList = [
  { index: 1, subTitle: 'Product', list: ['Features', 'Explore'] },
  { index: 2, subTitle: 'Support', list: ['Support', 'Contact DevGroup'] },
  { index: 3, subTitle: 'Company', list: ['About', 'Blog'] },
];
