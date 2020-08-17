import React from "react";
import Copy from ".";

export default {
  component: Copy,
  title: "Typography / Copy",
};

export const WithControls = ({ variant, isInline, children }) => {
  return (
    <>
      <Copy isInline={isInline} variant={variant}>
        {children}
      </Copy>
      <Copy isInline={isInline} variant={variant}>
        {children}
      </Copy>
    </>
  );
};

WithControls.args = {
  variant: "medium",
  isInline: false,
  children:
    "Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam vitae tortor. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
};
WithControls.argTypes = {
  variant: {
    control: { type: "inline-radio", options: ["small", "medium", "large"] },
  },
  isInline: {
    control: { type: "boolean" },
  },
};
