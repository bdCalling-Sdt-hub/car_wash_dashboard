import { BsCardText } from "react-icons/bs";
import { FaArrowsRotate, FaCheck, FaCodePullRequest, FaUserDoctor, FaUserTie } from "react-icons/fa6";
import { IoCheckmarkDone } from "react-icons/io5";
import { LuCalendarClock, LuUser2 } from "react-icons/lu";

export const SidebarLink = [
    {
        path: '/',
        label: 'Dashboard',
        icon: <LuCalendarClock size={24} />,
    },
    {
        path: '/total-worker',
        label: 'Total Worker',
        icon: <FaUserTie size={24} />,
    },
    {
        path: '/total-request',
        label: 'Total Request',
        icon: <FaCodePullRequest size={24} />,
    },
    {
        path: '/total-client',
        label: 'Total Client',
        icon: <LuUser2 size={24} />,
    },
    {
        path: '/ended-work',
        label: 'Ended Work',
        icon: <FaCheck size={24} />,
    },
    {
        path: '/complete-work',
        label: 'Complete Work',
        icon: <IoCheckmarkDone size={24} />,
    },
    {
        path: '/pending-wash',
        label: 'Pending Wash',
        icon: <FaArrowsRotate size={24} />,
    },
    {
        path: '/subscriptions',
        label: 'Subscriptions',
        icon: <BsCardText size={24} />,
    },

]

export const SettingLinks = [
    {
        path: '/profile',
        label: 'Profile',
    },
    {
        path: '/privacy-policy',
        label: 'Privacy Policy',
    },
    {
        path: '/terms-&-condition',
        label: 'Terms & Condition',
    },
    {
        path: '/work-hour',
        label: 'Work Hour',
    },
]