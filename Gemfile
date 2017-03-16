source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.1'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
# gem 'therubyracer', platforms: :ruby
gem 'jquery-rails'
gem 'jbuilder', '~> 2.5'

group :development, :test do
  gem 'byebug', platform: :mri

  # gem 'rspec-rails', '~> 3.5'
end

# group :test do
#   gem 'factory_girl_rails', '~> 4.0'
#   gem 'shoulda-matchers', '~> 3.1'
#   gem 'database_cleaner'
#   gem 'faker'
# end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem "redis-store"
gem 'redis-rails'
gem "redis-rack-cache"

gem 'bootstrap-sass', '~> 3.3.6'
gem 'twitter'
gem 'rails_autolink'