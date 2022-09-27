import React, { useState } from 'react';
import { SlidersIcon, InputsIcon, PaletteIcon } from './icon';
import { usePicker } from './context';
import EyeDropper from 'react-color-eye-dropper';
import { config } from './constants';
import AdvancedControls from './AdvancedControls';
import ComparibleColors from './ComparibleColors';
import GradientControls from './GradientControls';
import { ac, df, jc, jsb, inputDropdown, psRl, jfe, controlBtn } from './style';
var {
  defaultColor,
  defaultGradient
} = config;

const Controls = ({
  hideEyeDrop,
  hideAdvancedSliders,
  hideColorGuide,
  hideInputType
}) => {
  const {
    isGradient,
    onChange,
    previousColors,
    previousGraidents,
    handleChange
  } = usePicker();
  const [openAdvanced, setOpenAdvanced] = useState(false);
  const [openComparibles, setOpenComparibles] = useState(false);
  const [openInputType, setOpenInputType] = useState(false);
  const noTools = hideEyeDrop && hideAdvancedSliders && hideColorGuide && hideInputType;
  const solidColor = previousColors?.[0] || defaultColor;
  const gradientColor = previousGraidents?.[0] || defaultGradient;

  const setSolid = () => {
    onChange(solidColor);
  };

  const setGradient = () => {
    onChange(gradientColor);
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12,
      paddingBottom: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      ...df,
      ...jsb,
      ...ac
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28,
      background: '#e9e9f5',
      borderRadius: 6,
      padding: 2,
      ...df,
      ...jc,
      ...ac
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: { ...controlBtn,
      ...controlBtnStyles(!isGradient),
      ...df,
      ...ac
    },
    onClick: setSolid
  }, "Solid"), /*#__PURE__*/React.createElement("div", {
    style: { ...controlBtn,
      ...controlBtnStyles(isGradient),
      ...df,
      ...ac
    },
    onClick: setGradient
  }, "Gradient")), /*#__PURE__*/React.createElement("div", {
    style: { ...ac,
      ...jfe,
      height: 28,
      background: '#e9e9f5',
      borderRadius: 6,
      padding: 2,
      display: noTools ? 'none' : '',
      ...df
    }
  }, !hideEyeDrop && /*#__PURE__*/React.createElement(EyeDropper, {
    onSelect: handleChange,
    buttonStyle: {
      width: 30,
      height: 24,
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      ...controlBtnStyles(openAdvanced),
      height: 24,
      borderRadius: 4,
      display: hideAdvancedSliders ? 'none' : 'flex',
      ...jc,
      ...ac
    },
    onClick: () => setOpenAdvanced(!openAdvanced)
  }, /*#__PURE__*/React.createElement(SlidersIcon, {
    color: openAdvanced ? '#568CF5' : ''
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      ...controlBtnStyles(openComparibles),
      height: 24,
      borderRadius: 4,
      display: hideColorGuide ? 'none' : 'flex',
      ...jc,
      ...ac
    },
    onClick: () => setOpenComparibles(!openComparibles)
  }, /*#__PURE__*/React.createElement(PaletteIcon, {
    color: openComparibles ? '#568CF5' : ''
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      ...controlBtnStyles(openInputType),
      height: 24,
      borderRadius: 4,
      display: hideInputType ? 'none' : 'flex',
      ...jc,
      ...ac,
      ...psRl
    },
    onClick: () => setOpenInputType(!openInputType)
  }, /*#__PURE__*/React.createElement(InputsIcon, {
    color: openInputType ? '#568CF5' : ''
  }), /*#__PURE__*/React.createElement(InputTypeDropdown, {
    openInputType: openInputType,
    setOpenInputType: setOpenInputType
  })))), !hideAdvancedSliders && /*#__PURE__*/React.createElement(AdvancedControls, {
    openAdvanced: openAdvanced
  }), !hideColorGuide && /*#__PURE__*/React.createElement(ComparibleColors, {
    openComparibles: openComparibles
  }), isGradient && /*#__PURE__*/React.createElement(GradientControls, null));
};

export default Controls;

const InputTypeDropdown = ({
  openInputType,
  setOpenInputType
}) => {
  const {
    inputType,
    setInputType
  } = usePicker();
  const vTrans = openInputType ? 'visibility 0ms linear' : 'visibility 100ms linear 150ms';
  const zTrans = openInputType ? 'z-index 0ms linear' : 'z-index 100ms linear 150ms';
  const oTrans = openInputType ? 'opacity 120ms linear' : 'opacity 150ms linear 50ms';

  const handleInputType = (e, val) => {
    if (openInputType) {
      e.stopPropagation();
      setInputType(val);
      setOpenInputType(false);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      visibility: openInputType ? 'visible' : 'hidden',
      zIndex: openInputType ? '' : -100,
      opacity: openInputType ? 1 : 0,
      transition: `${oTrans}, ${vTrans}, ${zTrans}`,
      ...inputDropdown
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: { ...controlBtnStyles(inputType === 'rgb'),
      ...df,
      ...ac,
      ...psRl,
      ...controlBtn
    },
    onClick: e => handleInputType(e, 'rgb')
  }, "RGB"), /*#__PURE__*/React.createElement("div", {
    style: { ...controlBtnStyles(inputType === 'hsl'),
      ...df,
      ...ac,
      ...controlBtn
    },
    onClick: e => handleInputType(e, 'hsl')
  }, "HSL"), /*#__PURE__*/React.createElement("div", {
    style: { ...controlBtnStyles(inputType === 'hsv'),
      ...df,
      ...ac,
      ...controlBtn
    },
    onClick: e => handleInputType(e, 'hsv')
  }, "HSV"), /*#__PURE__*/React.createElement("div", {
    style: { ...controlBtnStyles(inputType === 'cmyk'),
      ...df,
      ...ac,
      ...controlBtn
    },
    onClick: e => handleInputType(e, 'cmyk')
  }, "CMYK"));
};

export const controlBtnStyles = selected => {
  return {
    background: selected ? 'white' : '',
    color: selected ? '#568CF5' : '',
    boxShadow: selected ? '0px 0px 8px rgba(0,0,0,.125)' : ''
  };
};