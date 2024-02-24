export default function Summary() {
  return (
    <div className="Summary">
      <div className="Summary__section Summary__section--plan">
        <p className="Summary__row Summary__row--big">
          <span className="Summary__item Summary__item--cap">arcade (yearly)</span> <span className="Summary__price">$90/yr</span>
        </p>
        <a className="Summary__edit-plan" href="#">
          change
        </a>
      </div>
      <hr />
      <div className="Summary__section Summary__section--addons flow">
        <p className="Summary__row">
          <span className="Summary__item">online service</span> <span className="Summary__price">+$10/yr</span>
        </p>
        <p className="Summary__row">
          <span className="Summary__item">large storage</span> <span className="Summary__price">+$20/yr</span>
        </p>
      </div>
      <div className="Summary__section Summary__section--total">
        <p className="Summary__row">
          <span className="Summary__item">total (per year)</span> <span className="Summary__price Summary__price--total">$120/yr</span>
        </p>
      </div>
    </div>
  );
}
