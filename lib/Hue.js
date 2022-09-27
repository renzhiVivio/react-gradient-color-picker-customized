import React, { useRef, useState } from "react";
import { usePicker } from "./context";
import usePaintHue from "./usePaintHue";
import { barWrap, psRl, barWrapInner, cResize, handle } from './style';

const Hue = () => {
  const barRef = useRef(null);
  const {
    handleHue,
    internalHue,
    squareSize
  } = usePicker();
  const [dragging, setDragging] = useState(false);
  usePaintHue(barRef, squareSize);

  const stopDragging = () => {
    setDragging(false);
  };

  const handleDown = () => {// setDragging(true);
  };

  const handleMove = e => {
    if (dragging) {
      handleHue(e);
    }
  };

  const handleClick = e => {
    if (!dragging) {
      handleHue(e);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: stopDragging,
    onMouseLeave: stopDragging,
    style: { ...barWrap,
      width: squareSize + 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseUp: stopDragging,
    style: { ...psRl,
      ...barWrapInner,
      width: squareSize + 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: { ...psRl,
      ...cResize
    },
    onMouseMove: e => handleMove(e),
    className: "c-resize ps-rl"
  }, /*#__PURE__*/React.createElement("div", {
    style: { ...handle,
      left: internalHue * ((squareSize - 18) / 360),
      top: 2
    },
    onMouseDown: handleDown
  }), /*#__PURE__*/React.createElement("canvas", {
    ref: barRef,
    width: `${squareSize}px`,
    height: "14px",
    style: {
      position: "relative",
      borderRadius: 14
    },
    onClick: e => handleClick(e)
  }))));
};

export default Hue;