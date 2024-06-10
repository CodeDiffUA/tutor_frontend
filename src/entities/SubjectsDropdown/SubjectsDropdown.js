import React from 'react';
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.css"
import {Link} from "react-router-dom";


const CustomDropdown = ({ ...props }) => (
    <Dropdown {...props}>
        <Dropdown.Item><Link
            to={'/subjects/ukr_mova'}
            style={{textDecoration: "none", color: "black"}}
        >
            Українська мова
        </Link></Dropdown.Item>
    </Dropdown>
);

const SubjectsDropdown = () => {



    return (
        <CustomDropdown title="Обери предмет" trigger={["click", "hover"]} />
    );
};

export default SubjectsDropdown;