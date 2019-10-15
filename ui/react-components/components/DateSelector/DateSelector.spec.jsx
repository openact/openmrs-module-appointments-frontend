import {renderWithReactIntl} from "../../utils/TestUtil";
import DateSelector from "./DateSelector.jsx";
import React from "react";

describe('Date Selector', () => {
    it('should display label and date picker when date selector is rendered', () => {
        const props = {defaultValue: 'default value', translationKey: 'translation key'};
        const {getByText, getByTestId} = renderWithReactIntl(<DateSelector {...props} onChange={jest.fn()}/>);
        getByText('default value');
        getByTestId('datePicker');
    });
});
