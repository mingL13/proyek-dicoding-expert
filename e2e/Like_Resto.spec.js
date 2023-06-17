/* eslint-disable no-undef */
Feature("Like Resto");

Before(({ I }) => {
  I.amOnPage("/#/detail/rqdv5juczeskfw1e867");
});

Scenario("Tombol favorite di klik lalu melakukan unfavorite", async ({ I }) => {
  I.waitForElement(".favorite-button");
  I.click(".favorite-button");
  I.see("Un-Favorite", ".unfavorite-button");

  I.amOnPage("/#/favorite");

  I.waitForFunction(() => {
    const status = document.querySelector(".kategori-restoran").innerText;
    return status !== null;
  });

  I.seeElement(".nama-restoran");

  I.click(".nama-restoran");

  I.click(".unfavorite-button");
  I.see("Favorite", ".favorite-button");
});
