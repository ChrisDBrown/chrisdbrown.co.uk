---
title: "Scrabblemojier for Slack"
date: 2017-03-18 15:48:00
categories: slack
description: "Spam your Slack channels with scrabble tile talk"
cover: "/img/scrabblemojier.png"
---

Slack is great, isn't it? I mean, it's basically just IRC, but it's so easy to get teams on board with it. Get rid of email (and Skype), easily create boards for whatever you need, great search & history tools, and - most importantly - _world class emoji support_ 👍👌.

<!-- more -->

The combination of emoji reactions and custom emojis makes it ripe for all kind of fun, and _highly_ exploitable. With some great collections of custom emojis already out there (special mentions for [slackmojis](https://slackmojis.com/) and [cult of the party parrot](http://cultofthepartyparrot.com/)) you'll always find the perfect thing to annoy your colleagues with. For example, slackmojis has this _fantastic_ set of scrabble tile emojis, perfect for massive messages but sadly time consuming to put together.

{% imageCaption /img/scrabblemojier.png "Scrabblemojier" "big impact, bigger effort" %}

No longer! Now there's a dumb tool to help you write all your messages in MAXIMUM SCRABBLE IMPACT FONT and instantly rule any conversation! Okay, full disclosure, this is and mostly a joke, but _it still works and is kinda funny so I've released it anyway yaaaay_.

It's called [Scrabblemojier](https://www.npmjs.com/package/scrabblemojier) and it gives you a quick command line tool to take a sentence and copy the scrabblemojied version to your clipboard ready to put straight into Slack. You'll need node, and a little technical know-how - instructions are on both the [NPM package](https://www.npmjs.com/package/scrabblemojier) and the [Github repo](https://github.com/ChrisDBrown/scrabblemojier) (PRs welcome!) - but it's pretty quick to go from zero-to-scrabble.

But how do I get the emojis, I hear you ask? Well, you can either manually install them from slackmojis or use [this command line tool](https://github.com/lambtron/emojipacks) that has very nicely merged my [PR](https://github.com/lambtron/emojipacks/pull/80) to add scrabble tiles as a quickly importable set. Have fun.

<br />
PS. you should definitely install RightGif in your office Slack as well - just make sure you put it on safe-for-work mode unless your workplace is _real_ chill.