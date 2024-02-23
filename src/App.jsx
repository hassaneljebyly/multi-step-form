function App() {
  return (
    <>
      <div className="container container--full-center">
        <div className="wrapper">
          {/******************************************** Sidebar ********************************************/}
          <div className="side-panel wrapper__column wrapper__column--left" aria-hidden="true">
            <div className="side-panel__svg"></div>
            <ul className="steps-list side-panel__steps-list flow">
              <li className="steps-list__step steps-list__step--current">
                <span className="steps-list__step-icon">1</span>
                <span className="steps-list__step-number">Step 1</span>
                <span className="steps-list__step-title">Your info</span>
              </li>
              <li className="steps-list__step">
                <span className="steps-list__step-icon">2</span>
                <span className="steps-list__step-number">Step 2</span>
                <span className="steps-list__step-title">Select plan</span>
              </li>
              <li className="steps-list__step">
                <span className="steps-list__step-icon">3</span>
                <span className="steps-list__step-number">Step 3</span>
                <span className="steps-list__step-title">Add-ons</span>
              </li>
              <li className="steps-list__step">
                <span className="steps-list__step-icon">4</span>
                <span className="steps-list__step-number">Step 4</span>
                <span className="steps-list__step-title">Summary</span>
              </li>
            </ul>
          </div>
          {/******************************************** Form ********************************************/}
          <form className="form wrapper__column wrapper__column--right">
            <div className="form__inputs">
              {/********************* Form step-1 *********************/}
              <fieldset className="form__step form__step--1 flow">
                <legend className="form__step-header">
                  <h2 className="form__title">Personal info</h2>
                  <p className="form__body">Please provide your name, email address, and phone number.</p>
                </legend>
                {/*  */}
                <label className="form__input-container input" htmlFor="name-input">
                  <span className="form__label input__label">Name</span>
                  <span className="form__error input__error" id="name-input-error">
                    error text
                  </span>
                  <input className="form__input input__text-field" type="text" placeholder="e.g. Stephen King" name="name" id="name-input" aria-describedby="name-input-error" />
                </label>
                {/*  */}
                <label className="form__input-container input" htmlFor="email-input">
                  <span className="form__label input__label">Email Address</span>
                  <span className="form__error input__error" id="email-input-error">
                    error text
                  </span>
                  <input className="form__input input__text-field" type="email" placeholder="e.g. stephenking@lorem.com" name="email" id="email-input" aria-describedby="email-input-error" />
                </label>
                {/*  */}
                <label className="form__input-container input" htmlFor="number-input">
                  <span className="form__label input__label">Phone Number</span>
                  <span className="form__error input__error" id="number-input-error">
                    error text
                  </span>
                  <input className="form__input input__text-field" type="number" placeholder="e.g. +1 234 567 890" name="number" id="number-input" aria-describedby="number-input-error" />
                </label>
                {/*  */}
              </fieldset>
            </div>
            <div className="form__cta-group">
              <button className="form__cta-button cta-button cta-button--text">Go Back</button>
              <button className="form__cta-button cta-button cta-button--contained">Next Step</button>
            </div>
          </form>
        </div>
        <p style={{ display: 'none' }}>
          {/* Sidebar end  */}
          {/* Step 1 start  */}
          Name Email Address Phone Number Next Step
          {/* Step 1 end  */}
          {/* Step 2 start  */}
          Select your plan You have the option of monthly or yearly billing. Arcade $9/mo Advanced $12/mo Pro $15/mo Monthly Yearly Go Back Next Step
          {/* Step 2 end  */}
          {/* Step 3 start  */}
          Pick add-ons Add-ons help enhance your gaming experience. Online service Access to multiplayer games +$1/mo Larger storage Extra 1TB of cloud save +$2/mo Customizable Profile Custom theme on your profile +$2/mo Go Back Next Step
          {/* Step 3 end  */}
          {/* Step 4 start  */}
          Finishing up Double-check everything looks OK before confirming.
          {/* Dynamically add subscription and add-on selections here  */}
          Total (per month/year) Go Back Confirm
          {/* Step 4 end  */}
          {/* Step 5 start  */}
          Thank you! Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
          {/* Step 5 end  */}
        </p>
      </div>
    </>
  );
}

export default App;
