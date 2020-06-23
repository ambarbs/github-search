import React from "react";
import {CardWrapper} from "./Card.styles";
import {Flex, Label} from "../common/Common.styles";



const Card = ({ id, name, watchersCount }) => {
    debugger;
    return (
        <CardWrapper>
            <Flex>
                <Label fontWeight='bold'>ID:</Label>
                <Label>{id}</Label>
            </Flex>
            <Flex>
                <Label fontWeight='bold'>Name</Label>
                <Label>{name}</Label>
            </Flex>
            <Flex>
                <Label fontWeight='bold'>Watchers Count:</Label>
                <Label>{watchersCount}</Label>
            </Flex>
        </CardWrapper>
    );
};

export default Card;