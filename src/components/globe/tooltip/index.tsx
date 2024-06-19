import React from "react";

interface GlobeTooltipProps {
  fromCountry: string;
  toCountry: string;
}

const GlobeTooltip: React.FC<GlobeTooltipProps> = ({
  fromCountry,
  toCountry,
}) => {
  return (
    <div className="text-black p-2 animate-fade-in-out text-[21px] font-semibold">
      {fromCountry} to {toCountry}
    </div>
  );
};

export default GlobeTooltip;
