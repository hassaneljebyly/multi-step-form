import thankYouIcon from '../assets/images/icon-thank-you.svg';
export default function ThankYou() {
  return (
    <div className="ThankYou flow">
      <img className="ThankYou__icon" src={thankYouIcon} alt="" />
      <h2 className="ThankYou__message">Thank you!</h2>
      <p className="ThankYou__description">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  );
}
