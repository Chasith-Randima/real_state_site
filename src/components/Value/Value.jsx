import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";

const Value = () => {
  return (
    <>
      <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
          {/* left */}
          <div className="v-left">
            <div className="image-container">
              <img src="./value.png" alt="" />
            </div>
          </div>
          {/* right */}
          <div className="flexColStart v-right">
            <spane>Our Value</spane>
            <spane>Value We Give to You</spane>
            <spane>
              We always ready to help by providing the best services for You
              <br />
              We beleive good blace to live can make your life better
            </spane>
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;
