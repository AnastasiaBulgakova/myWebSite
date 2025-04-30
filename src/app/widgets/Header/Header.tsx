import { FC } from "react";
import { Menu } from "antd";

import styles from './Header.module.scss';
import { menuItems } from "./constItems";

const Header: FC = () => {
    return (  
   <div className={styles.header}>
    <Menu mode="horizontal" items={menuItems}  />
   </div>
    );
};
 
export default Header;