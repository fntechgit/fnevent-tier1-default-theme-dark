export const getMediaFileExtension = (stringFile) => {
    const types = new Map([
        ["jpg", "image"], 
        ["gif", "image"], 
        ["png", "image"], 
        ["svg", "image"], 
        ["bmp", "image"],
        ["tiff", "image"],
        ["pdf", "image"],
        ["raw", "image"],  
        ["eps", "image"], 
        ["mp4", "video"], 
        ["3gp", "video"],
        ["mov", "video"],
        ["mp3", "video"],
        ["wmv", "video"],
        ["mpg", "video"],
        ["mpeg", "video"],
        ["mp3", "video"],
        ["avi", "video"]
    ])

    const filePath = stringFile.split(".");
    const fileType = filePath[filePath.length - 1];
    const extension = types.get(fileType);
    return extension;
}

export const splitAddressLines = (addressString) => {
    if(!addressString) return null;
    const splitAddress = addressString.split(",");
    return `${splitAddress[0]} \n ${splitAddress[1]},${splitAddress[2]}`
}