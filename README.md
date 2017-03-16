# tw-destroyer

Tweet'lerinizi belirli ölçütlere göre filtreleyip silebileceğiniz bir rails uygulaması **olacak.**

Hazırladığım gif biraz uzun olduğu için markdown olarak paylaşamadım. Bağlantıdan görülebilir.

http://gifyu.com/images/tw-destroyer-intro_CLIPCHAMP_720p.gif

![Intro gif](http://gifyu.com/images/tw-destroyer-intro_CLIPCHAMP_720p.gif)

## Kurulum

Öncelikle [şuradan](https://apps.twitter.com/) bir twitter uygulaması oluşturup aşağıdaki keyleri almak ve tanımlamak gerekiyor gerekiyor.

```bash
 export TWITTER_CONSUMER_KEY=xxx
 export TWITTER_CONSUMER_SECRET=xxx
 export TWITTER_ACCESS_TOKEN=xxx
 export TWITTER_ACCESS_TOKEN_SECRET=xxx
```

Sonra

```bash
git clone git@github.com:muratbsts/tw-destroyer && cd tw-destroyer
bundle install
rails s
```

Bu kadar basit. :smiley:

## Test

Bu da çok basit haliyle.

```bash
rspec
```
