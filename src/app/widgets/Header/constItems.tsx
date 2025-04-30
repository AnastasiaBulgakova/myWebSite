
import type { MenuProps } from 'antd';
import { NavLink } from "react-router-dom";

export type MenuItem = Required<MenuProps>['items'][number];

export const menuItems: MenuItem[] = [
    {
        key: 'about',
        label: (
            <NavLink to='/'>Обо мне</NavLink>
        ),
    },
    {
        key: 'projects',
        label: (
            <NavLink to='/projects'>Проекты</NavLink>
        ),
    },
    {
        key: 'skills',
        label: (
            <NavLink to='/skills'>Навыки</NavLink>
        ),
    },
    {
        key: 'personal',
        label: (
            <NavLink to='/personal'>Персональный</NavLink>
        ),
    },
    {
        key: 'contacts',
        label: (
            <NavLink to='/contacts'>Контакты</NavLink>
        ),
    }
];