import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
} from "@heroui/react";
import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export const Header = () => {
    const { auth } = usePage().props;
    return (
        <Navbar>
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={route().current("home")}>
                    <Link color="foreground" href={route("home")}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={route().current("courses")}>
                    <Link aria-current="page" href={route("courses")}>
                        Courses
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={route().current("about")}>
                    <Link color="foreground" href={route("about")}>
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={route().current("contact")}>
                    <Link color="foreground" href={route("contact")}>
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
            {auth.user ? (
                <NavbarItem className="hidden lg:flex">
                    <Link href={route("dashboard")}>Dashboard</Link>
                </NavbarItem>
            ) : (
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href={route("login")}>Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            as={Link}
                            color="primary"
                            href={route("register")}
                            variant="flat"
                        >
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            )}
        </Navbar>
    );
};
