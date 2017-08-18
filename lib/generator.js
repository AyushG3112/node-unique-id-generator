const crypto = require('crypto');

class Generator {
    /**
     * Generates a Unique ID on the current time and the high-resolution time
     * 
     * @param {String} prefix Prefix to prepend to the ID
     * @param {String} suffix Prefix to append to the ID
     * @returns {String} Unique ID
     */
    generateUniqueId(prefix = '', suffix = '') {
        if (typeof prefix !== 'string') {
            process.emitWarning('ID prefix is not a string, ignoring');
            prefix = '';
        }

        if (typeof suffix !== 'string') {
            process.emitWarning('ID suffix is not a string, ignoring');
            suffix = '';
        }

        return `${prefix
            + Date.now()
            + process.hrtime()[1]
            + crypto.randomBytes(5).toString('hex').substr(0, 8)
            + suffix}`;
    }

    /**
     * Generates a GUID
     * 
     * @returns {String} GUID
     */
    generateGUID() {
        let guidParts = []
        guidParts[0] = crypto.randomBytes(5).toString('hex').substr(0, 8);
        guidParts[1] = crypto.randomBytes(3).toString('hex').substr(0, 4);
        guidParts[2] = crypto.randomBytes(3).toString('hex').substr(0, 4);
        guidParts[3] = crypto.randomBytes(3).toString('hex').substr(0, 4);
        guidParts[4] = crypto.randomBytes(7).toString('hex').substr(0, 12);
        return `${guidParts.join('-')}`;
    }
}

module.exports = Generator;
