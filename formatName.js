function formatName(name) {
    let words = name.toLowerCase().split(' ');
    let formattedName = '';

    for (let i = 0; i < words.length; i++) {
        formattedName = words[i].charAt(0).toUpperCase() + words[i].slice(1);

    return formattedName;
}
}
// console.log(formatName("emma watson"));