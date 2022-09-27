import React, { useRef, useState } from "react";
import throttle from "lodash.throttle";
import usePaintSquare from "./usePaintSquare";
import { usePicker } from './context';
import { psRl, cCross, handle, canvasWrapper } from './style';

const Square = () => {
  const {
    handleColor,
    x,
    y,
    internalHue,
    squareSize,
    squareHeight
  } = usePicker();
  const [dragging, setDragging] = useState(false);
  const canvas = useRef(null);
  usePaintSquare(canvas, internalHue, squareSize, squareHeight);

  const handleChange = e => {
    const ctx = canvas?.current?.getContext("2d");
    const onMouseMove = throttle(() => handleColor(e, ctx), 250);
    onMouseMove();
  };

  const stopDragging = () => {
    setDragging(false);
  };

  const handleMove = e => {
    if (dragging) {
      handleChange(e);
    }
  };

  const handleClick = e => {
    if (!dragging) {
      handleChange(e);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    style: psRl
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -7,
      top: -7,
      width: squareSize + 14,
      height: squareHeight + 14
    },
    onMouseEnter: stopDragging
  }), /*#__PURE__*/React.createElement("div", {
    style: { ...psRl,
      ...cCross
    },
    onMouseMove: e => handleMove(e),
    onMouseUp: stopDragging
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      left: x,
      top: y,
      ...handle
    } // onMouseDown={() => setDragging(true)}

  }), /*#__PURE__*/React.createElement("div", {
    style: { ...canvasWrapper,
      height: squareHeight
    },
    onClick: e => handleClick(e)
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvas,
    width: `${squareSize}px`,
    height: `${squareHeight}px`,
    id: "paintSquare"
  }))));
};

export default Square;