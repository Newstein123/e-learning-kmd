import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

const AppWithTheme = ({ App, props }) => {
    return (
        <HeroUIProvider>
            <main className={`text-foreground bg-background`}>
                <App {...props} />
            </main>
        </HeroUIProvider>
    );
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<AppWithTheme App={App} props={props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
