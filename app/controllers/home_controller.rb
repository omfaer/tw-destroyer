class HomeController < ApplicationController

  CLIENT = Twitter::REST::Client.new do |config|
    config.consumer_key = ENV['TWITTER_CONSUMER_KEY']
    config.consumer_secret = ENV['TWITTER_CONSUMER_SECRET']
    config.access_token = ENV['TWITTER_ACCESS_TOKEN']
    config.access_token_secret = ENV['TWITTER_ACCESS_TOKEN_SECRET']
  end

  def index
    # @tweets = CLIENT.get_all_tweets("muratbastas")
    @tweets = CLIENT.user_timeline("muratbastas")
    # @tweets = CLIENT.status("814919078536212480")
    # raise @tweets.media.first.media_url
  end

private

  def collect_with_max_id(collection=[], max_id=nil, &block)
    response = yield(max_id)
    collection += response
    response.empty? ? collection.flatten : collect_with_max_id(collection, response.last.id - 1, &block)
  end

  def CLIENT.get_all_tweets(user)
    collect_with_max_id do |max_id|
      options = {count: 200, include_rts: true}
      options[:max_id] = max_id unless max_id.nil?
      user_timeline(user, options)
    end
  end

end
