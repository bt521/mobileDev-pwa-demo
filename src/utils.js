export const activateShare = async (palette) => {

    const url = generatePaletteLink(palette)
    const shareData = {
        title: "Color Palette",
        text: "What's good? checkout this palette!",
        url: url
    };


    try {
        await window.navigator.share(shareData);
    } catch (err) {
        console.log(`Error: ${err}`);
    }
};


export const generatePaletteLink = (palette, internal = false) => {
    const baseUrl = "https://mobile-dev-pwa-demo.vercel.app/palette/"
    const url = palette
        .map((color) => color.replace("#", ""))
        .join("-")

    return internal ? "/palette/" + url : baseUrl + url
}


export const generatePaletteFromLink = async (link) => {
    const colorArray = link.split("-").map(color => "#" + color)

    return colorArray
}

// https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area
export const getContrastYIQ = (hexcolor) => {
    const r = parseInt(hexcolor.substring(1, 3), 16);
    const g = parseInt(hexcolor.substring(3, 5), 16);
    const b = parseInt(hexcolor.substring(5, 7), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    return yiq >= 128 ? 'black' : 'white';
}



