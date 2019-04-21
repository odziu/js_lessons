describe('Logger', () => {
    fit('can log', async () => {
        let someNiceVariable = 'I am very important!'
        // trace is not working: no colored message
        logger.trace('this is trace!');
        logger.debug('Some debug messages');
        logger.info('Information');
        logger.warn('Something not really bad, but take a look!');
        logger.error('Something wrong!');
        logger.fatal(`Something terribly wrong! ${someNiceVariable}`);
    });
})