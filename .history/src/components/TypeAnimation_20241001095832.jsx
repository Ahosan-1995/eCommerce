import React from 'react';

const TypeAnimation = () => {
    return (
        <div>
            <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed once, initially
          "We are the excellence of Freshness",
          1000,
          "We are the excellence of Purity",
          1000,
          "We are the excellence of Authenticity",
          1000,
          "We are the excellence of Consistency",
          1000,
        ]}
        speed={50}
        style={{ fontSize: "2em", fontWeight: "bold", color: "black" }}
        repeat={Infinity}
      />
        </div>
    );
};

export default TypeAnimation;