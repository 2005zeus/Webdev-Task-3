// Function to dynamically import all images from a folder
const importAll = (requireContext) => {
    let icons = {};
    requireContext.keys().forEach((item) => {
        const key = item.replace('./', '').replace(/\.\w+$/, ''); // Remove './' and file extension
        icons[key] = requireContext(item);
    });
    return icons;
};


// Import images using require.context
let aIcon = importAll(require.context('./icons', false, /\.(png|jpe?g|svg)$/));
let aImg = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

export {aIcon, aImg}