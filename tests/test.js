try {
    const generatorObject = require('../index');
    if (typeof (generatorObject.generateUniqueId()) === 'string'
        && typeof (generatorObject.generateGUID()) === 'string'
        && generatorObject.generateGUID().length === 36) {
        console.log('Sample Unique Id : ' + generatorObject.generateUniqueId());
        console.log('Sample GUID : ' + generatorObject.generateGUID());
        console.log('Tests successful');
    } else {

        console.log('Tests failed');
    }

} catch (e) {
    console.log('Critical failure');
    console.log(e)
}
