import Scrollbars from "react-custom-scrollbars";

export default function CustomScroll(props) {
  function renderTrackVertical({ style, ...props }) {
    const trackStyle = {
      width: '8px',
      backgroundColor: '#EBE7FF',
      borderRadius: '5px',
      right: 0,
      height: '100%',
    };

    return (
      <div
        style={{ ...style, ...trackStyle }}
        {...props}
      />
    );
  }

  function renderThumb({ style, ...props }) {
    const thumbStyle = {
      width: '8px',
      borderRadius: '5px',
      backgroundColor: '#003B72',
    };

    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props}
      />
    );
  }

  return (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      renderTrackVertical={renderTrackVertical}
      thumbSize={174}
      {...props}
    />
  );
}
