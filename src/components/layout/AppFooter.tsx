import {Separator} from "@/components/ui";
import {FaTwitter, FaFacebook, FaLinkedin, FaYoutube, IoLogoGithub} from "@/assets/icons/index.ts"
import {linkList} from "@/assets/testData";

function AppFooter() {

    return (
        <div className="bottom-0  w-full  h-fit pt-10 pb-10 bg-[var(--bg-footer)] px-4">
            <div className="max-w-[1800px] lg:mx-auto mx-[16px] flex flex-col">
                <div className="flex justify-around text-[#8b949e]">
                    {linkList.map((link, index) => (
                        <div key={index}>
                            <h5 className="text-xl mb-6">{link.subTitle}</h5>
                            <ul className="flex flex-col gap-1.5 font-light">
                                {link.list.map((item, index) => (
                                    <li key={index}><a href="#">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
                <Separator className="mt-12 mb-4 bg-[#8b949e]"/>
                <div className="flex justify-between">
                    <div className="flex gap-2 items-end">
                        <span className="font-semibold text-white text-lg">DevGroup</span>
                        <span className="text-[#8b949e]">© 2025 DevGroup, Inc.</span>
                    </div>
                    <div className="flex gap-4 items-end">
                        <FaTwitter className="size-5 text-[#8b949e]"/>
                        <FaFacebook className="size-5 text-[#8b949e]"/>
                        <FaLinkedin className="size-5 text-[#8b949e]"/>
                        <FaYoutube className="size-5 text-[#8b949e]"/>
                        <IoLogoGithub className="size-5 text-[#8b949e]"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {AppFooter};