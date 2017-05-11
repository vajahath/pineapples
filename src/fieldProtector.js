/**
 * return an array of fields that are to be removed from obj.
 * ---
 * this function checks if any items in fields are present in obj.
 * if exists, it returns the array of those items.
 */
module.exports = (obj, fields) => {
	let SetObj = new Set(Object.keys(obj));
	let intersection = fields.filter(x => (SetObj.has(x)));
	return intersection;
};
