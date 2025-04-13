'use client';

import { useRouter } from "next/navigation";
import { resetAuthCookies} from '../lib/actions'

import Nav from "./Navbar/Nav";
import { Button } from "@radix-ui/themes";
import CustomButton from "./Accounts/CustomButton";
import LoginModal from "./modals/LoginModal";

const LogoutButton = ({ onLogout }: { onLogout?: () => void }) => {
    const router = useRouter();

    const submitLogout = async () => {
        await resetAuthCookies();

        router.refresh();
        if (onLogout) onLogout();
    };

    return (
        <p
            className='cursor-pointer text-xl hover:bg-gray-100 p-4 rounded-xl transition'
            onClick={submitLogout}
        >
        خروج
        </p>
    )
}

export default LogoutButton