// = get height format inches / cm =
const formatRange = (unit, height, factor) => unit === 'inches' ? Math.floor(height) : parseInt(height * factor, 10);

export default formatRange;