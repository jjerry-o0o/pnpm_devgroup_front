import { useEffect, useState } from 'react';

import {
  Search,
  FaArrowRotateRight,
  FaFilter,
  Check,
  FaThumbsUp,
  Clock,
  FaSortAlphaDown,
  IoRadioButtonOff,
  IoRadioButtonOn,
  FaFire,
  GiPlasticDuck,
} from '@/assets/icons';
import { SubBox, Button } from '@/components';
import { Separator } from '@/components/ui';
import { useAvailableCategories, useSearchInfo, useTopTags } from '@/api/useInfoApi';

import type { CategoryInfo, pagingInfo, searchRequestDto, supportInfo, TagInfo } from '@/types/info';

const Explorer = () => {
  const [categories, setCategories] = useState<CategoryInfo[]>();
  const [topTags, setTopTags] = useState<TagInfo[]>();
  const [supports, setSupports] = useState<supportInfo[]>();
  const [pageInfo, setPageInfo] = useState<pagingInfo>();
  const SORT_OPTIONS = [
    { id: 'sortStars', value: 'stars', label: '좋아요순', Icon: FaThumbsUp },
    { id: 'sortUpdated', value: 'updated', label: '최근 업데이트순', Icon: Clock },
    { id: 'sortName', value: 'name', label: '이름순', Icon: FaSortAlphaDown },
  ];

  const request: searchRequestDto = {
    keyword: '',
    categoryName: '',
    pageRequest: { page: 1, size: 9 },
    searchType: 'title',
    orderType: 'star',
  };
  const { data: categoriesData } = useAvailableCategories();
  const { data: topTagsData } = useTopTags();
  const { data: searchInfoData } = useSearchInfo(request);

  useEffect(() => {
    setCategories(categoriesData);
    setTopTags(topTagsData);
    setSupports(searchInfoData?.info);
    setPageInfo(searchInfoData?.pageResponse);
  }, [categoriesData, topTagsData, searchInfoData]);

  return (
    <section className="w-full flex flex-col">
      <div className="flex flex-col mt-6 bg-[var(--bg-gray)] h-[180px] pl-[80px] justify-center border-b">
        <h3 className="text-[45px] font-light mb-[10px]">DevTools Explorer</h3>
        <span className="text-[18px] font-light mb-[6px]">Discover a variety of developer tools</span>
      </div>
      <div className="flex flex-col items-center shadow-md">
        <div className=" flex items-center justify-center border w-3/4 h-[100px] my-[24px] rounded-sm gap-[18px] px-[20px]">
          <input
            type="text"
            className="border rounded-sm w-4/5 h-[42px] px-[16px] text-[16px]"
            placeholder="docs, plugins, web... serch"
          />
          <button
            type="button"
            className="flex bg-[var(--btn-blue)] text-[#fff] text-[16px] w-fit h-[42px] px-[16px] items-center justify-center rounded-sm gap-[4px] shrink-0"
          >
            <Search color="#fff" size="18" className="" /> 검색
          </button>
          <button
            type="button"
            className="flex items-center text-[16px] w-fit h-[42px] px-[16px] border rounded-sm gap-[4px] shrink-0"
          >
            <FaArrowRotateRight size="18" /> 초기화
          </button>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-[20px]">
            <SubBox
              titleIcon={<FaFilter size="16px" />}
              title="Filter by"
              boxWidth="w-[300px]"
              content={
                <>
                  <div className="flex flex-col gap-[4px]">
                    <span className="text-[16px]">Categories</span>
                    {categories?.map(category => (
                      <label
                        key={category.id}
                        htmlFor={`category_chk_${category.id}`}
                        className="inline-flex items-center"
                      >
                        <input
                          type="checkbox"
                          id={`category_chk_${category.id}`}
                          name="categories"
                          value={category.id}
                          className="hidden peer"
                        />
                        <div className="border rounded-sm w-[18px] h-[18px] mr-[4px] peer-checked:bg-[var(--btn-blue)] peer-checked:[&_svg]:block">
                          <Check size="16" color="white" className="hidden " />
                        </div>
                        <span className="ml-[4px]">{category.enName}</span>
                      </label>
                    ))}
                  </div>
                  <Separator className="my-[20px]" />
                  <div className="flex flex-col gap-[10px] mb-[16px]">
                    <span className="text-[16px]">정렬</span>
                    {SORT_OPTIONS.map(option => (
                      <label key={option.id} htmlFor={option.id} className="flex items-center">
                        <input type="radio" id={option.id} value={option.value} name="sort" className="hidden peer" />
                        <div className="flex mr-[10px] peer-checked:hidden items-center">
                          <IoRadioButtonOff size="20" color="var(--border)" />
                        </div>
                        <div className="hidden mr-[10px] peer-checked:flex items-center">
                          <IoRadioButtonOn size="20" color="var(--btn-blue)" />
                        </div>
                        <option.Icon className="mr-[6px]" size="15" />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                  <Button
                    id="filterApply"
                    icon={<Search size="18" />}
                    btnName="필터 적용"
                    textColor="#fff"
                    bgColor="var(--btn-blue)"
                  />
                </>
              }
            />
            <SubBox
              titleIcon=""
              title="인기토픽"
              boxWidth="w-[300px]"
              content={topTags?.map(tag => (
                <div className="inline-flex ">
                  {/* <span key={tag.id} className="border border-[#E1B730FF] rounded-4xl px-[12px] py-[6px] mr-[8px] mb-[8px] bg-[#FFF6D8FF] text-[#C3970AFF]">#{tag.tagName}</span> */}
                  <span key={tag.id} className={`${tag.color} rounded-4xl px-[12px] py-[6px] mr-[8px] mb-[8px]`}>
                    #{tag.tagName}
                  </span>
                </div>
              ))}
            />
          </div>
          <div className="border ml-6">
            <span className="flex text-2xl font-medium">
              <FaFire color="#DC3545FF" size="28" className="mr-2.5" /> DevTool List
            </span>
            {supports?.map(support => {
              let thumbnail = null;
              if (support.thumbnailPath) {
                thumbnail = support.thumbnailPath;
              } else if (support.thumbnailWebLink) {
                thumbnail = support.thumbnailWebLink;
              }
              return (
                <div>
                  {thumbnail ? (
                    <img src={thumbnail} alt={support.title} className="w-10 h-10 object-cover radi" />
                  ) : (
                    <GiPlasticDuck size="40" className="p-1" />
                  )}
                </div>
              );
            })}
            {[...Array(pageInfo?.totalPages)].map((_, index: number) =>
              index + 1 === pageInfo?.currentPage ? (
                <span className="border">{index + 1}</span>
              ) : (
                <span>{index + 1}</span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Explorer };
