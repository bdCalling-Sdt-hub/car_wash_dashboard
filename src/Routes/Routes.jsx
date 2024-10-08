import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Login from "../Pages/Auth/Login";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import Otp from "../Pages/Auth/Otp";
import ResetPassword from "../Pages/Auth/ResetPassword";
import Profile from "../Pages/Dashboard/Profile";
import Notification from "../Pages/Dashboard/Notification";
import FAQ from "../Pages/Dashboard/FAQ";
import PrivacyPolicy from "../Pages/Dashboard/PrivacyPolicy";
import TermsCondition from "../Pages/Dashboard/TermsCondition";
import TotalDriver from "../Pages/Dashboard/TotalDriver";
import TotalClient from "../Pages/Dashboard/TotalClient";
import CompleteWork from "../Pages/Dashboard/CompleteWork";
import PendingWash from "../Pages/Dashboard/PendingWash";
import Subscriptions from "../Pages/Dashboard/Subscriptions";
import Track from "../Pages/Dashboard/Track";
import TotalRequest from "../Pages/Dashboard/TotalRequest";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            {
                path: '/',
                element: <DashboardHome />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/notification',
                element: <Notification />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/privacy-policy',
                element: <PrivacyPolicy />
            },
            {
                path: '/terms-&-condition',
                element: <TermsCondition />
            },
            {
                path: '/total-worker',
                element: <TotalDriver />
            },
            {
                path: '/total-request',
                element: <TotalRequest />
            },
            {
                path: '/total-client',
                element: <TotalClient />
            },
            {
                path: '/complete-work',
                element: <CompleteWork />
            },
            {
                path: '/pending-wash',
                element: <PendingWash />
            },
            {
                path: '/subscriptions',
                element: <Subscriptions />
            },
            {
                path: '/track',
                element: <Track />
            },
            {
                path: '*',
                element: <div className="text-center text-3xl font-bold text-red-500">404 Page not found</div>
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/forget-password',
        element: <ForgetPassword />
    },
    {
        path: '/otp',
        element: <Otp />
    },
    {
        path: '/reset-password',
        element: <ResetPassword />
    },
])