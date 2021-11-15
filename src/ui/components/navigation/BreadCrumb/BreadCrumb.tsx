import React from "react";
//import {} from '@material-ui/core';
import { BreadCrumbContainer, BreadCrumbItem } from "./BreadCrumb.style";

export interface BreadCrumbProps {
    selected: string;
    items: string[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ selected, items }) => {
    return (
        <BreadCrumbContainer>
            {items.map((item, index) => (
                <React.Fragment key={item}>
                    <BreadCrumbItem isSelected={selected === item}>
                        {item}
                    </BreadCrumbItem>
                    {index !== items.length - 1 && <span> &gt; </span>}
                </React.Fragment>
            ))}
        </BreadCrumbContainer>
    );
};

export default BreadCrumb;
