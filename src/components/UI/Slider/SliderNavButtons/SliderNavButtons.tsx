type SliderNavButtonsProps = {
    onClickFirst: () => void;
    onClickSecond: () => void;
  };

const SliderNavButtons: React.FC<SliderNavButtonsProps> = ({
    onClickFirst,
    onClickSecond,
  }) => {
    return (
      <div>
        <button onClick={onClickFirst}>Button 1</button>
        <button onClick={onClickSecond}>Button 2</button>
      </div>
    );
  };

export default SliderNavButtons;