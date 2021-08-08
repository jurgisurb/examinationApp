import React, { useEffect, useState } from "react";

//import react pro sidebar components
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart, FaUser, FaEdit, FaAtom, FaBook, FaBookOpen } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.css";
import { useHistory } from "react-router-dom";

const SideBar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const [activeButton, setActiveButton] = useState("ABOUT");

    // useEffect(() => {
    //     if(activeButton)
    // }, []);

    let history = useHistory();

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <p>{menuCollapse ? <FaBook /> : <FaBookOpen />}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem
                                active={activeButton == "ABOUT" ? true : false}
                                icon={<FiHome />}
                                onClick={() => {
                                    history.push("/about");
                                    setActiveButton("ABOUT");
                                }}
                            >
                                Apie
                            </MenuItem>
                            <MenuItem
                                active={activeButton == "EXAMS" ? true : false}
                                icon={<FaList />}
                                onClick={() => {
                                    history.push("/exams");
                                    setActiveButton("EXAMS");
                                }}
                            >
                                Egzaminai
                            </MenuItem>
                            {/* <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem> */}
                            <MenuItem
                                active={activeButton == "PROFILE" ? true : false}
                                icon={<FaUser />}
                                onClick={() => {
                                    history.push("/profile");
                                    setActiveButton("PROFILE");
                                }}
                            >
                                Profilis
                            </MenuItem>
                            <MenuItem
                                active={activeButton == "SETTINGS" ? true : false}
                                icon={<BiCog />}
                                onClick={() => {
                                    history.push("/settings");
                                    setActiveButton("SETTINGS");
                                }}
                            >
                                Nustatymai
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Atsijungti</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default SideBar;
