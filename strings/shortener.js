/**
 * A String Shortener
 * There are 62 possible letters and numbers, consisting of 26 lowercase letters, 26 uppercase letters, and 10 numbers (0 to 9).
 */


/**
 * Just a fake Database
 */
class FakeDB {
    static items = [];

    /**
     * 
     * @returns {Number}
     * @description Generates a 8-digit random number
     */
    static generateID() {
        return parseInt(Math.random().toString().split(".")[1].slice(0,8))
    }

    /**
     * @returns {Number}
     * @description Returns the length of the items in the Database
     * @example const item1 = FakeDB.add("Hello");
     *          const item2 = FakeDB.add("World");
     * 
     *          console.log(FakeDB.length)
     */
    static get length() {
        return this.items.length;
    }

    static find(data) {
        // const keys = ["id","str","dateCreated",]
        // Object.keys()
    }

    /**
     * 
     * @param {String} str 
     * @returns {DBItem} The newly added Database Item
     * @example const item1 = FakeDB.add("Hello");
     */
    static add(str) {
        const item = new DBItem(str);
        this.items.push(item);
        return item;
    }

    /**
     * 
     * @param {*} id 
     * @returns {DBItem} The DBItem with the specified id;
     * @example const item1 = FakeDB.get(10010203);
     */
    static get(id) {
        return this.items.find(item => item.id === id);
    }
}
/**
 * Represents just one Database Item
 */
class DBItem {
    id = 0
    str = ""
    dateCreated = new Date();

    constructor(str) {
        this.id = FakeDB.generateID();
        this.str = str;
    }
}


class Shortener {
    static DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

    static encodeID(num) {
        let base = this.DICTIONARY.length;
        let encoded = "";
        
        if (num === 0) {
            return this.DICTIONARY[0];
        }

        while (num > 0) {
            encoded += this.DICTIONARY[(num % base)];
            num = Math.floor(num / base);
        }

        return encoded.split("").reverse().join("")
    }

    static decodeID(id) {
        let base = this.DICTIONARY.length;
        let decoded = 0;

        for (let i = 0; i < id.split("").length; i++){
            decoded = decoded * base + this.DICTIONARY.indexOf(id.charAt(i));
        }

        return decoded;
    }

    static shorten(str) {
        const item = FakeDB.add(str);

        return {
            short: this.encodeID(item.id),
            ...item
        }
    }

    static resolveShort(short) {
        const decoded = this.decodeID(short);

        const item = FakeDB.get(decoded);

        return {
            short,
            ...item
        }
    }

    static customize(id, customShort) {
        if (customShort.length > 10) {
            throw new Error("Your custom short is too long. Please a custom short that is less than 10");
        }


        const item = FakeDB.get(id);

        if (!item) {
            throw new Error("The short you are trying to customize doesn't exist. Please checked your short ID")
        }

        const newShortId = this.decodeID(customShort);

        item.id = newShortId;

        console.log("Short have been customized successfully.");

        return {
            short: customShort,
            ...item
        };

    }
}


// test
const url = Shortener.shorten("www.google.com");
console.log(Shortener.resolveShort(url.short));
const newUrl = Shortener.customize(url.id, "google")
console.log(newUrl);
console.log(newUrl.short);
console.log("All shorts: ", FakeDB.items);