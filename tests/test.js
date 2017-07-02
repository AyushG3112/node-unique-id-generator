try {
    const generatorObject = require('../index');
    if(typeof(generatorObject.generateUniqueId()) === 'string'
        && typeof(generatorObject.generateGUID()) === 'string'
        && generatorObject.generateGUID().length === 36) {
            console.log('Tests successful');
    } else {

            console.log('Tests failed');
    }

} catch(e) {
    console.log('Critical failure');
}