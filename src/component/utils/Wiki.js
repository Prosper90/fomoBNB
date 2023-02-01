import React from 'react';
import "../../main.css";

export default function Wiki() {
  return (
    <div>
  <div className="uk-section section-sub-nav uk-padding-remove">
    <div className="uk-container">
      <div uk-grid="">
        <div className="uk-width-2-3@m pt-3">
          <h3>SOS3D Explained</h3>
        </div>
        <div className="uk-width-1-3@m">
          <div className="uk-margin">
            <form className="uk-search uk-search-default">
              <a href="#" className="uk-search-icon-flip" uk-search-icon="" />
              <input
                id="autocomplete"
                className="uk-search-input"
                type="search"
                autoComplete="off"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="border-top" />
    </div>
  </div>
  <div className="uk-section uk-section-small uk-padding-remove-bottom section-content">
    <div className="uk-container uk-position-relative">
      <div uk-grid="">
        <div className="uk-width-3-4@m">
          <article className="uk-article">
            <header>
              <div className="uk-margin-bottom font-bold">
                Jump to a section below
              </div>
              <div className="author-box uk-card">
                <div className="uk-card-header uk-padding-remove">
                  <div
                    className="uk-grid-small uk-flex-middle  uk-position-relative"
                    uk-grid=""
                  >
                    <div className="">
                      <ul className='flex flex-col gap-5'>
                        <li><a href="#game">Game overview</a></li>
                        <li> <a href="#rules">Rules of the game</a></li>
                        <li disabled > <a href="">How to Benefit</a></li>
                        <li disabled>   <a href="">Referrals </a> </li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
            </header>
            <div className="entry-content uk-margin-medium-top">
              <h2 id="game">Game Overview</h2>
              <p>
               This is a game in which the grand prize winner is the last person to purchase a key before the
                countdown clock runs down to zero. §very key purchase, the buyer becomes the new holder of the "private
                keys" and additional time is added to the countdown clock.

                When the clock reaches zero, the pot is diwied up with the final buyer who holds the private keys receiving
                the lion share of SOS but with substantial portions going both to all other player participants and as
                dividends paid to SOS3D holders. The specific way the SOS is divided between the winner, the SOS
                participants and the SOS3D holders is based of rules and percentages set in the smart contract.

                To understand the mechanics and incentives of the game, check out Reddit's The Button @ experiment for

                insights. SOS3D is essentially a lottery where the house, and the house advantage goes directly to
                players.
              </p>
              {/* 
              <h2 id="testnet">Playing on Testnet</h2>
              <p>

                Before releasing the game to play with real Ethereum, we have launched a testnet version using fake
                ETH Goerli testnet. Please note that this version is not using real ETH, but instead uses pretend ETH given to you for free
                by a test faucet.

                Instructions for configuring and playing on the testnet

                t
                1. Open up metamask, and in the top left corner change your network to "Custom RPC" and insert

                ne . teamjust-io/ as the URL
                2. Visit our test ETH faucet @ in your web browser for a free 100 test eth
                3. Play SOS3D with your test SOS on the play page ¢

                Now you can get started playing, Read below to better understand the game!
              </p>
              */}
              <h4 id='rules'>Rules of the game</h4>
            <div className="">The rules of the game are both simple and fun</div>
              <p>
                 SOS3D is a lottery game in which the grand prize winner is the last person to purchase a key — a lottery ticket — using SOS Token before the countdown timer runs down to zero. During a round, a timer is constantly counting down to zero. Every time a key is purchased, the buyer becomes the new “holder of the private keys” and additional time is added to the countdown. The price of the keys will get slightly more expensive with each purchase. When the timer reaches zero, the last person to have bought a key wins the round. At the end of the round, the SOS in the pot (the reward pool) is divvied up.
              </p>
              <h2 id="teams">Benefit</h2>
              <div className="">
              Since SOS3D is a lottery game, the concept is similar to the idea that the player holding the key when the round ends wins the prize pool. It involves how a player retains the majority of control over the key and maintains that control throughout the entire round, keeping in mind that the game's timer gets longer with each purchase.
              </div>
              <h2 id="teams">Referrals</h2>
              <div className="">
                 SOS3D wants to thank anyone who shares the SOS3D while playing the game and recommending it to others. Every time a player uses their referral link to invite a friend to play the game, they receive a prize, and any key purchases made by the invited player earn the referrer a whopping 10% referral fee. You can avail of your referral link in the Referral section.
              </div>
   
            </div>
          </article>
        </div>


      </div>
    </div>
  </div>
  <footer
    id="footer"
    className="uk-section uk-margin-large-top uk-section-xsmall uk-text-small uk-text-muted border-top"
  >
    <div className="uk-container">
      <div className="uk-child-width-1-2@m uk-text-center" uk-grid="">
        <div className="uk-text-right@m">
          <a
            href="#"
            className="uk-icon-link uk-margin-small-right"
            uk-icon="icon: facebook"
          />
          <a
            href="#"
            className="uk-icon-link uk-margin-small-right"
            uk-icon="icon: google"
          />
          <a
            href="#"
            className="uk-icon-link uk-margin-small-right"
            uk-icon="icon: vimeo"
          />
          <a
            href="#"
            className="uk-icon-link uk-margin-small-right"
            uk-icon="icon: instagram"
          />
          <a
            href="#"
            className="uk-icon-link uk-margin-small-right"
            uk-icon="icon: twitter"
          />
          <a
            href="#"
            className="uk-icon-link uk-margin-small-right"
            uk-icon="icon: youtube"
          />
        </div>
        <div className="uk-flex-first@m uk-text-left@m">
          <p className="uk-text-small">Copyright 2023 Powered SOS3D</p>
        </div>
      </div>
    </div>
  </footer>
  <div id="offcanvas" uk-offcanvas="flip: true; overlay: true">
    <div className="uk-offcanvas-bar">
      <a
        className="uk-margin-small-bottom uk-logo uk-text-uppercase"
        href="index.html"
      >
        <span className="uk-margin-small-right" uk-icon="icon: lifesaver" />{" "}
        Knowledge
      </a>
      <ul className="uk-nav uk-nav-default uk-text-uppercase">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li className="uk-parent">
          <a href="article.html">Article</a>
          <ul className="uk-nav-sub">
            <li>
              <a href="article.html">Scrollspy</a>
            </li>
            <li>
              <a href="article-narrow.html">Narrow</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="faq.html">Faq</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li>
          <a href="components.html">Components</a>
        </li>
      </ul>
      <a
        href="contact.html"
        className="uk-button uk-button-small uk-button-default uk-width-1-1 uk-margin"
      >
        Support
      </a>
      <div className="uk-width-auto uk-text-center">
        <a
          href="#"
          className="uk-icon-link uk-margin-small-right"
          uk-icon="icon: facebook"
        />
        <a
          href="#"
          className="uk-icon-link uk-margin-small-right"
          uk-icon="icon: google"
        />
        <a
          href="#"
          className="uk-icon-link uk-margin-small-right"
          uk-icon="icon: twitter"
        />
      </div>
    </div>
  </div>

    </div>
  )
}
