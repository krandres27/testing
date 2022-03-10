import React from 'react';
import { languageContext } from '../../context';
import strings from '../../helpers/strings/strings'

const Congrats = ({ success }) => {
  const language = React.useContext(languageContext);
  
  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          {strings.getStringByLanguage(language, 'congrats')}
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats"></div>
    );
  }
}

export default Congrats;
