import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Search, IoIosMenu, IoPersonOutline, IoPerson, IoSunny, FaMoon } from '@/assets/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui';

interface AppHeaderProps {
  toggleDark: () => void;
}

const AppHeader = ({ toggleDark }: AppHeaderProps) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-background shadow-md border">
      <div className="w-full max-w-[1800px] flex items-center justify-between px-4 py-3">
        {/* 좌측 */}
        <div className="flex gap-5 items-center">
          <button type="button" className="font-semibold text-foreground text-[24px]" onClick={() => navigate('/')}>
            DevGroup
          </button>
          <div className="hidden lg:flex gap-5">
            <button type="button" className="text-foreground text-[18px]" onClick={() => navigate('/page/explorer')}>
              Explore
            </button>
            <div className="text-foreground text-[18px]">Support & Suggest</div>
          </div>
        </div>
        {/* 우측 */}
        <div className="flex items-center">
          {/* 검색창 */}
          <label
            htmlFor="search"
            className="border w-[360px] h-8 border-[var(--point-gray)] rounded-sm justify-end items-center px-3 hidden lg:flex"
          >
            <input
              id="search"
              type="text"
              placeholder="Search repositories, images..."
              className="placeholder-[var(--point-gray)] text-[16px] flex-1"
            />
            <Search color="var(--point-gray)" size="16" />
          </label>
          <button type="button" onClick={toggleDark} className="ml-6">
            <IoSunny size="24px" color="#F8AB07FF" className="dark:hidden" />
            <FaMoon size="22px" className="hidden dark:block" />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="hidden group lg:flex items-center text-[18px] text-foreground rounded-sm transition-all duration-300 px-2 py-1 ml-2
                         hover:bg-[#667eea] hover:text-white"
            >
              <IoPersonOutline size="20px" className="mr-[4px] group-hover:hidden" />
              <IoPerson size="20px" className="mr-[4px] hidden group-hover:block" color="white" />
              Guest
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Create Account</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign in</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <IoIosMenu
            size="30"
            className="border-1 border-[#E4E4E7FF] rounded-sm p-[1px] lg:hidden"
            onClick={() => setShowModal(!showModal)}
          />
        </div>
      </div>

      {showModal && <div>{/* TODO: width lg 이하일때 모달창 만들기 */}</div>}
    </header>
  );
};

export { AppHeader };
