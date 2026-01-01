import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {GiPlasticDuck, IoLink, TbExternalLink, FaInfoCircle, GoHeartFill, GoHeart, IoEyeSharp, Clock, IoDocumentText} from '@/assets/icons'
import {Separator} from "@/components/ui";
import type {RepositoryDetailInfo} from "@/types/info.ts";
// import {getRepositoryInfo, postLikeRepository} from "@/api/infoApi.ts";
import {getRepositoryInfo} from "@/api/infoApi.ts";

const DetailInfo = () => {
    const {id} = useParams<string>();
    const [repositoryDetailInfo, setRepositoryDetailInfo] = useState<RepositoryDetailInfo>();
    const likedStorageKey: string = 'repository_like_list'
    const [likedStatus, setLikedStatus] = useState<boolean>(false);

    const toggleLiked = (id: string) => {
        const localStorageItem = localStorage.getItem(likedStorageKey);
        const oldLikedList = localStorageItem ? JSON.parse(localStorageItem) : [];
        const newLikedList: string[] = [];

        if (oldLikedList?.includes(id) || !oldLikedList) {
            oldLikedList?.map((item: string) => {
                if (item !== id) newLikedList.push(item);
            })
            localStorage.setItem(likedStorageKey, JSON.stringify(newLikedList));
            setLikedStatus(false);
        } else {
            newLikedList.push(...oldLikedList);
            newLikedList.push(id);
            localStorage.setItem(likedStorageKey, JSON.stringify(newLikedList));
            setLikedStatus(true);
        }
        // TODO : like를 토글로 해도되는지... api 수정해야할텐데..테이블도...ㅠ
        //      - 아니면 likeCount 를 -1 도 가능한지....
        // postLikeRepository(id)
        // .then(res => {
        //     if (res.data) {
        //         localStorage.setItem('repositoryInfo.like', 'liked');
        //         Liked.current = true;
        //     }
        // })
    }

    useEffect(() => {
        try {
            if (id) {
                getRepositoryInfo(id)
                .then(res => {
                    console.log('res : ', res.data)
                    setRepositoryDetailInfo(res.data);
                });
            }
        } catch (error) {
            console.log('error : ', error)
        }
    }, []);

    return (
        <div className="">
            <section className="flex flex-col items-center mt-6 h-fit bg-[var(--bg-gray)] px-[67px]">
                <div className="flex flex-col max-w-[1320px] w-full">
                    <div className="flex pt-8">
                        {repositoryDetailInfo?.thumbnailPath || repositoryDetailInfo?.thumbnailWebLink
                            ? <img src={repositoryDetailInfo?.thumbnailPath ?? repositoryDetailInfo?.thumbnailWebLink} alt={repositoryDetailInfo?.title}
                                   className="h-[120px] w-[120px] border mr-[12px] mb-[18px] p-1 rounded-xl bg-background
                                              hover:scale-105 hover:border-[#136ffe] transition-all duration-200 "/>
                            : <GiPlasticDuck size="50" className="border mr-3 p-1"/>
                        }
                        <div className="flex flex-col ml-4">
                            <span className="text-[36px] font-[600] mb-[10px]">{repositoryDetailInfo?.title}</span>
                            <div className="flex">
                                <IoLink className="mr-4" size="18" color="#136ffe"/>
                                <span
                                    className="flex items-center text-[#136ffe] text-[16px] mb-[5px] hover:text-black hover:border-b hover:border-black hover:mb-[4px]"
                                    onClick={() => window.open(repositoryDetailInfo?.url)}>
                                    {repositoryDetailInfo?.url}<TbExternalLink className="ml-1"/>
                                </span>
                            </div>
                            <span className="flex items-center text-[16px]">
                                <FaInfoCircle className="mr-4 text-[#136ffe] "/>{repositoryDetailInfo?.introduction}
                            </span>
                        </div>
                    </div>
                    <div className="flex border rounded-xl bg-background w-full p-6 mb-8 justify-between">
                        <div className="flex gap-4">
                            <div className="flex items-center bg-[var(--bg-gray)] w-fit gap-2 p-2">
                                <GoHeartFill size="14" color="#dc3545"/><span className="font-[600]">{repositoryDetailInfo?.likeCount}</span> likes
                            </div>
                            <div className="flex items-center bg-[var(--bg-gray)] w-fit gap-2 p-2">
                                <IoEyeSharp size="15" color="#136ffe"/><span className="font-[600]">{repositoryDetailInfo?.clickCount}</span> views
                            </div>
                        </div>
                        <div className="flex items-center bg-[var(--bg-gray)] w-fit gap-2 p-2">
                            <Clock size="15" color="#136ffe"/>{repositoryDetailInfo?.updatedAt}
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center bg-background border-t px-[67px] pt-8">
                <div className="flex flex-col max-w-[1320px] w-full">
                    <span className="flex items-center text-[26px] font-[600]"><IoDocumentText color="#136ffe" size="30" className="mr-2"/>Overview</span>
                    <Separator className="mt-4 mb-8 bg-[#8b949e]"/>
                    <div className="flex justify-center gap-3 border bg-[var(--bg-gray)] py-8 mb-6">
                        <label htmlFor="visitBtn"
                               className="flex items-center w-fit border py-4 px-5 rounded-full text-[16px] text-white font-[600] bg-linear-135 from-[#667eea] to-[#136ffe]
                                          hover:scale-110 duration-200">
                            <TbExternalLink className="mr-2" size="20"/>
                            <button id="visitBtn">Visit Site</button>
                        </label>
                        <label htmlFor="likedBtn"
                               className="group flex items-center w-fit border-2 py-4 px-5 rounded-full text-[16px] hover:scale-110 duration-200">
                            {likedStatus
                                ? <GoHeartFill className="mr-2" size="20" color="#dc3545"/>
                                : <GoHeart className="mr-2" size="20"/>}
                            <button id="likedBtn" onClick={() => id && toggleLiked(id)}>{likedStatus ? 'Liked' : 'Like'}</button>
                        </label>
                    </div>
                    <div className="border bg-background h-fit p-[32px] mb-[64px]">
                        {repositoryDetailInfo?.description}
                    </div>
                </div>
            </section>
        </div>
    );
};

export {DetailInfo};