import { FC } from 'react';
import './HumburgerMenu.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setIsStateMenuMobail } from '@/redux/slice/menuMobileStateSlice';


const HumburgerMenu: FC = () => {
    const { isShow } = useAppSelector(state => state.stateMobileMenuReduser);
    const dispatch = useAppDispatch();
    return (
      <div className={`menu-humburger ${isShow ? "open" : ""}`} onClick={() => dispatch(setIsStateMenuMobail(!isShow))}>
        <div className="menu-humburger-line"></div>
        <div className="menu-humburger-line"></div>
        <div className="menu-humburger-line"></div>
      </div>
    );
};

export default HumburgerMenu;