import React from "react";
import { Header } from "./Header";

const FrontendLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default FrontendLayout;

export const Footer = () => {
    return <div>Footer</div>;
};
