'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const If = (props) => {
    if (props.condition) {
        return props.children;
    }
    else {
        return null;
    }
};

const IfNot = (props) => {
    if (!props.condition) {
        return props.children;
    }
    else {
        return null;
    }
};

exports.If = If;
exports.IfNot = IfNot;
//# sourceMappingURL=index.js.map
