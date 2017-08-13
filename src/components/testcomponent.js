import React, {PropTypes} from 'react';

const TestComponent  = ({test, onClickText}) => (
    <div>
        <p>
            this is text;
        </p>
        <button onClick={() => onClickText()}>show/hide</button>
        <p>{test.text}</p>
    </div>
);

TestComponent.propTypes = {
    onClickText: PropTypes.func.isRequired,
//    test: {
//        flag: PropTypes.bool.isRequired,
//        text: PropTypes.string.isRequired
//    }
}

export default TestComponent;