describe('BSTD-014 Checkout With Form', function() {
  this.tags = ['five'];

  it('Visit bstackdemo,sign in, add to cart, click checkout, fill form and submit', function(browser) {
      browser
      .navigateTo('https://www.bstackdemo.com')
      .click("#signin")
      .sendKeys("#react-select-2-input",["demouser",browser.Keys.ENTER])
      .sendKeys("#react-select-3-input",["testingisfun99",browser.Keys.ENTER])
      .click("#login-btn")
      .waitForElementNotVisible(".float-cart__content")
      .click(".shelf-item:nth-child(3) > .shelf-item__buy-btn")
      .waitForElementVisible(".float-cart__content")
      .click(".buy-btn")
      .waitForElementVisible(".checkoutHeader-link")
      .sendKeys("#firstNameInput","John")
      .sendKeys("#lastNameInput","Doe")
      .sendKeys("#addressLine1Input","North Pole")
      .sendKeys("#provinceInput","Alaska")
      .sendKeys("#postCodeInput","000000")
      .click("#checkout-shipping-continue")
      .useXpath()
      .waitForElementPresent("//*[text()='Your Order has been successfully placed.']")
      .end()
  }); 
});