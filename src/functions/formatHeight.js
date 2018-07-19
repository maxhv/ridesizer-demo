// = convert inches to feetAndInches =
const formatValue = (height, unit = 'inches') => {
    const feetToInchesLabel = `${Math.trunc(height / 12)}'${height % 12}"`;
    return unit === 'inches' ? feetToInchesLabel : height;
}

export default formatValue;