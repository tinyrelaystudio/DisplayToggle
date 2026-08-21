"use client";

import { useEffect } from "react";

const checkoutURL =
  "https://tinyrelay.lemonsqueezy.com/checkout/buy/0087e60c-337c-4b56-b2ae-6c0ef7a808e0";

export default function Buy() {
  useEffect(() => {
    window.location.replace(checkoutURL);
  }, []);

  return (
    <main className="checkout-redirect">
      <section className="checkout-card">
        <h1>Opening secure checkout…</h1>
        <p>
          You are being redirected to Lemon Squeezy to purchase a Display Toggle
          license for $5.
        </p>
        <a className="buy-button" href={checkoutURL}>
          Continue to checkout
        </a>
      </section>
    </main>
  );
}
