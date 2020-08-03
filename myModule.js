module.exports.beBasic = () => "That's so fetch!"

// module.exports is a js object that contains all code we want to export for import in other files

module.exports.count = () => {
    for (let i=0; i<=5; i++) {
        console.log(i);
    }
}