function superbowlWin(record){
    const win = record.find( ({ result}) => result === "W");
    if (win == undefined){
        return undefined
    }
    return win['year']
}
