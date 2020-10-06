browser.messageDisplay.onMessageDisplayed.addListener((tab, message) => {
  browser.messages.getFull(message.id).then(fullMessage=>{
    if( (typeof fullMessage.headers['x-pm-origin'] !== 'undefined') || (typeof fullMessage.headers['x-pm-content-encryption'] !== 'undefined') ) {
      const origin = fullMessage.headers['x-pm-origin'][0], encryption = fullMessage.headers['x-pm-content-encryption'][0];
      const internal = (origin == 'internal'), endToEnd = (encryption == 'end-to-end');
      if( endToEnd ){
        browser.messageDisplayAction.setIcon( { path: 'pass.svg' } );
        browser.messageDisplayAction.setTitle( { title: ( 'E2E encrypted, ' + ( internal ? 'internal' : 'external' ) )  }  )
      } else {
        browser.messageDisplayAction.setIcon( { path: 'lock.svg' } );
        browser.messageDisplayAction.setTitle( { title: 'Stored encrypted'  }  )
      }
    } else {
      // No encryption used!
      browser.messageDisplayAction.setIcon( { path: 'siren.svg' } );
      browser.messageDisplayAction.setTitle( { title: 'Unencrypted' }  )
    }
  });
});
