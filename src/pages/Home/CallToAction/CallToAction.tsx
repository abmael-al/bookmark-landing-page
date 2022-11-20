import { GeneralContainer } from '../../../components';
import { ReactComponent as ChromeLogo } from '../../../assets/logos/chrome-logo.svg';
import { ReactComponent as FirefoxLogo } from '../../../assets/logos/firefox-logo.svg';
import { ReactComponent as OperaLogo } from '../../../assets/logos/opera-logo.svg';
import './callToAction.css';

export const CallToAction = () => {
  return (
    <GeneralContainer>
      <section className='cta'>
        <div className='cta__body'>
          <h2 className='heading heading-200'>Download the extension</h2>
          <p className='cta__body__text'>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        <div className='cta__cards__container'>
          <div className='cta__card left-top'>
            <div className='cta__card__wrapper'>
              <div>
                <ChromeLogo />
              </div>
              <div>
                <h3 className='cta__card__heading heading heading-100'>
                  Add to Chrome
                </h3>
                <p className='clr-neutral-300'>Minimum version 62</p>
              </div>
            </div>
            <div className='cta__card__action'>
              <a
                href='/'
                className='cta__card__link button button-thick button--primary--blue'
              >
                Add & Install Extension
              </a>
            </div>
          </div>
          <div className='cta__card center-center'>
            <div className='cta__card__wrapper'>
              <div>
                <FirefoxLogo />
              </div>
              <div>
                <h3 className='cta__card__heading heading heading-100'>
                  Add to Firefox
                </h3>
                <p className='clr-neutral-300'>Minimum version 55</p>
              </div>
            </div>
            <div className='cta__card__action'>
              <a
                href='/'
                className='cta__card__link button button-thick button--primary--blue'
              >
                Add & Install Extension
              </a>
            </div>
          </div>
          <div className='cta__card right-bottom'>
            <div className='cta__card__wrapper'>
              <div>
                <OperaLogo />
              </div>
              <div>
                <h3 className='cta__card__heading heading heading-100'>
                  Add to Opera
                </h3>
                <p className='clr-neutral-300'>Minimum version 46</p>
              </div>
            </div>
            <div className='cta__card__action'>
              <a
                href='/'
                className='cta__card__link button button-thick button--primary--blue'
              >
                Add & Install Extension
              </a>
            </div>
          </div>
        </div>
      </section>
    </GeneralContainer>
  );
};
