const core = require('@actions/core');

const PARAM_PREFIX = 'param';
const COUNT_OF_PARAMS = 4;

try {
    const message = core.getInput('message');

    Array.from(Array(COUNT_OF_PARAMS)).forEach((_, idx) => {
        const paramName = `${PARAM_PREFIX}-${idx}`;
        const param = core.getInput(paramName);
        if (!param) return;

        core.setOutput(paramName, message.includes(param));
    });
} catch (ex) {
    core.setFailed(ex.message);
}
