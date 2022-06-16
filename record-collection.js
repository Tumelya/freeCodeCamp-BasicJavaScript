const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
        records[id][prop] = value; //update album's prop to value
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value]; //create an empty array and add value to it
    } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value); //add value to the end of the album's existing tracks array
    } else if (value === "") {
        delete records[id][prop]; //delete the given prop property from the album
    }
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');