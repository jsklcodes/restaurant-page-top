import welcomeImage from '../images/img-1.jpg';

export const getHomePage = () => {
  return `
    <section class="welcome">
      <img src="${welcomeImage}" alt="A close-up image of an espresso machine in action, pouring a shot of espresso into a white ceramic cup.">
      <div>
        <h2 class="welcome__title">Where Every Sip Tells a Story</h2>
        <p class="welcome__description">At Mug Shot Cafe, we’re not just about coffee — we’re about connection,
          community, and crafting the perfect
          experience for every guest. Whether you’re a coffee connoisseur or just need a cozy spot to unwind, we’ve got
          something special brewing for you.</p>
      </div>
    </section>
  `;
};
