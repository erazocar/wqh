import React from "react";
import DatePicker from "react-datepicker"
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css"

const Styles = styled.div`
.react-datepicker-wrapper,
.react-datepicker__input-container,
.react-datepicker__input-container input {
    width: 200px;
    height: 36px;
}
.react-datepicker__close-icon::before,
.react-datepicker__close-icon::after {
    background-color: black;
}
`;

const Dater = (props) => {
    return (
        <Styles>
        <DatePicker placeholderText = {`Select ${props.dateType} Date`} 
        isClearable
        filterDate={d => {
            return new Date() > d;
          }} 
        showTimeSelect
        dateFormat="MMMM d, yyyy hh:mm"
        selected={props.date}
        onChange={props.handleChange}
        minDate = {new Date('2021-12-15')}
        maxDate = {new Date('2022-03-05')}
        ></DatePicker>
        </Styles>
    )
}

export default Dater;