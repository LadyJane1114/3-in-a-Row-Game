// THIS PAGE IS RESPONSIBLE FOR CHANGING THE COLORS OF THE SQUARES (THE STATE?)

const Square = ({currentState, correctState, canToggle, mode = 'lightMode'}) => {
  const colorPalettes = {
    lightMode: {
        cell1: "#D76C82",
        cell2: "#B03052",
        background: "#EBE8DB",
        text: "#3D0301",
        errorOutline: "#D72638",
        toggle: "#3D0301",
        buttonBackground: "#B03052",
        buttonText: "#FFFFFF",
        inputBackground: "#F8E8E0",
        border: "#3D0301"
    },
    darkMode: {
        cell1: "#B03052",
        cell2: "#D76C82",
        background: "#3D0301",
        text: "#EBE8DB",
        errorOutline: "#B71C1C",
        toggle: "#EBE8DB",
        buttonBackground: "#B03052",
        buttonText: "#FFFFFF",
        inputBackground: "#B03052",
        border: "#3D0301"
      },
    };
    
    const themes = colorPalettes[mode];

    const getColor = (state) => {
      return state === "1" ? themes.cell1 : state === "2" ? themes.cell2 : "transparent";
    };

  return (
    <div 
      className="square"
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: getColor(currentState),
        border: `1px solid ${themes.border || "#000"}`,
        borderRadius: "25%",
        color: themes.text,
        textAlign: "center",
        lineHeight: "50px"
      }}
      onClick={() => canToggle && onClick()}
    >
      {currentState}</div>
  );
};

export default Square