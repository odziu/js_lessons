describe('Logger', () => {
    it('can log', async () => {
        let someNiceVariable = 'I am very important!';

        //  +++++  Code below works when conf.js file have one of the next string:
        //  +++++  logger.level = 'debug';
        //  +++++  or
        //  +++++  logger.level = 'trace';
        logger.off('The OFF Level has the highest possible rank and is intended to turn off logging');
        logger.fatal(`Something terribly wrong! ${someNiceVariable}`);
        logger.fatal('The FATAL level designates very severe error events that will presumably lead the application to abort');
        logger.error('Something wrong!');
        logger.error('The ERROR level designates error events that might still allow the application to continue running.');
        logger.warn('Something not really bad, but take a look!');
        logger.warn('The WARN level designates potentially harmful situations.');
        logger.info('Information');
        logger.info('The INFO level designates informational messages that highlight the progress of the application at coarse-grained level');
        logger.debug('Some debug messages');
        logger.debug('The DEBUG Level designates fine-grained informational events that are most useful to debug an application');
        
        //  +++++  Trace works only when conf.js file has string: logger.level = 'trace';
        logger.trace('This is trace!');
        logger.trace('The TRACE Level designates finer-grained informational events than the DEBUG');
    });
})