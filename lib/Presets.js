import React from 'react';
import { usePicker } from './context';
import { psRl, cCross, handle, canvasWrapper } from './style';

const Presets = ({
  presets = []
}) => {
  const {
    value,
    handleChange,
    squareSize
  } = usePicker();

  const getPresets = () => {
    if (presets?.length > 0) {
      return presets?.slice(0, 18);
    } else {
      return fakePresets;
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginTop: 14,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      background: value,
      borderRadius: 6,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      width: squareSize - 66,
      justifyContent: 'space-between'
    }
  }, getPresets().map((p, key) => /*#__PURE__*/React.createElement("div", {
    key: key,
    style: {
      height: 23,
      width: '10.2%',
      borderRadius: 4,
      background: p,
      marginBottom: 2,
      border: p === 'rgba(255,255,255, 1)' ? '1px solid #96959c' : ''
    },
    onClick: () => handleChange(p)
  }))));
};

export default Presets;
const fakePresets = ['rgba(0,0,0,1)', 'rgba(128,128,128, 1)', 'rgba(192,192,192, 1)', 'rgba(255,255,255, 1)', 'rgba(0,0,128,1)', 'rgba(0,0,255,1)', 'rgba(0,255,255, 1)', 'rgba(0,128,0,1)', 'rgba(128,128,0, 1)', 'rgba(0,128,128,1)', 'rgba(0,255,0, 1)', 'rgba(128,0,0, 1)', 'rgba(128,0,128, 1)', 'rgba(175, 51, 242, 1)', 'rgba(255,0,255, 1)', 'rgba(255,0,0, 1)', 'rgba(240, 103, 46, 1)', 'rgba(255,255,0, 1)'];