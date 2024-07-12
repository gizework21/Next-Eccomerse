// FUnction to get the colors
export const getColorHex = (color: string): string => {
  switch (color.toLowerCase()) {
    case "black":
      return "#3e3f40";
    case "blue":
      return "#022d80";
    case "gold":
      return "#d7a022";
    case "silver":
      return "#b6b6b6";
    case "purple":
      return "#a00db8";
    default:
      return "#000000";
  }
};
