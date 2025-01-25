import contactImage from '../images/img-2.jpg';

export const getContactPage = () => {
  return `
    <section class="contact">
      <img src="${contactImage}" alt="A close-up of an espresso machine pouring espresso into a teal ceramic cup.">
      <div>
        <h2 class="contact__title">Join the Mug Shot Community</h2>

        <p class="contact__description">
          Whether you're here to work, chat, or just escape for a while, you're always welcome. Follow the aroma of
          freshly brewed coffee and make Mug Shot Cafe your go-to spot.
        </p>

        <div class="contact__details">
          <div class="contact__location">
            <h3 class="contact__subtitle">Location</h3>
            <address class="contact__address">
              123 Bean Street<br>
              Brewtown, Coffee State 56789
            </address>
          </div>

          <div class="contact__hours">
            <h3 class="contact__subtitle">Hours</h3>
            <ul class="contact__hours-list">
              <li>Monday–Friday: 7:00 AM – 7:00 PM</li>
              <li>Saturday: 8:00 AM – 8:00 PM</li>
              <li>Sunday: 8:00 AM – 6:00 PM</li>
            </ul>
          </div>
        </div>

        <p class="contact__welcome">We can't wait to serve you!</p>
      </div>
    </section>
  `;
};
