import React, { useEffect } from "react";
import { useContext } from "react";
import Key from "./Key";

const ContextMenu = ({ content, children }) => {
    let [hasBack, setHasBack] = React.useState(false);
    let [hasForward, setHasForward] = React.useState(false);

    useEffect(() => {
        const contextListener = (e) => {
            e.preventDefault();
            const menu = document.querySelector(".context-menu");
            const menuPosition = { x: e.pageX, y: e.pageY };
            const windowSize = { width: window.innerWidth, height: window.innerHeight };

            if (windowSize.width - menuPosition.x < menu.offsetWidth) {
                menu.style.left = `${windowSize.width - menu.offsetWidth - 24}px`;
            } else {
                menu.style.left = `${menuPosition.x}px`;
            }

            menu.style.top = `${menuPosition.y}px`;
            menu.style.display = "block";
        };

        const clickListener = (e) => {
            const content = document.querySelector(".context-menu");
            content.style.display = "none";
        };

        document.addEventListener("contextmenu", contextListener);
        document.addEventListener("click", clickListener);

        return () => {
            document.removeEventListener("contextmenu", contextListener);
            document.removeEventListener("click", clickListener);
        };
    }, [content]);

    useEffect(() => {
        setHasBack(window.history.length > 1);
        setHasForward(window.history.length > 1);
    }, []);

    const event = {
        hasForward: hasForward,
        hasBack: hasBack,
        goBack: () => { window.history.back() },
        goForward: () => { window.history.forward() },
        refreshPage: () => {
            window.location.reload();
        },
        viewSource: () => {
            window.open("https://github.com/JanjyTapYT/portfolio", "_blank");
        }
    };

    return (
        <>
            <div
                style={{
                    zIndex: 9999999,
                    display: "none"
                }}
                className="context-menu absolute bg-[#f8f8f8] dark:bg-[#080808] rounded-lg shadow-xl py-2 w-72 divide-y divide-gray-600/10 space-y-2"
            >
                {content(event)}
            </div>

            {children}
        </>
    );
};

export default ContextMenu;

export const Item = ({ icon, text, kbd, onClick, ...props }) => {
    return (
        <div onClick={onClick} className="flex flex-col text-sm">
            <div className="flex gap-2 w-full justify-between items-center hover:bg-gray-600/5 p-2 px-4 transition-all duration-200">
                <div className="flex items-center gap-2">
                    {icon}
                    <p className="text-sm">{text}</p>
                </div>
                {kbd && <Key keys={kbd} />}
            </div>
        </div>
    );
}