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

export { If, IfNot };
//# sourceMappingURL=index.js.map
